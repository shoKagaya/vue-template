import { getServerInstance } from '@/api/'
import RegistryFormGender from '@/components/registryFormGender'
import RegistryFormAge from '@/components/registryFormAge'
import RegistryFormResidence from '@/components/registryFormResidence'

export default {
  name: 'SegmentForm',
  components: {
    RegistryFormGender,
    RegistryFormAge,
    RegistryFormResidence
  },
  data() {
    return {
      isModalActive: false,
      isLoadingCompleat: false,
      segmentlist: [],
      dType: this.$route.query.dType,
      popinfoId: this.$route.query.popinfoId
    }
  },
  created() {
    this.getSegmentlist()
  },
  methods: {
    getSegmentlist() {
      this.toggleLoading()
      getServerInstance()
        .get(`/api/3.0/users/status/${this.dType}/${this.popinfoId}/`)
        .then(res => {
          if (res.statusText !== 'OK' || res.status !== 200) {
            throw Error
          }
          this.segmentlist = res.data.result.segmentlist
        })
        .catch(err => {
          window.alert(err)
        })
        .finally(() => {
          this.toggleLoading()
        })
    },
    setParams() {
      const getSelectedValue = [
        this.$refs.gender.selected,
        this.$refs.age.selected,
        this.$refs.residence.selected
      ]
      return {
        appli_id: this.popinfoId,
        segmentlist: getSelectedValue,
        latest_wakeup_time: 'FROM_SEGMENT_FORM'
      }
    },
    postSegmentData() {
      this.toggleLoading()
      getServerInstance()
        .post(
          `/api/3.0/users/status/${this.dType}/${this.popinfoId}/`,
          this.setParams()
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
        .finally(() => {
          this.toggleLoading()
        })
    },
    toggleModal() {
      this.isModalActive = !this.isModalActive
    },
    toggleLoading() {
      this.isLoadingCompleat = !this.isLoadingCompleat
    }
  }
}
