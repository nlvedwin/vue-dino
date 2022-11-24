import * as components from "./components/index"
import "./assets/css/tailwind.css"

const dinoComponentsList = components?.default

const DinoComponents = {
    install(app, options = {}) {
        Object.keys(dinoComponentsList).forEach((name) => {
            app.component(name, dinoComponentsList[name])
        })
    },
}

export { dinoComponentsList }

export default DinoComponents
