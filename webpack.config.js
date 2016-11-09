const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const prodPlugins = [];
const clientSrcFolder = path.resolve(path.resolve(__dirname, 'src'), 'client');

const commonPlugins = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: '../../index-template.html',
        hash: true,
    }),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    })
];

const commonLoaders = [{
    test: /\.html$/,
    loader: 'html'
}, {
    test: /\.pcss$|\.css/,
    loaders: ['style', 'css-loader?importLoaders=1', 'postcss'],
}, {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel', // 'babel-loader' is also a valid name to reference
}];

const devLoaders = [];
const prodLoaders = [];
const plugins = commonPlugins;
const loaders = commonLoaders.concat(devLoaders);

module.exports = {
    context: clientSrcFolder,
    entry: 'app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders,
    },
    postcss: function() {
        return [
            require('postcss-import'),
            require('postcss-cssnext')({
                browsers: ['last 3 versions']
            }),
        ];
    },
    resolve: {
        root: [clientSrcFolder, path.resolve(__dirname, 'node_modules')],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: plugins,
};