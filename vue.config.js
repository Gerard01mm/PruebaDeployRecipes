module.exports = {
    publicPath: 'localhost:8080',
    outputDir: './dist',
    indexPath: './public/index.html',

    configureWebpack: {
        devServer: {
            devMiddleware: {
                writeToDisk: true
            }
        }
    }
}