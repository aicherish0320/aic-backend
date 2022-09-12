<template>
  <el-row class="mb-4">
    <el-button type="primary">Primary</el-button>
  </el-row>
  <div>
    {{ $t('msg.test') }}
  </div>

  <el-pagination
    :page-size="100"
    :small="small"
    layout="total, prev, pager, next"
    :total="1000"
  />
</template>

<script setup></script>

<style lang="scss" scoped></style>
