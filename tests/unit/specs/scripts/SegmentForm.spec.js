import Router from 'vue-router'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import SegmentForm from '@/pages/SegmentForm'
import { segmentListData } from '../../test-data/segmentList-data'

describe('GetLatestExpired method in SegmentForm.vue', () => {
  let wrapper

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Router)
    const $route = {
      path: '/SegmentForm/:deviceType/:popinfoId/',
      name: 'SegmentForm',
      params: {
        deviceType: 'iphone',
        popinfoId: '30f82d8d-6f1d-4acb-ae4a-d07989490581'
      }
    }
    wrapper = shallowMount(SegmentForm, {
      mocks: {
        localVue,
        $route
      }
    })
  })

  it('Test for created view', () => {
    wrapper.setData({ segmentlist: segmentListData })
    expect(wrapper.findAll('legend').at(0).text()).toBe('性別')
    expect(wrapper.findAll('legend').at(1).text()).toBe('年代')
    expect(wrapper.findAll('legend').at(2).text()).toBe('居住地')
  })

  it('Test for getting parameter', () => {
    const $route = {
      path: '/SegmentForm/:deviceType/:popinfoId/',
      name: 'SegmentForm',
      params: {
        deviceType: 'iphone',
        popinfoId: '30f82d8d-6f1d-4acb-ae4a-d07989490581'
      }
    }
    expect(wrapper.vm.$route.params.deviceType).toEqual($route.params.deviceType)
  })

  it('Test for environment value', () => {
    process.env.VUE_APP_SERVER_API_ENDPOINT = undefined
    expect(wrapper.find('.registryForm').html()).toBe('<form class="registryForm"></form>')
  })

  it('Check emitted event', () => {
    const postSegmentData = jest.fn()
    wrapper.setMethods({ postSegmentData })
    wrapper.find('button').trigger('click')
    expect(postSegmentData).toBeCalled()
  })


})
