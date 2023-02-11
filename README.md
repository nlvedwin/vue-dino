# Vue Dino

TailwindCSS Vue Components

## Installation

Using `npm` or `yarn`

```
npm install vue-duno
```

```
yarn add vue-dino
```

## Icons

```
npm install @tabler/icons-vue or yarn add @tabler/icons-vue
```

## Usage

```js
import VueDino from 'vue-dino'
import 'vue-dino/dist/style.css'

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.vue`,
      import.meta.glob('./Pages/**/*.vue')
    ),
  setup({ el, App, props, plugin }) {
    return createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(VueDino)
      .use(ZiggyVue, Ziggy)
      .mount(el)
  },
  progress: {
    color: '#4B5563',
  },
})
```
