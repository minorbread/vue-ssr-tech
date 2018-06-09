const docsLoader = require.resolve('./doc-loader')
module.exports = (isDev) => {
  return {
    preserveWhitepace: true,
    extractCSS: !isDev,
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    },
    loaders: {
      // 'docs': docsLoader,
      // js: 'conffe-loader',
    }
    // hotReload: false,  //根据生产环境生成
  }
}
