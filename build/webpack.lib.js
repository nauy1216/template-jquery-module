const path = require('path')

function resolve(source) {
    return path.resolve(process.cwd(), source)
}
module.exports = env => {
    return {
        mode: 'development',
        devtool: 'inline-source-map',
        entry: {
            app: path.resolve(process.cwd(), 'src/index.ts')
        },
        output: {
            path: path.resolve(process.cwd(), 'lib'),
            filename: 'HiComponent.js',
            library: "HiComponent",
            libraryTarget: "umd"
        },
        resolve: {
            extensions: [".ts", ".js", ".json", ".jsx", ".css"]
        },
        module: {
            rules: [
                {
                    test: /\.(tsx|ts)$/,
                    loader: [
                        'babel-loader',
                        'ts-loader'
                    ]
                }
            ]
        },
        plugins: []
    }
}