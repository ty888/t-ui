var gulp=require('gulp'),
    gulp_less=require('gulp-less'),
    // gulp_connect=require('gulp-connect'),
    gulp_minify_css=require('gulp-minify-css'); // css压缩
    // livereload = require('gulp-livereload'); // 热更新
    browserSync = require('browser-sync').create(); // 热重载
    reload = browserSync.reload;

//部署动作-less
gulp.task('less',function () {
    gulp.src('less/tui.less')
        .pipe(gulp_less())
        .pipe(gulp.dest('dist/css/'))
        // .pipe(gulp_minify_css()) 压缩css
    gulp.src('less/index.less')
        .pipe(gulp_less())
        .pipe(gulp.dest('dist/css/'))
});

// 热重载
gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: '.'  // 根目录，index.html 文件所在的目录
    }
  });
  // less 文件一改动就重新编译成 css
  gulp.watch('less/*.less', ['less', 'copy']);

});

// 复制资源文件
gulp.task('copy',  function() {
  return gulp.src('src/**/*.*')
    .pipe(gulp.dest('dist/src'))
});

gulp.task('dev', ['less' , 'server', 'copy']);
