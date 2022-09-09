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

const store = useStore()
const locale = computed(() => (store.getters.language === 'zh' ? zhCn : en))
</script>
<style lang="scss"></style>
