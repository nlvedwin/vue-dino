<script setup>
import { inject, computed, ref } from "vue"
const formErrors = inject("formErrors", null)

const inputRef = ref(null)
const error = computed(() => {
    return formErrors?.value[inputRef.value?.getAttribute("name")]
})

const props = defineProps({
    label: String,
})
</script>

<script>
export default {
    inheritAttrs: false,
}
</script>

<template>
    <label class="block">
        <span
            v-if="label"
            :class="{ 'has-error': error }"
            class="mb-2 block text-sm capitalize"
        >
            {{ label }}
        </span>
        <input
            type="text"
            ref="inputRef"
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm min-h-[2.25rem]"
            :class="{ 'has-error': error }"
            v-bind="$attrs"
        />
        <span class="has-error">{{ error }}</span>
    </label>
</template>
