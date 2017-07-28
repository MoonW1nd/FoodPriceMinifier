'use strict'

const gulp = require('gulp');
// const babel = require('gulp-babel');
const stylus = require('gulp-stylus');
const browserify = require('browserify');
const babelify = require('babelify');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const del = require('del');
const concat = require('gulp-concat');
const newer = require('gulp-newer');
const autoprefixer = require('autoprefixer-stylus');
const browserSync = require('browser-sync').create();
const source = require('vinyl-source-stream');
// var connectPHP = require('gulp-connect-php');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

//подключение стилей
gulp.task('styles', function(){
		return gulp.src('frontend/css/main.styl', {base: 'frontend'})
				.pipe(gulpIf(isDevelopment, sourcemaps.init()))
				.pipe(stylus({
						pretty:true,
						use:[autoprefixer()]
				}))
				.pipe(gulpIf(isDevelopment, sourcemaps.write()))
				.pipe(gulp.dest('public'));
});

//соединение всех jsx файлов в 1
gulp.task('concat', function() {
	return gulp.src('frontend/assets/js/jsxComponents/*.jsx')
	.pipe(concat('app.jsx'))
	.pipe(gulp.dest('frontend/assets/js'));
});

// babel
gulp.task('babel', () =>
//обработка без browserify
		browserify({entries: 'frontend/assets/js/app.jsx', extensions: ['.jsx'], debug: false})
				.transform('babelify', {presets: [['es2015', 'react']]})
				.bundle()
				.pipe(source('app.js'))
				.pipe(gulp.dest('public/js'))
		// gulp.src('frontend/assets/js/app.jsx')
		// 		.pipe(babel({
		// 			plugins: ['transform-react-jsx'],
		// 			presets: ['es2015']
		// 		}))
		// 		.pipe(gulp.dest('public/js'))

);

//@TODO: Сделать обработку ошибок , чтобы gulp не приходилось перезагружать
//подключение специального сборщика для стилей safari
// gulp.task('safari', function(){
//     return gulp.src('frontend/css/safari.styl', {base: 'frontend'})
//         .pipe(gulpIf(isDevelopment, sourcemaps.init()))
//         .pipe(stylus({
//             pretty:true,
//             use:[autoprefixer()]
//         }))
//         .pipe(gulpIf(isDevelopment, sourcemaps.write()))
//         .pipe(gulp.dest('public'));
// });


// gulp.task('php', function(){
//   connectPHP.server({ base: './public', keepalive:true, hostname: 'localhost', port:8080, open: false});
// });


// gulp.task('browserSync', function() {
//     browserSync.init({
//         proxy: 'Portfolio.dev'
//     });
//     browserSync.watch('public/*.php').on('change', function () {
//         browserSync.reload();
//     });
// });


//  gulp.task('browserSyn', function() {
//     connectPHP.server({base: './public', keepalive:true,hostname: 'localhost',port:9000,open: false}, function (){
//         browserSync.init({
//             proxy: 'Portfolio.dev',
//             notify: false
//         });
//     });
//     gulp.watch('public/*.php').on('change', function () {
//         browserSync.reload;
//     });
// });


// удаление паки public для пересборки проекта
gulp.task('clean', function() {
		return del('public');
});


//копирование вспомогательных файлов в паблик
gulp.task('assets', function() {
		return gulp.src(['frontend/assets/**',"!frontend/assets/js/app.jsx"])
				.pipe(newer('public'))
				.pipe(gulp.dest('public'));
});


//команда сборки и запуска browser-sync
gulp.task('build', ['concat','styles',"babel", 'assets', 'watch','serve']);



//слежение за файлами , при изменении перезагружает браузер
gulp.task('watch', function() {
		gulp.watch('frontend/css/**/*.*', ['styles']).on('change', browserSync.reload);
		gulp.watch(['frontend/assets/**/*.*', "!frontend/assets/js/app.jsx"], ['assets']).on('change', browserSync.reload);
		gulp.watch("frontend/assets/js/jsxComponents/*.jsx", ['concat','babel']).on('change', browserSync.reload);
});

//функция перезагпузки браузера для HTML файлов
gulp.task('serve',function () {
		browserSync.init({
				server: {
						baseDir: "./public"
				}
		});
		browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});


// //функция перезагпузки браузера для PHP файлов
// gulp.task('serve', function () {
//     browserSync.init({
//         proxy:"localhost",
//         notify: false
//     });
//     browserSync.watch('public/**/*.*').on('change', browserSync.reload);
// });