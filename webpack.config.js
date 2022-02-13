var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'wns_resolver.js',
        libraryTarget: 'var',
        library: 'WNS'
    }
};