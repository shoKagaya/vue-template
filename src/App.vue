<template>
  <div
    id="app"
    class="l-wrapper">
    <pageHeader />
    <main class="mainContents">
      <p class="readText">
        ユーザー情報を登録すると、登録されたユーザー情報に基づいて、あなたに適したお知らせが配信されるようになります。
      </p>
      <form class="registryForm">
        <fieldset class="registryForm_item">
          <legend class="registryForm_title">性別</legend>
          <div class="registryForm_selectboxParent">
            <registryFormGender
              ref="gender"
              :genders="segmentlist" />
          </div>
        </fieldset>
        <fieldset class="registryForm_item">
          <legend class="registryForm_title">年代</legend>
          <div class="registryForm_selectboxParent">
            <registryFormAge
              ref="age"
              :ages="segmentlist" />
          </div>
        </fieldset>
        <fieldset class="registryForm_item">
          <legend class="registryForm_title">居住地</legend>
          <div class="registryForm_selectboxParent">
            <registryFormResidence
              ref="residence"
              :residences="segmentlist" />
          </div>
        </fieldset>
      </form>
    </main>
    <button
      class="mod-nextBtn"
      @click="postEvent">登録する</button>
    <a
      href="okbapp://input.segment.info.cancel"
      class="mod-linkBtn">登録しない</a>
    <div
      :class="{'is-open':isModalActive}"
      class="modal">
      <div class="modal_inner">
        <div class="modal_title">送信完了</div>
        <p class="modal_text">設定の変更を保存しました</p>
        <a
          href="okbapp://input.segment.info.complete"
          class="modal_exitBtn mod-ghostBtn"
          @click="toggleModal">閉じる</a>
      </div>
    </div>
    <div
      :class="{'is-open':isLoadingCompleat}"
      class="mod-loader"><div class="mod-loader__inner">Loading...</div></div>
  </div>
</template>

<script>
import axios from 'axios'
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
  },
  data() {
    return {
      isModalActive: false,
      isLoadingCompleat: false,
      segmentlist: []
    }
  },
  created() {
    this.getSegmentlist()
  },
  methods: {
    getAPI() {
      const SERVER_API_ENDPOINT = process.env.SERVER_API_ENDPOINT
      axios.defaults.timeout = process.env.REQUEST_TIMEOUT
      const serverInstance = axios.create({
        baseURL: SERVER_API_ENDPOINT
      })
      return serverInstance.get(SERVER_API_ENDPOINT)
    },
    getSegmentlist() {
      this.toggleLoading()
      this.getAPI()
        .then(res => {
          if (res.statusText !== 'OK' || res.status !== 200) {
            throw Error
          }
          this.segmentlist = res.data.result.segmentlist
        })
        .catch(err => {
          window.alert(err)
        })
        .finally(() => {
          this.toggleLoading()
        })
    },
    postEvent() {
      this.postSegmentData()
    },
    getValue() {
      const values = {
        gender: this.$refs.gender.getSelected(),
        age: this.$refs.age.getSelected(),
        residence: this.$refs.residence.getSelected()
      }
      return values
    },
    postSegmentData() {
      this.toggleLoading()
      const SERVER_API_ENDPOINT = process.env.SERVER_API_ENDPOINT
      axios
        //TODO: 送り先変える → conf.url_update + '?_=' + new Date().getTime(),
        .post(SERVER_API_ENDPOINT, this.getValue())
        .then(res => {
          if (res.statusText !== 'OK' || res.status !== 200) {
            throw Error
          }
          this.toggleModal()
        })
        .catch(err => {
          window.alert(err)
        })
        .finally(() => {
          this.toggleLoading()
        })
    },
    toggleModal() {
      this.isModalActive = !this.isModalActive
    },
    toggleLoading() {
      this.isLoadingCompleat = !this.isLoadingCompleat
    }
  }
}
</script>

<style lang="scss">
@import './assets/smacss/imports.scss';
</style>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  z-index: -1;
  background: rgba(0, 0, 0, 0.7);
  transition: all 0.3s ease-In;
  &.is-open {
    visibility: visible;
    opacity: 1;
    z-index: 10;
  }
}
.modal_inner {
  background-color: #fff;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0px 2px 15px 3px #595957;
}
.modal_title {
  background-color: #45b035;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #fff;
  font-size: 1.8rem;
  letter-spacing: 2px;
}
.modal_text {
  padding: 32px 20px;
  text-align: left;
}
.modal_exitBtn {
  margin-bottom: 32px;
}
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
