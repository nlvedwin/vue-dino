<script setup>
import Choices from "choices.js"
import "choices.js/public/assets/styles/choices.min.css"
import { onMounted, ref, computed } from "vue"
const emit = defineEmits(["update:modelValue"])

const selectElement = ref()
const props = defineProps({
    modelValue: "",
    options: { type: Object },
    multiple: { type: Boolean, default: false },
    choices: { type: Array, default: () => [] },
    placeholder: String,
})

const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit("update:modelValue", value)
    },
})

onMounted(() => {
    const choicesIntance = new Choices(selectElement.value, {
        allowHTML: true,
        placeholder: true,
        placeholderValue: props.placeholder || "Select an option",
        searchPlaceholderValue: props.searchPlaceHolder || "Search an option",
        choices: props.choices.map((choice) => ({
            value: choice.value,
            label: choice.label,
            selected: choice.value === props.modelValue,
            id: choice.value,
        })),
        classNames: {
            containerOuter: "choices",
            containerInner:
                "choices-inner d-bg-white d-border d-border-gray-300 d-rounded-md d-px-3 d-py-1 d-min-h-[2.25rem] d-h-[42px]",
        },
        removeItemButton: true,
        ...props.options,
    })

    selectElement.value.addEventListener("change", (e) => {
        let values = Array.from(e.target.selectedOptions).map(
            (option) => option.value
        )
        value.value = props.multiple ? values : e.detail?.value
    })

    setTimeout(() => {
        const propsValue = Array.isArray(props.modelValue)
            ? props.modelValue
            : [props.modelValue]
        choicesIntance.setValue(propsValue.filter((v) => v))
    })
})
</script>

<template>
    <span class="custom-select d-block">
        <select :multiple="multiple" ref="selectElement">
            <option v-if="!multiple" placeholder value="">
                {{ placeholder }}
            </option>
        </select>
    </span>
</template>

<style scoped>
.custom-select:deep() .is-focused .choices-inner {
    @apply d-border-primary-500 d-border-2;
}

.custom-select:deep() .choices__input--cloned {
    @apply d-bg-transparent d-mb-0;
}

.custom-select:deep() .choices__input--cloned:focus {
    @apply d-bg-transparent d-border-transparent d-shadow-none d-outline-none d-ring-0;
}
.custom-select:deep() .choices__placeholder {
    @apply d-text-base;
}
</style>
