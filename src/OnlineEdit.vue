<template>
    <form
        class="demo-and-code-codepen-wrapper"
        target="_blank"
        :action="actionUrl"
        method="post"
    >
        <!-- https://blog.codepen.io/documentation/api/prefill/ -->
        <template v-if="platform === 'codepen'">
            <input type="hidden" name="data" :value="codepenValue" />
        </template>

        <!-- https://docs.jsfiddle.net/api/display-a-fiddle-from-post -->
        <template v-if="platform === 'jsfiddle'">
            <input type="hidden" name="js" :value="js" />
            <input type="hidden" name="css" :value="css" />
            <input type="hidden" name="html" :value="html" />
            <input type="hidden" name="panel_js" value="3" />
            <input type="hidden" name="resources" :value="resources" />
        </template>

        <button type="submit" :data-tip="platform">
            <component :is="platform" />
        </button>
    </form>
</template>

<script>
import codepen from './icons/CodepenIcon.vue'
import jsfiddle from './icons/JsfiddleIcon.vue'

const actionMap = {
    codepen: 'https://codepen.io/pen/define',
    jsfiddle: 'https://jsfiddle.net/api/post/library/pure',
}

export default {
    name: 'OnlineEdit',
    components: {
        codepen,
        jsfiddle,
    },
    props: {
        platform: {
            type: String,
            required: true,
            validator: val => ['codepen', 'jsfiddle'].indexOf(val) !== -1,
        },
        js: { type: String, default: '' },
        css: { type: String, default: '' },
        html: { type: String, default: '' },
        jsPre: { type: String, default: 'babel' },
        layout: { type: String, default: 'left' },
        jsLibs: {
            type: Array,
            default: () => [],
        },
        cssLibs: {
            type: Array,
            default: () => [],
        },
        editors: { type: String, default: '101' },
    },
    computed: {
        actionUrl: vm => actionMap[vm.platform],
        resources: vm => vm.jsLibs.concat(vm.cssLibs).join(','),
        js_external: vm => vm.jsLibs.join(';'),
        css_external: vm => vm.cssLibs.join(';'),
        codepenValue: vm => JSON.stringify({
            js: vm.js,
            css: vm.css,
            html: vm.html,
            layout: vm.layout,
            editors: vm.editors,
            js_external: vm.js_external,
            css_external: vm.css_external,
            js_pre_processor: vm.jsPre,
        }),
    },
    methods: {
    },

    created () {
    },
}
</script>

<style lang="stylus">
.demo-and-code-codepen-wrapper {
    display: inline-block;

    width: 36px;

    vertical-align: middle;

    button {
        position: relative;

        cursor: pointer;

        border-color: transparent;
        outline: none;
        background-color: transparent;

        &:before,
        &:after {
            position: absolute;
            left: 50%;

            transform: translateX(-50%);
        }

        &:hover {
            &:before {
                top: -30px;

                padding: 6px;

                content: attr(data-tip);

                color: #fff;
                border-radius: 4px;
                background-color: rgba(0, 0, 0, .8);

                line-height: 1;
            }

            &:after {
                top: -6px;

                content: '';

                border: 5px solid transparent;
                border-top-color: rgba(0, 0, 0, .8);
            }
        }
    }

    svg {
        width: 34px;
        height: 20px;
    }
}
</style>
