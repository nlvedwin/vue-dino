import { createRouter, createWebHistory } from "vue-router"

const routes = [
    { title: "Home", path: "/", component: () => import("./pages/index.vue") },
    {
        title: "Buttons",
        path: "/buttons",
        component: () => import("./pages/buttons.vue"),
    },
    {
        title: "Inputs",
        path: "/inputs",
        component: () => import("./pages/inputs.vue"),
    },
    {
        title: "cards",
        path: "/cards",
        component: () => import("./pages/cards.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { routes }
export default router
