import { shallowMount } from '@vue/test-utils'
import InputTag from '../InputTag.vue'

describe('InputTag tests', () => {
  it('should not render the tag if no options were selected', async () => {
    const wrapper = shallowMount(InputTag, {
      props: {
        tag: null,
      },
    })

    expect(wrapper.find('.input-tag').exists()).toBe(false)
  })

  it('should show the tag when option was selected', () => {
    const wrapper = shallowMount(InputTag, {
      props: {
        tag: 'santiago',
      },
    })

    expect(wrapper.find('.input-tag')).toBeTruthy()
  })
})
