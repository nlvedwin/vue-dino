<script setup lang="ts">
const columns = [
    { label: "id", field: "id" },
    { label: "Name", field: "name" },
    { label: "Email", field: "email" },
]
</script>

<template>
    <h1>tables</h1>
    <div class="d-max-w-4xl w-full">
        <d-table-resource url="http://dino.test/api/users" :columns="columns" />
    </div>
</template>
