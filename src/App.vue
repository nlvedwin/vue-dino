<script setup>
import { routes } from './routes'
</script>

<template>
  <div class="d-min-h-screen d-bg-gray-200 d-p-6 d-flex d-w-full">
    <div
      class="d-mb-4 d-rounded-md d-w-[250px] d-mr-6 d-divide-y d-divide-gray-300"
    >
      <template v-for="route in routes">
        <router-link
          :to="route.path"
          class="d-underline d-block d-px-4 d-py-3 d-capitalize hover:d-bg-slate-100 d-bg-white"
        >
          {{ route.title }}
        </router-link>
      </template>
    </div>
    <div class="flex-1 d-w-full">
      <router-view></router-view>
    </div>
  </div>
</template>
