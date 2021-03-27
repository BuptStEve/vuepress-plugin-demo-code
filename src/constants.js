const JS_RE = /<script>([\s\S]+)<\/script>/
const CSS_RE = /<style>([\s\S]+)<\/style>/
const HTML_RE = /<template>([\s\S]+)<\/template>/

const PLATFORMS = ['codepen', 'jsfiddle', 'codesandbox']

const ACTION_MAP = {
    codepen: 'https://codepen.io/pen/define',
    jsfiddle: 'https://jsfiddle.net/api/post/',
    codesandbox: 'https://codesandbox.io/api/v1/sandboxes/define',
}

const PLATFORM_TIP_MAP = {
    codepen: 'Codepen',
    jsfiddle: 'JSFiddle',
    codesandbox: 'CodeSandbox',
}

const CODE_SANDBOX_JS = `
import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
})`

const CODE_SANDBOX_HTML = '\n<div id="app"></div>'

module.exports = {
    JS_RE,
    CSS_RE,
    HTML_RE,
    PLATFORMS,
    ACTION_MAP,
    CODE_SANDBOX_JS,
    PLATFORM_TIP_MAP,
    CODE_SANDBOX_HTML,
}
