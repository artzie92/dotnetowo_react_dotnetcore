var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
    return browserify({entries: './clientapp/root', extensions: ['.jsx', '.js'], debug: true})
        .transform('babelify', { presets: ['es2015', 'react'] })
        .bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('./wwwroot/'));
});

gulp.task('watch', function () {
    gulp.watch('./clientapp/**/*{.js,.jsx}', ['build']);
});

gulp.task('default', ['watch']);