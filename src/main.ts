import { createApp } from "vue";
import router from "./router";
import pinia from "./store";

import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn.mjs";
// import en from 'element-plus/dist/locale/en.mjs'
import "element-plus/dist/index.css";

// 第三方svg 需要的配置代码
import "virtual:svg-icons-register";
import installComponent from "./components";
// 自定义插件
import installPlugin from "./plugin";

// 全局样式
import "@/styles/index.scss";
import "./style.css";

import App from "./App.vue";

// 创建应用实例
const app = createApp(App);
// 注册路由
app.use(router);
// 注册pinia
app.use(pinia);

// 引入UI库、国际化
app.use(ElementPlus, { locale: zhCn, size: "default" });

// 引入自定义全局组件
app.use(installComponent);
// 引入自定义插件
app.use(installPlugin);

app.mount("#app");

console.log("环境变量：：：", import.meta.env);
