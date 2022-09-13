<template>
  <UploadExcel :onSuccess="onSuccess"></UploadExcel>
</template>

<script setup>
import UploadExcel from '@/components/upload-excel/index.vue'

const onSuccess = (excelData) => {
  console.log('excelData >>> ', excelData)
}
</script>

<style lang="scss" scoped></style>
