<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>
<script setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { generateNewStyle, writeNewStyle } from './utils/theme'

const store = useStore()
const locale = computed(() => (store.getters.language === 'zh' ? zhCn : en))

generateNewStyle(store.getters.mainColor).then((newStyle) => {
  writeNewStyle(newStyle)
})
</script>
<style lang="scss"></style>
