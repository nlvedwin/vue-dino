<script setup>
import axios from "axios"
import { onMounted, ref } from "vue"
const props = defineProps({
    url: { type: String, required: true },
    columns: Array,
})
const data = ref()
const pagination = ref({
    current_page: 1,
})
const selected = ref([])
const loading = ref(false)
const search = ref()
const getItems = () => {
    loading.value = true
    axios
        .get(props.url, {
            params: {
                page: pagination.value.current_page || undefined,
                search: search.value || undefined,
            },
        })
        .then((response) => {
            const { data: itemsData, ...paginationData } = response.data
            pagination.value = paginationData
            data.value = itemsData
        })
        .finally(() => (loading.value = false))
}
onMounted(() => getItems())
</script>

<template>
    <d-table
        v-model="selected"
        :columns="columns"
        :items="data"
        v-model:search="search"
        v-model:currentPage="pagination.current_page"
        @update:currentPage="getItems"
        @update:search="getItems"
        :pagination="pagination"
        :loading="loading"
    >
    </d-table>
</template>
