<template>
  <div
    class="app-wrapper"
    :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']"
  >
    <Sidebar
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ backgroundColor: $store.getters.cssVar.menuBg }"
    ></Sidebar>
    <div class="main-container">
      <div class="fixed-header">
        <Navbar></Navbar>
        <!-- tags -->
        <TagsView id="guide-tags"></TagsView>
      </div>
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/sidebar/index.vue'
import AppMain from './components/AppMain.vue'
import TagsView from '@/components/tags-view/index.vue'
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
  transition: width #{$sideBarDuration};
}
.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
