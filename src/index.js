const path = require('path')
const getCodeHtml = require('./highlight')
const markdownItContainer = require('markdown-it-container')

module.exports = (options) => {
    const {
        demoCodeMark = 'demo',
        // props
        jsLibs = [],
        cssLibs = [],
        showText = 'show code',
        hideText = 'hide code',
        minHeight = 200,
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

                    return `
                        <DemoAndCode
                            htmlStr="${encodeURIComponent(htmlStr)}"
                            showText="${showText}"
                            hideText="${hideText}"
                            jsLibsStr="${encodeURIComponent(JSON.stringify(jsLibs))}"
                            cssLibsStr="${encodeURIComponent(JSON.stringify(cssLibs))}"
                            :minHeight="${minHeight}"
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
