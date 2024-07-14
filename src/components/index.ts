import SvgIcon from './SvgIcon/index.vue'
import type { App } from 'vue'

const globalComponents = {
    SvgIcon
}

function install(app: App) {
    Object.entries(globalComponents).map(([key, component]) => {
        app.component(key, component)
    })
}

export default { install }

