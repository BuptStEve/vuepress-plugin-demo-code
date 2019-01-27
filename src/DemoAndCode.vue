<template>
    <section class="demo-and-code-wrapper" :style="customStyle">
        <slot name="demo" />

        <div
            v-show="isShowControl"
            ref="codeControl"
            class="code-control"
            @click="onClickControl"
            :style="codeControlStyle"
        >
            {{ controlText }}
            <div class="icon" :style="iconStyle" />
        </div>

        <div class="code-wrapper" ref="codeWrapper" :style="codeWrapperStyle">
            <slot name="code" />
        </div>
    </section>
</template>

<script>
export default {
    name: 'DemoAndCode',
    props: {
        showText: { type: String, default: 'show code' },
        hideText: { type: String, default: 'hide code' },
        minHeight: { type: Number, default: 200 },
        customStyle: { type: [String, Object], default: '' },
    },
    data () {
        return {
            scrollTop: 0,
            codeHeight: 9999,
            navbarHeight: 0,

            isShowCode: true,
            isShowControl: true,
        }
    },
    computed: {
        // icon animation
        iconStyle : (vm) => ({
            transform: vm.isShowCode
                ? 'rotate(0)'
                : 'rotate(-180deg)',
        }),
        // button text
        controlText: vm => vm.isShowCode
            ? vm.hideText
            : vm.showText,
        // animation
        codeWrapperStyle: (vm) => ({
            'max-height': vm.isShowCode
                ? `${vm.codeHeight}px`
                : `${vm.minHeight}px`
        }),
        // sticky
        codeControlStyle: (vm) => ({
            top: vm.isShowCode
                ? `${vm.navbarHeight}px`
                : '0',
        }),
    },
    methods: {
        onClickControl () {
            this.isShowCode = !this.isShowCode

            if (!this.isShowCode) {
                this.getDomRect()
                window.scrollTo({ top: this.scrollTop })
            }
        },
        getDomRect () {
            const navbar = document.querySelector('header.navbar')
            const { codeControl, codeWrapper } = this.$refs

            const { top: codeTop, height: codeHeight } = codeWrapper.getBoundingClientRect()
            const { height: navbarHeight } = navbar.getBoundingClientRect()

            this.scrollTop = window.scrollY + codeTop - navbarHeight
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
html, body {
    scroll-behavior: smooth;
}
</style>

<style lang="stylus" scoped>
.demo-and-code-wrapper {
    padding: 20px 0;

    .code-control {
        position: sticky;
        z-index: 10;

        width: 100%;
        margin-bottom: -.85rem;

        cursor: pointer;
        text-align: center;

        background-color: #fff;

        font-size: 20px;
        line-height: 50px;

        .icon {
            display: inline-block;

            margin-bottom 3px;
            border-top: none;
            border-right: 6px solid transparent;
            border-bottom: 6px solid #2c3e50;
            border-left: 6px solid transparent;

            transition: transform .3s ease-in-out;
        }
    }

    .code-wrapper {
        overflow: hidden;

        transition: max-height .6s ease-in-out;
    }
}
</style>
