<template>
  <div class="navbar">
    <!-- 汉堡 -->
    <Hamburger class="hamburger-container"></Hamburger>
    <!-- 面包屑 -->
    <BreadCrumbs class="breadcrumb-container"></BreadCrumbs>

    <div class="right-menu">
      <Screenful class="right-menu-item hover-effect"></Screenful>
      <ThemeSelect class="right-menu-item hover-effect"></ThemeSelect>
      <LangSelect class="right-menu-item hover-effect"></LangSelect>
      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            src="https://aic-lego.oss-cn-hangzhou.aliyuncs.com/editor-uploads/kj.jpeg"
          >
          </el-avatar>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item> {{ $t('msg.navBar.home') }} </el-dropdown-item>
            </router-link>
            <a target="_blank" href="">
              <el-dropdown-item>
                {{ $t('msg.navBar.course') }}</el-dropdown-item
              >
            </a>
            <el-dropdown-item divided @click="logout">
              {{ $t('msg.navBar.logout') }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import Hamburger from '@/components/hamburger/index.vue'
import BreadCrumbs from '@/components/bread-crumbs/index.vue'
import LangSelect from '@/components/lang-select/index.vue'
import ThemeSelect from '@/components/theme-select/index.vue'
import Screenful from '@/components/screenful/index.vue'

const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.5s;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;
    :deep(.right-menu-item) {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: center;
      &.hover-effect {
        cursor: pointer;
      }
    }
    :deep(.avatar-container) {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
