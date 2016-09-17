var gulp = require('gulp')
imagemin = require('gulp-imagemin'), // rétrécit les images
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create(); /* on demande que la demande create */


gulp.task('previewDist', function(){
       browserSync.init({
	// où vit notre site car il lance un webserver
        notify: false, // ne marche pas
	server: {
	    baseDir: "docs"
	}
    });
});

gulp.task('deleteDistFolder', ['icons'], function(){
    return del("./docs"); 
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function(){
    var pathsToCopy = ['./app/**/*',
		       '!./app/index.html',
		       '!./app/assets/images/**',
		       '!./app/assets/styles/**',
		       '!./app/assets/scripts/**',
		       '!./app/temp',
		       '!./app/temp/**'
    ]
    return gulp.src(pathsToCopy)
	.pipe(gulp.dest("./docs"));
});

gulp.task('optimizeImages', ['deleteDistFolder'], function(){
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
	.pipe(imagemin({
	    progressive: true,
	    interlaced: true,
	    multipass: true
	}))
	.pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function(){
    gulp.start("usemin"); 
});

// copie le css et js et compresse et revison
gulp.task('usemin', ['styles', 'scripts'], function(){
    return gulp.src("./app/index.html")
	.pipe(usemin({
	    css: [function(){return rev()}, function(){return cssnano()}],
	    js: [function(){return rev()}, function(){return uglify()}]
	}))
	.pipe(gulp.dest("./docs"));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);
