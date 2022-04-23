
import { shallowMount } from '@vue/test-utils'

import OnlineEdit from '@/client/OnlineEdit.vue'

describe('OnlineEdit', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(OnlineEdit, {
      propsData: {
        platform: 'codepen',
      },
    })
  })

  it('should be rendered', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
