<script setup>
const items = []
</script>

<template>
  <div class="d-flex d-space-x-3">
    <d-dropdown>
      <d-dropdown-item> Account Profile </d-dropdown-item>
      <d-dropdown-item> Settings </d-dropdown-item>
      <d-dropdown-item> Sign out </d-dropdown-item>
    </d-dropdown>
    <d-dropdown trigger="hover">
      <template #trigger>
        <d-button>Hover</d-button>
      </template>
      <d-dropdown-item> Account Profile </d-dropdown-item>
      <d-dropdown-item> Settings </d-dropdown-item>
      <d-dropdown-item> Sign out </d-dropdown-item>
    </d-dropdown>
  </div>
</template>
