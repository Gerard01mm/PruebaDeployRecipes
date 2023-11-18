module.exports = {
    publicPath: '',
    outputDir: './dist',
    indexPath: '../../templates/_base_vue.html',

    configureWebpack: {
        devServer: {
            devMiddleware: {
                writeToDisk: true
            }
        }
    }
}