const path = require('path')
const getCodeHtml = require('./highlight')
const markdownItContainer = require('markdown-it-container')

const MARK = 'demo'
const MARKUP = ':::'
const END_TYPE = `container_${MARK}_close`

module.exports = {
    name: 'vuepress-plugin-demo-code',
    enhanceAppFiles: [
        path.resolve(__dirname, 'enhanceAppFile.js'),
    ],
    extendMarkdown: (md) => {
        md.use(markdownItContainer, MARK, {
            render: (tokens, idx) => {
                const { nesting, markup, info } = tokens[idx]

                if (markup !== MARKUP) return ''
                if (nesting === -1) {
                    return '</template></DemoAndCode>\n'
                }

                let htmlStr = ''
                let lastLine = 0
                const language = (info.split(MARK)[1] || 'vue').trim()

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
                    <DemoAndCode>
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
