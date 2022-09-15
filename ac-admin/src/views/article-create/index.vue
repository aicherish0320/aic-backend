<template>
  <div class="article-create">
    <el-card>
      <el-input
        class="title-input"
        :placeholder="$t('msg.article.titlePlaceholder')"
        v-model="title"
        maxlength="20"
        clearable
      ></el-input>
      <el-tabs v-model="activeName">
        <el-tab-pane :label="$t('msg.article.markdown')" name="markdown"
          >1</el-tab-pane
        ><el-tab-pane :label="$t('msg.article.richText')" name="editor"
          >2</el-tab-pane
        ></el-tabs
      >
    </el-card>
  </div>
</template>

<script setup>
import { articleDetail } from '@/api/article'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const activeName = ref('markdown')
const title = ref('')

// const onSuccess = () => {
//   title.value = ''
// }

const route = useRoute()
const articleId = route.params.id
const detail = ref({})
const getArticleDetail = async () => {
  detail.value = await articleDetail(articleId)
  title.value = detail.value.title
}

if (articleId) {
  getArticleDetail()
}
</script>

<style lang="scss" scoped>
.title-input {
  margin-bottom: 20px;
}
</style>
