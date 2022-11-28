<script setup lang="ts">
import Spinner from "../Shared/Spinner.vue"

const props = defineProps({
    label: String,
    loading: Boolean,
    primary: Boolean,
    danger: Boolean,
})
const isDefault = [props.primary, props.danger].every((x) => !x)
</script>

<template>
    <button
        :class="{
            'd-loading d-cursor-progress d-pointer-events-none d-opacity-50':
                loading,
            'd-bg-primary-500 d-border-t-transparent d-text-white d-border-primary-500 hover:d-bg-primary-600':
                primary,
            'd-bg-red-500 d- d-border-t-transparent d-text-white d-border-red-500 hover:d-bg-red-600':
                danger,
            'd-border d-border-gray-300 d-text-gray-800 hover:d-bg-gray-200':
                isDefault,
        }"
        type="button"
        class="d-transition d-duration-300 d-ease-in-out d-inline-flex d-items-center d-rounded-md d-px-4 d-py-2 d-text-sm d-font-medium d-shadow-sm focus:d-outline-none d-min-h-[2.25rem]"
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
