module.exports = {
    publicPath: "https://pruebadeployrecipes.onrender.com",//'https://pruebadeployrecipes.onrender.com',"http://localhost:8080"
    //outputDir: './dist',
    //indexPath: './public/index.html',

    configureWebpack: {
        devServer: {
            devMiddleware: {
                writeToDisk: true
            },
            proxy: "https://pruebadeployrecipes.onrender.com"
        }
    }
}