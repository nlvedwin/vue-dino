import { createApp } from 'vue'
import './assets/css/tailwind.css'
import App from './App.vue'
import './index'
import router from './routes'
import VueDino from './index.js'

// set primary colors
const config = {
  colors: {
    100: '#D7E6FD',
    200: '#B0CDFB',
    300: '#89B4FA',
    400: '#629BF8',
    500: '#3B82F6',
    600: '#0B61EE',
    700: '#084BB8',
    800: '#063583',
    900: '#041F4D',
  },
}

export const app = createApp(App).use(VueDino, config).use(router).mount('#app')
