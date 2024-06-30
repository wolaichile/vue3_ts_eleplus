import icon from "./iconPlugin"

import { type App } from "vue"

function install(app: App) {
    app.use(icon)
}

export default { install }