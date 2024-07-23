import { type RouteLocation } from "vue-router"

// 加载组件
// export const _import = (path = "") => import(path)

// 常量路由
export const constantRoutes = [
    {
        path: "/login",
        component: () => import("@/views/login/index.vue"),
    },
    {
        path: "/welcome",
        component: () => import("@/views/welcome/index.vue"),
    },
    {
        path: "/user",
        component: () => import("@/views/user/index.vue"),
    },
    {
        path: "/404",
        component: () => import("@/views/404/index.vue"),
    },
    {
        // path: "*",
        // redirect: "/404",
        path: "/:pathMatch(.*)*",
        redirect: (to: RouteLocation) => {
            return { path: "/404", query: { redirect: to.fullPath } }
        },
    }
]