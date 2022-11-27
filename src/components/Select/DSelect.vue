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
                "choices-inner bg-white border border-gray-300 rounded-md px-3 py-1 min-h-[2.25rem]",
        },
        removeItemButton: true,
        ...props.options,
        callbackOnInit: () => {
            console.log("ready haha")
        },
    })

    selectElement.value.addEventListener("change", (e) => {
        let values = Array.from(event.target.selectedOptions).map(
            (option) => option.value
        )
        value.value = props.multiple ? values : e.detail?.value
    })

    choicesIntance.setValue(
        props.multiple ? props.modelValue || [] : [props.modelValue || []]
    )
})
</script>

<template>
    <span class="d-select block">
        <select :multiple="multiple" ref="selectElement">
            <option v-if="!multiple" placeholder value="">
                {{ placeholder }}
            </option>
        </select>
    </span>
</template>

<style scoped>
.d-select:deep() .is-focused .choices-inner {
    @apply border-primary-500 border-2;
}

.d-select:deep() .choices__input--cloned {
    @apply bg-transparent mb-0;
}

.d-select:deep() .choices__input--cloned:focus {
    @apply bg-transparent border-transparent shadow-none outline-none ring-0;
}
</style>
