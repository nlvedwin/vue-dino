<script setup>
import { inject, computed, ref } from "vue"
const formErrors = inject("formErrors", null)

const inputRef = ref(null)
const error = computed(() => {
    return formErrors?.value[inputRef.value?.getAttribute("name")]
})
</script>

<template>
    <input
        ref="inputRef"
        type="text"
        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm min-h-[2.25rem]"
        :class="{ 'has-error': error }"
    />
</template>
