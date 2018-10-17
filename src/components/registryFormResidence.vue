<template>
  <select
    v-model="selected"
    name="residence"
    class="mod-selectbox">
    <option
      value="undefined"
      disabled
      selected>未選択</option>
    <option
      v-for="residence in residences"
      v-if="residence.key_id ===1324"
      :value="residence.value_name"
      :key="residence.value_id">
      {{ residence.value_name }}
    </option>
  </select>
</template>
<script>
export default {
  name: 'RegistryFormResidence',
  props: {
    residences: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selected: 'undefined'
    }
  },
  methods: {
    getSelected() {
      return this.selected
    }
  }
}
</script>
