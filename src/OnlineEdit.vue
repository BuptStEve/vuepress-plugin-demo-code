<template>
    <form
        class="demo-and-code-online-edit-wrapper"
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

        <!-- https://codesandbox.io/docs/importing#define-api -->
        <template v-if="platform === 'codesandbox'">
            <input type="hidden" name="parameters" :value="codeSandboxValue" />
            <input v-if="codesandboxOptions.query" type="hidden" name="query" :value="codesandboxOptions.query" />
            <input v-if="codesandboxOptions.embed" type="hidden" name="embed" :value="codesandboxOptions.embed" />
            <input v-if="codesandboxOptions.json" type="hidden" name="json" :value="codesandboxOptions.json" />
        </template>

        <button type="submit" :data-tip="platformTip">
            <component :is="platform" />
        </button>
    </form>
</template>

<script>
import codepen from './icons/CodepenIcon.vue'
import jsfiddle from './icons/JsfiddleIcon.vue'
import codesandbox from './icons/CodeSandboxIcon.vue'
import {
    getJsTmpl,
    getHtmlTmpl,
    getCodeSandboxTmpl,
} from './utils'
import {
    PLATFORMS,
    ACTION_MAP,
    PLATFORM_TIP_MAP,
} from './constants'

const vueJs = 'https://unpkg.com/vue/dist/vue.js'

export default {
    name: 'OnlineEdit',
    components: {
        codepen,
        jsfiddle,
        codesandbox,
    },
    props: {
        platform: {
            type: String,
            required: true,
            validator: val => PLATFORMS.indexOf(val) !== -1,
        },
        js: { type: String, default: '' },
        css: { type: String, default: '' },
        html: { type: String, default: '' },
        jsPre: { type: String, default: 'babel' },
        layout: { type: String, default: 'left' },
        jsLibs: { type: Array, default: () => [] },
        cssLibs: { type: Array, default: () => [] },
        editors: { type: String, default: '101' },
        jsfiddleOptions: { type: Object, default: () => ({}) },
        codesandboxOptions: { type: Object, default: () => ({}) },
    },
    computed: {
        jsTmpl: vm => getJsTmpl(vm.js),
        htmlTmpl: vm => getHtmlTmpl(vm.html),
        actionUrl: vm => {
            if (vm.platform === 'jsfiddle') {
                return ACTION_MAP[vm.platform] + vm.jsfiddleOptions.framework
            }

            return ACTION_MAP[vm.platform]
        },
        resources: vm => vm.jsLibsWithVue.concat(vm.cssLibs).join(','),
        js_external: vm => vm.jsLibsWithVue.join(';'),
        platformTip: vm => PLATFORM_TIP_MAP[vm.platform],
        css_external: vm => vm.cssLibs.join(';'),
        jsLibsWithVue: vm => vm.jsLibs.concat(vueJs),
        codepenValue: (vm) => JSON.stringify({
            js: vm.jsTmpl,
            css: vm.css,
            html: vm.htmlTmpl,
            layout: vm.layout,
            editors: vm.editors,
            js_external: vm.js_external,
            css_external: vm.css_external,
            js_pre_processor: vm.jsPre,
        }),
        codeSandboxValue: (vm) => getCodeSandboxTmpl({
            js: vm.js,
            css: vm.css,
            html: vm.html,
            deps: vm.codesandboxOptions.deps,
            jsLibs: vm.jsLibs,
            cssLibs: vm.cssLibs,
        }),
    },
}
</script>

<style lang="stylus">
.demo-and-code-online-edit-wrapper {
    display: inline-block;

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
                top: -7px;

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
