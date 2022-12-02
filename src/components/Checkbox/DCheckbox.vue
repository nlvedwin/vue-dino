<script setup>
import { computed, getCurrentInstance } from "vue"
const uid = getCurrentInstance().uid
const props = defineProps({
    modelValue: "",
    label: String,
    id: String,
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
    <!-- center the checkbox in the div parent -->
    <div class="d-inline-flex d-items-center">
        <div class="d-inline-flex d-h-5 d-items-center d-leading-5 d-h-full">
            <input
                type="checkbox"
                v-model="value"
                v-bind="$attrs"
                :id="id || `checkbox_${uid}`"
                class="d-h-4 d-w-4 d-rounded d-border-gray-300 d-text-primary-600 focus:d-ring-primary-500"
            />
        </div>
        <div class="d-ml-3 d-text-sm" v-if="label">
            <label
                :for="id || `checkbox_${uid}`"
                class="d-font-medium d-text-gray-700"
            >
                {{ label }}
            </label>
        </div>
    </div>
</template>
