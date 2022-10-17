module.exports = {
  publicPath: '/',
  devServer: {
    port: 5173
  },
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/styles/index.css";'
      }
    }
  },
  lintOnSave: false
}
