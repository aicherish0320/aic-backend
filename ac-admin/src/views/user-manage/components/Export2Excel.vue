<template>
  <el-dialog
    :title="$t('msg.excel.title')"
    :model-value="modelValue"
    @close="closed"
    width="26%"
  >
    <el-input
      v-model="excelName"
      :placeholder="$t('msg.excel.placeholder')"
    ></el-input>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.excel.close') }}</el-button>
        <el-button type="primary" @click="onConfirm" :loading="loading">{{
          $t('msg.excel.confirm')
        }}</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { getUserManageAllList } from '@/api/userManage'
import { watchSwitchLang } from '@/utils/i18n'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { USER_RELATIONS } from './Export2ExcelConstants'
import { dateFormat } from '@/utils/date'

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emits = defineEmits(['update:modelValue'])

const i18n = useI18n()
let exportDefaultName = i18n.t('msg.excel.defaultName')
let excelName = ref(exportDefaultName)
watchSwitchLang(() => {
  exportDefaultName = i18n.t('msg.excel.defaultName')
  excelName.value = exportDefaultName
})

const closed = () => {
  loading.value = false
  emits('update:modelValue', false)
}

const loading = ref(false)
const onConfirm = async () => {
  loading.value = true
  const allUsers = (await getUserManageAllList()).list

  const excel = await import('@/utils/export2Excel')
  const data = formatJson(USER_RELATIONS, allUsers)
  excel.export_json_to_excel({
    header: Object.keys(USER_RELATIONS),
    data,
    filename: excelName.value || exportDefaultName,
    autoWidth: true,
    bookType: 'xlsx'
  })

  closed()
}

const formatJson = (headers, rows) => {
  return rows.map((item) => {
    return Object.keys(headers).map((key) => {
      if (headers[key] === 'openTime') {
        return dateFormat(item[headers[key]])
      }
      return item[headers[key]]
    })
  })
}
</script>

<style lang="scss" scoped></style>
