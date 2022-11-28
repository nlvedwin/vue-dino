<script setup>
import { inject, computed, ref } from "vue"

const formErrors = inject("formErrors", null)
const inputRef = ref(null)
const error = computed(() => {
    return formErrors?.value[inputRef.value?.getAttribute("name")]
})

const props = defineProps({
    label: String,
    modelValue: String || Number,
})
const emit = defineEmits(["update:modelValue", "onUpdate:modelValue"])

const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit("update:modelValue", value)
    },
})
</script>

<script>
export default {
    inheritAttrs: false,
}
</script>

<template>
    <label class="d-block">
        <span
            v-if="label"
            :class="{ 'has-error': error }"
            class="d-mb-2 d-block d-text-sm d-capitalize"
        >
            {{ label }}
        </span>
        <input
            type="text"
            ref="inputRef"
            class="d-block d-w-full d-rounded-md d-border-gray-300 d-shadow-sm d-focus:border-primary-500 d-focus:ring-primary-500 d-sm:text-sm d-min-h-[2.25rem]"
            :class="{ 'has-error': error }"
            v-model="value"
            v-bind="$attrs"
        />
        <span class="has-error">{{ error }}</span>
    </label>
</template>
