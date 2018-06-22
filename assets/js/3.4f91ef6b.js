(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{159:function(e,t,n){"use strict";n.r(t);var s=n(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),n("hr"),e._m(1),e._m(2),n("hr"),e._m(3),e._m(4),n("hr"),e._m(5),e._m(6),n("hr"),e._m(7),n("p",[e._v("使用prerender-spa-plugin")]),n("p",[e._v("github:https://github.com/chrisvfritz/prerender-spa-plugin")]),n("hr"),e._m(8),n("p",[e._v("在 webpack 构建阶段的最后，在本地启动一个 "),n("a",{attrs:{href:"http://javascript.ruanyifeng.com/tool/phantomjs.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("phantomjs"),n("OutboundLink")],1),e._v("，访问配置了预渲染的路由，再将 phantomjs 中渲染的页面输出到 html 文件中，并建立路由对应的目录。\n"),n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/10/11/5b8399cf90e421a66cd0cad47e9d9d6f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),n("hr"),e._m(9),e._m(10),n("hr"),e._m(11),e._m(12),n("hr"),e._m(13),e._m(14),n("hr"),e._m(15),n("p",[e._v("https://github.com/VV-UI/VV-UI")]),n("hr"),e._m(16),n("p",[e._v("使用vue-skeleton-loading\nGithub地址：https://github.com/jiingwang/vue-skeleton-loading")]),n("hr"),e._m(17),n("p",[e._v("使用SSR实现服务端渲染")]),e._m(18),n("p",[e._v('Vue.js 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进行生成 DOM 和操作 DOM。然而，也可以将同一个组件渲染为服务器端的 HTML 字符串，将它们直接发送到浏览器，最后将静态标记"混合"为客户端上完全交互的应用程序。')]),n("p",[e._v("https://ssr.vuejs.org/zh/")]),n("hr"),e._m(19),e._m(20),n("hr"),e._m(21),e._m(22),n("hr"),e._m(23),e._m(24),n("hr"),e._m(25),e._m(26),n("hr"),e._m(27),e._m(28),n("hr"),e._m(29),n("p",[e._v("https://github.com/jrainlau/vue-skeleton")]),n("hr"),e._m(30),e._m(31)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"vue骨架屏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue骨架屏","aria-hidden":"true"}},[this._v("#")]),this._v(" vue骨架屏")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[this._v("#")]),this._v(" 简介")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("在页面完全渲染完成之前，用户会看到一个样式简单，描绘了当前页面的大致框架，感知到页面正在逐步加载，最终骨架屏中各个占位部分被完全替换，这样给用户一种很自然的过渡，不会造成页面长时间白屏或者闪烁等情况。体验良好。\n"),t("img",{attrs:{src:"https://segmentfault.com/img/bVbaoxa?w=1000&h=445",alt:"intro"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"实现思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现思路","aria-hidden":"true"}},[this._v("#")]),this._v(" 实现思路")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("使用 Vue 预渲染骨架屏")]),t("li",[this._v("将骨架屏渲染结果插入 HTML 中")]),t("li",[this._v("真正的页面内容替换骨架屏")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"骨架屏实现的两种方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#骨架屏实现的两种方式","aria-hidden":"true"}},[this._v("#")]),this._v(" 骨架屏实现的两种方式")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("预渲染 prerender")]),t("li",[this._v("服务端渲染 SSR")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"预渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预渲染","aria-hidden":"true"}},[this._v("#")]),this._v(" 预渲染")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"prerender-spa-plugin原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerender-spa-plugin原理","aria-hidden":"true"}},[this._v("#")]),this._v(" prerender-spa-plugin原理")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h5",{attrs:{id:"预渲染-webpack配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预渲染-webpack配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 预渲染-webpack配置")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("var path = require('path')\nvar PrerenderSpaPlugin = require('prerender-spa-plugin')\n\nmodule.exports = {\n  // ...\n  plugins: [\n    new PrerenderSpaPlugin(\n      // Absolute path to compiled SPA\n      path.join(__dirname, '../dist'),\n      // List of routes to prerender\n      ['/']\n    )\n  ]\n} \n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h5",{attrs:{id:"预渲染-骨架屏文件main-skeleton-vue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预渲染-骨架屏文件main-skeleton-vue","aria-hidden":"true"}},[this._v("#")]),this._v(" 预渲染-骨架屏文件main.skeleton.vue")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('<template>\n  <div class="main-skeleton">\n    <w-skeleton height="80px"></w-skeleton>\n    <div>\n      <div class="skeleton-container">\n        <div class="skeleton">\n          <w-skeleton height="300px"></w-skeleton>\n        </div>\n        <w-skeleton height="45px"></w-skeleton>\n      </div>\n      <div class="skeleton-bottom">\n        <w-skeleton height="45px"></w-skeleton>\n      </div>\n    </div>\n  </div>\n</template>\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h5",{attrs:{id:"预渲染-组件-vue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预渲染-组件-vue","aria-hidden":"true"}},[this._v("#")]),this._v(" 预渲染-组件.vue")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("<template>\n  <div id=\"app\">\n    <mainSkeleton v-if=\"!init\"></mainSkeleton>\n    <div v-else></div>\n  </div>\n</template>\n import mainSkeleton from './main.skeleton.vue'\n export default {\n    name: 'app',\n    data () {\n      return {\n        init: false\n      }\n    },\n    mounted () {\n      //  这里模拟数据请求\n      setTimeout(() => {\n        this.init = true\n      }, 250)\n    },\n    components: {\n      mainSkeleton\n    }\n  }\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"预渲染-项目示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预渲染-项目示例","aria-hidden":"true"}},[this._v("#")]),this._v(" 预渲染-项目示例")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"预渲染-其他方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预渲染-其他方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 预渲染-其他方案")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"服务端渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染","aria-hidden":"true"}},[this._v("#")]),this._v(" 服务端渲染")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"ssr简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssr简介","aria-hidden":"true"}},[this._v("#")]),this._v(" SSR简介")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"服务端渲染-实现思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染-实现思路","aria-hidden":"true"}},[this._v("#")]),this._v(" 服务端渲染-实现思路")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://sfault-image.b0.upaiyun.com/272/689/2726897960-5af6536ab35fa_articlex",alt:"img"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"服务端渲染-skeleton-vue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染-skeleton-vue","aria-hidden":"true"}},[this._v("#")]),this._v(" 服务端渲染-Skeleton.vue")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('<template>\n  <div class="skeleton page">\n    <div class="skeleton-nav"></div>\n    <div class="skeleton-swiper"></div>\n    <ul class="skeleton-tabs">\n      <li v-for="i in 8" class="skeleton-tabs-item"><span></span></li>\n    </ul>\n    <div class="skeleton-banner"></div>\n    <div v-for="i in 6" class="skeleton-productions"></div>\n  </div>\n</template>\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"服务端渲染-skeleton-entry-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染-skeleton-entry-js","aria-hidden":"true"}},[this._v("#")]),this._v(" 服务端渲染-skeleton.entry.js")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("import Vue from 'vue'\nimport Skeleton from './Skeleton.vue'\n\nexport default new Vue({\n  components: {\n    Skeleton\n  },\n  template: '<skeleton />'\n})\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"服务端渲染-webpack-skeleton-conf-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染-webpack-skeleton-conf-js","aria-hidden":"true"}},[this._v("#")]),this._v(" 服务端渲染-webpack.skeleton.conf.js")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("const path = require('path')\nconst webpack = require('webpack')\nconst nodeExternals = require('webpack-node-externals')\nconst VueSSRServerPlugin = require('vue-server-renderer/server-plugin')\n\nmodule.exports = {\n  target: 'node',\n  entry: {\n    skeleton: './src/skeleton.entry.js'\n  },\n  output: {\n    path: path.resolve(__dirname, './dist'),\n    publicPath: '/dist/',\n    filename: '[name].js',\n    libraryTarget: 'commonjs2'\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.css$/,\n        use: [\n          'vue-style-loader',\n          'css-loader'\n        ]\n      },\n      {\n        test: /\\.vue$/,\n        loader: 'vue-loader'\n      }\n    ]\n  },\n  externals: nodeExternals({\n    whitelist: /\\.css$/\n  }),\n  resolve: {\n    alias: {\n      'vue$': 'vue/dist/vue.esm.js'\n    },\n    extensions: ['*', '.js', '.vue', '.json']\n  },\n  plugins: [\n    new VueSSRServerPlugin({\n      filename: 'skeleton.json'\n    })\n  ]\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"服务端渲染-skeleton-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染-skeleton-js","aria-hidden":"true"}},[this._v("#")]),this._v(" 服务端渲染-skeleton.js")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("const fs = require('fs')\nconst { resolve } = require('path')\n\nconst createBundleRenderer = require('vue-server-renderer').createBundleRenderer\n\n// 读取`skeleton.json`，以`index.html`为模板写入内容\nconst renderer = createBundleRenderer(resolve(__dirname, './dist/skeleton.json'), {\n  template: fs.readFileSync(resolve(__dirname, './index.html'), 'utf-8')\n})\n\n// 把上一步模板完成的内容写入（替换）`index.html`\nrenderer.renderToString({}, (err, html) => {\n  fs.writeFileSync('index.html', html, 'utf-8')\n})\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"项目示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目示例","aria-hidden":"true"}},[this._v("#")]),this._v(" 项目示例")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("https://huangxuan.me/2017/07/12/upgrading-eleme-to-pwa/")]),t("li",[this._v("https://xiaoiver.github.io/coding/2017/07/30/%E4%B8%BAvue%E9%A1%B9%E7%9B%AE%E6%B7%BB%E5%8A%A0%E9%AA%A8%E6%9E%B6%E5%B1%8F.html")]),t("li",[this._v("https://segmentfault.com/a/1190000014832185")])])}],!1,null,null,null);t.default=r.exports}}]);