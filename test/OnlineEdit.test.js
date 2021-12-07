
import { shallowMount } from '@vue/test-utils'

import OnlineEdit from '@/OnlineEdit.vue'

describe('OnlineEdit', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(OnlineEdit, {
            props: {
                platform: 'codepen',
            },
        })
    })

    it('should be rendered', () => {
        expect(wrapper.element).toMatchSnapshot()
    })
})
