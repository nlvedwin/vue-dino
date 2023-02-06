<script setup>
import { ref, provide, computed, watch } from 'vue'

const props = defineProps({
  modelValue: String,
  dark: Boolean,
  collapsed: Boolean,
})
const emit = defineEmits(['update:modelValue', 'onUpdate:modelValue'])

const activeItem = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

provide('activeItem', {
  activeItem,
  updateActiveItem: (value) => {
    if (!value.value) {
      return
    }

    activeItem.value = value.value
  },
})
provide('dark', {
  dark: props.dark,
})
provide('collapsed', {
  collapsed: computed(() => props.collapsed),
})
</script>

<template>
  <div
    class="d-menu d-flex-col d-flex"
    :class="{ 'd-bg-white': !dark, 'd-max-w-[fit-content]': collapsed }"
  >
    <slot></slot>
  </div>
</template>
