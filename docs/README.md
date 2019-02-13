<h1 align="center">vuepress-plugin-demo-code</h1>

<p align="center">
    <a href="https://circleci.com/gh/BuptStEve/vuepress-plugin-demo-code/tree/master"><img src="https://img.shields.io/circleci/project/github/BuptStEve/vuepress-plugin-demo-code/master.svg" alt="Build Status"></a>
    <a href="https://codecov.io/github/BuptStEve/vuepress-plugin-demo-code?branch=master"><img src="https://img.shields.io/codecov/c/github/BuptStEve/vuepress-plugin-demo-code/master.svg" alt="Coverage Status"></a>
    <a href="https://www.npmjs.com/package/vuepress-plugin-demo-code"><img src="https://img.shields.io/npm/v/vuepress-plugin-demo-code.svg" alt="Version"></a>
    <a href="https://www.npmjs.com/package/vuepress-plugin-demo-code"><img src="https://img.shields.io/npm/l/vuepress-plugin-demo-code.svg" alt="License"></a>
</p>

English | [简体中文](./zh/)

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

[Please click here to see the demo](./example/)

## Features
* Only one source code
* Foldable code
* Online edit support
  * ✔ Codepen
  * ✔ JSFiddle
  * ✔ CodeSandbox
* Designed for long code
  * Sticky fold button
  * Auto scroll to top when you fold code

## Install

* First, install [vuepress v1.x](https://github.com/vuejs/vuepress)

* Then install plugin

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
* Default: `{ deps: {}, json: '', query: 'module=App.vue'', embed: '' },`

It passes [CodeSandbox options](https://codesandbox.io/docs/importing#define-api).

> `deps` is dependencies

### demoCodeMark
* Type: `String`
* Default: `demo`

The mark of the plugin, follows the tag after `:::`.

## Related
* [vuepress-plugin-demo-block](https://github.com/xiguaxigua/vuepress-plugin-demo-block)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) StEve Young
