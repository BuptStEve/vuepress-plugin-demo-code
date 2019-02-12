# Eaxmple

## 常规操作
直接把 demo 代码用 `::: demo` 和 `:::` 包裹。即可生成可运行的 demo 和代码。

### 使用示例

```md
::: demo
<template>
    <button @click="onClick">Click me!</button>
</template>

<script>
export default {
    methods: {
        onClick: () => { window.alert(1) },
    },
}
</script>
:::
```

### 实现效果

::: demo
<template>
    <button @click="onClick">Click me!</button>
</template>

<script>
export default {
    methods: {
        onClick: () => { window.alert(1) },
    },
}
</script>
:::

## 代码语言
你可能注意到了展示代码右上角显示了 `vue`（默认），这里的语言可配置。

### 使用示例

```md
::: demo html
<p>
    this is <span style="color: red;">common</span> html
</p>
:::
```

### 实现效果

::: demo html
<p>
    this is <span style="color: red;">common</span> html
</p>
:::
