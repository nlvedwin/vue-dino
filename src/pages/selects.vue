<script setup>
import { ref } from "vue"

const myValue = ref("one")
const myValueMultiple = ref(null)
const choices1 = [
    { value: "one", label: "Elon" },
    { value: "two", label: "Judy" },
    { value: "three", label: "Edwin" },
]
const choices = [
    { value: "one", label: "Elon" },
    { value: "two", label: "Judy" },
    { value: "three", label: "Edwin" },
]
</script>

<template>
    <div>
        <h1>Selects</h1>
        <d-card class="w-full max-w-md">
            <template #header>Selects</template>
            <div class="space-y-3">
                <d-select
                    placeholder="This is a single placeholder"
                    v-model="myValue"
                    :choices="choices1"
                ></d-select>
                <span> {{ myValue }}</span>
                <d-select
                    placeholder="Search your name"
                    multiple
                    v-model="myValueMultiple"
                    :choices="choices"
                ></d-select>
                <span>{{ myValueMultiple }}</span>
            </div>
        </d-card>
    </div>
</template>
