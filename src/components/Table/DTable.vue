<script setup>
const props = defineProps({
    columns: { type: Array, default: () => [] },
    items: { type: Array, default: () => [] },
})
</script>

<template>
    <div
        class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:d-rounded-lg"
    >
        <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-50">
                <tr>
                    <th
                        v-for="column in columns"
                        scope="col"
                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:d-pl-6"
                    >
                        {{ column.label }}
                    </th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:d-pr-6">
                        <span class="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="item in items">
                    <td
                        v-for="column in columns"
                        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:d-pl-6"
                    >
                        {{ item[column.field] ?? "" }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
