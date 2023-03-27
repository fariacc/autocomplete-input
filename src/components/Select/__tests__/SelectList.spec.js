import { shallowMount } from '@vue/test-utils'
import SelectList from '../SelectList.vue'
import { cities } from './mockData'

describe('SelectList tests', () => {
  it('should show empty results string', async () => {
    const wrapper = shallowMount(SelectList, {
      props: {
        options: cities,
        searchTerm: 'random text',
        selectedOptions: [],
      },
    })

    const items = wrapper.findAll('.select-list__item-text')
    expect(items).toHaveLength(0)
    expect(wrapper.find('.select-list__empty-results').text()).toBe(
      'No results found. Try a different search term.'
    )
  })

  it('should not render the list if the search term has less than 3 characters', () => {
    const wrapper = shallowMount(SelectList, {
      props: {
        options: [],
        searchTerm: 'sa',
        selectedOptions: [],
      },
    })

    const items = wrapper.findAll('.select-list__item-text')
    expect(items).toHaveLength(0)
    expect(wrapper.find('.select-list__empty-results').exists()).toBe(false)
  })

  it('should render the list with city names if search term has at least 3 characters', () => {
    const wrapper = shallowMount(SelectList, {
      props: {
        options: cities,
        searchTerm: 'sant',
        selectedOptions: [],
      },
    })

    const items = wrapper.findAll('.select-list__item-text')
    expect(items).toHaveLength(2)
    expect(items.at(0).text()).toContain('santiago')
    expect(items.at(1).text()).toContain('santa rosa')
  })
})
