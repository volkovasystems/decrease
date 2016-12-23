var webpack = require( "webpack" );

module.exports = {
	"entry": "./decrease.support.js",
	"resolve": {
		"modulesDirectories": [ "bower_components", "node_modules" ]
	},
	"output": {
		"library": "decrease",
		"libraryTarget": "umd",
		"filename": "decrease.deploy.js"
	},
	"plugins": [
		new webpack.ResolverPlugin( new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin( "bower.json", [ "support" ] ) ),
		new webpack.ResolverPlugin( new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin( ".bower.json", [ "main" ] ) ),
		new webpack.optimize.UglifyJsPlugin( { compress: { warnings: false } } )
	]
};
