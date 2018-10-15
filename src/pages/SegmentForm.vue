<template>
  <PageHeader>

  </PageHeader>
</template>

<script>
import PageHeader from '../components/PageHeader'

export default {
  name: 'SegmentForm',
  components: {PageHeader},
  data () {
    return {
      getPointAPIError: false,
      pointLogs: []
    }
  }
}

</script>
