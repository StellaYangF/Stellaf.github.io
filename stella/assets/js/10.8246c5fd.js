(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{442:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"cz-工具交集使用篇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cz-工具交集使用篇"}},[t._v("#")]),t._v(" Cz 工具交集使用篇")]),t._v(" "),a("p",[t._v("功能：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("规范")]),t._v(" Git 精准提交说明")]),t._v(" "),a("li",[t._v("多人协作，后期"),a("strong",[t._v("协作")]),t._v("及 "),a("strong",[t._v("Bug")]),t._v(" 处理有据可查")]),t._v(" "),a("li",[t._v("可根据规范的提交说明快速生成"),a("strong",[t._v("日志")])]),t._v(" "),a("li",[t._v("方便开发者或用户追踪项目开发信息和功能特性")])]),t._v(" "),a("p",[t._v("目录：")]),t._v(" "),a("ul",[a("li",[t._v("介绍符合 Angular规范 的提交说明")]),t._v(" "),a("li",[t._v("介绍 Cz (适配器、校验、日志) 使用方法")])]),t._v(" "),a("h2",{attrs:{id:"规范-git-提交说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规范-git-提交说明"}},[t._v("#")]),t._v(" 规范 Git 提交说明")]),t._v(" "),a("ul",[a("li",[t._v("提供更多"),a("strong",[t._v("历史信息")]),t._v("，方便快速浏览")]),t._v(" "),a("li",[t._v("过滤某些 commit, 便于筛选代码 "),a("strong",[t._v("review")])]),t._v(" "),a("li",[t._v("追踪 commit 生成"),a("strong",[t._v("更新日志")])]),t._v(" "),a("li",[t._v("关联 "),a("strong",[t._v("issue")])])]),t._v(" "),a("h3",{attrs:{id:"git-提交说明结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-提交说明结构"}},[t._v("#")]),t._v(" Git 提交说明结构")]),t._v(" "),a("p",[t._v("分三个部分： "),a("strong",[t._v("Header")]),t._v(", "),a("strong",[t._v("Body")]),t._v(", "),a("strong",[t._v("Footer")])]),t._v(" "),a("highlight",{scopedSlots:t._u([{key:"default",fn:function(){return[a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Header"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Footer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]},proxy:!0}])}),t._v(" "),a("h4",{attrs:{id:"header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[t._v("#")]),t._v(" Header")]),t._v(" "),a("p",[a("strong",[t._v("Header")]),t._v(" 部分包括三个字段: "),a("code",[t._v("type")]),t._v("（必需）、"),a("code",[t._v("scope")]),t._v("（可选）和 "),a("code",[t._v("subject")]),t._v("（必需）。")]),t._v(" "),a("highlight",{scopedSlots:t._u([{key:"default",fn:function(){return[a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("scope"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("subject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]},proxy:!0}])}),t._v(" "),a("h5",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[t._v("#")]),t._v(" type")]),t._v(" "),a("p",[t._v("type用于说明 commit 的提交性质。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("feat")]),t._v(" "),a("td",[t._v("新增一个功能")])]),t._v(" "),a("tr",[a("td",[t._v("fix")]),t._v(" "),a("td",[t._v("修复一个 Bug")])]),t._v(" "),a("tr",[a("td",[t._v("docs")]),t._v(" "),a("td",[t._v("文档变更")])]),t._v(" "),a("tr",[a("td",[t._v("style")]),t._v(" "),a("td",[t._v("代码格式")])]),t._v(" "),a("tr",[a("td",[t._v("refeactor")]),t._v(" "),a("td",[t._v("代码重构")])]),t._v(" "),a("tr",[a("td",[t._v("perf")]),t._v(" "),a("td",[t._v("改善性能")])]),t._v(" "),a("tr",[a("td",[t._v("test")]),t._v(" "),a("td",[t._v("测试")])]),t._v(" "),a("tr",[a("td",[t._v("build")]),t._v(" "),a("td",[t._v("变更项目构建或外部依赖")])]),t._v(" "),a("tr",[a("td",[t._v("ci")]),t._v(" "),a("td",[t._v("更改持续继承软件的配置和 package.json 中 "),a("strong",[t._v("scripts")]),t._v(" 命令")])]),t._v(" "),a("tr",[a("td",[t._v("chore")]),t._v(" "),a("td",[t._v("变更构建流程或辅助工具")])]),t._v(" "),a("tr",[a("td",[t._v("revert")]),t._v(" "),a("td",[t._v("代码回退")])])])]),t._v(" "),a("h5",{attrs:{id:"scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[t._v("#")]),t._v(" scope")]),t._v(" "),a("p",[t._v("scope 说明 commit 影响的"),a("strong",[t._v("范围")]),t._v("。scope 依据项目而定，例如在业务项目中可以依据"),a("strong",[t._v("菜单")]),t._v("或者"),a("strong",[t._v("功能模块")]),t._v("划分，如果是组件库开发，则可以依据"),a("strong",[t._v("组件")]),t._v("划分。")]),t._v(" "),a("blockquote",[a("p",[t._v("Tip: scope 可选")])]),t._v(" "),a("h5",{attrs:{id:"subject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subject"}},[t._v("#")]),t._v(" subject")]),t._v(" "),a("p",[t._v("subject 是 commit 的简短描述。")]),t._v(" "),a("h4",{attrs:{id:"body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[t._v("#")]),t._v(" Body")]),t._v(" "),a("p",[t._v("commit 的详细描述，说明代码提交的详细说明。")]),t._v(" "),a("h4",{attrs:{id:"footer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#footer"}},[t._v("#")]),t._v(" Footer")]),t._v(" "),a("p",[t._v("如果代码的提交是"),a("strong",[t._v("不兼容变更")]),t._v("或"),a("strong",[t._v("关闭缺陷")]),t._v("，则 Footer 必需，否则可以省略。")]),t._v(" "),a("h5",{attrs:{id:"不兼容变更"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不兼容变更"}},[t._v("#")]),t._v(" 不兼容变更")]),t._v(" "),a("p",[t._v("当前代码与上一个版本不兼容，则 Footer 以 "),a("strong",[t._v("BREAKING CHANGE")]),t._v(" 开头，后面是对变动的描述、以及变动的理由和迁移方法。")]),t._v(" "),a("h5",{attrs:{id:"关闭缺陷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭缺陷"}},[t._v("#")]),t._v(" 关闭缺陷")]),t._v(" "),a("p",[t._v("如果当前提交是针对特定的 issue，那么可以在 Footer 部分填写需要关闭的单个 issue 或一系列issues。")]),t._v(" "),a("h2",{attrs:{id:"commitizen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commitizen"}},[t._v("#")]),t._v(" Commitizen")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/commitizen/cz-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("commitizen/cz-cli"),a("OutboundLink")],1),t._v(" 是一个可以实现规范的提交说明的工具")]),t._v(" "),a("li",[t._v("提供选择的提交信息类别，快速生成提交说明。安装cz工具:")])]),t._v(" "),a("highlight",{scopedSlots:t._u([{key:"default",fn:function(){return[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i commitizen -g\n")])])])]},proxy:!0}])}),t._v(" "),a("h2",{attrs:{id:"commitizen-适配器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commitizen-适配器"}},[t._v("#")]),t._v(" Commitizen 适配器")]),t._v(" "),a("h3",{attrs:{id:"cz-conventional-changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cz-conventional-changelog"}},[t._v("#")]),t._v(" cz-conventional-changelog")]),t._v(" "),a("p",[t._v("如果需要在项目中使用 commitizen 生成符合 AngularJS 规范的提交说明，初始化cz-conventional-changelog 适配器：")]),t._v(" "),a("highlight",{scopedSlots:t._u([{key:"default",fn:function(){return[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("commitizen init cz-conventional-changelog --save --save-exact\n")])])])]},proxy:!0}])}),t._v(" "),a("p",[t._v("如果当前已经有其他适配器被使用，则会报以下错误，此时可以加上--force选项进行再次初始化")]),t._v(" "),a("highlight",{scopedSlots:t._u([{key:"default",fn:function(){return[a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Error"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" previous adapter is already configured"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Use "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("force to override\n")])])])]},proxy:!0}])}),t._v(" "),a("p",[t._v("初始化命令主要进行了3件事情:")]),t._v(" "),a("ul",[a("li",[t._v("在项目中"),a("strong",[t._v("安装")]),t._v(" cz-conventional-changelog 适配器依赖")]),t._v(" "),a("li",[t._v("将适配器依赖保存到package.json的 "),a("strong",[t._v("devDependencies")]),t._v(" 字段信息")]),t._v(" "),a("li",[t._v("在 package.json 中新增 "),a("strong",[t._v("config.commitizen")]),t._v(" 字段信息，主要用于配置cz工具的适配器路径：")])]),t._v(" "),a("highlight",{scopedSlots:t._u([{key:"default",fn:function(){return[a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cz-conventional-changelog"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^2.1.0"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commitizen"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./node_modules/cz-conventional-changelog"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]},proxy:!0}])}),t._v(" "),a("p",[t._v("接下里 "),a("code",[t._v("git cz")]),t._v(" 代替 "),a("code",[t._v("git commit")]),t._v(" 进行提交说明。")]),t._v(" "),a("h3",{attrs:{id:"cz-customizable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cz-customizable"}},[t._v("#")]),t._v(" cz-customizable")]),t._v(" "),a("p",[t._v("如果想定制项目的提交说明，可以使用 cz-customizable 适配器")]),t._v(" "),a("h4",{attrs:{id:"安装-cz-customizable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-cz-customizable"}},[t._v("#")]),t._v(" 安装 cz-customizable")]),t._v(" "),a("highlight",{scopedSlots:t._u([{key:"default",fn:function(){return[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i cz-customizable -D\n")])])])]},proxy:!0}])}),t._v(" "),a("h4",{attrs:{id:"更新-package-json-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新-package-json-文件"}},[t._v("#")]),t._v(" 更新 package.json 文件")]),t._v(" "),a("p",[t._v("将之前符合Angular规范的 cz-conventional-changelog 适配器路径改成 cz-customizable 适配器路径：")]),t._v(" "),a("highlight",{scopedSlots:t._u([{key:"default",fn:function(){return[a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cz-customizable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^5.3.0"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"config"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commitizen"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node_modules/cz-customizable"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]},proxy:!0}])}),t._v(" "),a("h4",{attrs:{id:"新建-cz-config-js-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建-cz-config-js-文件"}},[t._v("#")]),t._v(" 新建 .cz-config.js 文件")]),t._v(" "),a("p",[t._v("cz-customizable will first look for a file called .cz-config.js，alternatively add a config block in your package.json。")]),t._v(" "),a("p",[t._v("官方提供了一个 "),a("strong",[t._v(".cz-config.js")]),t._v(" 示例文件 "),a("a",{attrs:{href:"https://github.com/leonardoanalista/cz-customizable/blob/master/cz-config-EXAMPLE.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("cz-config-EXAMPLE.js"),a("OutboundLink")],1),t._v("，如下所示：")]),t._v(" "),a("highlight",{scopedSlots:t._u([{key:"default",fn:function(){return[a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  types"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'feat'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'feat:     A new feature'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fix'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fix:      A bug fix'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'docs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'docs:     Documentation only changes'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'style'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'style:    Changes that do not affect the meaning of the code\\n            (white-space, formatting, missing semi-colons, etc)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'refactor'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'refactor: A code change that neither fixes a bug nor adds a feature'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'perf'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'perf:     A code change that improves performance'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test:     Adding missing tests'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chore'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chore:    Changes to the build process or auxiliary tools\\n            and libraries such as documentation generation'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'revert'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'revert:   Revert to a commit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WIP'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WIP:      Work in progress'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  scopes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accounts'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'admin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'exampleScope'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'changeMe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// it needs to match the value for field type. Eg.: 'fix'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n  scopeOverrides: {\n    fix: [\n      {name: 'merge'},\n      {name: 'style'},\n      {name: 'e2eTest'},\n      {name: 'unitTest'}\n    ]\n  },\n  */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// override the messages, defaults are as follows")]),t._v("\n  messages"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Select the type of change that you\\'re committing:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    scope"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\nDenote the SCOPE of this change (optional):'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// used if allowCustomScopes is true")]),t._v("\n    customScope"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Denote the SCOPE of this change:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    subject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Write a SHORT, IMPERATIVE tense description of the change:\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Provide a LONGER description of the change (optional). Use \"|\" to break new line:\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    breaking"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'List any BREAKING CHANGES (optional):\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    footer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    confirmCommit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Are you sure you want to proceed with the commit above?'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  allowCustomScopes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  allowBreakingChanges"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'feat'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fix'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// limit subject length")]),t._v("\n  subjectLimit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]},proxy:!0}])}),t._v(" "),a("h2",{attrs:{id:"commitizen校验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commitizen校验"}},[t._v("#")]),t._v(" Commitizen校验")]),t._v(" "),a("h3",{attrs:{id:"commitlint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commitlint"}},[t._v("#")]),t._v(" commitlint")]),t._v(" "),a("p",[t._v("校验提交说明是否符合规范，安装校验工具 "),a("a",{attrs:{href:"https://github.com/marionebl/commitlint",target:"_blank",rel:"noopener noreferrer"}},[t._v("commitlint"),a("OutboundLink")],1),t._v("：")]),t._v(" "),a("highlight",{scopedSlots:t._u([{key:"default",fn:function(){return[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev @commitlint/cli\n")])])])]},proxy:!0}])}),t._v(" "),a("h3",{attrs:{id:"commitlint-config-conventional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commitlint-config-conventional"}},[t._v("#")]),t._v(" @commitlint/config-conventional")]),t._v(" "),a("p",[t._v("安装符合Angular风格的校验规则")]),t._v(" "),a("highlight",{scopedSlots:t._u([{key:"default",fn:function(){return[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev @commitlint/config-conventional \n")])])])]},proxy:!0}])}),t._v(" "),a("p",[t._v("在项目中新建commitlint.config.js文件并设置校验规则：")]),t._v(" "),a("highlight",{scopedSlots:t._u([{key:"default",fn:function(){return[a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@commitlint/config-conventional'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]},proxy:!0}])}),t._v(" "),a("p",[t._v("安装huksy（git钩子工具）")]),t._v(" "),a("highlight",{scopedSlots:t._u([{key:"default",fn:function(){return[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" husky --save-dev\n")])])])]},proxy:!0}])}),t._v(" "),a("p",[t._v("在package.json中配置git commit提交时的校验钩子：")]),t._v(" "),a("highlight",{scopedSlots:t._u([{key:"default",fn:function(){return[a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"husky"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commit-msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commitlint -E HUSKY_GIT_PARAMS"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]},proxy:!0}])}),t._v(" "),a("p",[t._v("需要注意，使用该校验规则不能对.cz-config.js进行不符合Angular规范的定制处理，例如之前的汉化，此时需要将.cz-config.js的文件按照官方示例文件cz-config-EXAMPLE.js进行符合Angular风格的改动。")]),t._v(" "),a("h2",{attrs:{id:"commitlint-config-cz"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commitlint-config-cz"}},[t._v("#")]),t._v(" commitlint-config-cz")]),t._v(" "),a("p",[t._v("如果是使用cz-customizable适配器做了破坏Angular风格的提交说明配置，那么不能使用**@commitlint/config-conventional**规则进行提交说明校验，可以使用commitlint-config-cz对定制化提交说明进行校验。")]),t._v(" "),a("p",[t._v("安装校验规则：")]),t._v(" "),a("highlight",{scopedSlots:t._u([{key:"default",fn:function(){return[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" commitlint-config-cz --save-dev\n")])])])]},proxy:!0}])}),t._v(" "),a("p",[t._v("然后加入commitlint校验规则配置：")]),t._v(" "),a("highlight",{scopedSlots:t._u([{key:"default",fn:function(){return[a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cz'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]},proxy:!0}])}),t._v(" "),a("h2",{attrs:{id:"validate-commit-msg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validate-commit-msg"}},[t._v("#")]),t._v(" validate-commit-msg")]),t._v(" "),a("p",[t._v("除了使用commitlint校验工具，也可以使用 "),a("a",{attrs:{href:"https://github.com/Frikki/validate-commit-message",target:"_blank",rel:"noopener noreferrer"}},[t._v("validate-commit-msg"),a("OutboundLink")],1),t._v(" 校验工具对cz提交说明是否符合Angular规范进行校验。")]),t._v(" "),a("h2",{attrs:{id:"commitizen日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commitizen日志"}},[t._v("#")]),t._v(" Commitizen日志")]),t._v(" "),a("p",[t._v("如果使用了cz工具集，配套conventional-changelog可以快速生成开发日志：")]),t._v(" "),a("highlight",{scopedSlots:t._u([{key:"default",fn:function(){return[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" conventional-changelog -D\n")])])])]},proxy:!0}])}),t._v(" "),a("p",[t._v("在pacage.json中加入生成日志命令：")]),t._v(" "),a("highlight",{scopedSlots:t._u([{key:"default",fn:function(){return[a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"changelog"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"conventional-changelog -p angular -i CHANGELOG.md -s -r 0 && git add CHANGELOG.md"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]},proxy:!0}])}),t._v(" "),a("p",[t._v("执行 "),a("code",[t._v("npm run changelog")]),t._v(" 后可查看生产的日志 CHANGELOG.md。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("后续可实现插件机制，规范代码提交说明。")])],1)}),[],!1,null,null,null);s.default=e.exports}}]);