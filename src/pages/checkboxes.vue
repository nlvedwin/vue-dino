<script setup>
import { ref } from "vue"
const checked = ref(false)
</script>

<template>
    <d-card class="d-max-w-2xl d-w-full" title="Checkboxes">
        <span>{{ checked }}</span>
        <div class="d-flex d-items-center d-space-x-3">
            <d-input
                v-for="n in 3"
                label="Glory to your name"
                component="checkbox"
                v-model="checked"
            />
        </div>
    </d-card>
</template>
