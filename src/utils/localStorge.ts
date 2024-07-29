
export const token = "A-TOKEN"

// 设置token
export const setToken = (value: string) => {
    localStorage.setItem(token, value)
}

// 获取token
export const getToken = () => {
    return localStorage.getItem(token)
}

// 设置localStorage
export const setLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value)
}

// 获取localStorage
export const getLocalStorage = (key: string) => {
    return localStorage.getItem(key)
}

// 移除localStorage
export const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key)
}

// 清空localStorage
export const clearLocalStorage = () => {
    localStorage.clear()
}