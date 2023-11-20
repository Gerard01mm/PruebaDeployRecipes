module.exports = {
    publicPath: 'https://pruebadeployrecipes.onrender.com',
    //outputDir: './dist',
    //indexPath: './public/index.html',

    configureWebpack: {
        devServer: {
            devMiddleware: {
                writeToDisk: true
            }
        }
    }
}