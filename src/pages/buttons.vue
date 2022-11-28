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
            <div class="d-flex d-items-center d-space-x-4">
                <d-button primary>Primary</d-button>
                <d-button>Default</d-button>
                <d-button danger>Danger</d-button>
                <d-button :loading="true" primary>Click Me</d-button>
            </div>
        </d-card>
    </div>
</template>
