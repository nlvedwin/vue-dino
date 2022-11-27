<script setup>
import { computed } from "@vue/reactivity"
import { getCurrentInstance, onMounted, provide, useSlots, watch } from "vue"
const props = defineProps({
    errors: {
        type: Object,
        default: () => [],
    },
})

provide(
    "formErrors",
    computed(() => props.errors)
)
</script>

<template>
    <form action="">
        <slot></slot>
    </form>
</template>
