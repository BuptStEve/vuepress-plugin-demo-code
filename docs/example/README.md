# Example

## Common Usage

Just wrapper your demo code between `::: demo` and `:::`. Then you will get runnable demo and code.

### Usage Example

```md
::: demo
<template>
  <button class="animated shake infinite" @click="onClick">Click me!</button>
</template>

<script>
export default {
  methods: {
    onClick: () => { window.alert(1) },
  },
}
</script>

<style>
button {
  color: blue;
}
</style>
:::
```

### Result

::: demo
<template>
  <button class="animated shake infinite" @click="onClick">Click me!</button>
</template>

<script>
export default {
  methods: {
    onClick: () => { window.alert(1) },
  },
}
</script>

<style>
button {
  color: blue;
}
</style>
:::

## Code Language
You may notice that the top right corner of the display code shows `vue`(default), it's configurable.

### Usage Example

```md
::: demo html
<p class="common-html">
  this is <span style="color: red;">common</span> html
</p>

<style>
.common-html {
  color: green;
}
</style>
:::
```

### Result

::: demo html
<p class="common-html">
  this is <span style="color: red;">common</span> html
</p>

<style>
.common-html {
  color: green;
}
</style>
:::
