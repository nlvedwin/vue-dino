<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
const open = ref(false)
const horizonTalPosition = ref('left')
const verticalPosition = ref('bottom')

const props = defineProps({
  width: { type: Number, default: 220 },
  trigger: {
    default: () => ['click'],
  },
})

const triggers = Array.isArray(props.trigger) ? props.trigger : [props.trigger]

const handleClick = (e) => {
  if (!triggers.includes('click')) {
    return
  }

  open.value = !open.value
}

const handleMouseover = () => {
  if (!triggers.includes('hover')) {
    return
  }

  open.value = true
}

// if div is outside the view port log it
const checkVisible = () => {
  const div = document.querySelector('.d-dropdown-card')

  if (!div) {
    return
  }

  // check div if intercects with viewport
  const rect = div.getBoundingClientRect()
  const isVisible =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  if (!isVisible) {
    horizonTalPosition.value = 'right'
  }

  // check div if not visible in the bottom of the viewport
  const isBottomVisible =
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)

  if (!isBottomVisible) {
    verticalPosition.value = 'top'
  }
}

watch(open, () => {
  setTimeout(() => {
    checkVisible()
  })
})

const handleClose = (e) => {
  if (triggers.includes('hover') && e.type === 'mouseover') {
    open.value = false
  }
  if (triggers.includes('click') && e.type === 'click') {
    open.value = false
  }
}

const targetElement = ref(null)
onClickOutside(targetElement, () => {
  open.value = false
})

onMounted(() => {
  if (triggers.includes('hover')) {
    const handleMouseover = (e) => {
      if (!e.target.closest('.d-dropdown')) {
        open.value = false
      }
    }

    document.body.addEventListener('mouseover', handleMouseover)
    onBeforeUnmount(() => {
      document.body.removeEventListener('mouseover', handleMouseover)
    })
  }
})
</script>

<script>
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div class="d-inline-block d-dropdown" :class="$attrs.class">
    <div class="d-relative d-w-full" ref="targetElement">
      <div @click="handleClick" @mouseover="handleMouseover" class="d-w-full">
        <slot name="trigger">
          <d-button>Dropdown</d-button>
        </slot>
      </div>
      <Transition
        enter-active-class="d-transition d-ease-out d-duration-100"
        enter-from-class="d-transform d-opacity-0 d-scale-95"
        enter-to-class="d-transform d-opacity-100 d-scale-100"
        leave-active-class="d-transition d-ease-in d-duration-75"
        leave-from-class="d-transform d-opacity-100 d-scale-100"
        leave-to-class="d-transform d-opacity-0 d-scale-95"
      >
        <div v-if="open">
          <!-- <div class="d-py-1"></div> -->
          <div
            class="d-dropdown-card d-absolute d-z-10 d-rounded-md d-bg-white d-shadow-xl d-ring-1 d-ring-black d-ring-opacity-5 focus:d-outline-none"
            :class="[
              horizonTalPosition === 'right'
                ? 'd-right-0 d-left-auto'
                : 'd-left-0 d-origin-top-left',
              verticalPosition === 'top' ? 'd-bottom-0 d-right-0 d-left-0' : '',
            ]"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
            :style="{ width: width + 'px' }"
          >
            <div class="d-py-1" role="none">
              <slot />
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
