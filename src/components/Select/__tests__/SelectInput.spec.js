import { shallowMount } from '@vue/test-utils'
import SelectInput from '../SelectInput.vue'
import { cities } from './mockData'

describe('SelectInput tests', () => {
  it('should show the field label', () => {
    const wrapper = shallowMount(SelectInput, {
      props: {
        options: cities,
        fieldId: 'cities',
        fieldLabel: 'Cities',
      },
    })

    expect(wrapper.find('.select-input__label').text()).toBe('Cities')
  })

  it('should remove tag from list when clicking on x icon', async () => {
    const wrapper = shallowMount(SelectInput, {
      props: {
        options: cities,
        fieldId: 'cities',
        fieldLabel: 'Cities',
      },
    })

    wrapper.vm.selectedOptions = cities

    await wrapper.vm.handleRemove('santa rosa')
    expect(wrapper.vm.selectedOptions).not.toContain('santa rosa')
  })
})
