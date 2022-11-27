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
    <form action="" @submit.prevent="" class="space-y-3">
        <slot></slot>
        <div v-if="$slots.footer" class="space-x-3 flex items-center">
            <slot name="footer"></slot>
        </div>
    </form>
</template>
