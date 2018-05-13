const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path')
const OfflinePlugin = require('offline-plugin');

module.exports = (env)=>{
	return {
		mode: env === 'prod' ? 'production' : 'development',
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
    optimization: {
      splitChunks: {
        cacheGroups: {
        	vendor: {},
					manifest: {}
				},
      }
    },
    plugins : [
			new HtmlWebpackPlugin({
				title: 'Ideas',
				filename: env === 'prod' ? '../../functions/template.html' : 'index.html',
				template: './src/template.html'
			}),
			new CleanWebpackPlugin(['public']),
			new OfflinePlugin({
				externals: [
					'/ideas/',
					'/'
				],
				ServiceWorker: {
					navigateFallbackURL: '/ideas'
				},
				AppCache: {
					FALLBACK: {
						'/': '/ideas'
					}
				}
			})
		],
		devServer: {
			historyApiFallback: true,
			host: "0.0.0.0",
			disableHostCheck: true
		},
		resolve: {
			alias: {
				styles: path.resolve(__dirname, 'src/styles/')
			}
		},
		devtool: 'source-map'
	}
};