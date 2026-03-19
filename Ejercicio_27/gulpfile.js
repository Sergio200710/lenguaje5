const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compilarCSS() {
    console.log("🔄 Compilando SASS...");
    return src("style.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(dest("dist/css"));
}

function vigilar() {
    console.log("👀 Vigilando cambios...");
    watch("style.scss", compilarCSS);
}

exports.css = compilarCSS;
exports.vigilar = vigilar;
exports.default = series(compilarCSS, vigilar);
