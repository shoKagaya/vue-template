<template>
  <select 
    name="age" 
    class="mod-selectbox">
    <option 
      v-for="age in ages" 
      :value="age.text" 
      :key="age.text">
      {{ age.text }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'RegistryFormAge',
  data() {
    return {
      ages: [
        { text: '未選択' },
        { text: '10代' },
        { text: '20代' },
        { text: '30代' },
        { text: '40代' },
        { text: '50代' },
        { text: '60代以上' }
      ]
    }
  }
}
</script>
