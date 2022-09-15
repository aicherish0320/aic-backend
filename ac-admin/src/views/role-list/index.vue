<template>
  <div>
    <el-card>
      <el-table :data="allRoles" border style="width: 100%">
        <el-table-column
          type="index"
          :label="$t('msg.role.index')"
          width="120"
        ></el-table-column>
        <el-table-column
          :label="$t('msg.role.name')"
          prop="title"
        ></el-table-column>
        <el-table-column
          :label="$t('msg.role.desc')"
          prop="describe"
        ></el-table-column>
        <el-table-column
          :label="$t('msg.role.action')"
          width="200"
          #default="{ row }"
        >
          <el-button
            type="primary"
            size="mini"
            @click="onDistributePermission(row)"
            >{{ $t('msg.role.assignPermissions') }}</el-button
          >
        </el-table-column>
      </el-table>
    </el-card>
    <DistributePermission
      v-model="distributePermissionVisible"
      :roleId="selectRoleId"
    ></DistributePermission>
  </div>
</template>

<script setup>
import { roleList } from '@/api/role'
import { watchSwitchLang } from '@/utils/i18n'
import { ref } from 'vue'
import DistributePermission from './components/DistributePermission.vue'

const allRoles = ref([])
const getRoleList = async () => {
  allRoles.value = await roleList()
}

getRoleList()

watchSwitchLang(getRoleList)

const selectRoleId = ref('')
const distributePermissionVisible = ref(false)
const onDistributePermission = (row) => {
  selectRoleId.value = row.id
  distributePermissionVisible.value = true
}
</script>

<style lang="scss" scoped></style>
