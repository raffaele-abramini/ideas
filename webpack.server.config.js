const fs = require('fs')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	module : {
		rules : [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ["es2015", "react", 'stage-2']
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: ["css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]", "sass-loader"]
				})
			}
		]
	},
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
		path: path.resolve(__dirname, './functions/build'),
		libraryTarget: 'commonjs2',
	},
	plugins : [
		new ExtractTextPlugin('./style.css')
	]
}