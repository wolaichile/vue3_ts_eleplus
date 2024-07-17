import { responseType, str_num, null_undefind } from "@/utils/type"

// 登录接口携带参数类型
export interface loginForm {
    username: string,
    password: string
}

// 登录接口响应数据类型
export type loginResData = responseType<{
    token: string,
    [propName: string]: any;
}>

// 用户信息
export interface userInfo {
    id: str_num,
    name: string,
    age: str_num,
    [propName: string]: any;
}

// 用户信息列表接口响应数据类型
export type userInfoResData = responseType<Array<userInfo> | null_undefind>

