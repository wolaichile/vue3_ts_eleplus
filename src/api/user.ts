import request from "@/utils/request"

// 登录
export function login() {
    return request({
        url: '/user/login',
        method: 'post'
    })
}

// 获取用户信息
export function getUserInfo() {
    return request({
        url: '/user/info',
        method: 'post'
    })
}