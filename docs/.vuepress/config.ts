import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

import demoCode from '../../src/node'
import { name, description } from '../../package.json'

const ecosystemItems = [
    { text: '📖markdown-it-vuese', link: 'https://buptsteve.github.io/markdown-it-vuese/' },
]

export default defineUserConfig<DefaultThemeOptions>({
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
        [demoCode, {
            cssLibs: [
                'https://unpkg.com/animate.css@3.7.0/animate.min.css',
            ],
            showText: 'show more',
            hideText: 'hide',
        }],
        require('./include-plugin'),
        [
          '@vuepress/plugin-search',
          {
            locales: {
              '/': {
                placeholder: 'Search',
              },
              '/zh/': {
                placeholder: '搜索',
              },
            },
          },
        ],
    ],
    themeConfig: {
        repo: 'BuptStEve/' + name,
        docsDir: 'docs',
        contributors: false,
        locales: {
            '/': {
                selectLanguageText: '🌍Languages',
                selectLanguageName: 'English',
                editLinkText: 'Edit this page on GitHub',
                navbar: [
                    { text: '🌱Guide', link: '/' },
                    { text: '😎Example', link: '/example/' },
                    { text: '🔥Ecosystem', children: ecosystemItems },
                ],
                sidebar: [
                    { text: '🌱Guide', link: '/' },
                    { text: '😎Example', link: '/example/' },
                ],
            },
            '/zh/': {
                selectLanguageText: '🌍选择语言',
                selectLanguageName: '简体中文',
                editLinkText: '在 GitHub 上编辑此页',
                navbar: [
                    { text: '🌱指南', link: '/zh/' },
                    { text: '😎示例', link: '/zh/example/' },
                    { text: '🔥生态系统', children: ecosystemItems },
                ],
                sidebar: [
                    { text: '🌱指南', link: '/zh/' },
                    { text: '😎示例', link: '/zh/example/' },
                ],
            },
        },
    },
})
