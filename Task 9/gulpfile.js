const gulp = require("gulp"),
    concat = require('gulp-concat'),
    //gp_rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('concat-task', function () {
    return gulp.src('Task 4/ *.js')
        .pipe(concat('index.js'), uglify())
        //.pipe(gulp.dest('dist'))
        //.pipe(gp_rename('uglify.js'))
        .pipe(gulp.dest('js/'));
});
//gulp.task('default', ['concat-task']);
