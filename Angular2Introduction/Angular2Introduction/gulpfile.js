/// <binding AfterBuild='moveToLibs' />
var gulp = require('gulp');
 
gulp.task('moveToLibs', function (done) {
    //gulp.src(['node_modules/@angular/core/*.*']).pipe(gulp.dest('./Scripts/@angular/core'));
    //gulp.src(['node_modules/@angular/common/*.*']).pipe(gulp.dest('./Scripts/@angular/common'));
    //gulp.src(['node_modules/@angular/compiler/*.*']).pipe(gulp.dest('./Scripts/@angular/compiler'));
    //gulp.src(['node_modules/@angular/router-deprecated/*.*']).pipe(gulp.dest('./Scripts/@angular/router-deprecated'));
    //gulp.src(['node_modules/@angular/platform-browser/*.*']).pipe(gulp.dest('./Scripts/@angular/platform-browser'));
    //gulp.src(['node_modules/@angular/platform-browser-dynamic/*.*']).pipe(gulp.dest('./Scripts/@angular/platform-browser-dynamic'));

    gulp.src([
//    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/systemjs/dist/system.src.js'
    ]).pipe(gulp.dest('./Scripts/'));
});