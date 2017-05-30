const fs = require('fs')
const path = require('path')

module.exports = {

	entry: path.resolve(__dirname, 'server.js'),

	output: {
		filename: 'server.bundle.js'
	},

	target: 'node',

	// keep node_module paths out of the bundle
	externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
		'react-dom/server', 'react/addons',
	]).reduce(function (ext, mod) {
		ext[mod] = 'commonjs ' + mod
		return ext
	}, {}),

	node: {
		__filename: true,
		__dirname: true
	},

	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-2' },
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: ["css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]", "sass-loader"]
				})
			},
		]
	},

	plugins : [
		new ExtractTextPlugin('./style.css')
	]
}