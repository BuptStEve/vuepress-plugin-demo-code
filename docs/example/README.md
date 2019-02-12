# Eaxmple

## Common Usage

Just wrapper your demo code between `::: demo` and `:::`.Then you can generate runnable demo and code.

### Usage Example

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

### Result

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

## Code Language
You may notice that the top right corner of the display code shows `vue`(default), it's configurable.

### Usage Example

```md
::: demo html
<p>
    this is <span style="color: red;">common</span> html
</p>
:::
```

### Result

::: demo html
<p>
    this is <span style="color: red;">common</span> html
</p>
:::