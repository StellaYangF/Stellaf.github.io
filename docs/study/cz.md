---
sidebar: auto
---

## Cz 工具交集使用篇
功能：
- **规范** Git 精准提交说明
- 多人协作，后期**协作**及 **Bug** 处理有据可查
- 可根据规范的提交说明快速生成**日志**
- 方便开发者或用户追踪项目开发信息和功能特性

目录：
- 介绍符合 Angular规范 的提交说明
- 介绍 Cz (适配器、校验、日志) 使用方法

## 规范 Git 提交说明
- 提供更多**历史信息**，方便快速浏览
- 过滤某些 commit, 便于筛选代码 **review** 
- 追踪 commit 生成**更新日志**
- 关联 **issue**

### Git 提交说明结构
分三个部分： **Header**, **Body**, **Footer**

<highlight>

::: slot default
```js
<Header> <Body> <Footer>
```
:::
</highlight>

#### Header
**Header** 部分包括三个字段: `type`（必需）、`scope`（可选）和 `subject`（必需）。

<highlight>

::: slot default
```js
<type>(<scope>): <subject>
```
:::

</highlight>

##### type
type用于说明 commit 的提交性质。
值 | 描述
-|-|-
feat | 新增一个功能 |
fix | 修复一个 Bug |
docs | 文档变更 |
style | 代码格式 |
refeactor | 代码重构 |
perf | 改善性能 |
test | 测试 |
build | 变更项目构建或外部依赖 |
ci | 更改持续继承软件的配置和 package.json 中 **scripts** 命令 |
chore | 变更构建流程或辅助工具 |
revert | 代码回退 |

##### scope
scope 说明 commit 影响的**范围**。scope 依据项目而定，例如在业务项目中可以依据**菜单**或者**功能模块**划分，如果是组件库开发，则可以依据**组件**划分。
> Tip: scope 可选

##### subject
subject 是 commit 的简短描述。

#### Body
commit 的详细描述，说明代码提交的详细说明。

#### Footer
如果代码的提交是**不兼容变更**或**关闭缺陷**，则 Footer 必需，否则可以省略。

##### 不兼容变更
当前代码与上一个版本不兼容，则 Footer 以 **BREAKING CHANGE** 开头，后面是对变动的描述、以及变动的理由和迁移方法。

##### 关闭缺陷
如果当前提交是针对特定的 issue，那么可以在 Footer 部分填写需要关闭的单个 issue 或一系列issues。

## Commitizen 
- [commitizen/cz-cli](https://github.com/commitizen/cz-cli) 是一个可以实现规范的提交说明的工具
- 提供选择的提交信息类别，快速生成提交说明。安装cz工具:

<highlight>

::: slot default
```bash
npm i commitizen -g
```
:::

</highlight>

## Commitizen 适配器
### cz-conventional-changelog
如果需要在项目中使用 commitizen 生成符合 AngularJS 规范的提交说明，初始化cz-conventional-changelog 适配器：

<highlight>

:::slot default
```bash
commitizen init cz-conventional-changelog --save --save-exact
```
:::

</highlight>

如果当前已经有其他适配器被使用，则会报以下错误，此时可以加上--force选项进行再次初始化

<highlight>

:::slot default
```js
Error: A previous adapter is already configured. Use --force to override
```
:::

</highlight>

初始化命令主要进行了3件事情:
- 在项目中**安装** cz-conventional-changelog 适配器依赖
- 将适配器依赖保存到package.json的 **devDependencies** 字段信息
- 在 package.json 中新增 **config.commitizen** 字段信息，主要用于配置cz工具的适配器路径：

<highlight>

:::slot default
```json
"devDependencies": {
 "cz-conventional-changelog": "^2.1.0"
},
"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
}
```
:::

</highlight>

接下里 `git cz` 代替 `git commit` 进行提交说明。

### cz-customizable
如果想定制项目的提交说明，可以使用 cz-customizable 适配器

#### 安装 cz-customizable

<highlight>

:::slot default
```bash
npm i cz-customizable -D
```
:::

</highlight>

#### 更新 package.json 文件
将之前符合Angular规范的 cz-conventional-changelog 适配器路径改成 cz-customizable 适配器路径：

<highlight>

:::slot default
```js
"devDependencies": {
  "cz-customizable": "^5.3.0"
},
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}
```
:::

</highlight>


#### 新建 .cz-config.js 文件
cz-customizable will first look for a file called .cz-config.js，alternatively add a config block in your package.json。

官方提供了一个 **.cz-config.js** 示例文件 [cz-config-EXAMPLE.js](https://github.com/leonardoanalista/cz-customizable/blob/master/cz-config-EXAMPLE.js)，如下所示：

<highlight>

::: slot default
```js
'use strict';

module.exports = {

  types: [
    {value: 'feat',     name: 'feat:     A new feature'},
    {value: 'fix',      name: 'fix:      A bug fix'},
    {value: 'docs',     name: 'docs:     Documentation only changes'},
    {value: 'style',    name: 'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)'},
    {value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature'},
    {value: 'perf',     name: 'perf:     A code change that improves performance'},
    {value: 'test',     name: 'test:     Adding missing tests'},
    {value: 'chore',    name: 'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation'},
    {value: 'revert',   name: 'revert:   Revert to a commit'},
    {value: 'WIP',      name: 'WIP:      Work in progress'}
  ],

  scopes: [
    {name: 'accounts'},
    {name: 'admin'},
    {name: 'exampleScope'},
    {name: 'changeMe'}
  ],

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: 'Select the type of change that you\'re committing:',
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],

  // limit subject length
  subjectLimit: 100
  
};
```
:::

</highlight>

## Commitizen 校验

### commitlint
校验提交说明是否符合规范，安装校验工具 [commitlint](https://github.com/marionebl/commitlint)：

<highlight>

::: slot default
```bash
npm install --save-dev @commitlint/cli
```
:::

</highlight>

### @commitlint/config-conventional
安装符合Angular风格的校验规则

<highlight>

::: slot default
```bash
npm install --save-dev @commitlint/config-conventional 
```
:::

</highlight>

在项目中新建commitlint.config.js文件并设置校验规则：

<highlight>

::: slot default
```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```
:::

</highlight>


安装huksy（git钩子工具）

<highlight>

::: slot default
```bash
npm install husky --save-dev
```
:::

</highlight>

在package.json中配置git commit提交时的校验钩子：

<highlight>

::: slot default
```json
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }  
}
```
:::

</highlight>

需要注意，使用该校验规则不能对.cz-config.js进行不符合Angular规范的定制处理，例如之前的汉化，此时需要将.cz-config.js的文件按照官方示例文件cz-config-EXAMPLE.js进行符合Angular风格的改动。

### commitlint-config-cz

如果是使用cz-customizable适配器做了破坏Angular风格的提交说明配置，那么不能使用**@commitlint/config-conventional**规则进行提交说明校验，可以使用commitlint-config-cz对定制化提交说明进行校验。

安装校验规则：
<highlight>

::: slot default
```bash
npm install commitlint-config-cz --save-dev
```
:::

</highlight>

然后加入commitlint校验规则配置：

<highlight>

::: slot default
```js
module.exports = {
  extends: [
    'cz'
  ]
};
```
:::

</highlight>


### validate-commit-msg
除了使用commitlint校验工具，也可以使用 [validate-commit-msg](https://github.com/Frikki/validate-commit-message) 校验工具对cz提交说明是否符合Angular规范进行校验。

## Commitizen 日志
如果使用了cz工具集，配套conventional-changelog可以快速生成开发日志：

<highlight>

::: slot default
```bash
npm install conventional-changelog -D
```
:::

</highlight>

在pacage.json中加入生成日志命令：

<highlight>

::: slot default
```json
"scripts": {
  "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0 && git add CHANGELOG.md"
}
```
:::

</highlight>

执行 `npm run changelog` 后可查看生产的日志 CHANGELOG.md。

## 总结
后续可实现插件机制，规范代码提交说明。

## 参考
[Cz 工具集](https://juejin.im/post/5cc4694a6fb9a03238106eb9#heading-4)

[validate-commit-msg](https://github.com/Frikki/validate-commit-message)