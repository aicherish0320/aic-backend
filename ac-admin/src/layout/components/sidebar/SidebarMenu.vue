<template>
  <el-menu
    :uniqueOpened="true"
    default-active="2"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <SidebarItem
      v-for="route in routes"
      :key="route.path"
      :route="route"
    ></SidebarItem>
  </el-menu>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { filterRoutes, generateMenus } from '@/utils/route'
import { computed } from 'vue'
import SidebarItem from './SidebarItem.vue'

const router = useRouter()

const routes = computed(() => {
  const fRoutes = filterRoutes(router.getRoutes())
  return generateMenus(fRoutes)
})
console.log('routes >>> ', JSON.stringify(routes.value))
</script>

<style lang="scss" scoped></style>
