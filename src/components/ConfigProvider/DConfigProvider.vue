<script setup lang="ts">
import { PropType, ref } from 'vue'

interface Colors {
  '50': string
  '100': string
  '200': string
  '300': string
  '400': string
  '500': string
  '600': string
  '700': string
  '800': string
  '900': string
}

interface Config {
  colors: Colors
}

const props = defineProps({
  config: {
    type: Object as PropType<Config>,
  },
})
</script>

<template>
  <div class="d-config-provider">
    <slot></slot>
  </div>
</template>
