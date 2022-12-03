<script setup>
import { computed } from "vue"
const emit = defineEmits(["update:modelValue", "onUpdate:modelValue"])
const props = defineProps({
    modelValue: { type: Number || String },
    total: { type: Number, default: 0 },
    perPage: { type: Number, default: 10 },
    currentPage: { type: Number, default: 1 },
})

const pages = computed(() => {
    return Math.ceil(props.total / props.perPage)
})

const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit("update:modelValue", value)
    },
})

const handlePageClick = (page) => {
    value.value = Number(page)
}
</script>

<template>
    <div>
        <nav
            class="isolate d-inline-flex d--space-x-px d-rounded-md d-shadow-sm"
            aria-label="Pagination"
        >
            <a
                :disabled="value === 1"
                @click="handlePageClick(value - 1)"
                class="d-relative d-inline-flex d-items-center d-rounded-l-md d-border d-border-gray-300 d-bg-white d-px-2 d-py-2 d-text-sm d-font-medium d-text-gray-500 hover:d-bg-gray-50 focus:d-z-20"
            >
                <span class="d-sr-only">Previous</span>
                <!-- Heroicon name: mini/chevron-left -->
                <svg
                    class="d-h-5 d-w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                        clip-rule="evenodd"
                    />
                </svg>
            </a>
            <!-- Current: "d-z-10 d-bg-primary-50 d-border-primary-500 d-text-primary-600", Default: "d-bg-white d-border-gray-300 d-text-gray-500 hover:d-bg-gray-50" -->
            <!-- <a
                href="#"
                aria-current="page"
                class="d-relative d-z-10 d-inline-flex d-items-center d-border d-border-primary-500 d-bg-primary-50 d-text-primary-600 d-px-3 d-py-2 d-text-sm d-font-medium  focus:d-z-20"
                >{{link.label}}</a
            > -->
            <template v-for="page in pages">
                <a
                    @click="handlePageClick(page)"
                    class="d-relative d-inline-flex d-items-center d-border d-border-gray-300 d-bg-white d-px-3 d-py-2 d-text-sm d-font-medium hover:d-bg-gray-50 focus:d-z-20"
                    :class="{
                        'd-border-2 d-border-primary-400 d-text-primary-500  hover:d-bg-primary-100':
                            value === page,
                    }"
                >
                    {{ page }}
                </a>
            </template>
            <a
                :disabled="value === pages"
                @click="handlePageClick(value + 1)"
                class="d-relative d-inline-flex d-items-center d-rounded-r-md d-border d-border-gray-300 d-bg-white d-px-2 d-py-2 d-text-sm d-font-medium d-text-gray-500 hover:d-bg-gray-50 focus:d-z-20"
            >
                <span class="d-sr-only">Next</span>
                <!-- Heroicon name: mini/chevron-right -->
                <svg
                    class="d-h-5 d-w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clip-rule="evenodd"
                    />
                </svg>
            </a>
        </nav>
    </div>
</template>
