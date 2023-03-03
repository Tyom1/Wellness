const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false,
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
  }
})
