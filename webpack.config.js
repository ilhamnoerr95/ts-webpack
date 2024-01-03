const path = require('path');

module.exports= {
    mode:"development",
    entry: "./src/index.ts",
    devServer: {
        static:  [
            {directory: path.join(__dirname)}
        ]
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js",
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader', 
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'inline-source-map'
}