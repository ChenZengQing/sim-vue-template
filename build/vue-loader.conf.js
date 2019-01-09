'use strict'
const utils = require('./utils')
const config = require('../config')

const precss = require('precss')
const pxtorem = require('postcss-px2rem')
const autoprefixer = require('autoprefixer')

const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  postcss: [
    precss(),
    autoprefixer({
      browsers: [
        'last 10 Chrome versions',
        'last 5 Firefox versions',
        'Safari >= 6',
        'ie > 8'
      ]
    }),
    pxtorem({
      remUnit: 37.5 //设计尺寸的1/10
    })
  ],

  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
