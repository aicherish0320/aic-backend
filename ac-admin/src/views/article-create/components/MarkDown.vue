<template>
  <div class="markdown-container">
    <div id="markdown-box"></div>
    <div class="bottom">
      <el-button type="primary" @click="onSubmitClick">{{
        $t('msg.article.commit')
      }}</el-button>
    </div>
  </div>
</template>

<script setup>
// const props = defineProps({
//   title: {
//     required: true,
//     type: String
//   },
//   detail: {
//     type: Object
//   }
// })

// const emits = defineEmits(['onSuccess'])
</script>

<style lang="scss" scoped>
.markdown-container {
  .bottom {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
