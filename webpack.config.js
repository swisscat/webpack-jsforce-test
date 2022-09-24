const webpack = require('webpack');

module.exports = {
    mode: 'development',
    resolve: {
        fallback: {
            buffer: false,
            stream: false,
            util: false,
            querystring: false,
            timers: false,
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            process: 'process/browser',
        }),
    ]
}