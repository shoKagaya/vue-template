<template>
  <div class="l-wrapper">
    <main class="mainContents">
      <p class="readText">
        ユーザー情報を登録すると、登録されたユーザー情報に基づいて、あなたに適したお知らせが配信されるようになります。
      </p>
      <form class="registryForm">
        <fieldset
          v-for="item in segmentlist"
          :key="item[0].key_id"
          class="registryForm_item">
          <legend class="registryForm_title">
            {{ item[0].key_name }}
          </legend>
          <div class="registryForm_selectboxParent">
            <registryForm :segment-list="item" @changeSelected="setParams" />
          </div>
        </fieldset>
      </form>
    </main>
    <button
      class="mod-nextBtn"
      @click.prevent="postSegmentData()">登録する</button>
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
        >閉じる</a>
      </div>
    </div>
  </div>
</template>

<script>
import script from '@/scripts/SegmentForm'

export default {
  mixins: [script]
}
</script>


<style lang="scss">
@import '~@/assets/smacss/imports.scss';
</style>

<style scoped lang="scss">
.modal {
  background: rgba(0, 0, 0, 0.7);
  bottom: 0;
  height: 100%;
  left: 0;
  opacity: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: all 0.3s ease-In;
  visibility: hidden;
  width: 100%;
  z-index: -1;

  &.is-open {
    opacity: 1;
    visibility: visible;
    z-index: 10;
  }
}

.modal_inner {
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 15px 3px #595957;
  left: 50%;
  overflow: hidden;
  position: fixed;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  z-index: 20;
}

.modal_title {
  align-items: center;
  background-color: #45b035;
  color: #fff;
  display: flex;
  font-size: 1.7rem;
  font-weight: bold;
  height: 60px;
  justify-content: center;
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
