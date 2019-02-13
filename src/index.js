const path = require('path')
const getCodeHtml = require('./highlight')
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

module.exports = (options) => {
    const {
        demoCodeMark = 'demo',
        // props
        jsLibs = [],
        cssLibs = [],
        showText = 'show code',
        hideText = 'hide code',
        minHeight = 200,
        onlineBtns,
        codesandbox,
    } = options

    const END_TYPE = `container_${demoCodeMark}_close`

    return {
        name: 'vuepress-plugin-demo-code',
        enhanceAppFiles: [
            path.resolve(__dirname, 'enhanceAppFile.js'),
        ],
        extendMarkdown: (md) => {
            md.use(markdownItContainer, demoCodeMark, {
                render: (tokens, idx) => {
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

                    const jsLibsStr = encodeAndStringify(jsLibs)
                    const cssLibsStr = encodeAndStringify(cssLibs)
                    const onlineBtnsStr = encodeAndStringify(Object.assign({}, defaults.onlineBtns, onlineBtns))
                    const codesandboxStr = encodeAndStringify(Object.assign({}, defaults.codesandbox, codesandbox))

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
                                    ${getCodeHtml(htmlStr, language)}
                                </div>
                            </template>

                            <template slot="demo">
                    `
                },
            })
        },
    }
}
