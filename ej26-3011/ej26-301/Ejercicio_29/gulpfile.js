const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilarCSS() {
    console.log('Compilando SASS para Tabs...');
    return src('style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./'));
}

function copiarJS() {
    console.log('Copiando JavaScript...');
    return src('script.js')
        .pipe(dest('dist/'));
}

function copiarHTML() {
    console.log('Copiando HTML...');
    return src('index.html')
        .pipe(dest('dist/'));
}

function vigilar() {
    console.log('Vigilando cambios...');
    watch('style.scss', compilarCSS);
    watch('script.js', copiarJS);
    watch('index.html', copiarHTML);
}

exports.css = compilarCSS;
exports.js = copiarJS;
exports.html = copiarHTML;
exports.vigilar = vigilar;
exports.default = compilarCSS;
