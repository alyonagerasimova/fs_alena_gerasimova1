let gulp = require("gulp"),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('concat-task', function () {
    return gulp.src('./Task 4/*.js')
        .pipe(concat('main.js'),uglify())
        .pipe(gulp.dest('./distGulp/'));
});
