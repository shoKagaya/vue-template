import Vue from 'vue'
import Router from 'vue-router'
import SegmentForm from '../pages/SegmentForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/SegmentForm',
      name: 'SegmentForm',
      component: SegmentForm,
      props: route => ({
        popinfoId: route.query.popinfoId,
        dType: route.query.dType
      })
    }
  ]
})
