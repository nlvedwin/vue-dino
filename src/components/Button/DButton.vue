<script setup>
const props = defineProps({
    loading: Boolean,
})
</script>

<template>
    <button
        type="button"
        class="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
    >
        <span v-if="loading">loading...</span>
        <slot></slot>
    </button>
</template>
