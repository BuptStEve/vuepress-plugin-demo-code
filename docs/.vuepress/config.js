const demoCode = require('../../src/')
const { name, description } = require('../../package.json')

module.exports = {
    base: '/' + name + '/',
    locales: {
        '/': { title: name, description },
    },
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }],
    ],
    plugins: [
        [demoCode, {
            showText: 'show more',
            hideText: 'hide',
            minHeight: 200,
        }]
    ],
    evergreen: true,
    serviceWorker: true,
    themeConfig: {
        repo: 'BuptStEve/' + name,
        docsDir: 'docs',
        nav: [
            { text: 'Guide', link: '/' },
            { text: 'Example', link: '/example/' },
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
        sidebarDepth: 2,
        editLinks: true,
        serviceWorker: {
            updatePopup: {
               message: 'New content is available.',
               buttonText: 'Refresh',
            },
        },
    },
}
