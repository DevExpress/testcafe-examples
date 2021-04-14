
const eslint = require('gulp-eslint');
const gulp   = require('gulp');

gulp.task('lint', () => {
    return gulp
        .src([
            'examples/**/*.{js,ts}',
            'detached-examples/**/*.{js,ts}'
        ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
