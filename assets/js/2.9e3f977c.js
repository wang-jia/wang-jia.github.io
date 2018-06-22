(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{160:function(a,e,t){"use strict";t.r(e);var s=t(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"webpack构建工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack构建工具","aria-hidden":"true"}},[a._v("#")]),a._v(" webpack构建工具")]),t("hr"),t("h4",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[a._v("#")]),a._v(" 简介")]),t("p",[a._v("Webpack 是一个开源的前端打包工具。\n将各种静态资源视为模块，并从它生成优化过的代码。")]),t("hr"),t("p",[t("img",{attrs:{src:"https://webpack.github.io/assets/what-is-webpack.png",alt:"webpack"}})]),t("hr"),t("h4",{attrs:{id:"webpack和grunt-gulp的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack和grunt-gulp的区别","aria-hidden":"true"}},[a._v("#")]),a._v(" webpack和Grunt/Gulp的区别")]),t("ul",[t("li",[a._v("webpack 是一个模块打包器(module bundler)，打包器是帮助你取得准备用于部署的 JavaScript 和样式表，将它们转换为适合浏览器的可用格式。")]),t("li",[a._v("Grunt/Gulp是一个任务执行器(task runner)，任务执行器是用来自动化处理常见的开发任务，例如项目的检查(lint)、构建(build)、测试(test)。")])]),t("hr"),t("h4",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念","aria-hidden":"true"}},[a._v("#")]),a._v(" 概念")]),t("ul",[t("li",[a._v("入口(entry)")]),t("li",[a._v("输出(output)")]),t("li",[a._v("loader")]),t("li",[a._v("插件(plugins)")])]),t("hr"),t("h4",{attrs:{id:"使用loader的几种方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用loader的几种方式","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用Loader的几种方式")]),t("ul",[t("li",[a._v("配置（推荐）：在 webpack.config.js 文件中指定 loader。")])]),t("div",{staticClass:"language-module: { extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    rules: [\n      {\n        test: /\\.css$/,\n        use: [\n          { loader: 'style-loader' }\n        ]\n      }\n    ]\n  }\n\n")])])]),t("ul",[t("li",[a._v("内联：在每个 import 语句中显式指定 loader。")])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("import Styles from 'style-loader!css-loader?modules!./styles.css';\n")])])]),t("ul",[t("li",[a._v("CLI：在 shell 命令中指定它们。")])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'\n")])])]),t("hr"),t("h5",{attrs:{id:"版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本","aria-hidden":"true"}},[a._v("#")]),a._v(" 版本")]),t("p",[a._v("v3.10.0")]),t("h5",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yarn add webpack //yarn \nnpm install --save-dev webpack //npm安装最新版本\nnpm install --save-dev webpack@<version> //npm安装特定版本\nnpm install webpack@beta //安装beta版本\n")])])]),t("hr"),t("h5",{attrs:{id:"单入口文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单入口文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 单入口文件")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const path = require('path');\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    filename: 'bundle.js',\n    path: path.resolve(__dirname, 'dist')\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.css$/,\n        use: [\n          'style-loader',\n          'css-loader'\n        ]\n      }\n    ]\n  }\n};\n\n")])])]),t("hr"),t("h5",{attrs:{id:"多入口文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多入口文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 多入口文件")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const path = require('path');\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\nconst CleanWebpackPlugin = require('clean-webpack-plugin');\n\nmodule.exports = {\n  entry: {\n    app: './src/index.js',\n    print: './src/print.js'\n  },\n  plugins: [\n    new CleanWebpackPlugin(['dist']),\n    new HtmlWebpackPlugin({\n      title: 'Output Management'\n    })\n  ],\n  output: {\n    filename: '[name].bundle.js',\n    path: path.resolve(__dirname, 'dist')\n  }\n};\n\n")])])]),t("hr"),t("h4",{attrs:{id:"插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件","aria-hidden":"true"}},[a._v("#")]),a._v(" 插件")]),t("ul",[t("li",[a._v("html-webpack-plugin  //打包html")]),t("li",[a._v("clean-webpack-plugin //清空文件")])]),t("h4",{attrs:{id:"devtool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#devtool","aria-hidden":"true"}},[a._v("#")]),a._v(" Devtool")]),t("p",[a._v("https://doc.webpack-china.org/configuration/devtool")]),t("hr"),t("h4",{attrs:{id:"热更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#热更新","aria-hidden":"true"}},[a._v("#")]),a._v(" 热更新")]),t("ol",[t("li",[a._v("使用观察者模式\npackage.json")])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('"scripts": {\n    "watch": "webpack --watch"\n }\n')])])]),t("hr"),t("ol",{attrs:{start:"2"}},[t("li",[a._v("使用 webpack-dev-server\n提供一个简单的 web 服务器，并且能够实时重新加载(live reloading)")])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" devServer: {\n   contentBase: './dist'\n },\n")])])]),t("p",[a._v("以上配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(' "start": "webpack-dev-server --open",\n')])])]),t("hr"),t("ol",{attrs:{start:"3"}},[t("li",[a._v("使用 webpack-dev-middleware")])]),t("p",[a._v("webpack-dev-middleware 是一个中间件容器(wrapper)，它将通过 webpack 处理后的文件发布到一个服务器(server)。webpack-dev-server内部使用 webpack-dev-middleware，然而，它可以作为一个单独的包来提供，可以进行更多的自定义设置来实现更多需求。webpack-dev-middleware 配合 express server")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('server": "node server.js"\n')])])]),t("hr"),t("ol",{attrs:{start:"4"}},[t("li",[a._v("启用HMR")])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("devServer: {\n   contentBase: './dist',\n   hot: true\n}\n\nnew webpack.HotModuleReplacementPlugin()\n")])])]),t("hr"),t("h4",{attrs:{id:"tree-shaking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking","aria-hidden":"true"}},[a._v("#")]),a._v(" Tree Shaking")]),t("p",[a._v("Tree Shaking是移除 JavaScript 上下文中的未引用代码(dead-code)\nwebpack build时会标识出那些“未引用代码(dead code)”，但不会删除它们。\n实现删除，添加压缩工具(minifier) - UglifyJSPlugin")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yarn add uglifyjs-webpack-plugin\n或\nnpm install --save-dev uglifyjs-webpack-plugin\n")])])]),t("hr"),t("h4",{attrs:{id:"生产环境构建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生产环境构建","aria-hidden":"true"}},[a._v("#")]),a._v(" 生产环境构建")]),t("ul",[t("li",[t("p",[a._v("开发环境中，我们需要实时重新加载(live reloading)或热模块替换(hot module replacement)能力、source map 和 localhost server。")])]),t("li",[t("p",[a._v("生产环境，目标是更小的 bundle，更轻量的 source map")])]),t("li",[t("p",[a._v("webpack-merge --保留一个“通用”配置")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("webpack.common.js\nwebpack.dev.js\nwebpack.prod.js\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(' "start": "webpack-dev-server --open --config webpack.dev.js",\n "server": "node server.js",\n "build": "webpack --config webpack.prod.js"\n')])])]),t("hr"),t("h4",{attrs:{id:"代码分离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码分离","aria-hidden":"true"}},[a._v("#")]),a._v(" 代码分离")]),t("p",[a._v("有三种常用的代码分离方法：")]),t("ul",[t("li",[a._v("入口起点：使用 entry 配置手动地分离代码。")]),t("li",[a._v("防止重复：使用 CommonsChunkPlugin 去重和分离 chunk。")]),t("li",[a._v("动态导入：通过模块的内联函数调用来分离代码。")])]),t("hr"),t("h4",{attrs:{id:"缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存","aria-hidden":"true"}},[a._v("#")]),a._v(" 缓存")]),t("ul",[t("li",[a._v("通过使用 output.filename 进行文件名替换")])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("filename: '[name].[chunkhash].js',\n")])])]),t("ul",[t("li",[a._v("提取模板")])]),t("hr"),t("h4",{attrs:{id:"构建性能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建性能","aria-hidden":"true"}},[a._v("#")]),a._v(" 构建性能")]),t("ul",[t("li",[a._v("保持版本最新")]),t("li",[a._v("Loaders\n将loaders 应用于最少数的必要模块中")])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('include: path.resolve(__dirname, "src")\n')])])])])}],!1,null,null,null);e.default=r.exports}}]);