/// <reference types="vite/client" />

// 定义 env 文件变量

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // 更多环境变量...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}