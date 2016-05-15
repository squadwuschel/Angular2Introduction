System.config({
    map: {
        'ScriptsApp': 'ScriptsApp',
 
        '@angular/core': 'node_modules/@angular/core',
        '@angular/common': 'node_modules/@angular/common',
        '@angular/http': 'node_modules/@angular/http',
        '@angular/compiler': 'node_modules/@angular/compiler',
        '@angular/upgrade': 'node_modules/@angular/upgrade',
        '@angular/router-deprecated': 'node_modules/@angular/router-deprecated',
        '@angular/platform-browser': 'node_modules/@angular/platform-browser',
        '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic'
    },
    packages: {
        'ScriptsApp': { main: 'boot.js', defaultExtension: 'js' },
        '@angular/core': { main: 'index.js' },
        '@angular/common': { main: 'index.js' },
        '@angular/http': { main: 'index.js' },
        '@angular/compiler': { main: 'index.js' },
        '@angular/upgrade': { main: 'index.js' },
        '@angular/router-deprecated': { main: 'index.js' },
        '@angular/platform-browser': { main: 'index.js' },
        '@angular/platform-browser-dynamic': { main: 'index.js' }
    }
});