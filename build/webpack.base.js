const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

function resolve(source) {
    return path.resolve(process.cwd(), source)
}
module.exports = env => {
    return {
        mode: 'development',
        devtool: 'source-map',
        entry: {
            app: path.resolve(process.cwd(), 'example/main.js')
        },
        output: {
            path: path.resolve(process.cwd(), 'dist'),
            filename: 'app.js'
        },
        devServer: {
            hot: true
        },
        resolve: {
            extensions: [".js", ".json", ".jsx", ".css"],
            alias: {
                'HiComponent': resolve('src')
            }
        },
        module: {
            rules: [
                // {
                //     test: /\.js$/,
                //     loader: [
                //         'babel-loader'
                //     ]
                // },
                {
                    test: /\.jsx$/,
                    loader: [
                        'babel-loader',
                        // path.resolve(process.cwd(), 'util/jsxloader.js')
                    ]
                }
            ]
        },
        plugins: [
            new htmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(process.cwd(), 'example/index.html')
            })
        ]
    }
}