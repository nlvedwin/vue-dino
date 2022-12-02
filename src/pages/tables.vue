<script setup lang="ts">
import { ref } from "vue"

const columns = [
    { label: "Name", field: "name" },
    { label: "Title", field: "title" },
    { label: "Email", field: "email" },
    { label: "Role", field: "role" },
]
const items = [
    {
        name: "Elon Musk",
        title: "CEO",
        email: "weww",
        role: "Admin",
        id: 1,
    },
    {
        name: "Elon Musk",
        title: "CEO",
        email: "weww",
        role: "Admin",
        id: 2,
    },
    {
        name: "Elon Musk",
        title: "CEO",
        email: "weww",
        role: "Admin",
        id: 3,
    },
]
const selected = ref([])
</script>

<template>
    <h1>tables</h1>
    <div class="max-w-2xl w-full">
        <d-table v-model="selected" :items="items" :columns="columns">
            <template v-slot:actions="{ item, index }">
                <d-button primary outlined>Primary</d-button>
                <d-button danger outlined>Danger</d-button>
            </template>
        </d-table>
    </div>
</template>
