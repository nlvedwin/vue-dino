<script setup>
import { provide, computed } from 'vue'
const props = defineProps({
  dark: Boolean,
  width: {
    default: 260,
  },
  collapsed: Boolean,
})
provide('collapsed', {
  collapsed: computed(() => props.collapsed),
})
</script>

<template>
  <div
    :style="{ maxWidth: collapsed ? '80px' : `${width}px` }"
    class="d-min-h-[500px] d-bg-white d-p-2 d-w-full d-transition-all"
  >
    <div
      v-if="$slots.header"
      class="d-py-4 d-px-4 d-font-semibold d-tracking-wide d-mx-auto"
      :class="{ 'd-text-white': dark }"
    >
      <slot name="header" v-bind="{ collapsed }"></slot>
    </div>
    <slot></slot>
  </div>
</template>
