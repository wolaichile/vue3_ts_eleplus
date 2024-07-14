import * as ElementPlusIconsVue from "@element-plus/icons-vue"

import { type App } from "vue"

// 注册elementui svg icon
function install(app: App) {
    for (const [name, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(name, component)
    }
}

export default { install }