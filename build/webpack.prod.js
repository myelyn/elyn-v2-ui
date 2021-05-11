const webpack = require('webpack')
const { baseConfig } = require('./webpack.common.js')
const { smart } = require('webpack-merge')
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = smart(baseConfig, {
	mode: "production",
	optimization: {
	    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
	}
})

module.exports = config