var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(); /* on demande que la demande create */



gulp.task('watch', function(){

    browserSync.init({
	// où vit notre site car il lance un webserver
        notify: false, // ne marche pas
	server: {
	    baseDir: "app"
	}
    });
    
    // arg1 : fichier à surveiller
    // arg2 : quoi faire
    watch('./app/index.html', function(){
	// task to start
	browserSync.reload(); /* rafraichit la page a chaque save */
    });

    watch('./app/assets/styles/**/*.css', function(){
	gulp.start('cssInject');
    });
    
});
/* [dépendences] */
gulp.task('cssInject', ['styles'] ,function(){
    /* prendre le contenu des styles */
    return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
});
