<script setup>
import { computed, getCurrentInstance, ref, watch } from "vue"
import { watchDebounced } from "@vueuse/core"
import Pagination from "./Pagination.vue"
const uid = getCurrentInstance().uid
const props = defineProps({
    columns: { type: Array, default: () => [] },
    items: { type: Array, default: () => [] },
    modelValue: { type: Array, default: () => [] },
    pagination: { type: Object, default: () => {} },
    loading: Boolean,
    withCheckbox: Boolean,
    searchOptions: { type: Object, default: () => {} },
})
const emit = defineEmits([
    "update:modelValue",
    "onUpdate:modelValue",
    "update:currentPage",
    "update:search",
])
const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit("update:modelValue", value)
    },
})
const currentPage = ref(1)
watch(currentPage, () => emit("update:currentPage", currentPage.value))
const search = ref("")
watchDebounced(search, () => emit("update:search", search.value), {
    debounce: props.searchOptions?.debounce || 500,
})

const handleChange = (e) => {
    value.value = e.target.checked ? props.items.map((item) => item.id) : []
}

const isCheckedAll = computed(() => {
    return value.value.length === props.items.length && props.items.length > 0
})
</script>

<template>
    <d-card
        body-class="d-table-card d-w-full"
        class="rounded-b-md d-overflow-hidden"
    >
        <template #header>
            <div class="d-flex d-items-center d-w-full d-justify-between">
                <div>Table Header</div>
                <div class="d-flex d-items-center d-space-x-3">
                    <d-input
                        size="sm"
                        :placeholder="searchOptions?.placeholder || 'Search'"
                        v-model="search"
                    />
                </div>
            </div>
        </template>
        <div class="d-overflow-x-auto">
            <table
                class="d-min-w-full d-divide-y d-divide-gray-300 border-t border-gray-300"
            >
                <thead class="d-bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            class="d-bg-gray-100 d-w-1"
                            v-if="withCheckbox"
                        >
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
                    <tr v-if="items.length < 1 && loading">
                        <td
                            colspan="100%"
                            class="d-text-center d-px-4 d-py-2 d-bg-white"
                        >
                            <div
                                class="d-bg-gray-100 d-inline-block d-animate-pulse d-text-transparent"
                            >
                                loading...
                            </div>
                        </td>
                    </tr>
                </thead>
                <tbody class="d-divide-y d-divide-gray-200 d-bg-white">
                    <tr v-for="(item, index) in items">
                        <td
                            class="d-px-4 d-text-sm d-font-medium d-w-1"
                            v-if="withCheckbox"
                        >
                            <d-checkbox
                                v-model="value"
                                :value="item.id"
                            ></d-checkbox>
                        </td>
                        <td
                            v-for="column in columns"
                            class="d-whitespace-nowrap d-py-4 d-pl-4 d-pr-3 d-text-sm d-font-medium d-text-gray-900 sm:d-pl-6"
                        >
                            <span
                                :class="{
                                    'd-bg-gray-200 d-text-transparent d-animate-pulse':
                                        loading,
                                }"
                            >
                                <slot :slot="column.field">
                                    {{ item[column.field] ?? "" }}
                                </slot>
                            </span>
                        </td>
                        <td class="d-w-1 d-px-6 d-py-3">
                            <div
                                class="d-space-x-3 d-inline-flex d-items-center"
                                :class="{
                                    'd-bg-gray-200 d-text-transparent d-animate-pulse d-hidden':
                                        loading,
                                }"
                            >
                                <slot
                                    name="actions"
                                    :item="item"
                                    :index="index"
                                />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <template #footer v-if="pagination">
            <div class="d-flex d-items-center d-justify-between">
                <div class="d-text-sm">
                    Showing
                    <span class="d-font-bold">{{ pagination.from }}</span>
                    to
                    <span class="d-font-bold">{{ pagination.to }}</span> of
                    <span class="d-font-bold">{{ pagination.total }}</span>
                    results
                </div>
                <Pagination
                    :total="pagination.total"
                    :per-page="pagination.per_page"
                    v-model="currentPage"
                />
            </div>
        </template>
    </d-card>
</template>
