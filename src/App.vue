<script setup>
import { routes } from "./routes"
console.log(routes)
</script>

<template>
    <div class="min-h-screen bg-gray-200 p-6">
        <div class="bg-white mb-4">
            <!-- nav links -->
            <template v-for="route in routes">
                <router-link
                    :to="route.path"
                    class="underline inline-block px-4 py-2 capitalize"
                >
                    {{ route.title }}
                </router-link>
            </template>
        </div>
        <router-view></router-view>
    </div>
</template>
