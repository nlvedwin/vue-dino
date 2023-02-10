<script setup>
import { inject, ref, computed } from 'vue'

const { activeItem, updateActiveItem } = inject('activeItem')
const { dark } = inject('dark')
const { collapsed } = inject('collapsed')
const props = defineProps({
  value: String,
})
const textValue = ref(null)
const itemElement = ref(null)

const keyValue = computed(() => {
  return props.value
})

const handleClick = () => {
  updateActiveItem(keyValue)
}

const isActive = computed(() => {
  return activeItem.value === keyValue.value
})

const elementText = computed(() => {
  return textValue?.value?.innerText
})
</script>

<script>
export default { inheritAttrs: false }
</script>

<template>
  <d-tooltip
    :content="elementText"
    :options="{ placement: 'right-end' }"
    :disabled="!collapsed"
  >
    <a
      v-bind="$attrs"
      @click="handleClick"
      class="d-text-sm d-flex d-items-center d-w-full d-transition-all d-duration-200 hover:d-no-underline d-select-none d-rounded-lg d-min-h-[40px]"
      ref="itemElement"
      :class="{
        // active
        'd-active-menu-item': isActive,
        'd-bg-gray-100': !dark && isActive,
        'd-bg-white d-bg-opacity-20 hover:d-bg-opacity-20': dark && isActive,

        'd-text-white hover:d-bg-white hover:d-bg-opacity-20': dark,
        'hover:d-bg-gray-100': !dark,
      }"
    >
      <span class="d-flex d-items-center d-w-full">
        <span
          class="d-px-4 d-py-2"
          v-if="$slots.icon"
          :class="{ 'd-text-white': dark }"
        >
          <slot name="icon"></slot>
        </span>
        <span
          class="d-flex-1 d-text-value d-transition-[opacity,max-width] d-overflow-hidden d-block d-duration-200 d-font-medium"
          :class="{
            'd-pl-0': $slots.icon,
            'd-max-w-[1000px] d-px-4 d-py-2 d-opacity-100': !collapsed,
            'd-max-w-0 d-p-0 d-opacity-0 -d-translate-x-10': collapsed,
          }"
          ref="textValue"
        >
          <slot></slot>
        </span>
        <slot name="right" v-if="!collapsed"></slot>
      </span>
    </a>
  </d-tooltip>
</template>
