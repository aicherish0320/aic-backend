import request from '@/utils/request'

export const getUserManageList = (data) => {
  return request({
    url: '/user-manage/list',
    params: data
  })
}

export const userBatchImport = (data) => {
  return request({
    url: '/user-manage/batch/import',
    method: 'POST',
    data
  })
}
