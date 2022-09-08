<template>
  <div class="app-wrapper">
    <Sidebar
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    ></Sidebar>
    <div class="main-container">
      <div class="fixed-header">
        <Navbar></Navbar>
      </div>
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/sidebar/index.vue'
import AppMain from './components/AppMain.vue'
import variables from '@/styles/variables.module.scss'
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>
