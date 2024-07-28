import { ElMessage, ElNotification } from "element-plus"

enum msgTypeEnum {
    success = "success",
    info = "info",
    warning = "warning",
    error = "error"
}

type msgType = keyof typeof msgTypeEnum

type elMessageParams = {
    type?: msgType,
    message?: string,
    plain?: boolean,
    showClose?: boolean,
    duration?: number
}

/**
 * 消息弹窗
 * @param params 一个对象，包含对消息通知的各种自定义配置。支持type、message、plain等属性。
 *               type: 消息的类型，默认为"success"。
 *               message: 消息的内容，默认为"成功"。
 *               plain: 是否为朴素消息，默认为true。
 *               showClose: 是否显示关闭按钮，默认为true。
 *               duration: 消息显示的时间，默认为3000毫秒。
 */
export const elMessage = (params: elMessageParams) => {
    ElMessage(Object.assign({}, {
        type: "success",
        message: "成功",
        plain: true,
        showClose: true,
        duration: 3000
    }, params))
}



enum positionEnum {
    "top-right" = "top-right",
    "top-left" = "top-left",
    "bottom-right" = "bottom-right",
    "bottom-left" = "bottom-left"
}

type position = keyof typeof positionEnum

type elNotificationParams = {
    type?: msgType,
    message?: string,
    title?: string,
    position?: position,
    duration?: number,
    dangerouslyUseHTMLString?: boolean
}
/**
 * 通知弹窗
 * @param params 一个对象，包含对消息通知的各种自定义配置。支持type、message、title等属性。
 *               type: 消息的类型，默认为"success"。
 *               message: 消息的内容，默认为"......"。
 *               title: 消息的标题，默认为"消息"。
 *               position: 消息的位置，默认为"top-right"。
 *               duration: 消息显示的时间，默认为4500毫秒。
 *               dangerouslyUseHTMLString: 是否使用HTML字符串，默认为false。
 */
export const elNotification = (params: elNotificationParams) => {
    ElNotification(Object.assign({}, {
        type: "success",
        message: "......",
        title: "消息",
        duration: 4500,
        position: "bottom-right",
        dangerouslyUseHTMLString: false
    }, params))
}