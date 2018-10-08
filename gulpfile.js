'use strict';

var fs=require('fs');
var gulp=require('gulp');

var requirejs = require('requirejs');
var path=require('path');
var browserSync=require('browser-sync');
var express = require('express');

gulp.task('reload',function(){
    browserSync.reload();
});

gulp.task('watch',function(){
    gulp.watch('src/modules/**/*.js',['reload']);
    gulp.watch('src/modules/**/*.html',['reload']);
    gulp.watch('src/css/**/*.css',['reload']);
});

gulp.task('serve',['watch'],function(){
    browserSync({
        server:{
            baseDir: "./",
            index:"src/modules/index.html"
        }
    });
});



