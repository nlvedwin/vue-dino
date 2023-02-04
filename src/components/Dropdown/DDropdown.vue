<script setup>
import { ref, watch } from "vue"
const open = ref(false)
const horizonTalPosition = ref("left")

// if div is outside the view port log it
const checkVisible = () => {
    const div = document.querySelector(".d-dropdown-card")
    // check div if intercects with viewport
    const rect = div.getBoundingClientRect()
    const isVisible =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    if (!isVisible) {
        horizonTalPosition.value = "right"
    }
}

watch(open, () => {
    setTimeout(() => {
        checkVisible()
    })
})
</script>

<template>
    <div class="d-inline-block d-dropdown">
        <div
            v-if="open"
            @click="open = false"
            class="d-absolute d-inset-0"
        ></div>

        <div class="d-relative">
            <div @click="open = !open">
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
                <div
                    v-if="open"
                    class="d-dropdown-card d-absolute d-z-10 d-mt-2 d-w-56 d-rounded-md d-bg-white d-shadow-lg d-ring-1 d-ring-black d-ring-opacity-5 focus:d-outline-none"
                    :class="
                        horizonTalPosition === 'right'
                            ? 'd-right-0 d-left-auto'
                            : 'd-left-0 d-origin-top-left'
                    "
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                >
                    <div class="d-py-1" role="none">
                        <!-- Active: "d-bg-gray-100 d-text-gray-900", Not Active: "d-text-gray-700" -->
                        <d-dropdown-item> Account Settings </d-dropdown-item>
                        <d-dropdown-item as="button"> Profile </d-dropdown-item>
                        <d-dropdown-item as="button">
                            Sign Out
                        </d-dropdown-item>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>
