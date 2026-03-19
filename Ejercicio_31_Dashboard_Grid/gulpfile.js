const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Tarea para compilar SCSS a CSS
gulp.task('sass', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

// Tarea de vigilancia
gulp.task('watch', function() {
    gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('./src/js/**/*.js', gulp.series('js'));
});

// Tarea para JS
gulp.task('js', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(gulp.dest('./dist/js'));
});

// Tarea por defecto
gulp.task('default', gulp.parallel('sass', 'js', 'watch'));