// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp     : The streaming build system
// plumber  : Prevent pipe breaking
// svgstore : Build SVG sprite
// svgmin   : Minifies SVG
// path     : Provides utilities for working with file and directory paths
//
// -------------------------------------

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");
var rename = require("gulp-rename");
var path = require("path");
// Relative path to config file
var config = require("../config");

// -------------------------------------
//   svg
// -------------------------------------
//  1 - Minify SVG
//  2 - Copy it to dist
//  3 - Also combine it to a sprite
//  4 - Output to dist/svg folder
//  Use it in html like so:
//
//  <svg class="">
//      <use xlink:href="svg/svgSprite.svg#name-of-image" />
//  </svg>
//
gulp.task("svg", function() {
  return (
    gulp
      .src(config.paths.svg.src)
      .pipe(plumber())
      // .pipe(svgmin(function (file) {
      //     var prefix = path.basename(file.relative, path.extname(file.relative));
      //     return {
      //         plugins: [{
      //             cleanupAttrs: true
      //         }, {
      //             removeDoctype: false
      //         }, {
      //             removeComments: true
      //         }, {
      //             removeTitle: true
      //         }, {
      //             removeDesc: true
      //         }, {
      //             removeUselessDefs: true
      //         }, {
      //             removeEmptyAttrs: true
      //         }, {
      //             removeEmptyText: true
      //         }, {
      //             cleanupNumericValues: {
      //                 floatPrecision: 2
      //             }
      //         }, {
      //             convertColors: {
      //                 names2hex: true,
      //                 rgb2hex: true
      //             }
      //         }, {
      //             removeUselessStrokeAndFill: true
      //         }, {
      //             cleanupIDs: {
      //                 prefix: prefix + '-ico',
      //                 minify: false // watch out for logo
      //             }
      //         }]
      //     };
      // })) // 1
      .pipe(gulp.dest(config.paths.svg.dest)) // 2
      .pipe(svgstore()) // 3
      .pipe(rename(config.names.svgSprite))
      .pipe(gulp.dest(config.paths.svg.dest))
  ); // 4
});



gulp.task('svg-docs', function() {
  return gulp.src(config.paths.svg.docs)
      .pipe(plumber())
      // .pipe(gulp.dest(config.paths.svg.dest)) // 2 - zatim nepotrebuju a vyhybam se riziku, ze si prepisu neco se stejnym nazvem
      .pipe(svgstore()) // 3
      .pipe(rename(config.names.svgSpriteDocs))
      .pipe(gulp.dest(config.paths.svg.dest)); // 4
});
