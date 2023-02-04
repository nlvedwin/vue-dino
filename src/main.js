import { createApp } from 'vue'
import './assets/css/tailwind.css'
import App from './App.vue'
import './index'
import router from './routes'
import VueDino from './index.js'

// set primary colors
const config = {
  colors: {
    50: '#BDE2FB',
    100: '#AAD9FA',
    200: '#84C8F8',
    300: '#5DB7F6',
    400: '#37A6F3',
    500: '#1095F1',
    600: '#0B75BE',
    700: '#085489',
    800: '#053454',
    900: '#02131F',
  },
}

export const app = createApp(App).use(VueDino, config).use(router).mount('#app')
