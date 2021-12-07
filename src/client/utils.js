import { compressToBase64 } from '@amoutonbrady/lz-string'
import {
  CODE_SANDBOX_JS,
  CODE_SANDBOX_HTML,
} from './constants'

function compress (input) {
  return compressToBase64(input)
    .replace(/\+/g, '-') // Convert '+' to '-'
    .replace(/\//g, '_') // Convert '/' to '_'
    .replace(/=+$/, '') // Remove ending '='
}
// copy from codesandbox-import-utils/lib/api/define.js
const getParameters = (parameters) => {
  return compress(JSON.stringify(parameters))
}

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
const getCodeSandboxTmpl = ({
  js,
  css,
  html,
  deps,
  jsLibs,
  cssLibs,
  vueVersion,
}) => getParameters({
  files: {
    'index.js': { isBinary: false, content: CODE_SANDBOX_JS },
    'App.vue': {
      isBinary: false,
      content: (
        `<template>\n\n${html}\n\n</template>\n\n` +
        `<script>\n${js}\n</script>\n\n` +
        `<style>\n${css}\n</style>\n`
      ),
    },
    'index.html': {
      isBinary: false,
      content: (
        cssLibs.map(urlToHtmlTag('css')) +
        jsLibs.map(urlToHtmlTag('js')) +
        CODE_SANDBOX_HTML
      ),
    },
    'package.json': {
      isBinary: false,
      content: JSON.stringify({
        dependencies: Object.assign({ vue: vueVersion }, deps),
        devDependencies: {
          '@vue/cli-service': '^4.1.1',
        },
      }),
    },
  },
})

const parseAndDecode = str => JSON.parse(decodeURIComponent(str))
const encodeAndStringify = obj => encodeURIComponent(JSON.stringify(obj))

export {
  getJsTmpl,
  getHtmlTmpl,
  parseAndDecode,
  getMatchedResult,
  encodeAndStringify,
  getCodeSandboxTmpl,
}
