var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: './src/zy.js',
	output: {
		path: __dirname + '/build',
		filename: 'app_[chunkhash].js'
	},
	plugins: [new HtmlWebpackPlugin({
			title: 'demo',
			template: "template.ejs"
		}), new ExtractTextPlugin({ //css的自动支
			//filename:'[name].[hash].css',
			filename: 'app_[hash].css',
			disable: false,
			allChunks: true
		})
		//		new webpack.optimize.UglifyJsPlugin({
		//	      compress: {
		//	        warnings: false
		//	      },
		//	      output:{
		//	      	comments:false
		//	      }
		//	    })
	],
	module: {
		loaders: [{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader'
			})
		}, {
			test: /\.scss$/,
			//			loader:'style-loader!css-loader!sass-loader'
			loader: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader!sass-loader'

			})
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'react-hot-loader!babel-loader'
		}, {
			test: /\.jsx$/,
			exclude: /node_modules/,
			loader: 'react-hot-loader!babel-loader'
		}]
	},
	devServer: {
		contentBase: './build',
		host: 'localhost',
		historyApiFallback: false,
		port: 8000,
		proxy: {
			"/api": {
				target: "http://localhost:3000",
				pathRewrite: {
					"^/api": ""
				}
			}
		}
	},
	externals: {
		jquery: 'window.jQuery',
		react: "window.React",
		'react-dom': 'window.ReactDOM',
		'react-router': 'window.ReactRouter'
	}
}