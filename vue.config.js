module.exports = {
  publicPath: '/',
  devServer: {
    port: 8081
  },
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/styles/index.css";'
      }
    }
  }
}
