const { getParameters } = require('codesandbox-import-utils/lib/api/define')
const {
    CODE_SANDBOX_JS,
    CODE_SANDBOX_HTML,
} = require('./constants')

const getJsTmpl = (js) => {
    const vueAttrs = js
        .replace(/export\s+default\s*?\{\n*/, '')
        .replace(/\n*\}\s*$/, '')
        .trim()

    return `new Vue({\n\tel: '#app', \n\t${vueAttrs}\n})`
}

/* istanbul ignore next */
const getHtmlTmpl = html => `<div id="app">\n\n${html}\n\n</div>`

const getMatchedResult = (re) => (str) => {
    const matched = str.match(re)

    return matched && matched[1].trim()
}

/* istanbul ignore next */
const urlToHtmlTag = type => url => type === 'js'
    ? `<script src="${url}"></script>\n`
    : type === 'css'
        ? `<link rel="stylesheet" href="${url}">\n`
        : 'Error type: js | css'

/* istanbul ignore next */
const getCodeSandboxTmpl = ({ js, css, html, deps, jsLibs, cssLibs }) => getParameters({
    files: {
        'index.js': { content: CODE_SANDBOX_JS },
        'App.vue': {
            content:
                `<template>\n\n${html}\n\n</template>\n\n` +
                `<script>\n${js}\n</script>\n\n` +
                `<style>\n${css}\n</style>\n`,
        },
        'index.html': {
            content:
                cssLibs.map(urlToHtmlTag('css')) +
                jsLibs.map(urlToHtmlTag('js')) +
                CODE_SANDBOX_HTML,
        },
        'package.json': {
            content: {
                dependencies: Object.assign({ vue: 'latest' }, deps),
            },
        },
    },
})

const parseAndDecode = str => JSON.parse(decodeURIComponent(str))
const encodeAndStringify = obj => encodeURIComponent(JSON.stringify(obj))

module.exports = {
    getJsTmpl,
    getHtmlTmpl,
    parseAndDecode,
    getMatchedResult,
    encodeAndStringify,
    getCodeSandboxTmpl,
}
