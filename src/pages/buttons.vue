<script setup>
import { ref } from "vue"
import DButton from "../components/Button/DButton.vue"

const loading = ref(false)
const setToLoading = () => {
    loading.value = true
    setTimeout(() => {
        loading.value = false
    }, 2000)
}
</script>

<template>
    <div>
        <h1>Buttons</h1>
        <d-card>
            <template #header>Basic Button</template>
            <div class="flex items-center space-x-4">
                <d-button primary>Click Me</d-button>
                <d-button primary>Click Me</d-button>
                <d-button danger> Click Me</d-button>
                <d-button>Click Me</d-button>
                <d-button primary>
                    <template #icon> i </template>
                    Click Me
                </d-button>
                <d-button :loading="true">Click Me</d-button>
                <d-button danger loading>Click Me</d-button>
            </div>
        </d-card>
    </div>
</template>
