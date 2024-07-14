# vue3_ts_eleplus
这是一个vue3+TS+ElementPlus的练习项目

## 环境变量配置：
.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略

## 环境变量读取：
只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。
加载环境变量：通过 import.meta.env

## 配置文件变量类型
vite-env.d 文件定义 env 文件的变量类型

## 处理外部 svg-icon，svg比图片小很多，几乎不占用资源
pnpm i vite-plugin-svg-icons -D
在 vite.config.js 配置插件
在 main.js 中导入 import 'virtual:svg-icons-register'
再引入第三方 svg-icon，定义全局svg-icon组件。

## 引入 scss 支持
安装 pnpm i sass -D
然后页面 <style scoped lang="scss"></style>
配置 scss 全局变量，如下：
css: {
    preprocessorOptions: {
        scss: {
            javascriptEnabled: true,
            additionalData: `@import "@/styles/variable.scss";`
        }
    }
}