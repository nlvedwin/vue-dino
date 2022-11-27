<script setup>
import {
    computed,
    getCurrentInstance,
    inject,
    onMounted,
    ref,
    useSlots,
} from "vue"
defineProps({
    label: {
        type: String,
        default: "",
    },
})

const attributeName = ref("")
const formErrors = inject("formErrors")

const error = computed(() => {
    return formErrors.value[attributeName.value]
})

const formItem = ref(null)
onMounted(() => {
    const input = formItem.value.querySelector("input")
    attributeName.value = input?.getAttribute("name")
})
</script>

<template>
    <label
        ref="formItem"
        class="d-form-item block"
        :class="{ 'mb-3': label, 'has-error': error }"
    >
        <span :class="{ 'has-error': error }" class="mb-2 block text-sm">
            {{ label }}
        </span>
        <slot></slot>
        <span class="has-error">{{ error }}</span>
    </label>
</template>
