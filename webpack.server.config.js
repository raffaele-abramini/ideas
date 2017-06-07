const fs = require('fs')
const path = require('path')

module.exports = {
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			'firebase-database': path.resolve(__dirname, '../functions/firebase-database'),
		},
	},
	resolveLoader: {
		modules: [path.resolve(__dirname, "./node_modules")],
	},
	target: 'node',
	entry: './src/server.js',
	output: {
		filename: 'server.bundle.js',
		path: path.resolve(__dirname, '../functions/build'),
		libraryTarget: 'commonjs2',
	}
}