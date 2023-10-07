// vue项目的配置文件 覆盖

module.exports = {
  lintOnSave: false // 暂时关闭代码格式检测

  // 配置反向代理
  // devServer: {
  //   Proxy:{
  // '/ajax':{
  //   target:'https://m.naoyan.com',
  //   changeOrigin:true
  // }

  // '/wrp':{
  //   target:'https://m.naoyan.com',
  //   changeOrigin:true,
  //   pathRewrite:{
  //     '^/wrp': ''
  //   }
  // }
  //   }
  // }
}

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
