<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item
      ><a href="/">promotion management</a></el-breadcrumb-item
    >
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>
      <span class="no-direct">promotion detail</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

// 生成数组数据
const breadcrumbData = ref([])
const getBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter((r) => r.meta && r.meta.title)
}

// 监听路由变化
const route = useRoute()
watch(
  route,
  () => {
    getBreadcrumbData()
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .no-direct {
    color: #97a8be;
    cursor: text;
  }
}
</style>
