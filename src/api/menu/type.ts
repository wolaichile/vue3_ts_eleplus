import { responseType, null_undefind } from "@/utils/type"

// 登录接口携带参数类型
export interface menuType {
    id: number,
    name: string,
    path: string,
    filePath: string,
    icon: string,
    hidden: boolean,
    parentId: number,
    [propName: string]: any;
}

// 菜单接口响应数据类型
export type menuResData = responseType<Array<menuType> | null_undefind>


