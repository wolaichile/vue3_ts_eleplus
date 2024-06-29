import { createApp } from 'vue'

import ElementPlus from "element-plus"
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
import "element-plus/dist/index.css"

import installPlugin from './plugin'


import './style.css'
import App from './App.vue'


const app = createApp(App)

// 引入UI库、国际化
app.use(ElementPlus, { locale: zhCn })

// 引入自定义插件
app.use(installPlugin)

app.mount('#app')
