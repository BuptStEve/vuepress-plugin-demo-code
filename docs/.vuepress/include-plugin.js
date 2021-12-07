
module.exports = () => {
    return {
        name: 'vuepress-plugin-include',
        extendsMarkdown: (md) => {
            md.use(require('markdown-it-include'), {
                root: './docs/',
                includeRe: /<\[include\](.+)/i,
                bracesAreOptional: true,
            })
        },
    }
}
