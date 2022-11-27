<script setup lang="ts">
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
    },
    {
        name: "Elon Musk",
        title: "CEO",
        email: "weww",
        role: "Admin",
    },
    {
        name: "Elon Musk",
        title: "CEO",
        email: "weww",
        role: "Admin",
    },
]
</script>

<template>
    <h1>tables</h1>
    <d-card class="max-w-2xl w-full">
        <template #header>Tables</template>
        <d-table :items="items" :columns="columns"></d-table>
    </d-card>
</template>
