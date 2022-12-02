<script setup>
import { inject, computed, ref } from "vue"
import { defaults } from "../common"

const props = defineProps({
    label: String,
    helpText: String,
    modelValue: "",
    component: { type: String, default: "text" },
    choices: { type: Array, default: () => [] },
    error: String,
    size: { type: String, default: "md" },
})
const selectedSize = defaults.size[props.size]
const emit = defineEmits(["update:modelValue", "onUpdate:modelValue"])

const formErrors = inject("formErrors", null)
const inputRef = ref(null)
const error = computed(() => {
    return (
        props.error ?? formErrors?.value[inputRef.value?.getAttribute("name")]
    )
})

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
            v-if="label && !['switch', 'checkbox'].includes(component)"
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
            <d-datepicker
                v-else-if="component === 'datepicker'"
                v-bind="$attrs"
                v-model="value"
            />
            <d-checkbox
                v-else-if="component === 'checkbox'"
                v-bind="$attrs"
                :label="label"
                v-model="value"
            />
            <input
                v-else
                type="text"
                ref="inputRef"
                class="d-block d-w-full d-rounded-md d-border-gray-300 d-shadow-sm focus:d-border-primary-500 focus:d-ring-primary-500 sm:d-text-sm d-placeholder:capitalize"
                :class="[{ 'has-error': error }, selectedSize]"
                v-model="value"
                v-bind="$attrs"
            />
        </span>
        <span
            v-if="helpText"
            class="d-inline-block d-mt-1.5 d-text-sm d-text-gray-400"
        >
            {{ helpText }}
        </span>
        <span v-if="error" class="has-error">{{ error }}</span>
    </label>
</template>
