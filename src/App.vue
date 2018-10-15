<template>
  <div id="app">
    <SegmentForm/>
    <button class="mod-nextBtn">登録する</button>
  </div>
</template>

<script>
import SegmentForm from './pages/SegmentForm'

export default {
  name: 'App',
  components: {
    SegmentForm
  }
}
</script>

<style lang="scss">
@import '~@/assets/smacss/imports.scss';
</style>
