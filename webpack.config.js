const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path')
const OfflinePlugin = require('offline-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

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
        	vendor: {}
				},
      }
    },
    plugins : [
      new CleanWebpackPlugin(['public']),
			new HtmlWebpackPlugin({
				title: 'Ideas',
				favicon: './src/assets/icons/favicon.png',
				filename: env === 'prod' ? '../../functions/template.html' : 'index.html',
				template: './src/template.html'
			}),
      new WebpackPwaManifest({
        name: 'Ideas',
        short_name: 'Ideas',
        start_url: '/ideas',
        display: 'standalone',
        background_color: '#fff',
        description: 'A container for your ideas',
        icons: [
          {
            src: path.resolve('src/assets/icons/icon_72x72.png'),
            size: 72
          },
          {
            src: path.resolve('src/assets/icons/icon_96x96.png'),
						size: 96
          },
          {
            src: path.resolve('src/assets/icons/icon_128x128.png'),
						size: 128
          },
          {
            src: path.resolve('src/assets/icons/icon_144x144.png'),
						size: 144
          },
          {
            src: path.resolve('src/assets/icons/icon_152x152.png'),
						size: 152
          },
          {
            src: path.resolve('src/assets/icons/icon_192x192.png'),
						size: 192
          },
          {
            src: path.resolve('src/assets/icons/icon_384x384.png'),
						size: 384
          },
          {
            src: path.resolve('src/assets/icons/icon_512x512.png'),
						size: 512
          }
				]
      }),
			new OfflinePlugin({
        publicPath: '/',
				ServiceWorker: {
        	scope: '/',
          output: '../sw.js',
          navigateFallbackURL: '/offline',
				},
				AppCache: {
					FALLBACK: {
						'/': '/offline'
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