import { defineClientAppEnhance } from '@vuepress/client'
import DemoAndCode from './DemoAndCode.vue'

export default defineClientAppEnhance(({ app }) => {
  app.component('DemoAndCode', DemoAndCode)
})
