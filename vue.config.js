/* eslint-disable */
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/styles/index.css";'
      }
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.module
        .rule('images')
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({
          mozjpeg: { progressive: true, quality: 65 },
          optipng: { enabled: false },
          pngquant: { quality: [0.65, 0.9], speed: 4 },
          gifsicle: { interlaced: false },
          webp: { quality: 75 }
        })

      config.plugins.delete('prefetch')
      config.plugins.delete('preload')
    }

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.exclude.add(/node_modules/)
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: '[name]'
      })

    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(resolve('src/assets/icons'))
    config.module.rule('images').test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  },
  configureWebpack: config => {
    config
      .optimization = {
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              extractComments: 'all',
              compress: {
                warnings: false,
                drop_console: true,
                drop_debugger: true
              }
            }
          })
        ]
      }
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        include: [
          /\.[tj]sx?$/,
          /\.vue$/, /\.vue\?vue/,
          /\.md$/
        ],
        imports: [
          'vue',
          'vue-router',
          {
            axios: [
              ['default', 'axios']
            ]
          }
        ],
        dirs: [

        ],
        dts: './auto-imports.d.ts',
        vueTemplate: false,
        resolvers: [

        ],
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true
        }
      }),
      Components({
        dts: true
      })
    ]
  }
}
