const webpack = require('webpack');
module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        hot: true,
        port: 8001,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.BASE_URL':
                JSON.stringify('http://localhost:8001')
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]

}
