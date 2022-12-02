<script setup>
import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.css"
import { computed, getCurrentInstance, onMounted } from "vue"
const props = defineProps({
    modelValue: String,
    options: { type: Object, default: () => ({}) },
    placeholder: String,
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

onMounted(() => {
    const element = getCurrentInstance().vnode.el.querySelector("input")
    flatpickr(element, {
        dateFormat: "Y-m-d",
        ...props.options,
    })
})
</script>

<template>
    <div class="d-datepicker">
        <d-input :placeholder="placeholder" v-model="value" ref="input" />
    </div>
</template>

<style>
.flatpickr-day.selected,
.flatpickr-day.startRange,
.flatpickr-day.endRange,
.flatpickr-day.selected.inRange,
.flatpickr-day.startRange.inRange,
.flatpickr-day.endRange.inRange,
.flatpickr-day.selected:focus,
.flatpickr-day.startRange:focus,
.flatpickr-day.endRange:focus,
.flatpickr-day.selected:hover,
.flatpickr-day.startRange:hover,
.flatpickr-day.endRange:hover,
.flatpickr-day.selected.prevMonthDay,
.flatpickr-day.startRange.prevMonthDay,
.flatpickr-day.endRange.prevMonthDay,
.flatpickr-day.selected.nextMonthDay,
.flatpickr-day.startRange.nextMonthDay,
.flatpickr-day.endRange.nextMonthDay {
    @apply d-bg-primary-500 d-border-primary-500;
}

.flatpickr-day.today {
    @apply d-bg-gray-200 d-border-gray-200;
}

.flatpickr-calendar {
    @apply d-p-4;
}
</style>
