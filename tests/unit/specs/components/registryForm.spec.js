import { mount, createLocalVue } from '@vue/test-utils'
import registryForm from '@/components/registryForm.vue'
import { segmentListData } from '../../test-data/segmentList-data'

describe('registryForm.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(registryForm, {
      propsData: {
        segmentList: segmentListData[0]
      }
    })
  })

  it('props経由で受け取ったsegmentListが期待通りか', () => {
    expect(wrapper.find('select').text()).toBe('女性')
  })
})
