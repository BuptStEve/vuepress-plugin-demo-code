<template>
    <section class="demo-and-code-wrapper">
        <slot name="demo" />

        <div
            ref="codeControl"
            class="code-control"
            @click="onClickControl"
            :style="codeControlStyle"
        >
            <span class="control-btn" v-show="isShowControl">
                {{ controlText }}
                <i class="arrow-icon" :style="iconStyle" />
            </span>

            <div class="online-wrapper" @click.stop>
                <OnlineEdit
                    v-for="platform in platforms"
                    :key="platform"
                    v-show="showOnlineBtns[platform]"
                    v-bind="parsedCode"
                    :platform="platform"
                />
            </div>
        </div>

        <div class="code-wrapper" ref="codeWrapper" :style="codeWrapperStyle">
            <div
                v-html="highlightCode"
                :class="`language-${language} extra-class`"
            />
        </div>
    </section>
</template>

<script>
import OnlineEdit from './OnlineEdit.vue'
import getHighlightCodeHtml from './highlight'
import {
    JS_RE,
    CSS_RE,
    HTML_RE,
    PLATFORMS,
} from './constants'
import {
    parseAndDecode,
    getMatchedResult,
} from './utils'

export default {
    name: 'DemoAndCode',
    components: {
        OnlineEdit,
    },
    props: {
        htmlStr: { type: String, default: '' },
        language: { type: String, default: 'vue' },
        showText: { type: String, default: 'show code' },
        hideText: { type: String, default: 'hide code' },
        jsLibsStr: { type: String, default: '[]' },
        cssLibsStr: { type: String, default: '[]' },
        minHeight: {
            type: Number,
            default: 200,
            validator: val => val >= 0,
        },
        jsfiddleStr: { type: String, default: '{}' },
        onlineBtnsStr: { type: String, default: '{}' },
        codesandboxStr: { type: String, default: '{}' },
    },
    data () {
        return {
            scrollTop: 0,
            platforms: PLATFORMS,
            codeHeight: 9999,
            navbarHeight: 0,

            isShowCode: true,
            isShowControl: true,
        }
    },
    computed: {
        // button text
        controlText: (vm) => vm.isShowCode ? vm.hideText : vm.showText,
        highlightCode: vm => getHighlightCodeHtml(vm.decodedHtmlStr, vm.language),
        decodedHtmlStr: vm => decodeURIComponent(vm.htmlStr),
        showOnlineBtns: vm => parseAndDecode(vm.onlineBtnsStr),
        // icon animation
        iconStyle: (vm) => ({
            transform: vm.isShowCode ? 'rotate(0)' : 'rotate(-180deg)',
        }),
        // animation
        codeWrapperStyle: (vm) => ({
            'max-height': vm.isShowCode ? `${vm.codeHeight}px` : `${vm.minHeight}px`,
        }),
        // sticky
        codeControlStyle: (vm) => ({
            top: vm.isShowCode ? `${vm.navbarHeight}px` : '0',
            cursor: vm.isShowControl ? 'pointer' : 'auto',
        }),
        parsedCode: (vm) => {
            const js = getMatchedResult(JS_RE)(vm.decodedHtmlStr) || ''
            const css = getMatchedResult(CSS_RE)(vm.decodedHtmlStr) || ''
            const html = getMatchedResult(HTML_RE)(vm.decodedHtmlStr) || vm.decodedHtmlStr
                .replace(JS_RE, '')
                .replace(CSS_RE, '')
                .replace(HTML_RE, '')
                .trim()

            const jsLibs = parseAndDecode(vm.jsLibsStr)
            const cssLibs = parseAndDecode(vm.cssLibsStr)
            const codesandboxOptions = parseAndDecode(vm.codesandboxStr)
            const jsfiddleOptions = parseAndDecode(vm.jsfiddleStr)

            return { js, css, html, jsLibs, cssLibs, codesandboxOptions, jsfiddleOptions }
        },
    },
    methods: {
        onClickControl () {
            this.isShowCode = !this.isShowCode

            if (!this.isShowCode) {
                this.getDomRect()
                window.scrollTo({ top: this.scrollTop, behavior: 'smooth' })
            }
        },
        getDomRect () {
            const navbar = document.querySelector('header.navbar')
            const { codeWrapper } = this.$refs

            const { top: codeTop, height: codeHeight } = codeWrapper.getBoundingClientRect()
            const { height: navbarHeight } = navbar
                ? navbar.getBoundingClientRect()
                : { height: 0 }

            this.scrollTop = window.scrollY + codeTop - navbarHeight - 35
            this.codeHeight = codeHeight
            this.navbarHeight = navbarHeight
        },
    },

    mounted () {
        this.getDomRect()
        this.isShowCode = false

        if (this.codeHeight < this.minHeight) {
            this.isShowControl = false
        }
    },
}
</script>

<style lang="stylus">

html {
    scroll-behavior: smooth;
}

.demo-and-code-wrapper {
    padding: 20px 0;

    // for vuepress-plugin-code-copy
    .code-copy {
        position: absolute;
        top: 20px;
        right: 0;

        opacity: 1;

        svg {
            right: 10px;
        }
    }

    .code-control {
        position: sticky;
        z-index: 9;

        display: flex;
        justify-content: space-between;

        width: 100%;
        height: 50px;
        margin-bottom: -.85rem;

        text-align: center;

        background-color: #fff;

        font-size: 20px;
        line-height: 50px;

        .control-btn {
            display: flex;
            flex: 1;
            justify-content: center;
        }

        .arrow-icon {
            display: inline-block;
            align-self: center;

            margin-left: 5px;

            transition: transform .3s ease-in-out;

            border-top: none;
            border-right: 6px solid transparent;
            border-bottom: 6px solid #2c3e50;
            border-left: 6px solid transparent;
        }
    }

    .code-wrapper {
        overflow: hidden;

        transition: max-height .6s ease-in-out;
    }
}

@media (max-width: 419px) {
    .demo-and-code-wrapper {
        margin: 0 -1.5rem;

        .code-wrapper {
            overflow: auto;
        }

        div[class*="language-"] {
            margin: 0 !important;
        }
    }
}
</style>
