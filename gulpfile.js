const gulp = require('gulp');
const del = require('del');
const postcss = require('gulp-postcss');

gulp.task('styles', () => {
    return gulp.src('_site/styles/{styles,print}.css')
        .pipe(postcss([
            require('postcss-import'),
            require('autoprefixer'),
            require('postcss-csso'),
        ]))
        .pipe(gulp.dest('_site/styles'));
});

gulp.task('delete_site', () => {
    return del([
        '_site'
    ]);
});

gulp.task('clean', () => {
    return del([
        '_site/styles/**/*',
        '!_site/styles/{styles,print}.css',
    ]);
});

gulp.task('build', gulp.series(
    'styles',
    'clean'
));