<script setup>
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
    <form action="" @submit.prevent="" class="d-space-y-4">
        <slot></slot>
        <div v-if="$slots.footer" class="d-space-x-3 d-flex d-items-center">
            <slot name="footer"></slot>
        </div>
    </form>
</template>
