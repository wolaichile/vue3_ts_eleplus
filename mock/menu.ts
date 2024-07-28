import { MockMethod } from 'vite-plugin-mock'


// 获取用户信息
function getMenuList() {
    return [{
        id: 1, name: '欢迎页',
        hiddren: false,
        path: '/welcome',
        icon: 'icon-shouye',
        filePath: 'welcome',
        parentId: 0
    }]
}

export default [
    {
        url: '/menu/list',
        method: 'post',
        response: () => {
            return {
                code: 200,
                data: getMenuList(),
                message: "成功"
            }
        }
    },
    {
        url: '/menu/info',
        method: 'post',
        response: () => {
            return {
                code: 200,
                data: getMenuList(),
                message: '成功'
            }
        }
    }
] as MockMethod[]