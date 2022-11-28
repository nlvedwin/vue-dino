<script setup>
import { computed } from "@vue/reactivity"
import { provide, ref, watch } from "vue"

const props = defineProps({
    errors: "",
})
const errors = ref({})

watch(props, (value) => {
    errors.value = { ...props.errors }
})

provide("formErrors", errors)
</script>

<template>
    <form action="" @submit.prevent="" class="space-y-3">
        <slot></slot>
        <div v-if="$slots.footer" class="space-x-3 flex items-center">
            <slot name="footer"></slot>
        </div>
    </form>
</template>
