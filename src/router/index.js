import Vue from 'vue'
import Router from 'vue-router'
import SegmentForm from '../pages/SegmentForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/SegmentForm/:deviceType/:popinfoId/',
      name: 'SegmentForm',
      component: SegmentForm
    }
  ]
})
