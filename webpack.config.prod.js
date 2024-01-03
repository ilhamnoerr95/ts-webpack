const path = require('path');
const CleanPlugin = require('clean-webpack-plugin')

module.exports= {
    mode:"production",
    entry: "./src/index.ts",
 
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js",
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
    devtool: 'none',
    plugins: [
        // fungsinya untuk menhapus cache or memories apabila rebuild aplikasinya
        new CleanPlugin.CleanWebpackPlugin()
    ]
}