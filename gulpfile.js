var gulp=require('gulp'),
    gulp_less=require('gulp-less'),
    // gulp_connect=require('gulp-connect'),
    gulp_minify_css=require('gulp-minify-css');
    // livereload = require('gulp-livereload'); // 热更新
    browserSync = require('browser-sync').create(); // 热重载
    reload = browserSync.reload;

//部署动作-less
gulp.task('less',function () {
    gulp.src('less/tui.less')
        .pipe(gulp_less())
        .pipe(gulp.dest('dist/css/'))
        // .pipe(gulp_minify_css()) 压缩css
});

// 热更新
// gulp.task('hot', function() {
//     livereload.listen();
//     // app/**/*.* 的意思是 app 文件夹下的 任何文件夹 的 任何文件
//     gulp.watch('dist/*.*', function(event) {
//         livereload.changed(event.path);
//     });
//     // gulp.watch('less/*.*', function(event) {
//     //     livereload.changed(event.path);
//     // });
// });

// 热重载
gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'  // 根目录，index.html 文件所在的目录
    }
  });
  // less 文件一改动就重新编译成 css
  gulp.watch('less/*.less', ['less']);

});

gulp.task('dev', ['less' , 'server']);
