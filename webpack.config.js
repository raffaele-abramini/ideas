const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env)=>{
	return {
		entry: {
			client: './src/client.js',
			vendor: [
				'react',
				'prop-types',
				'react-dom',
				'classnames',
				'firebase',
				'redux',
				'react-redux',
				'redux-form',
				'redux-thunk',
				'react-router',
				'react-router-dom'
			]
		},
		output: {
			path: __dirname + "/public/dist",
			filename: '[name].[chunkhash].js',
			publicPath : (env === 'prod' ? '/dist/' : '/')
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
					use: ["style-loader","css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]", "sass-loader"]
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
			new ExtractTextPlugin('style.css'),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'vendor'
			}),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'manifest'
			}),
			new HtmlWebpackPlugin({
				title: 'Ideas',
				filename: env === 'prod' ? '../../functions/template.html' : 'index.html',
				template: './src/template.html'
			}),
			new CleanWebpackPlugin(['public'])
		],
		devServer: {
			historyApiFallback: true,
			host: "0.0.0.0"
		},
		devtool: 'source-map'
	}
};