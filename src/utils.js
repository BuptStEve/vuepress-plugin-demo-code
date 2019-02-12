const getJsTmpl = (js) => {
    const vueAttrs = js
        .replace(/export\s+default\s*?\{\n*/, '')
        .replace(/\n*\}\s*$/, '')
        .trim()

    return `new Vue({\n\tel: '#app', \n\t${vueAttrs}\n})`
}

const getHtmlTmpl = html => `<div id="app">\n\n${html}\n\n</div>`

const getMatchedResult = (re) => (str) => {
    const matched = str.match(re)

    return matched && matched[1].trim()
}

export {
    getJsTmpl,
    getHtmlTmpl,
    getMatchedResult,
}
