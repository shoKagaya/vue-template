<template>
  <div id="app">
    <pageHeader />
    <main class="mainContents">
      <p class="readText">
        ユーザー情報を登録すると、登録されたユーザー情報に基づいて、あなたに適したお知らせが配信されるようになります。
      </p>
      <form class="registryForm">
        <fieldset class="registryForm_item">
          <legend class="registryForm_title">性別</legend>
          <registryFormGender />
        </fieldset>
        <fieldset class="registryForm_item">
          <legend class="registryForm_title">年代</legend>
          <registryFormAge />
        </fieldset>
        <fieldset class="registryForm_item">
          <legend class="registryForm_title">居住地</legend>
          <registryFormResidence />
        </fieldset>
      </form>
    </main>
    <button class="mod-nextBtn">登録する</button>
    <a href="undefined" class="mod-linkBtn">登録しない</a>
  </div>
</template>

<script>
import pageHeader from './components/pageHeader'
import registryFormGender from './components/registryFormGender'
import registryFormAge from './components/registryFormAge'
import registryFormResidence from './components/registryFormResidence'

export default {
  name: 'App',
  components: {
    pageHeader,
    registryFormGender,
    registryFormAge,
    registryFormResidence
  }
}
</script>

<style lang="scss">
@import './assets/smacss/imports.scss';
</style>

<style scoped lang="scss">
.readText {
  font-size: 1.4rem;
  margin-bottom: 24px;
}
</style>
