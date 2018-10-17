<template>
  <select
    v-model="selected"
    name="age"
    class="mod-selectbox">
    <option
      value="undefined"
      disabled
      selected>未選択</option>
    <option
      v-for="age in ages"
      v-if="age.key_id ===872"
      :value="age.value_name"
      :key="age.value_id">
      {{ age.value_name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'RegistryFormAge',
  props: {
    ages: {
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
