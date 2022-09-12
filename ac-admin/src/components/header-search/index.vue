<template>
  <div
    :class="{ show: isShow }"
    class="header-search"
    @click.stop="onShowClick"
  >
    <svg-icon id="guide-search" class-name="search-icon" icon="search" />
    <el-select
      ref="headerSearchSelectRef"
      class="header-search-select"
      v-model="search"
      filterable
      default-first-option
      remote
      :remote-method="querySearch"
      placeholder="search"
      @change="onSelectChange"
    >
      <el-option
        v-for="option in 5"
        :key="option"
        :babel="option"
        :value="option"
      ></el-option>
    </el-select>
  </div>
</template>

<script setup>
import Fuse from 'fuse.js'
import { filterRoutes } from '@/utils/route'
import { generateRoutes } from './FuseData.js'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchPool = computed(() => {
  const fRoutes = filterRoutes(router.getRoutes())
  return generateRoutes(fRoutes)
})

const fuse = new Fuse(searchPool.value, {
  shouldSort: true,
  minMatchCharLength: 1,
  keys: [
    {
      name: 'title',
      weight: 0.7
    },
    {
      name: 'path',
      weight: 0.3
    }
  ]
})

const isShow = ref(false)
const search = ref('')

const onShowClick = () => {
  isShow.value = !isShow.value
}

const querySearch = (query) => {
  console.log(fuse.search(query))
}

const onSelectChange = () => {}
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;
  :deep(.search-icon) {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }
  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
