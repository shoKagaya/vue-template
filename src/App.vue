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
          <div class="registryForm_selectboxParent">
            <registryFormGender />
          </div>
        </fieldset>
        <fieldset class="registryForm_item">
          <legend class="registryForm_title">年代</legend>
          <div class="registryForm_selectboxParent">
            <registryFormAge />
          </div>
        </fieldset>
        <fieldset class="registryForm_item">
          <legend class="registryForm_title">居住地</legend>
          <div class="registryForm_selectboxParent">
            <registryFormResidence />
          </div>
        </fieldset>
      </form>
    </main>
    <button class="mod-nextBtn">登録する</button>
    <a
      href="undefined"
      class="mod-linkBtn">登録しない</a>
  </div>
</template>

<script>
import PageHeader from './components/pageHeader'
import RegistryFormGender from './components/registryFormGender'
import RegistryFormAge from './components/registryFormAge'
import RegistryFormResidence from './components/registryFormResidence'

export default {
  name: 'App',
  components: {
    PageHeader,
    RegistryFormGender,
    RegistryFormAge,
    RegistryFormResidence
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

.registryForm_item {
  margin-bottom: 24px;
}

.registryForm_title {
  font-size: 1.3rem;
  margin-bottom: 3px;
}

.registryForm_selectboxParent {
  position: relative;

  &::before {
    border-color: rgba(0, 0, 0, 0.5) transparent transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0;
    content: '';
    height: 0;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, 0);
    width: 0;
    z-index: 1;
  }
}
</style>
