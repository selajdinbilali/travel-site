var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    mixins = require('postcss-mixins'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    hexrgba = require('postcss-hexrgba');


gulp.task('styles', function(){
    // error handlin .on
    
    // src (chemin de la source)
    // pipe (quoi faire)
    // dest ()
    // retur car gulp.src est asynchrone
    return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer])) // array des choses à faire
	.on('error', function(errorInfo){ // affichage de l'erreur
	    console.log(errorInfo.toString());
	    this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles'));
});
