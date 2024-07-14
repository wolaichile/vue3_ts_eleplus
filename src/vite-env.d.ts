/// <reference types="vite/client" />

// 定义 env 文件变量

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_PORT: string
    readonly VITE_PUBLIC_PATH: string
    readonly VITE_ROUTER_HISTORY: string
    readonly VITE_APP_BASE_URL: string
    // 更多环境变量...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}