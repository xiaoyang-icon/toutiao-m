// PostCSS 配置文件
module.exports = {
//   // 配置要使用的 PostCSS 插件
//   // 作用： 生成浏览器 CSS 样式规则前缀
  plugins: {
    // 因为VueCLI 内部已经配置了 autoprefixer 插件，所以又配置一次，会产生冲突
    // 'autoprefixer': {
    //   // 配置要兼容到的环境信息
    // browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    // 配置使用 postcss-pxtorem 插件
    'postcss-pxtorem': {
      // 数字： 固定的数值
      // 函数：可以动态处理返回 postcss-pxtorem 处理每个 CSS 文件的时候都会来调用这个函数，他会把处理的 css 文件相关的信息通过参数传递给该函数
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      // rootValue: 37.5,
      propList: ['*']
    }
  }
}
