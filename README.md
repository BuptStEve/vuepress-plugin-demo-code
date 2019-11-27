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

English | <a href="https://buptsteve.github.io/vuepress-plugin-demo-code/zh/">简体中文</a>

> demo-code plugin for vuepress.

With this plugin, you can both display demo and code via following syntax.

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

<a href="https://buptsteve.github.io/vuepress-plugin-demo-code/example/#result">Please click here to see the demo</a>

## Features
* Only one source code
* Foldable code
* Support online editing
  * ✔ Codepen
  * ✔ JSFiddle
  * ✔ CodeSandbox
* Designed for long code
  * Sticky fold button
  * Auto scroll to top when you fold code

## Install

* First of all, install [vuepress v1.x](https://github.com/vuejs/vuepress)

* Then install the plugin

```bash
$ npm i -D vuepress-plugin-demo-code
# OR
$ yarn add -D vuepress-plugin-demo-code
```

## Usage
Write vuepress config

```js
module.exports = {
    plugins: ['demo-code'],
}
```

## Options
This plugin supports the following configurations.

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
            copyOptions: { ... },
        }]
    ],
}
```

### jsLibs
* Type: `Array`
* Default: `[]`

Js libraries for the demo.

### cssLibs
* Type: `Array`
* Default: `[]`

Css libraries for the demo.

### showText
* Type: `String`
* Default: `show code`

The display text of unfold code button.

### hideText
* Type: `String`
* Default: `hide code`

The display text of fold code button.

### minHeight
* Type: `Number`
* Default: `200`(px)

The height of the code when it is folded.

### onlineBtns
* Type: `Object`
* Default: `{ codepen: true, jsfiddle: true, codesandbox: true }`

Display online edit buttons.

### codesandbox
* Type: `Object`
* Default: `{ deps: {}, json: '', query: 'module=App.vue'', embed: '' }`

It passes [CodeSandbox options](https://codesandbox.io/docs/importing#define-api).

> `deps` is dependencies

### demoCodeMark
* Type: `String`
* Default: `demo`

The mark of the plugin, follows the tag after `:::`.

### copyOptions
* Type: `Object/Boolean`
* Default: `{ align: 'top', selector: '.demo-and-code-wrapper div[class*="language-"] pre' }`

It passes [vuepress-plugin-code-copy](https://github.com/znicholasbrown/vuepress-plugin-code-copy#options)'s options, or `false` to disable it.

## Related
* [vuepress-plugin-demo-block](https://github.com/xiguaxigua/vuepress-plugin-demo-block)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) StEve Young

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://buptsteve.github.io"><img src="https://avatars2.githubusercontent.com/u/11501493?v=4" width="100px;" alt="StEve Young"/><br /><sub><b>StEve Young</b></sub></a><br /><a href="https://github.com/BuptStEve/vuepress-plugin-demo-code/commits?author=BuptStEve" title="Code">💻</a> <a href="https://github.com/BuptStEve/vuepress-plugin-demo-code/commits?author=BuptStEve" title="Documentation">📖</a> <a href="#infra-BuptStEve" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#translation-BuptStEve" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/leandrofngl"><img src="https://avatars1.githubusercontent.com/u/11283636?v=4" width="100px;" alt="leandrofngl"/><br /><sub><b>leandrofngl</b></sub></a><br /><a href="https://github.com/BuptStEve/vuepress-plugin-demo-code/issues?q=author%3Aleandrofngl" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/tianjianchn"><img src="https://avatars0.githubusercontent.com/u/7612199?v=4" width="100px;" alt="Tian Jian"/><br /><sub><b>Tian Jian</b></sub></a><br /><a href="https://github.com/BuptStEve/vuepress-plugin-demo-code/issues?q=author%3Atianjianchn" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
