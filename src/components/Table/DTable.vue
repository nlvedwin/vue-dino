<script setup>
import { computed, getCurrentInstance } from "vue"
import Pagination from "./Pagination.vue"
const uid = getCurrentInstance().uid
const props = defineProps({
    columns: { type: Array, default: () => [] },
    items: { type: Array, default: () => [] },
    modelValue: { type: Array, default: () => [] },
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

const handleChange = (e) => {
    value.value = e.target.checked ? props.items.map((item) => item.id) : []
}

const isCheckedAll = computed(() => {
    return value.value.length === props.items.length
})
</script>

<template>
    <d-card :body-class="'dsds'">
        <template #header>
            <div class="d-flex d-items-center d-w-full d-justify-between">
                <div>Table Header</div>
                <div class="d-flex d-items-center d-space-x-3">
                    <d-input size="sm" placeholder="Search" />
                    <!-- <d-button>Actions</d-button> -->
                </div>
            </div>
        </template>
        <table
            class="d-min-w-full d-divide-y d-divide-gray-300 border-t border-gray-300"
        >
            <thead class="d-bg-gray-50">
                <tr>
                    <th scope="col" class="d-bg-gray-100 d-w-1">
                        <d-checkbox
                            :checked="isCheckedAll"
                            @change="handleChange"
                        />
                    </th>
                    <th
                        v-for="column in columns"
                        scope="col"
                        class="d-bg-gray-100 d-py-2 d-pl-4 d-pr-3 d-text-left d-text-sm d-font-semibold d-text-gray-900 sm:d-pl-6"
                    >
                        {{ column.label }}
                    </th>
                    <th scope="col" class="d-bg-gray-100 d-w-1"></th>
                </tr>
            </thead>
            <tbody class="d-divide-y d-divide-gray-200 d-bg-white">
                <tr v-for="(item, index) in items">
                    <td class="d-px-4 d-text-sm d-font-medium d-w-1">
                        <d-checkbox
                            v-model="value"
                            :value="item.id"
                        ></d-checkbox>
                    </td>
                    <td
                        v-for="column in columns"
                        class="d-whitespace-nowrap d-py-4 d-pl-4 d-pr-3 d-text-sm d-font-medium d-text-gray-900 sm:d-pl-6"
                    >
                        <slot :slot="column.field">
                            {{ item[column.field] ?? "" }}
                        </slot>
                    </td>
                    <td class="d-w-1 d-px-6 d-py-3">
                        <div class="d-space-x-3 d-inline-flex d-items-center">
                            <slot name="actions" :item="item" :index="index" />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <template #footer>
            <div class="d-flex d-justify-end">
                <Pagination />
            </div>
        </template>
    </d-card>
</template>
