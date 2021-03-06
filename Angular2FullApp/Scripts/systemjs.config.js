﻿System.config({
    paths: {
        //Die externe Lib für SystemJs bekannt machen und den namen sowie Pfad angeben unter dem die Lib gefunden werden kann.
        //https://medium.com/@@s_eschweiler/using-external-libraries-with-angular-2-87e06db8e5d1#.rbypmmhq8
        lodash: "./Scripts/lodash.js"
    },
    map: {
        'ScriptsApp': 'ScriptsApp',
        'rxjs': 'node_modules/rxjs',

        '@angular/core': 'node_modules/@angular/core',
        '@angular/common': 'node_modules/@angular/common',
        '@angular/http': 'node_modules/@angular/http',
        '@angular/compiler': 'node_modules/@angular/compiler',
        '@angular/router-deprecated': 'node_modules/@angular/router-deprecated',
        '@angular/platform-browser': 'node_modules/@angular/platform-browser',
        '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic'
    },
    packages: {
        'ScriptsApp': { main: 'boot.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        '@angular/core': { main: 'index.js' },
        '@angular/common': { main: 'index.js' },
        '@angular/http': { main: 'index.js' },
        '@angular/compiler': { main: 'index.js' },
        '@angular/router-deprecated': { main: 'index.js' },
        '@angular/platform-browser': { main: 'index.js' },
        '@angular/platform-browser-dynamic': { main: 'index.js' }
    }
});