<template>
<select name="gender">
  <option v-for="item in items" :value="item.text" :key="item.text">
    {{ item.text }}
   </option>
</select>
</template>

<script>
export default {
  name: 'registryFormGender',
  data () {
    return {
      items: [
        {text: '未選択'},
        {text: '男性'},
        {text: '女性'},
        {text: 'その他'}
      ]
    }
  }
}
</script>
