'use strict'
// Template version: 1.2.6
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');

const proxyTable = {
        '/ucenter': {
            // target: 'http://192.168.254.183:8296/ucenter',  //目标接口域名
            target: 'http://172.16.6.1:8080/ucenter',  //目标接口域名
            changeOrigin: true,  //是否跨域
            pathRewrite: {
                '^/ucenter': '/'   //重写接口
            }
        },
        '/garage': {
            // target: 'http://192.168.254.183:8902/garage',  //目标接口域名
            target: 'http://172.16.6.1:8080/garage',  //目标接口域名
            changeOrigin: true,  //是否跨域
            pathRewrite: {
                '^/garage': '/'   //重写接口
            }
        },
        '/base': {
            target: 'http://172.16.6.1:8080/base',  //目标接口域名
            changeOrigin: true,  //是否跨域
            pathRewrite: {
                '^/base': '/'   //重写接口
            }
        },
        '/admin': {
            target: 'http://172.16.6.1:8080/admin',  //目标接口域名
            changeOrigin: true,  //是否跨域
            pathRewrite: {
                '^/admin': '/'   //重写接口
            }
        },
        '/logistics-saas': {
            // target: 'http://192.168.254.202:8900/logistics-saas',  // 罗勇
            target: 'http://172.16.6.1:8080/logistics-saas',  //目标接口域名
            changeOrigin: true,  //是否跨域
            pathRewrite: {
                '^/logistics-saas': '/'   //重写接口
            }
        },
    };

module.exports = {
    dev: {
        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: proxyTable,

        // Various Dev Server settings
        // host: '192.168.255.90', // can be overwritten by process.env.HOST
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: true,
        errorOverlay: true,
        notifyOnErrors: false,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

        // Use Eslint Loader?
        // If true, your code will be linted during bundling and
        // linting errors and warnings will be shown in the console.
        useEslint: false,
        // If true, eslint errors and warnings will also be shown in the error overlay
        // in the browser.
        showEslintErrorsInOverlay: false,

        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false,
    },
    build: {
        // Template for index.html
        index: path.resolve(__dirname, '../dist/index.html'),
        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        /**
         * You can set by youself according to actual condition
         * You will need to set this if you plan to deploy your site under a sub path,
         * for example GitHub pages. If you plan to deploy your site to https://foo.github.io/bar/,
         * then assetsPublicPath should be set to "/bar/".
         * In most cases please use '/' !!!
         */
        assetsPublicPath: '/garage/', // If you are deployed on the root path, please use '/'

        // proxyTable: proxyTable,
        /**
         * Source Maps
         */
        productionSourceMap: false,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    buildTest: {
        // Template for index.html
        index: path.resolve(__dirname, '../testDist/index.html'),
        // Paths
        assetsRoot: path.resolve(__dirname, '../testDist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/garage/',
        // proxyTable: proxyTable,
        /**
         * Source Maps
         */
        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    buildPreview: {
        // Template for index.html
        index: path.resolve(__dirname, '../preview/index.html'),
        // Paths
        assetsRoot: path.resolve(__dirname, '../preview'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/garage/',
        // proxyTable: proxyTable,
        /**
         * Source Maps
         */
        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
};
