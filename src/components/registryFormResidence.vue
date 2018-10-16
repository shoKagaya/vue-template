<template>
  <select 
    name="residence" 
    class="mod-selectbox">
    <option 
      v-for="residence in residences" 
      :value="residence.text" 
      :key="residence.text">
      {{ residence.text }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'RegistryFormResidence',
  data() {
    return {
      residences: [
        { text: '未選択' },
        { text: '大垣市' },
        { text: '西濃地域（大垣市除く）' },
        { text: '岐阜市' },
        { text: '岐阜地域（岐阜市除く）' },
        { text: '中濃地域' },
        { text: '東濃地域' },
        { text: '飛騨地域' },
        { text: '名古屋市' },
        { text: '尾張地方（名古屋市除く）' },
        { text: '西三河地方' },
        { text: '東三河地方' },
        { text: '三重県' },
        { text: '滋賀県' },
        { text: '東京都' },
        { text: '大阪府' },
        { text: 'その他都道府県' }
      ]
    }
  }
}
</script>
