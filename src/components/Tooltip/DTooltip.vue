<script setup>
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
  content: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Object,
    default: () => ({}),
  },
})

const containerElement = ref(null)
onMounted(() => {
  const instance = tippy(containerElement.value, {
    content: props.content,
    arrow: true,
    zIndex: 1000,
    theme: 'light',
    ...props.options,
  })

  if (props.disabled) {
    instance.disable()
  }

  watch(
    () => [props.disabled, props.content],
    () => {
      if (props.disabled) {
        instance.disable()
      } else {
        instance.enable()
      }

      instance.setContent(props.content)
    }
  )
})
</script>

<template>
  <span class="d-inline-block" ref="containerElement">
    <slot></slot>
  </span>
</template>
