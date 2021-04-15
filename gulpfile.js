const { src, dest, watch , parallel } = require('gulp');
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat');
const terser = require('gulp-terser-js');

const paths = {
    js: 'src/js/**/*.js'
}

function javascript() {
    return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat('index.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./build/js'))
}


function watchArchivos() {
    watch( paths.js, javascript );
};

exports.watchArchivos = watchArchivos;
exports.default = parallel(javascript, watchArchivos ); 