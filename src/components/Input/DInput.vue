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
    component: { type: String, default: "text" },
    choices: { type: Array, default: () => [] },
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
    <label class="d-input d-block">
        <span
            v-if="label && !['switch'].includes(component)"
            :class="{ 'has-error': error }"
            class="d-mb-2 d-block d-text-sm d-capitalize"
        >
            {{ label }}
        </span>
        <span class="d-input-component">
            <d-select
                v-if="component === 'select'"
                v-bind="$attrs"
                v-model="value"
                :choices="choices"
            />
            <d-switch
                v-else-if="component === 'switch'"
                v-bind="$attrs"
                v-model="value"
                :label="label"
            />
            <input
                v-else
                type="text"
                ref="inputRef"
                class="d-block d-w-full d-rounded-md d-border-gray-300 d-shadow-sm focus:d-border-primary-500 focus:d-ring-primary-500 sm:d-text-sm d-h-[42px] d-placeholder:capitalize"
                :class="{ 'has-error': error }"
                v-model="value"
                v-bind="$attrs"
            />
        </span>
        <span class="has-error">{{ error }}</span>
    </label>
</template>
