<script setup>
import { computed, ref } from "vue"
const props = defineProps({
    modelValue: Boolean,
})
const emit = defineEmits(["update:modelValue", "onUpdate:modelValue"])
const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit("update:modelValue", value)
    },
})

const enabled = ref(false)
const toggle = () => {
    enabled.value = enabled.value ? false : true
    value.value = enabled.value
}
</script>

<template>
    <button
        @click="toggle"
        type="button"
        :class="enabled ? 'd-bg-primary-500' : 'd-bg-gray-200'"
        class="d-bg-gray-200 d-relative d-inline-flex d-h-6 d-w-11 d-flex-shrink-0 d-cursor-pointer d-rounded-full d-border-2 d-border-transparent d-transition-colors d-duration-200 d-ease-in-out focus:d-outline-none focus:d-ring-2 focus:d-ring-primary-500 focus:d-ring-offset-2"
        role="switch"
        aria-checked="false"
    >
        <span class="d-sr-only">Use setting</span>
        <span
            :class="enabled ? 'd-translate-x-5' : 'd-translate-x-0'"
            class="d-translate-x-0 d-pointer-events-none d-relative d-inline-block d-h-5 d-w-5 d-transform d-rounded-full d-bg-white d-shadow d-ring-0 d-transition d-duration-200 d-ease-in-out"
        >
            <span
                :class="
                    enabled
                        ? 'd-opacity-0 d-ease-out d-duration-100'
                        : 'd-opacity-100 d-ease-in d-duration-200'
                "
                class="d-opacity-100 d-ease-in d-duration-200 d-absolute d-inset-0 d-flex d-h-full d-w-full d-items-center d-justify-center d-transition-opacity"
                aria-hidden="true"
            >
                <svg
                    v-if="!enabled"
                    class="d-h-3 d-w-3 d-text-gray-400"
                    fill="none"
                    viewBox="0 0 12 12"
                >
                    <path
                        d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </span>
            <span
                :class="
                    enabled
                        ? 'd-opacity-100 d-ease-in d-duration-200'
                        : 'd-opacity-0 d-ease-out d-duration-100'
                "
                class="d-opacity-0 d-ease-out d-duration-100 d-absolute d-inset-0 d-flex d-h-full d-w-full d-items-center d-justify-center d-transition-opacity"
                aria-hidden="true"
            >
                <svg
                    v-if="enabled"
                    class="d-h-3 d-w-3 d-text-primary-600"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                >
                    <path
                        d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                    />
                </svg>
            </span>
        </span>
    </button>
</template>
