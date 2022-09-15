import request from '@/utils/request'

export const roleList = () => {
  return request({
    url: '/role/list'
  })
}

export const rolePermission = (roleId) => {
  return request({
    url: `/role/permission/${roleId}`
  })
}

export const distributePermission = (data) => {
  return request({
    url: '/role/distribute-permission',
    method: 'POST',
    data
  })
}
