<script setup>
import { provide, computed } from 'vue'
import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarRightCollapse,
} from '@tabler/icons-vue'

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
    class="d-sidebar d-min-h-[500px] d-bg-white d-p-2 d-py-3 d-w-full d-transition-all d-flex d-flex-col d-flex-shrink-0"
  >
    <div
      v-if="$slots.header"
      class="d-mb-4 d-px-4 d-font-semibold d-tracking-wide d-mx-auto"
      :class="[
        { 'd-text-white': dark },
        collapsed
          ? 'd-space-y-3 d-space-y-reverse d-flex d-flex-col-reverse'
          : 'd-flex d-items-center d-space-x-3',
      ]"
    >
      <span class="d-flex-shrink-0">
        <slot name="header" v-bind="{ collapsed }"></slot>
      </span>
      <d-tooltip
        :content="collapsed ? 'Open' : 'Collapse'"
        :options="{ placement: 'right-end', delay: 300 }"
      >
        <span @click="$emit('collapse', !collapsed)">
          <IconLayoutSidebarLeftCollapse
            v-if="!collapsed"
            size="25"
            class="d-text-gray-600 hover:d-text-primary-500 d-cursor-pointer"
          />
          <IconLayoutSidebarRightCollapse
            v-else
            size="25"
            class="d-text-gray-600 hover:d-text-primary-500 d-cursor-pointer"
          />
        </span>
      </d-tooltip>
    </div>
    <div class="d-flex-1">
      <slot></slot>
    </div>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
