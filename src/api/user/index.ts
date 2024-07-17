import request from "@/utils/request"
import { loginForm, loginResData, userInfoResData } from './type'

// 登录
export function login(data: loginForm) {
    return request<any, loginResData>({
        url: '/user/login',
        method: 'post',
        data
    })
}

// 获取用户信息
export function getUserInfo() {
    return request<any, userInfoResData>({
        url: '/user/info',
        method: 'post'
    })
}