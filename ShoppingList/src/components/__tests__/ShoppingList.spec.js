import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ShoppingList from '../ShoppingList.vue'

describe('ShoppingList', () => {
  it('renders properly', () => {
    const wrapper = mount(ShoppingList)
    expect(wrapper.text()).toContain('Banana Oranges Mangoes');
  })
  it('adds new item', async () => {
    const wrapper = mount(ShoppingList)
    await wrapper.find('input[type="text"]').setValue("Grapes")
    await wrapper.find('input[type="text"]').trigger('keyup.enter')
    expect(wrapper.text()).toContain('Banana Oranges Mangoes Grapes');
  })

})
