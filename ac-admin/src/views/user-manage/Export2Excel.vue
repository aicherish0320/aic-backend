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
  emits('update:modelValue', false)
}

const loading = ref(false)
const onConfirm = async () => {
  loading.value = true
  const allUsers = await getUserManageAllList()
  console.log('allUsers >>> ', allUsers, allUsers.list)

  loading.value = false
  closed()
}
</script>

<style lang="scss" scoped></style>
