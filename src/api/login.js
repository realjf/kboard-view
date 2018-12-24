import request from '@/libs/util'

export function login(data) {
  return request({
    url: '/user/index',
    method: 'post',
    data: data,
  })
}
