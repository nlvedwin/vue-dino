import { createRouter, createWebHistory } from 'vue-router'

// import all files in the pages directory
const pages = import.meta.globEager('./pages/*.vue')
const routePages = []
for (const path in pages) {
  const name = path.split('/').pop().split('.')[0]
  routePages.push({
    title: name,
    path: `/${name}`,
    component: pages[path].default,
  })
}

const routes = [
  { title: 'Home', path: '/', component: () => import('./pages/index.vue') },
  ...routePages,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { routes }
export default router
