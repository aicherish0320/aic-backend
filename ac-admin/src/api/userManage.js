import request from '@/utils/request'

export const getUserManageList = (data) => {
  return request({
    url: '/user-manage/list',
    params: data
  })
}

export const getUserManageAllList = () => {
  return request({
    url: '/user-manage/all-list'
  })
}

export const userBatchImport = (data) => {
  return request({
    url: '/user-manage/batch/import',
    method: 'POST',
    data
  })
}

export const deleteUser = (id) => {
  return request({
    url: `/user-manage/detele/${id}`
  })
}
