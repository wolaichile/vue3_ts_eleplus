import { createRouter, createWebHistory } from "vue-router"
import { constantRoutes } from './routes'

const router = createRouter({
    // 路径严格匹配
    // strict: true,

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: constantRoutes || [],


    // 滚动行为
    // scrollBehavior(to, from, savedPosition) {
    //     if (savedPosition) {
    //         return savedPosition
    //     } else {
    //         return { top: 0, left: 0 }
    //     }
    // }
    scrollBehavior() {
        return { top: 0, left: 0 }
    }
})

export default router