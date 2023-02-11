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
  collapsable: Boolean,
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
      v-if="collapsable || $slots.header"
      class="d-mb-4 d-px-4 d-font-semibold d-tracking-wide d-mx-auto d-w-full"
      :class="[
        { 'd-text-gray-100': dark, 'd-text-gray-600': !dark },
        collapsed
          ? 'd-space-y-3 d-space-y-reverse d-flex d-flex-col-reverse'
          : 'd-flex d-items-center d-space-x-3',
      ]"
    >
      <span v-if="$slots.header" class="d-flex-shrink-0 d-flex-1">
        <slot name="header" v-bind="{ collapsed }"></slot>
      </span>
      <d-tooltip
        v-if="collapsable"
        :content="collapsed ? 'Open' : 'Collapse'"
        :options="{ placement: 'right-end', delay: 300 }"
        :class="{ 'd-mx-auto': collapsed }"
      >
        <span @click="$emit('collapse', !collapsed)">
          <IconLayoutSidebarLeftCollapse
            v-if="!collapsed"
            class="hover:d-text-primary-500 d-cursor-pointer"
          />
          <IconLayoutSidebarRightCollapse
            v-else
            class="hover:d-text-primary-500 d-cursor-pointer"
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
