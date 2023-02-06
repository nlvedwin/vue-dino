<script setup>
import { inject, ref, computed, onMounted, watch } from 'vue'
import tippy from 'tippy.js'
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
  return textValue.value.innerText
})

let tooltip = null
onMounted(() => {
  //   tooltip = tippy(itemElement.value, {
  //     placement: 'right-end',
  //     content: elementText.value,
  //     arrow: true,
  //     zIndex: 1000,
  //     theme: 'light',
  //   })
  //   tooltip.disable()
})

// watch(collapsed, () => {
//   if (collapsed.value) {
//     tooltip.enable()
//   } else {
//     tooltip.disable()
//   }
// })
</script>

<template>
  <a
    @click="handleClick"
    class="d-text-sm d-block d-w-full d-transition-all d-duration-200 hover:d-no-underline d-select-none d-rounded-lg d-min-h-[35px]"
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
        class="d-flex-1 d-text-value d-transition-all d-overflow-hidden d-block d-duration-100"
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
</template>
