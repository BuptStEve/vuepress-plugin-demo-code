
import { shallowMount } from '@vue/test-utils'

import DemoAndCode from '@/DemoAndCode.vue'

describe('DemoAndCode', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(DemoAndCode, {
            attachToDocument: true,
        })
    })

    it('should be rendered', () => {
        expect(wrapper.element).toMatchSnapshot()
    })

    it('should validate minHeight', () => {
        const validateFn = wrapper.vm.$options.props.minHeight.validator

        expect(validateFn(-1)).toBeFalsy()

        expect(validateFn(0)).toBeTruthy()
        expect(validateFn(1)).toBeTruthy()
        expect(validateFn(9.8)).toBeTruthy()
        expect(validateFn(99.0)).toBeTruthy()
        expect(validateFn(100.0)).toBeTruthy()
    })
})
