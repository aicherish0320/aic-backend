<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbData"
        :key="item.path"
      >
        <!-- 不可点击 -->
        <span v-if="index === breadcrumbData.length - 1" class="no-direct">{{
          item.meta.title
        }}</span>
        <!-- 可点击 -->
        <span v-else class="direct" @click="onLinkClick(item)">{{
          item.meta.title
        }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

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

const router = useRouter()
const onLinkClick = (item) => {
  router.push(item.path)
}

// 将来需要主题替换，所以 hover 的颜色我们设置为 主色
const store = useStore()
const linkHoverColor = ref(store.getters.cssVar.menuBg)
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .direct {
    color: #666;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      color: v-bind(linkHoverColor);
    }
  }
  .no-direct {
    color: #97a8be;
    cursor: text;
  }
}
</style>
