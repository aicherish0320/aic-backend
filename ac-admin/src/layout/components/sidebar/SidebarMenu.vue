<template>
  <el-menu
    :uniqueOpened="true"
    default-active="2"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!-- 子集 -->
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-submenu>
    <!-- 具体菜单 -->
    <el-menu-item index="2">
      <i class="el-icon-location"></i>
      <template #title>导航4</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { filterRoutes, generateMenus } from '@/utils/route'
import { computed } from 'vue'

const router = useRouter()

const routes = computed(() => {
  const fRoutes = filterRoutes(router.getRoutes())
  return generateMenus(fRoutes)
})
console.log('routes >>> ', JSON.stringify(routes.value))
</script>

<style lang="scss" scoped></style>
