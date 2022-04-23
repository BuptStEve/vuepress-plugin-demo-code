<h1 align="center">vuepress-plugin-demo-code</h1>

<p align="center">
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
$ pnpm i -D vuepress-plugin-demo-code
# OR
$ yarn add -D vuepress-plugin-demo-code
```

* If you are using [vuepress 2.x](https://v2.vuepress.vuejs.org/), please install the next version.

```bash
$ npm i -D vuepress-plugin-demo-code@next
# OR
$ pnpm i -D vuepress-plugin-demo-code@next
# OR
$ yarn add -D vuepress-plugin-demo-code@next
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
      vueVersion: '^3',
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
* Type: `Array`
* Default: `[]`

Js libraries for the demo.

### cssLibs
* Type: `Array`
* Default: `[]`

Css libraries for the demo.

### vueVersion
* Type: `String` (semantic versioning syntax)
* Default: `^2.6.14`

The semantic version string of vue. For more information on semantic versioning syntax, see the [npm semver calculator](https://semver.npmjs.com/).

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

### jsfiddle
* Type: `Object`
* Default: `{ framework: 'library/pure' }`

It passes [jsfiddle options](https://docs.jsfiddle.net/api/display-a-fiddle-from-post).

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
