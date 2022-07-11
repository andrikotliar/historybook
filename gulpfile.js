const gulp = require('gulp');
const del = require('del');
const postcss = require('gulp-postcss');

gulp.task('styles', () => {
    return gulp.src('dist/styles/{styles,print}.css')
        .pipe(postcss([
            require('postcss-import'),
            require('autoprefixer'),
            require('postcss-csso'),
        ]))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('deleteDist', () => {
    return del([
        'dist'
    ]);
});

gulp.task('clean', () => {
    return del([
        'dist/styles/**/*',
        '!dist/styles/{styles,print}.css',
    ]);
});

gulp.task('build', gulp.series(
    'styles',
    'clean'
));