<script setup lang="ts">
import { defaults } from "../common"
import Spinner from "../Shared/Spinner.vue"

const props = defineProps({
    label: String,
    loading: Boolean,
    primary: Boolean,
    danger: Boolean,
    outlined: Boolean,
    size: { type: String, default: "sm" },
})
const isDefault = [props.primary, props.danger].every((x) => !x)
const selectedSize = defaults.size[props.size]
</script>

<template>
    <button
        :class="[
            {
                'd-loading d-cursor-progress d-pointer-events-none d-opacity-50':
                    loading,
                'd-bg-primary-500 d-border-t-transparent d-text-white d-border-primary-500 hover:d-bg-primary-600':
                    primary && !outlined,
                'd-border-primary-500 d-text-primary-500 d-border hover:d-bg-gray-100':
                    primary && outlined,
                'd-bg-red-500 d- d-border-t-transparent d-text-white d-border-red-500 hover:d-bg-red-600':
                    danger && !outlined,
                'd-border-red-500 d-text-red-500 d-border hover:d-bg-gray-100':
                    danger && outlined,
                'd-border d-bg-white d-border-gray-300 d-text-gray-800 hover:d-bg-gray-200':
                    isDefault,
            },
            selectedSize,
        ]"
        type="button"
        class="d-px-[1rem] d-transition d-duration-300 d-ease-in-out d-inline-flex d-items-center d-rounded-md d-text-sm d-font-medium d-shadow-sm focus:d-outline-none"
    >
        <Spinner
            :class="isDefault ? 'd-text-gray-800' : 'd-text-white'"
            v-if="loading"
        />
        <slot v-else name="icon"></slot>
        <span :class="{ 'd-ml-2': $slots.icon || loading }">
            <slot v-if="$slots.default"></slot>
            <template v-else>{{ label }}</template>
        </span>
    </button>
</template>
