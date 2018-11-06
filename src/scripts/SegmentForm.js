import { getServerInstance } from '@/api/'
import RegistryForm from '@/components/registryForm'

export default {
  name: 'SegmentForm',
  components: {
    RegistryForm
  },
  data() {
    return {
      isModalActive: false,
      segmentlist: [],
      segmentParams: {
        latest_wakeup_time: 'FROM_SEGMENT_FORM',
        segmentlist: {}
      },
      dType: this.$route.params.deviceType,
      popinfoId: this.$route.params.popinfoId
    }
  },
  created() {
    this.getSegmentlist()
  },
  methods: {
    getSegmentlist() {
      getServerInstance()
        .get(`/api/3.0/users/status/${this.dType}/${this.popinfoId}/`)
        .then(res => {
          if (res.statusText !== 'OK' || res.status !== 200) {
            throw Error
          }
          this.groupBy(res.data.result.segmentlist)
        })
        .catch(err => {
          window.alert(err)
        })
    },
    /**
     * lodash関数の.groupByでkey_idの値でグルーピング
     * vue dataのsegmentlistに代入
     * @param  {string[]} list apiから返ってくるjsonデータ
     */
    groupBy(list) {
      const keys = this.$lodash.groupBy(list, 'key_id')
      const groupedList = []
      for (const key in keys) {
        groupedList.push(keys[+key])
      }
      this.segmentlist = groupedList
    },
    setParams(val) {
      this.segmentParams.segmentlist[val[0].toString()] = [val[1].toString()]
    },
    postSegmentData() {
      getServerInstance()
        .post(
          `/api/3.0/users/update/${this.dType}/${this.popinfoId}/`,
          this.segmentParams
        )
        .then(res => {
          if (res.statusText !== 'OK' || res.status !== 200) {
            throw Error
          }
          this.toggleModal()
        })
        .catch(err => {
          window.alert(err)
        })
    },
    toggleModal() {
      this.isModalActive = !this.isModalActive
    }
  }
}
