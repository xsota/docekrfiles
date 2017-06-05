var gulp = require('gulp');
var aglio = require('gulp-aglio');
var watch = require('gulp-watch');

var src = 'md/**/'
var dest = 'public'

gulp.task('publish', function () {
    gulp.src(`${src}*.md`)
        .pipe(aglio({ template: 'default' }))
        .pipe(gulp.dest(dest));
});

gulp.task('watch', function() {
    return watch(src, () => {
	return gulp.start(['publish']);
    });
})
