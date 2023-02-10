<script setup>
import { ref } from 'vue'
const enabled = ref(true)
</script>

<template>
  <div>
    <d-tooltip :disabled="!enabled" content="Fly to the Moon">
      <d-button @click="enabled = !enabled">Fly</d-button>
    </d-tooltip>
  </div>
</template>
