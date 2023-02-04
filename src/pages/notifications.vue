<script setup>
import { onMounted } from 'vue'
import { useNotification } from '../composables/useNotification'

const showSuccess = () => {
  useNotification().success({
    title: 'Successfully Created',
    duration: 3000,
  })
}
const showError = () => {
  useNotification().error({
    title: 'Error',
    duration: 3000,
  })
}
</script>

<template>
  <div>
    <div class="d-space-y-3 d-space-x-4">
      <d-button primary class="d-block" label="Success" @click="showSuccess" />
      <d-button danger class="d-block" label="Error" @click="showError" />
    </div>
  </div>
</template>
