var gulp = require('gulp');
var gutil = require('gulp-util');
var jade = require('gulp-jade');
var gulpLiveScript = require('gulp-livescript');
var sass = require('gulp-sass');

var paths = {
  jade: ['./jade/**/*.jade'],
  ls: ['./livescripts/**/*.ls'],
  sass: ['./sass/**/*.sass']
};

gulp.task('default', ['jade', 'ls', 'sass']);

gulp.task('jade', function (done) {
  gulp.src(paths.jade)
    .pipe(jade())
    .pipe(gulp.dest('./www/'))
    .on('end', done);
});

gulp.task('ls', function(done) {
  gulp.src(paths.ls)
    .pipe(gulpLiveScript( { bare: true } )
    .on('error', gutil.log))
    .pipe(gulp.dest('./www/js/'))
    .on('end', done);
});

gulp.task('sass', function(done) {
  gulp.src(paths.sass)
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.jade, ['jade']);
  gulp.watch(paths.ls, ['ls']);
  gulp.watch(paths.sass, ['sass'])
});
