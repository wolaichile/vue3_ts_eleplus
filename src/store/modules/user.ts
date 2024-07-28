import { defineStore } from "pinia"

import { login } from "@/api/user/index.ts"
import { loginForm } from "@/api/user/type.ts"

import { useMenuStore } from './menu'
const menuStore = useMenuStore()

// options 写法
export const useUserStore = defineStore('user', {
    state() {
        return {
            id: "",
            name: "",
            info: {}
        }
    },
    getters: {
        userId: state => state.id,
        userName: state => state.name,
        userInfo: state => state.info,
    },
    actions: {
        // 登录
        async userLogin(data: loginForm) {
            try {
                const res = await login(data)
                this.info = res.data || {}
                this.id = res.data?.id || ""
                this.name = res.data?.name || ""
                await menuStore.getUserMenuList()
            } catch (error) {
                throw error
            }
        }
    }
})