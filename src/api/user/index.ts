/*
 * @Author: 朽木白
 * @Date: 2023-02-27 09:50:34
 * @LastEditors: 1547702880@@qq.com
 * @LastEditTime: 2023-03-10 14:16:24
 * @Description: 系统用户登陆信息接口
 */
import http from '@/utils/http/httpMock'
import type { LoginData, UserRes } from './types'

/**
 * 登录
 */
export function login(data: LoginData) {
  return http.post<{ token: string }>('/admin/system/securityLogin/login', data)
  // return new Promise((resolve) => {
  //   resolve({
  //     code: 200,
  //     message: '登录成功',
  //     data: {
  //       token: 'System Token',
  //     },
  //   })
  // })
}

/**
 * 获取登录用户信息
 */
export function getUserInfo() {
  return http.get<UserRes>('/admin/system/index/info')
  // return new Promise((resolve) => {
  //   resolve({
  //     code: 200,
  //     message: '',
  //     data: {
  //       userId: 1,
  //       avatar:
  //         'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  //       name: 'admin',
  //       password: '111111',
  //       desc: '平台管理员',
  //       roles: ['平台管理员'],
  //       buttons: ['cuser.detail'],
  //       routers: [
  //         {
  //           path: '/system',
  //           component: 'Layout',
  //           meta: {
  //             title: '系统管理',
  //             icon: 'Lock',
  //             isHide: true,
  //           },
  //           children: [],
  //         },
  //       ],
  //       token: 'Admin Token',
  //     },
  //   })
  // })
}

/**
 * 退出登陆
 */
export function logout() {
  return http.post('/admin/system/index/logout')
}
