<template>
  <div class="upload-excel">
    <div class="btn-upload">
      <el-button :loading="loading" type="primary" @click="handleUpload">
        {{ $t('msg.uploadExcel.upload') }}</el-button
      >
    </div>

    <input
      type="file"
      ref="excelUploadInput"
      class="excel-upload-input"
      accept=".xlsx,.xls"
      @change="handleChange"
    />

    <div
      class="drop"
      @drop.stop.prevent="handleDrop"
      @dragover.stop.prevent="handleDragover"
      @dragenter.stop.prevent="handleDragover"
    >
      <UploadFilled style="width: 3em; height: 3em" />
      <span>{{ $t('msg.uploadExcel.drop') }}</span>
    </div>
  </div>
</template>

<script setup>
import { read, utils } from 'xlsx'
import { UploadFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { getHeaderRow, isExcel } from './utils'
import { ElMessage } from 'element-plus'

const props = defineProps({
  beforeUpload: Function,
  onSuccess: Function
})

const loading = ref(false)

const excelUploadInput = ref(null)
const handleUpload = () => {
  excelUploadInput.value.click()
}
const handleChange = (e) => {
  const files = e.target.files
  const rawFile = files[0]
  if (!rawFile) return
  upload(rawFile)
}

const upload = (rawFile) => {
  excelUploadInput.value.value = null

  if (!props.beforeUpload) {
    readerData(rawFile)
    return
  }

  const before = props.beforeUpload(rawFile)
  if (before) {
    readerData(rawFile)
  }
}
const readerData = (rawFile) => {
  loading.value = true
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const data = e.target.result
      const workbook = read(data, { type: 'array' })
      const firstSheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[firstSheetName]
      const header = getHeaderRow(worksheet)
      const results = utils.sheet_to_json(worksheet)
      generateData({ header, results })
      loading.value = true
      resolve()
    }
    reader.readAsArrayBuffer(rawFile)
  })
}

const generateData = (excelData) => {
  props.onSuccess && props.onSuccess(excelData)
}

const handleDrop = (e) => {
  if (loading.value) return
  const files = e.dataTransfer.files
  if (files.length !== 1) {
    ElMessage.error('必须要有一个文件')
    return
  }
  const rawFile = files[0]
  if (!isExcel(rawFile)) {
    ElMessage.error('文件必须是 .xlsx, .xls, .csv 格式')
    return false
  }
  // 触发上传事件
  upload(rawFile)
}
const handleDragover = (e) => {
  // 在新的位置生成源项的副本
  e.dataTransfer.dropEffect = 'copy'
}
</script>

<style lang="scss" scoped>
.upload-excel {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  .excel-upload-input {
    display: none;
    z-index: -9999;
  }
  .btn-upload,
  .drop {
    border: 1px dashed #bbb;
    width: 350px;
    height: 160px;
    text-align: center;
    line-height: 160px;
  }
  .drop {
    line-height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #bbb;
  }
}
</style>
