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
    class="d-sidebar d-min-h-[500px] d-bg-white d-p-2 d-py-3 d-w-full d-transition-all d-flex d-flex-col"
  >
    <div
      v-if="$slots.header"
      class="d-mb-3 d-px-4 d-font-semibold d-tracking-wide d-mx-auto"
      :class="{ 'd-text-white': dark }"
    >
      <slot name="header" v-bind="{ collapsed }"></slot>
    </div>
    <div class="d-flex-1">
      <slot></slot>
    </div>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
