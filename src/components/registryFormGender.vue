<template>
  <select
    v-model="selected"
    name="gender"
    class="mod-selectbox">
    <option
      value=""
      disabled
      selected>未選択</option>
    <option
      v-for="gender in genders"
      v-if="gender.key_id ===101"
      :value="gender.value_name"
      :key="gender.value_name">
      {{ gender.value_name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'RegistryFormGender',
  props: {
    genders: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selected: ''
    }
  }
}
</script>
