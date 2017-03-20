const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'./src/app.js',
		'./src/styles/style.scss'
	],
	output: {
		filename: './dist/bundle.js'
	},
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
					use: ["css-loader", "sass-loader"]
				})
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader?name=dist/fonts/[name].[ext]'
			},
			{
				test: /\.(gif)$/,
				loader: 'file-loader?name=dist/[name].[ext]'
			}
		]
	},
	plugins : [
		new ExtractTextPlugin('./dist/style.css')
	],
	devServer: {
		historyApiFallback: true,
		host: "0.0.0.0",
		contentBase: './'
	},
	devtool: 'source-map'
};