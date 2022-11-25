<script setup lang="ts">
import Spinner from "../Shared/Spinner.vue"

const props = defineProps({
    loading: Boolean,
    primary: Boolean,
    danger: Boolean,
})
const isDefault = [props.primary, props.danger].every((x) => !x)
</script>

<template>
    <button
        :class="{
            'loading cursor-progress pointer-events-none opacity-50': loading,
            'bg-primary-500 text-white border-primary-500 hover:bg-primary-600':
                primary,
            'bg-red-500 text-white border-red-500 hover:bg-red-600': danger,
            'bg-white text-gray-800 border-gray-300 hover:bg-gray-100':
                isDefault,
        }"
        type="button"
        class="inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium shadow-sm focus:outline-none min-h-[2.25rem]"
    >
        <Spinner
            :class="isDefault ? 'text-gray-800' : 'text-white'"
            v-if="loading"
        />
        <slot v-else name="icon"></slot>
        <span :class="{ 'ml-2': $slots.icon || loading }">
            <slot></slot>
        </span>
    </button>
</template>
