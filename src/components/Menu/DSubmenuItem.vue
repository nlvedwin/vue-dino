<script setup>
import { IconChevronDown, IconRocket } from '@tabler/icons-vue'
import { ref, inject, getCurrentInstance, onMounted } from 'vue'
const { collapsed } = inject('collapsed')
const { dark } = inject('dark')
const open = ref(false)
const instance = getCurrentInstance()

onMounted(() => {
  if (instance.vnode.el.querySelector('.d-active-menu-item')) {
    open.value = true
  }
})

const showDropdown = ref(false)
</script>

<template>
  <div
    @click.stop="open = !open"
    class="d-submenu d-bg-transparent d-flex d-flex-col d-items-center d-select-none d-flex-1 d-relative"
  >
    <!-- <div
      v-if="collapsed && showDropdown"
      class="d-absolute d-right-0 -d-mr-[500%] d-w-[260px] d-bg-white d-px-4 d-py-3 d-rounded-lg d-my-auto d-z-10"
    >
      <slot name="submenu"></slot>
    </div> -->
    <d-menu-item @mouseover="showDropdown = true">
      <template #icon>
        <slot name="icon"></slot>
      </template>
      <slot></slot>
      <template #right>
        <IconChevronDown
          class="d-inline-block d-transition-all d-duration-400 d-mr-4"
          :class="{ 'd-rotate-180': open }"
        />
      </template>
    </d-menu-item>
    <div
      v-if="!collapsed"
      @click.stop
      class="d-overflow-hidden d-transition-all d-duration-200 d-w-full"
      :class="[
        {
          'd-max-h-0 d-opacity-0': !open,
          'd-max-h-[1000px] d-opacity-100': open,
        },
      ]"
    >
      <slot v-if="!collapsed" name="submenu"></slot>
    </div>
    <div v-else></div>
  </div>
</template>
