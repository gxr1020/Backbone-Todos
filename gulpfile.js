// src 源
// dist编译后

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync=require('browser-sync').create(),
	uglify=require('gulp-uglify');



gulp.task('sass',function(){
	return gulp.src('./src/css/sass/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('./src/css'))
	.pipe(browserSync.stream());
});




gulp.task('jsuglify',function(){
	return gulp.src('./src/js/**/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('./dist/js/'));
});




gulp.task('server',function(){
	browserSync.init({
		//server:'./src',
		server:'./'

	});
	gulp.watch('./src/css/sass/*.scss',['sass']);
	gulp.watch('./src/*.html').on('change',browserSync.reload);
	gulp.watch('./src/**/*.js').on('change',browserSync.reload);

});



// bulid
gulp.task('sassBulid',function(){
	return gulp.src('./src/css/sass/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('./dist/css'));
});
gulp.task('build',['sassBulid','jsuglify'],function(){
	return gulp.src('./src/**/*.html').pipe(gulp.dest('./dist/'));
});


gulp.task('default',['build']);
