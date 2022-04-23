import demoCode from '@/'

describe('vuepress-plugin-demo-code', () => {
  it('works well', () => {
    const result = demoCode()

    expect(result.name).toBe('vuepress-plugin-demo-code')
  })

  // helpers
})
