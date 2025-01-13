import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import { type App } from "vue";

// 从 @element-plus/icons-vue 中导入所有图标并进行全局注册。
function install(app: App) {
  for (const [name, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(name, component);
  }
}

export default { install };
