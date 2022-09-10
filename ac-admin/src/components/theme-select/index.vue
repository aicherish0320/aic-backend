<template>
  <el-dropdown
    v-bind="$attrs"
    triggger="click"
    class="theme"
    @command="handleSetTheme"
  >
    <!-- 图标 -->
    <div>
      <el-tooltip :content="$t('msg.navBar.themeChange')"></el-tooltip>
      <svg-icon icon="change-theme"></svg-icon>
    </div>
    <!-- menu -->
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">{{
          $t('msg.theme.themeColorChange')
        }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- 弹出层 -->
</template>

<script setup>
const handleSetTheme = (command) => {
  console.log('command >>> ', command)
}
</script>

<style lang="scss" scoped></style>
