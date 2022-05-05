import type { Plugin } from '@vuepress/core'

export interface DemoCodePluginOptions {
  /** Js libraries for the demo. */
  jsLibs?: string[],
  /** Css libraries for the demo. */
  cssLibs?: string[],
  /**
   * The semantic version string of vue. For more information on semantic versioning syntax, see the [npm semver calculator](https://semver.npmjs.com/).
   */
  vueVersion?: string,
  /** The display text of unfold code button. */
  showText?: string,
  /** The display text of fold code button. */
  hideText?: string,
  /** The height of the code when it is folded. */
  minHeight?: number,
  /** Display online edit buttons. */
  onlineBtns?: {
    codepen?: boolean,
    jsfiddle?: boolean,
    codesandbox?: boolean,
  },
  /**
   * It passes [jsfiddle options](https://docs.jsfiddle.net/api/display-a-fiddle-from-post).
   */
  jsfiddle?: Record<string, string>,
  /**
   * It passes [CodeSandbox options](https://codesandbox.io/docs/importing#define-api).
   * > `deps` is dependencies
   */
  codesandbox?: {
    deps?: Record<string, string>
    json?: string,
    query?: string,
    embed?: string,
  },
  /** The mark of the plugin, follows the tag after `:::`. */
  demoCodeMark?: string,
  /**
   * It passes [vuepress-plugin-code-copy](https://github.com/znicholasbrown/vuepress-plugin-code-copy#options)'s options, or `false` to disable it.
   */
  copyOptions?: false | {
    align?: string,
    selector?: string,
  },
}

export function demoCodePlugin (options?: DemoCodePluginOptions): Plugin

export default demoCodePlugin
