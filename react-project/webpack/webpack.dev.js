const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    // devServer: {
    //     port: 8001,
    //     contentBase: path.join(__dirname, 'src/index.tsx'),
    //     watchContentBase: true,
    //     hot: true
    //   },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.BASE_URL':
                JSON.stringify('http://localhost:8001')
        }),
    ]
};
