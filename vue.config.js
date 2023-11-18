module.exports = {
    publicPath: 'https://pruebafrontrecipe.onrender.com/',
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