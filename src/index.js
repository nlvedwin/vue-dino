import * as components from './components/index.components'
import './assets/css/tailwind.css'
import { useColors } from './composables/useColors'
console.log('Vue Dino: using version', process.env.VUE_APP_VERSION)

const dinoComponentsList = components?.default

const DinoComponents = {
  install(app, options = {}) {
    if (options.colors) {
      useColors().setCustomPrimaryColors(options?.theme?.colors)
    }

    Object.keys(dinoComponentsList).forEach((name) => {
      app.component(name, dinoComponentsList[name])
    })
  },
}

useColors().setDefaultPrimaryColors()

// export { dinoComponentsList }

export default DinoComponents
