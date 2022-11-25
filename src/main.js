import { createApp } from "vue"
import "./assets/css/tailwind.css"
import App from "./App.vue"
import "./index"
import router from "./routes"
import VueDino from "./index.js"

createApp(App).use(VueDino).use(router).mount("#app")
