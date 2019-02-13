<h1 align="center">vuepress-plugin-demo-code</h1>

<p align="center">
    <a href="https://circleci.com/gh/BuptStEve/vuepress-plugin-demo-code/tree/master"><img src="https://img.shields.io/circleci/project/github/BuptStEve/vuepress-plugin-demo-code/master.svg" alt="Build Status"></a>
    <a href="https://www.npmjs.com/package/vuepress-plugin-demo-code"><img src="https://img.shields.io/npm/v/vuepress-plugin-demo-code.svg" alt="Version"></a>
    <a href="https://www.npmjs.com/package/vuepress-plugin-demo-code"><img src="https://img.shields.io/npm/l/vuepress-plugin-demo-code.svg" alt="License"></a>
</p>

[English](../) | 简体中文

> demo-code plugin for vuepress.

借助这个插件，你可以通过下述的语法在展示 demo 的同时，将这段代码展示出来。

```md
::: demo
<div @click="onClick">Click me!</div>

<script>
export default {
    methods: {
        onClick: () => { window.alert(1) },
    },
}
</script>
:::
```

[实际效果请点击这里](./example/)

## Features
* 只有一份代码同时生成 demo 和 code
* 代码可折叠
* 支持在线编辑
  * ✔ Codepen
  * ✔ JSFiddle
  * ✔ CodeSandbox
* 专门为浏览长代码进行了设计
  * Sticky 的收起按钮
  * 点击收起按钮时自动滚动到代码的顶部

## Install

* 首先安装 [vuepress v1.x](https://github.com/vuejs/vuepress)

* 接着安装插件

```bash
$ npm i -D vuepress-plugin-demo-code
# OR
$ yarn add -D vuepress-plugin-demo-code
```

## Usage
配置 vuepress config

```js
module.exports = {
    plugins: ['demo-code'],
}
```

## Options
插件支持以下配置

```js
module.exports = {
    plugins: [
        ['demo-code', {
            jsLibs: [
                // umd
                'https://unpkg.com/tua-storage/dist/TuaStorage.umd.js',
            ],
            cssLibs: [
                'https://unpkg.com/animate.css@3.7.0/animate.min.css',
            ],
            showText: 'show code',
            hideText: 'hide',
            styleStr: 'text-decoration: underline;',
            minHeight: 200,
            onlineBtns: {
                codepen: true,
                jsfiddle: true,
                codesandbox: true,
            },
            codesandbox: {
                deps: { 'lodash': 'latest' },
                json: '',
                query: '',
                embed: '',
            },
            demoCodeMark: 'demo-code',
        }]
    ],
}
```

### jsLibs
* 类型：`Array`
* 默认值：`[]`

展示 demo 所需的 js 库。

### cssLibs
* 类型：`Array`
* 默认值：`[]`

展示 demo 所需的 css 库。

### showText
* 类型：`String`
* 默认值：`show code`

展开代码按钮的文案。

### hideText
* 类型：`String`
* 默认值：`hide code`

收起代码按钮的文案。

### minHeight
* 类型：`Number`
* 默认值：`200`(px)

代码收起时的高度。

### onlineBtns
* 类型：`Object`
* 默认值：`{ codepen: true, jsfiddle: true, codesandbox: true }`

展示哪些在线编辑的按钮。

### codesandbox
* 类型：`Object`
* 默认值：`{ deps: {}, json: '', query: 'module=App.vue'', embed: '' },`

It passes [CodeSandbox options](https://codesandbox.io/docs/importing#define-api).

> `deps` is dependencies

### demoCodeMark
* 类型：`String`
* 默认值：`demo`

插件的标记，即跟在 `:::` 后的标记。

## Related
* [vuepress-plugin-demo-block](https://github.com/xiguaxigua/vuepress-plugin-demo-block)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) StEve Young
