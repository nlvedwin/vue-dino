<script setup>
defineProps({
    title: String,
    bodyClass: String,
})
</script>

<template>
    <div class="d-bg-white d-rounded-md d-shadow d-inline-block">
        <div
            v-if="$slots.header || title"
            class="d-px-5 d-py-4 d-border-b d-text-lg d-font-semibold"
        >
            <slot name="header">{{ title }}</slot>
        </div>
        <div :class="bodyClass || 'd-px-5 d-py-4'">
            <slot></slot>
        </div>
        <div v-if="$slots.footer" class="d-px-5 d-py-4 d-border-t">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
