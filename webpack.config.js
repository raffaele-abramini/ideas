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
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: ["css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]", "sass-loader"]
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
		contentBase: __dirname + '/public/',
		publicPath: '/dist/'
	},
	devtool: 'source-map'
};