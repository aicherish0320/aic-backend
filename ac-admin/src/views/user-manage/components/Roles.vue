<template>
  <el-dialog
    :title="$t('msg.excel.roleDialogTitle')"
    :model-value="modelValue"
    @close="closed"
  >
    <el-checkbox-group v-model="userRoleTitleList">
      <el-checkbox
        v-for="item in allRoleList"
        :key="item.id"
        :label="item.title"
      >
      </el-checkbox>
    </el-checkbox-group>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.universal.cancel') }}</el-button>
        <el-button type="primary" @click="onConfirm">{{
          $t('msg.universal.confirm')
        }}</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { roleList } from '@/api/role'
import { userRoles, updateRole } from '@/api/userManage'
import { watchSwitchLang } from '@/utils/i18n'
import { ElMessage } from 'element-plus'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['update:modelValue', 'updateRole'])

const closed = () => {
  emits('update:modelValue', false)
}

const i18n = useI18n()
const onConfirm = async () => {
  const roles = userRoleTitleList.value.map((title) => {
    return allRoleList.value.find((role) => role.title === title)
  })

  await updateRole(props.userId, roles)
  ElMessage.success(i18n.t('msg.role.updateRoleSuccess'))
  closed()
  emits('updateRole')
}

const allRoleList = ref([])
const getRoleList = async () => {
  allRoleList.value = await roleList()
}
getRoleList()

watchSwitchLang(getRoleList)

const userRoleTitleList = ref([])

const getUserRoles = async () => {
  const ret = await userRoles(props.userId)
  userRoleTitleList.value = ret.role.map((item) => item.title)
}
watch(
  () => props.userId,
  (val) => {
    if (val) getUserRoles()
  }
)
</script>

<style lang="scss" scoped></style>
