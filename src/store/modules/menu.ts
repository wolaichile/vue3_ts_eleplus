import { defineStore } from "pinia"
import { ref, computed } from "vue"

import { getMenuList } from "@/api/menu/index.ts"
import { menuType, menuResData } from "@/api/menu/type.ts"
import { null_undefind } from "@/utils/type"


// 组合式写法
export const useMenuStore = defineStore("menu", () => {

    const _menuList = ref<Array<menuType> | null_undefind>([])

    const menuList = computed(() => _menuList.value)

    const getUserMenuList = async () => {
        try {
            const res: menuResData = await getMenuList()
            _menuList.value = res.data
        } catch (error) {

        }
    }


    // 重置数据
    const $reset = () => { _menuList.value = [] }

    return { menuList, getUserMenuList, $reset }
})