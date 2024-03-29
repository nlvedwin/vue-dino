<script setup>
import Choices from 'choices.js'
import 'choices.js/public/assets/styles/choices.min.css'
import { onMounted, ref, computed } from 'vue'
import { defaults } from '../common'
const emit = defineEmits(['update:modelValue'])

const selectElement = ref()
const props = defineProps({
  modelValue: '',
  options: { type: Object },
  multiple: { type: Boolean, default: false },
  choices: { type: Array, default: () => [] },
  placeholder: String,
  size: { type: String, default: 'md' },
  searchable: { type: Boolean, default: false },
})
const selectedSize = defaults.size[props.size]

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

onMounted(() => {
  if (props.searchable) {
    const choicesIntance = new Choices(selectElement.value, {
      allowHTML: true,
      placeholder: true,
      placeholderValue: props.placeholder || 'Select an option',
      searchPlaceholderValue: props.searchPlaceHolder || 'Search an option',
      choices: props.choices.map((choice) => ({
        value: choice.value,
        label: choice.label,
        selected: choice.value === props.modelValue,
        id: choice.value,
      })),
      classNames: {
        containerOuter: 'choices',
        containerInner: `choices-inner d-block d-items-center d-bg-white d-border d-border-gray-300 d-rounded-md d-px-3 d-py-1 ${selectedSize}`,
      },
      removeItemButton: true,
      ...props.options,
    })

    setTimeout(() => {
      const propsValue = Array.isArray(props.modelValue)
        ? props.modelValue
        : [props.modelValue]
      choicesIntance.setValue(propsValue.filter((v) => v))
    })
  }

  selectElement.value.addEventListener('change', (e) => {
    if (props.searchable) {
      let values = Array.from(e.target.selectedOptions).map(
        (option) => option.value
      )
      value.value = props.multiple ? values : e.detail?.value
    } else {
      value.value = e.target.value
    }
  })
})
</script>

<template>
  <span class="custom-select d-block">
    <select v-if="searchable" :multiple="multiple" ref="selectElement">
      <option v-if="!multiple" placeholder value="">
        {{ placeholder }}
      </option>
    </select>
    <select
      v-else
      class="d-block d-w-full d-rounded-md d-border-gray-300 d-shadow-sm focus:d-border-primary-500 focus:d-ring-primary-500 sm:d-text-sm d-placeholder:capitalize"
      :class="[selectedSize]"
      ref="selectElement"
    >
      <option placeholder value="">
        {{ placeholder }}
      </option>
      <option v-for="choice in choices" :value="choice.value">
        {{ choice.label }}
      </option>
    </select>
  </span>
</template>

<style scoped>
.custom-select:deep() .is-focused .choices-inner {
  @apply d-border-primary-500 d-border-2;
}

.custom-select:deep() .choices__item {
  /* @apply d-mb-0; */
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

.custom-select:deep() .choices__list--multiple .choices__item {
  @apply d-bg-primary-500 d-rounded-lg d-border-none d-font-semibold;
}

.custom-select:deep() .choices__list--multiple button {
  @apply d-border-none;
}

.custom-select:deep() .choices__list--dropdown {
  @apply d-rounded-lg;
}
</style>
