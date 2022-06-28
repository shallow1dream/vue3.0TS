const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        proxy: {  //配置跨域
            '/front': {
                target: 'http://localhost:7777',  //这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                changOrigin: true,  //允许跨域
                // pathRewrite: { //重写路径
                //     '^/front': ''  //请求的时候使用这个api就可以
                // }
            }
        }
    },
      // chainWebpack(config) {
      //   const svgRule = config.module.rule('svg');
      //     // 清除已有的所有 loader。
      //     // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
      //     svgRule.uses.clear();
      //     svgRule
      //       .test(/\.svg$/)
      //       .include.add(path.resolve(__dirname, './src/icons/svg')) // 文件目录
      //       .end()
      //       .use('svg-sprite-loader')
      //       .loader('svg-sprite-loader')
      //       .options({
      //         symbolId: 'icon-[name]'
      //       });
      //       // 修改file对svg的处理，不让它处理
      //     const fileRule = config.module.rule('file');
      //     fileRule.uses.clear();
      //     fileRule
      //       .test(/\.svg$/)
      //       .exclude.add(path.resolve(__dirname, './src/icons/svg'))
      //       .end()
      //       .use('file-loader')
      //       .loader('file-loader');
      //   }

}