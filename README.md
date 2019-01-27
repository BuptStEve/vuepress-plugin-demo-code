<h1 align="center">vuepress-plugin-demo-code</h1>

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

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) StEve Young
