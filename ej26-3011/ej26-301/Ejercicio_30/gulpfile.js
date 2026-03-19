const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css() {
    console.log('Compilando SASS - Ejercicio 30');
    return src('main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'));
}

function js() {
    console.log('Copiando JavaScript');
    return src('main.js')
        .pipe(dest('dist/js'));
}

function html() {
    console.log('Copiando HTML');
    return src('index.html')
        .pipe(dest('dist/'));
}

function vigilar() {
    console.log('Vigilando cambios');
    watch('main.scss', css);
    watch('main.js', js);
    watch('index.html', html);
}

exports.css = css;
exports.js = js;
exports.html = html;
exports.vigilar = vigilar;
exports.default = parallel(css, js, html, vigilar);
