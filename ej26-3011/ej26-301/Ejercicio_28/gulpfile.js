const { src, dest } = require('gulp');

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

exports.js = copiarJS;
exports.html = copiarHTML;
exports.default = copiarJS;
