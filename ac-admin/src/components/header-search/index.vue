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
        v-for="option in searchOptions"
        :key="option.item.path"
        :label="option.item.title.join(' > ')"
        :value="option.item"
      ></el-option>
    </el-select>
  </div>
</template>

<script setup>
import Fuse from 'fuse.js'
import { filterRoutes } from '@/utils/route'
import { generateRoutes } from './FuseData.js'
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { watchSwitchLang } from '@/utils/i18n.js'

const router = useRouter()
let searchPool = computed(() => {
  const fRoutes = filterRoutes(router.getRoutes())
  return generateRoutes(fRoutes)
})

let fuse

const initFuse = (searchPool) => {
  fuse = new Fuse(searchPool, {
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
}

initFuse(searchPool.value)

const isShow = ref(false)
const search = ref('')

const onShowClick = () => {
  isShow.value = !isShow.value
}

const searchOptions = ref([])
const querySearch = (query) => {
  if (query) {
    searchOptions.value = fuse.search(query)
  } else {
    searchOptions.value = []
  }
}

const onSelectChange = (value) => {
  router.push(value.path)
}

const headerSearchSelectRef = ref(null)
const onClose = () => {
  headerSearchSelectRef.value && headerSearchSelectRef.value.blur()
  isShow.value = false
  searchOptions.value = []
}
watch(isShow, (val) => {
  if (val) {
    headerSearchSelectRef.value.focus()
    document.body.addEventListener('click', onClose)
  } else {
    document.body.removeEventListener('click', onClose)
  }
})

watchSwitchLang(() => {
  searchPool = computed(() => {
    const fRoutes = filterRoutes(router.getRoutes())
    return generateRoutes(fRoutes)
  })
  initFuse(searchPool.value)
})
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

    :deep(.el-input__inner) {
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
