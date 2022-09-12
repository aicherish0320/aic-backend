<template>
  <div class="my-container">
    <el-row>
      <el-col :span="6">
        <ProjectCard class="project-card"></ProjectCard>
      </el-col>
      <el-col :span="18">
        <el-card>
          <el-tabs v-model="activeName">
            <el-tab-pane :label="$t('msg.profile.feature')">
              <Feature></Feature>
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.chapter')">
              <Chapter></Chapter>
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.author')">
              <Author></Author>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from './components/ProjectCard.vue'
import Feature from './components/Feature.vue'
import Chapter from './components/Chapter.vue'
import Author from './components/Author.vue'

const activeName = ref('feature')
</script>

<style lang="scss" scoped>
.my-container {
  .user-card {
    margin-right: 20px;
  }
}
</style>
