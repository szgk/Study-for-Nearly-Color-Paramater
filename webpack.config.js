const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
	mode: process.env.NODE_ENV || 'development',
	entry: './main.js',
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'script.js',
	},
  devtool: isDev ? "source-map" : false,
  devServer: {
		contentBase: path.resolve(__dirname, './public'),
		hot: true,
    compress: true,
		port: 9001,
		historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          {
            loader:'vue-loader'
          },
        ]
      },
      {
        test: /\.styl(us)?$/,
        exclude: /node_modules/,
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader',
          {
            loader:'stylus-loader'
          },
        ]
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader:'html-loader'
          },
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js', '.html', '.styl']
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}