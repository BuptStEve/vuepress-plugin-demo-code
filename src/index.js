const path = require('path')
const markdownItContainer = require('markdown-it-container')
const { encodeAndStringify } = require('./utils')

const defaults = {
    onlineBtns: {
        codepen: true,
        jsfiddle: true,
        codesandbox: true,
    },

    // https://docs.jsfiddle.net/api/display-a-fiddle-from-post
    jsfiddle: {
        framework: 'library/pure',
    },

    // https://codesandbox.io/docs/importing#define-api
    codesandbox: {
        deps: {}, // dependencies
        json: '',
        query: 'module=App.vue',
        embed: '',
    },
}

module.exports = (options = {}) => {
    const {
        demoCodeMark = 'demo',
        copyOptions = {
            align: 'top',
            selector: '.demo-and-code-wrapper div[class*="language-"] pre',
        },
    } = options
    const END_TYPE = `container_${demoCodeMark}_close`

    return {
        name: 'vuepress-plugin-demo-code',
        plugins: [
            ['code-copy', copyOptions],
        ],
        enhanceAppFiles: [
            path.resolve(__dirname, 'enhanceAppFile.js'),
        ],
        extendMarkdown: (md) => {
            md.use(markdownItContainer, demoCodeMark, { render })
        },
    }

    function render (tokens, idx) {
        const { nesting, info } = tokens[idx]

        if (nesting === -1) {
            return '</template></DemoAndCode>\n'
        }

        let htmlStr = ''
        let lastLine = 0
        const language = (info.split(demoCodeMark)[1] || 'vue').trim()

        for (let index = idx; index < tokens.length; index++) {
            const { map, type, content } = tokens[index]

            if (type === END_TYPE) break

            // add empty lines
            if (map) {
                const delta = map[0] - (lastLine || map[1])

                if (delta > 0) {
                    htmlStr += '\n'.repeat(delta)
                }

                lastLine = map[1]
            }

            htmlStr += content
        }

        const {
            jsLibs = [],
            cssLibs = [],
            showText = 'show code',
            hideText = 'hide code',
            minHeight,
        } = options

        const jsfiddle = Object.assign({}, defaults.jsfiddle, options.jsfiddle)
        const onlineBtns = Object.assign({}, defaults.onlineBtns, options.onlineBtns)
        const codesandbox = Object.assign({}, defaults.codesandbox, options.codesandbox)

        const jsLibsStr = encodeAndStringify(jsLibs)
        const cssLibsStr = encodeAndStringify(cssLibs)
        const jsfiddleStr = encodeAndStringify(jsfiddle)
        const onlineBtnsStr = encodeAndStringify(onlineBtns)
        const codesandboxStr = encodeAndStringify(codesandbox)

        return `
            <DemoAndCode
                htmlStr="${encodeURIComponent(htmlStr)}"
                language="${language}"
                showText="${showText}"
                hideText="${hideText}"
                jsLibsStr="${jsLibsStr}"
                cssLibsStr="${cssLibsStr}"
                :minHeight="${minHeight}"
                jsfiddleStr="${jsfiddleStr}"
                onlineBtnsStr="${onlineBtnsStr}"
                codesandboxStr="${codesandboxStr}"
            >
                <template slot="demo">
        `
    }
}
