var webpack = require('webpack');
var helpers = require('./helpers');
var path = require('path');

var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/*
 * Webpack Constants
 */
var HMR = helpers.hasProcessFlag('hot');
var METADATA = {
    baseUrl: "/",
    applicationname: "Angular2Webpack2",
    isDevServer: helpers.isWebpackDevServer()
};

module.exports = function (options) {
    var isProd = options.env === 'production';

    //die BaseUrl wird benötigt um diese in der index.html entsprechend zu setzen.
    //Im Produktionmodus muss hier der Name der Anwendung eingetragen werden, da diese oft
    //als SubAnwendung angelegt werden.
    if (isProd) {
        METADATA.baseUrl = "/" + METADATA.applicationname + "/";
    }

    return {
        entry: {
            'polyfills': './App/polyfills.ts',
            'vendors': './App/vendors.ts',
            'app': './App/boot.ts',
        },

        resolve: {
            /*
            * An array of extensions that should be used to resolve modules.
            * Wenn die Endung beim Import in den TypeScript Dateien nicht angegeben wird,
            * dann wird versucht die fehlende Endung mit den Endungen hier "wiederherzustellen"
            *
            * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
            */
            extensions: ['.ts', '.js', '.json', '.css', '.scss', '.less']
        },
        module: {
            rules: [
                /*
                * Typescript loader support for .ts and Angular 2 async routes via .async.ts
                * Replace templateUrl and stylesUrl with require()
                *
                * See: https://github.com/s-panferov/awesome-typescript-loader
                * See: https://github.com/TheLarkInn/angular2-template-loader
                */
                {
                    test: /\.ts$/,
                    //kümmert sich um das Erstellen von js code aus TypeScript und wandelt die passenden
                    //relativen templateUrl aufrufe in ein Konstrukt um das der html Loader versteht.
                    use: [
                        '@angularclass/hmr-loader?pretty=' + !isProd + '&prod=' + isProd, //HMR = Hot Module Replacement!
                        'awesome-typescript-loader',
                        'angular2-template-loader'
                    ]
                },

                /**
                 * CSS Loader
                 */
                {
                     test: /\.css$/,
                    loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: ['css-loader'] })
                },

                /*
                * SASS Loader
                * Geht aktuell nur GENAU SO, FallBack muss angeben sein, sonst kommt es zu einem Fehler "unbekanntes Token ..."
                * //https://github.com/jtangelder/sass-loader/issues/287
                * Der SASS Loader geht nur wenn "loader" davor steht NICHT wenn "use" wie bei Webpack 2 vorgesehen.
                *
                */
                 {
                     test: /\.scss$/,
                     loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: ['css-loader', 'sass-loader'] })
                 },

                 /**
                  * Less Loader
                  * Der Less Loader geht nur wenn "loader" davor steht NICHT wenn "use" wie bei Webpack 2 vorgesehen.
                  */
                 {
                     test: /\.less$/,
                     loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: ['css-loader', 'less-loader'] })
                 },

                 /**
                  * Loader für die Dateiendungen die in den CSS Dateien verwendet werden.
                  */
                 {
                     test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                     use: 'url-loader?limit=10000&mimetype=application/font-woff'
                 },
                 {
                     test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                     use: 'url-loader?limit=10000&mimetype=application/octet-stream'
                 },
                 {
                     test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                     use: 'file-loader'
                 },
                 {
                      test: /\.svg/,
                      use: 'svg-url-loader'
                 },

                 /* Raw loader support for *.html
                  * Returns file content as string
                  *
                  * See: https://github.com/webpack/raw-loader
                 */
                 {
                     test: /\.html$/,
                     use: ['raw-loader'],
                     //Exclude ist Notwendig, damit die "HtmlWebpackPlugin" Templates im Dokument ersetzt werden können wie baseUrl
                     //wird Exclude NICHT gesetzt, dann wird z.B. BaseUrl nicht ersetzt vom "HtmlWebpackPlugin"
                     exclude: [helpers.root('App/index.html')]
                 },

                  /* File loader for supporting images, for example, in CSS files.
                   */
                  {
                      test: /\.(jpg|png|gif)$/,
                      use: 'file-loader'
                  }
            ]
        },

        plugins: [
               /*
                * Plugin: ForkCheckerPlugin
                * Description: Do type checking in a separate process, so webpack don't need to wait.
                *
                * See: https://github.com/s-panferov/awesome-typescript-loader#forkchecker-boolean-defaultfalse
                */
                new ForkCheckerPlugin(),

                 /*
                 * Plugin: CommonsChunkPlugin
                 * Description: Shares common code between the pages.
                 * It identifies common modules and put them into a commons chunk.
                 *
                 * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
                 * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
                 */
                 new CommonsChunkPlugin({
                     name: ['polyfills', 'vendors'].reverse()
                 }),

                 /**
                 * Plugin: ContextReplacementPlugin
                 * Description: Provides context to Angular's use of System.import
                 *                 *
                 * See: https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin
                 * Sonst kommt es immer zu einer Warnung beim Erstellen mit Webpack "systemjs...." :
                 * See: https://github.com/angular/angular/issues/11580
                 */
                 new ContextReplacementPlugin(
                    // The (\\|\/) piece accounts for path separators in *nix and Windows
                    /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
                    helpers.root('App'), // location of your src
                    {
                        // your Angular Async Route paths relative to this root directory
                    }),

                /*
                * Plugin: HtmlWebpackPlugin
                * Description: Simplifies creation of HTML files to serve your webpack bundles.
                * This is especially useful for webpack bundles that include a hash in the filename
                * which changes every compilation.
                * 
                * Setzt außerdem den BaseUrl in der Anwendung über ein einfaches "Template":
                *  <base href="<%= htmlWebpackPlugin.options.metadata.baseUrl %>">
                *
                * See: https://github.com/ampedandwired/html-webpack-plugin
                */
                new HtmlWebpackPlugin({
                    template: 'App/index.html',
                    baseUrl: METADATA.baseUrl,
                    chunksSortMode: 'dependency',
                    metadata: METADATA,
                }),

                /*
                 * Plugin kümmert sich darum, das die Styles in extra Dateien ausgelagert werden, dafür muss
                 * auch im Loader darauf zugegriffen werden.
                 * 
                 * See: https://github.com/webpack/extract-text-webpack-plugin#api
                 */
                 new ExtractTextPlugin({
                     filename: "[name].css",
                     //  disable: false,
                     //  allChunks: true
                 }),
        ],

        /*
         * Include polyfills or mocks for various node stuff
         * Description: Node configuration
         *
         * See: https://webpack.github.io/docs/configuration.html#node
         */
        node: {
            global: true,
            crypto: 'empty',
            process: true,
            module: false,
            clearImmediate: false,
            setImmediate: false
        }
    };
}