// 数字、字符串
export type str_num = string | number
// null、undefined
export type null_undefind = null | undefined


// 接口返回的数据类型
export interface responseType<T> {
    code: str_num;
    data: T;
    message: str_num | null_undefind;
}