const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const autoprefixer = require('autoprefixer')
const resolve = dir => path.resolve(__dirname, '..', dir)

const baseConfig = {
	
  entry: {
    'elyn-ui': resolve('src/index.js')
  },
  output: {
    path: resolve('lib'),
    filename: '[name].min.js',
    libraryTarget: 'umd',
    library: 'ans',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheIdentifier: true
            }
          }
        ]
      },
			{
			  test: /\.vue$/,
			  loader: 'vue-loader'
			},
			{
			  test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
			  test: /\.scss$/,
			  use: [
					MiniCssExtractPlugin.loader, 
					'css-loader', 
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							sourceMap: true,
							plugins: loader=>[
								require('autoprefixer')({
									Browserslist: [
										"last 2 versions",
										"> 1%"
									]
								})
							]
						}
					},
					'sass-loader',
				]
			},
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          publicPath: resolve('lib'),
          name: 'font/[name].[hash:7].[ext]'
        }
      }
    ]
  },
	plugins: [
	  new VueLoaderPlugin(),
	  new MiniCssExtractPlugin({
	      filename: "elyn-ui.min.css"
	  })
	],
	externals: {
		'vue': {
			commonjs: 'vue',
			commonjs2: 'vue',
			amd: 'vue',
			root: 'Vue'
		}
	}
}

module.exports = {
	baseConfig
}

