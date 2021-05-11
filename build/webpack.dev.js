const webpack = require('webpack')
const { baseConfig } = require('./webpack.common.js')
const { smart } = require('webpack-merge')

const config = smart(baseConfig, {
	devtool: 'source-map',
	mode: "development"
})

module.exports = config