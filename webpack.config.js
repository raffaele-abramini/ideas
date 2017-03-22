const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'./src/root.js',
		'./src/styles/style.scss'
	],
	output: {
		path: __dirname + "/public/dist",
		filename: 'bundle.js'
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
		new ExtractTextPlugin('./style.css')
	],
	devServer: {
		historyApiFallback: true,
		host: "0.0.0.0",
		contentBase: './public/'
	},
	devtool: 'source-map'
};