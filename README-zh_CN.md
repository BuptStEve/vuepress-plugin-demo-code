<h1 align="center">vuepress-plugin-demo-code</h1>

<p align="center">
    <a href="https://circleci.com/gh/BuptStEve/vuepress-plugin-demo-code/tree/master" target="_blank">
        <img src="https://img.shields.io/circleci/project/github/BuptStEve/vuepress-plugin-demo-code/master.svg" alt="Build Status">
    </a>
    <a href="https://codecov.io/github/BuptStEve/vuepress-plugin-demo-code?branch=master" target="_blank">
        <img src="https://img.shields.io/codecov/c/github/BuptStEve/vuepress-plugin-demo-code/master.svg" alt="Coverage Status">
    </a>
    <a href="https://www.npmjs.com/package/vuepress-plugin-demo-code" target="_blank">
        <img src="https://badgen.net/npm/dm/vuepress-plugin-demo-code" alt="Downloads per month">
        <img src="https://img.shields.io/npm/v/vuepress-plugin-demo-code.svg" alt="Version">
        <img src="https://img.shields.io/npm/v/vuepress-plugin-demo-code/next.svg" alt="Next Version">
        <img src="https://img.shields.io/npm/l/vuepress-plugin-demo-code.svg" alt="License">
    </a>
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

[实际效果请点击这里](./example/#实现效果)

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
            jsfiddle: {
                framework: 'library/pure', // default
                // framework: 'vue/2.6.11',
            },
            codesandbox: {
                deps: { 'lodash': 'latest' },
                json: '',
                query: '',
                embed: '',
            },
            demoCodeMark: 'demo-code',
            copyOptions: { ... },
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

### jsfiddle
* Type: `Object`
* Default: `{ framework: 'library/pure' }`

透传 [jsfiddle options](https://docs.jsfiddle.net/api/display-a-fiddle-from-post).

### codesandbox
* 类型：`Object`
* 默认值：`{ deps: {}, json: '', query: 'module=App.vue'', embed: '' }`

透传 [CodeSandbox options](https://codesandbox.io/docs/importing#define-api).

> `deps` is dependencies

### demoCodeMark
* 类型：`String`
* 默认值：`demo`

插件的标记，即跟在 `:::` 后的标记。

### copyOptions
* 类型：`Object/Boolean`
* 默认值：`{ align: 'top', selector: '.demo-and-code-wrapper div[class*="language-"] pre' }`

透传 [vuepress-plugin-code-copy](https://github.com/znicholasbrown/vuepress-plugin-code-copy#options) 的参数，或传 `false` 禁用它。

## Related
* [vuepress-plugin-demo-block](https://github.com/xiguaxigua/vuepress-plugin-demo-block)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) StEve Young

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://buptsteve.github.io"><img src="https://avatars2.githubusercontent.com/u/11501493?v=4?s=100" width="100px;" alt=""/><br /><sub><b>StEve Young</b></sub></a><br /><a href="https://github.com/BuptStEve/vuepress-plugin-demo-code/commits?author=BuptStEve" title="Code">💻</a> <a href="https://github.com/BuptStEve/vuepress-plugin-demo-code/commits?author=BuptStEve" title="Documentation">📖</a> <a href="#infra-BuptStEve" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#translation-BuptStEve" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/leandrofngl"><img src="https://avatars1.githubusercontent.com/u/11283636?v=4?s=100" width="100px;" alt=""/><br /><sub><b>leandrofngl</b></sub></a><br /><a href="https://github.com/BuptStEve/vuepress-plugin-demo-code/issues?q=author%3Aleandrofngl" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/tianjianchn"><img src="https://avatars0.githubusercontent.com/u/7612199?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tian Jian</b></sub></a><br /><a href="https://github.com/BuptStEve/vuepress-plugin-demo-code/issues?q=author%3Atianjianchn" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://barr.media"><img src="https://avatars.githubusercontent.com/u/30320791?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Spence</b></sub></a><br /><a href="https://github.com/BuptStEve/vuepress-plugin-demo-code/commits?author=mrspence" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
