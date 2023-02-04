<script setup>
defineProps({})
</script>

<template>
    <a
        class="d-text-gray-700 d-block d-px-4 d-py-2 d-text-sm hover:d-bg-gray-200"
        role="menuitem"
    >
        <slot></slot>
    </a>
</template>
