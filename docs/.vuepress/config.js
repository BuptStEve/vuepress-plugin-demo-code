const demoCode = require('../../src/')
const { name, description } = require('../../package.json')

module.exports = {
    base: '/' + name + '/',
    locales: {
        '/': { lang: 'en-US', title: 'demo-code', description },
        '/zh/': {
            lang: 'zh-CN',
            title: 'demo-code',
            description: '📝 同时展示 demo 和 code 的 vuepress 插件',
        },
    },
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }],
        ['link', { rel: 'stylesheet', href: `https://unpkg.com/animate.css@3.7.0/animate.min.css` }],
    ],
    plugins: [
        [demoCode, {
            cssLibs: [
                'https://unpkg.com/animate.css@3.7.0/animate.min.css',
            ],
            showText: 'show more',
            hideText: 'hide',
        }],
    ],
    markdown: {
        extendMarkdown: (md) => {
            md.use(require('markdown-it-include'))
        },
    },
    evergreen: true,
    serviceWorker: true,
    themeConfig: {
        repo: 'BuptStEve/' + name,
        docsDir: 'docs',
        sidebarDepth: 2,
        editLinks: true,
        serviceWorker: {
            updatePopup: {
                message: 'New content is available.',
                buttonText: 'Refresh',
            },
        },
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: 'New content is available.',
                        buttonText: 'Refresh',
                    },
                },
                nav: [
                    { text: 'Guide', link: '/' },
                    { text: 'Example', link: '/example/' },
                    {
                        text: 'Ecosystem',
                        items: [
                            { text: 'markdown-it-vuese', link: 'https://buptsteve.github.io/markdown-it-vuese/' },
                        ],
                    },
                ],
                sidebar: {
                    '/example/': [{
                        title: 'Example',
                        collapsable: false,
                        children: [
                            '',
                        ],
                    }],
                    '/': [['', 'Guide']],
                },
            },
            '/zh/': {
                selectText: '选择语言',
                label: '简体中文',
                editLinkText: '在 GitHub 上编辑此页',
                serviceWorker: {
                    updatePopup: {
                        message: '发现新内容可用。',
                        buttonText: '刷新',
                    },
                },
                nav: [
                    { text: '指南', link: '/zh/' },
                    { text: '示例', link: '/zh/example/' },
                    {
                        text: '生态系统',
                        items: [
                            { text: 'markdown-it-vuese', link: 'https://buptsteve.github.io/markdown-it-vuese/' },
                        ],
                    },
                ],
                sidebar: {
                    '/zh/example/': [{
                        title: 'Example',
                        collapsable: false,
                        children: [
                            '',
                        ],
                    }],
                    '/zh/': [['', 'Guide']],
                },
            },
        },
    },
}
