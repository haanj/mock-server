const gulp = require('gulp');
const lint = require('gulp-eslint');

const paths = ['**/*.js'];

function runLint() {
  return gulp.src(paths)
    .pipe(lint())
    .pipe(lint.format());
}

gulp.task('lint', runLint);

gulp.task('default', ['lint']);

gulp.watch(paths, ['lint']);
