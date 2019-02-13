const path = require('path')
const getHighlightCodeHtml = require('./highlight')
const { encodeAndStringify } = require('./utils')
const markdownItContainer = require('markdown-it-container')

const defaults = {
    onlineBtns: {
        codepen: true,
        jsfiddle: true,
        codesandbox: true,
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
    const { demoCodeMark = 'demo' } = options
    const END_TYPE = `container_${demoCodeMark}_close`

    return {
        name: 'vuepress-plugin-demo-code',
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
            if (type === 'html_block') {
                const delta = map[0] - (lastLine || map[1])

                if (delta > 0) {
                    htmlStr += '\n'.repeat(delta)
                }

                htmlStr += content
                lastLine = map[1]
            }
        }

        const {
            jsLibs = [],
            cssLibs = [],
            showText = 'show code',
            hideText = 'hide code',
            minHeight,
        } = options

        const onlineBtns = Object.assign({}, defaults.onlineBtns, options.onlineBtns)
        const codesandbox = Object.assign({}, defaults.codesandbox, options.codesandbox)

        const jsLibsStr = encodeAndStringify(jsLibs)
        const cssLibsStr = encodeAndStringify(cssLibs)
        const onlineBtnsStr = encodeAndStringify(onlineBtns)
        const codesandboxStr = encodeAndStringify(codesandbox)

        return `
            <DemoAndCode
                htmlStr="${encodeURIComponent(htmlStr)}"
                showText="${showText}"
                hideText="${hideText}"
                jsLibsStr="${jsLibsStr}"
                cssLibsStr="${cssLibsStr}"
                :minHeight="${minHeight}"
                onlineBtnsStr="${onlineBtnsStr}"
                codesandboxStr="${codesandboxStr}"
            >
                <template slot="code">
                    <div class="language-${language} extra-class">
                        ${getHighlightCodeHtml(htmlStr, language)}
                    </div>
                </template>

                <template slot="demo">
        `
    }
}
