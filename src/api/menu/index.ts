import request from "@/utils/request"
import { menuResData, menuType } from './type'

// 获取菜单列表
export function getMenuList() {
    return request<any, menuResData>({
        url: '/menu/list',
        method: 'post',
    })
}

// 获取菜单信息
export function getMenuInfo() {
    return request<any, menuType>({
        url: '/menu/info',
        method: 'post'
    })
}