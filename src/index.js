import * as components from "./components/index.components"
import "./assets/css/tailwind.css"
console.log("Vue Dino: using version", process.env.VUE_APP_VERSION)

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
