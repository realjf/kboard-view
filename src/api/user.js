import request from '@/libs/util'

export function user(data) {
  return request({
    url: '/user/index',
    method: 'post',
    data: data,
  })
}
