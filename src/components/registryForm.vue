<template>
  <div>
    <select
      v-bind:value="selected"
      v-on:change="changeSelected"
      name="registryForm"
      class="mod-selectbox">
      <option
        v-for="item in segmentList"
        :value="item.value_name"
        :key="item.value_id">
        {{ item.value_name }}
      </option>
    </select>
    <input
      :value="selected"
      type="hidden"
      class="js-getSelected" >
  </div>
</template>

<script>
export default {
  name: 'RegistryForm',
  props: {
    segmentList: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      selected: '',
      keyId: '',
      segmentValueMap: new Map()
    }
  },
  mounted() {
    this.keyId = this.segmentList[0].key_id
    this.segmentList.forEach(item => {
      this.segmentValueMap.set(item.value_name, item.value_id)
      if (item.is_set === true) {
        this.selected = item.value_name
      }
    })
  },
  methods: {
    changeSelected: function(ev) {
      this.selected = ev.target.value
      this.$emit('changeSelected', [
        this.keyId, this.segmentValueMap.get(this.selected)
      ])
    }
  }
}
</script>
