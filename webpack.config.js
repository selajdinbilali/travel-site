module.exports = {
    // ou vérifier
    entry: "./app/assets/scripts/App.js",
    // ou sortir
    output: {
	path: "./app/temp/scripts",
	filename: "App.js"
    },
    module: {
	loaders: [
	    {
		loader: 'babel',
		query: {
		    presets: ['es2015']
		},
		test: /\.js$/, /* babel loader sera appliqué au js */
		exclude: /node_modules/
	    }
	]	
    }
}
