const { defineConfig } = require('vuepress/config')

const demoCode = require('../../src/node')
const { name, description } = require('../../package.json')

/**
 * @type {import('../../src/node').DemoCodePluginOptions}
 */
const demoCodeOptions = {
  cssLibs: [
    'https://unpkg.com/animate.css@3.7.0/animate.min.css',
  ],
  showText: 'show more',
  hideText: 'hide',
}

module.exports = defineConfig({
  base: `/${name}/`,
  locales: {
    '/': { lang: 'en-US', title: 'demo-code', description },
    '/zh/': {
      lang: 'zh-CN',
      title: 'demo-code',
      description: '📝 同时展示 demo 和 code 的 vuepress 插件',
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/animate.css@3.7.0/animate.min.css' }],
  ],
  plugins: [
    ['smooth-scroll'],
    // @ts-ignore
    [demoCode, demoCodeOptions],
  ],
  markdown: {
    extendMarkdown: (md) => {
      md.use(require('markdown-it-include'), {
        root: './docs/',
        includeRe: /<\[include\](.+)/i,
        bracesAreOptional: true,
      })
    },
  },
  evergreen: true,
  serviceWorker: true,
  themeConfig: {
    repo: 'BuptStEve/' + name,
    docsDir: 'docs',
    sidebarDepth: 2,
    editLinks: true,
    locales: {
      '/': {
        selectText: '🌍Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          { text: '🌱Guide', link: '/' },
          { text: '😎Example', link: '/example/' },
          {
            text: '🔥Ecosystem',
            items: [
              { text: '📖markdown-it-vuese', link: 'https://buptsteve.github.io/markdown-it-vuese/' },
            ],
          },
        ],
        sidebar: {
          '/example/': [{
            title: '😎Example',
            collapsable: false,
            children: [''],
          }],
          '/': [['', '🌱Guide']],
        },
      },
      '/zh/': {
        selectText: '🌍选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          { text: '🌱指南', link: '/zh/' },
          { text: '😎示例', link: '/zh/example/' },
          {
            text: '🔥生态系统',
            items: [
              { text: '📖markdown-it-vuese', link: 'https://buptsteve.github.io/markdown-it-vuese/' },
            ],
          },
        ],
        sidebar: {
          '/zh/example/': [{
            title: '😎示例',
            collapsable: false,
            children: [''],
          }],
          '/zh/': [['', '🌱指南']],
        },
      },
    },
  },
})
