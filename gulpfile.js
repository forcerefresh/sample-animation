const gulp = require("gulp");
const zip = require("gulp-zip");
const clean = require("gulp-clean");

var webpack = require("webpack-stream");

gulp.task("clean", function () {
  return gulp.src("./dist", { read: false, allowEmpty: true }).pipe(clean());
});

gulp.task("build-animation-for-player", function () {
  return gulp
    .src("./index-player.ts")
    .pipe(webpack(require("./webpack.config.dist-player.js")))
    .pipe(gulp.dest("./dist"));
});

gulp.task("build-animation-for-app", function () {
  return gulp
    .src("./index-app.ts")
    .pipe(webpack(require("./webpack.config.dist-app.js")))
    .pipe(gulp.dest("./dist"));
});

gulp.task("copy-static", function () {
  return gulp
    .src(["./static/**/*", "!./static/hash.json", "!./static/index.html"])
    .pipe(gulp.dest("./dist"));
});

gulp.task("bundle", function () {
  return gulp
    .src(["./dist/*", "!./dist/**.LICENSE.txt", "!./dist/**.js.map"])
    .pipe(zip("io.webslider.sample-animation.zip"))
    .pipe(gulp.dest("./dist/bundle"));
});

gulp.task(
  "default",
  gulp.series([
    "clean",
    "build-animation-for-player",
    "build-animation-for-app",
    "copy-static",
    "bundle",
  ])
);
