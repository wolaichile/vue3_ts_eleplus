import dayjs from "dayjs"

// 当前日期
export const currentDate = () => {
    return dayjs().format("YYYY-MM-DD")
}

// 当前时间
export const currentTime = () => {
    return dayjs().format("HH:mm:ss")
}

// 当前日期时间
export const currentDateTime = () => {
    return dayjs().format("YYYY-MM-DD HH:mm:ss")
}

// 格式化日期
export const formatDate = (date: string, format: string) => {
    return dayjs(date).format(format)
}

// 日期类型枚举
enum dateTypeEnum {
    year = "year",
    month = "month",
    day = "day",
    hour = "hour",
    minute = "minute",
    second = "second"
}
type dateType = keyof typeof dateTypeEnum

// 添加日期
export const addDate = (date: string, num: number, type: dateType) => {
    return dayjs(date).add(num, type)
}

// 减少日期
export const subDate = (date: string, num: number, type: dateType) => {
    return dayjs(date).subtract(num, type)
}

// 获取当前时间段
export const timePeriod = () => {
    const h = dayjs().hour()
    if (h >= 6 && h < 12) {
        return "早上好"
    } else if (h >= 12 && h < 14) {
        return "中午好"
    } else if (h >= 14 && h < 18) {
        return "下午好"
    } else {
        return "晚上好"
    }
}