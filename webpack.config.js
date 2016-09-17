module.exports = {
    // ou vérifier
    entry: {
	App: "./app/assets/scripts/App.js",
	Vendor: "./app/assets/scripts/Vendor.js"
    },
    // ou sortir
    output: {
	path: "./app/temp/scripts",
	filename: "[name].js"
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
