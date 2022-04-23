import {
  getJsTmpl,
  parseAndDecode,
  getMatchedResult,
  encodeAndStringify,
} from '@/client/utils'

describe('utils', () => {
  it('getJsTmpl', () => {
    const code = '  export default { data: () => ({}) }\n\n\n'
    const result = getJsResult('data: () => ({})')

    expect(getJsTmpl('')).toBe(getJsResult(''))
    expect(getJsTmpl(code)).toBe(result)
  })

  it('getMatchedResult', () => {
    const re = /export default {(.*)}/
    const code = '  export default { data: () => ({}) }\n\n\n'
    const result = getMatchedResult(re)(code)

    expect(result).toBe('data: () => ({})')
  })

  it('parseAndDecode and encodeAndStringify', () => {
    const obj = { a: 1 }
    const arr = [1, 2, 3, obj]

    expect(parseAndDecode(encodeAndStringify(obj))).toEqual(obj)
    expect(parseAndDecode(encodeAndStringify(arr))).toEqual(arr)
  })

  // helpers

  function getJsResult (str) {
    return `new Vue({\n\tel: '#app', \n\t${str}\n})`
  }
})
