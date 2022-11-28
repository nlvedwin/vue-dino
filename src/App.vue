<script setup>
import { routes } from "./routes"
</script>

<template>
    <div class="d-min-h-screen d-bg-gray-200 d-p-6">
        <div class="d-bg-white d-mb-4 d-shadow-sm d-rounded-md">
            <template v-for="route in routes">
                <router-link
                    :to="route.path"
                    class="d-underline d-inline-block d-px-4 d-py-3 d-capitalize"
                >
                    {{ route.title }}
                </router-link>
            </template>
        </div>
        <router-view></router-view>
    </div>
</template>
