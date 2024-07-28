import { MockMethod } from 'vite-plugin-mock'


// 获取用户信息
function getUserInfo() {
    return { id: 1, name: '张三', age: 18 }
}

export default [
    {
        url: '/user/login',
        method: 'post',
        headers: { 'A-token': '1234567890' },
        response: () => {
            return {
                code: 200,
                data: getUserInfo(),
                message: "登陆成功"
            }
        }
    },
    {
        url: '/user/info',
        method: 'post',
        response: () => {
            return {
                code: 200,
                data: getUserInfo(),
                message: '获取用户信息成功'
            }
        }
    }
] as MockMethod[]