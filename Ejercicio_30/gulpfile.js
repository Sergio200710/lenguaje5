const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Rutas
const paths = {
    scss: './*.scss',
    js: './*.js',
    html: './*.html',
    dist: {
        css: 'dist/css/',
        js: 'dist/js/',
        root: 'dist/'
    }
};

// Tarea CSS
function css() {
    console.log('🎨 Compilando SASS...');
    return src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(dest(paths.dist.css));
}

// Tarea JS
function js() {
    console.log('📦 Copiando JavaScript...');
    return src(paths.js)
        .pipe(dest(paths.dist.js));
}

// Tarea HTML
function html() {
    console.log('📄 Copiando HTML...');
    return src(paths.html)
        .pipe(dest(paths.dist.root));
}

// Watch
function watchFiles() {
    console.log('👀 Vigilando cambios...');
    watch(paths.scss, css);
    watch(paths.js, js);
    watch(paths.html, html);
}

// Tareas individuales
exports.css = css;
exports.js = js;
exports.html = html;
exports.watch = watchFiles;

// Tarea por defecto
exports.default = series(
    parallel(css, js, html),
    watchFiles
);
