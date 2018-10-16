<template>
  <select 
    name="gender" 
    class="mod-selectbox">
    <option 
      v-for="gender in genders" 
      :value="gender.text" 
      :key="gender.text">
      {{ gender.text }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'RegistryFormGender',
  data() {
    return {
      genders: [
        { text: '未選択' },
        { text: '男性' },
        { text: '女性' },
        { text: 'その他' }
      ]
    }
  }
}
</script>
