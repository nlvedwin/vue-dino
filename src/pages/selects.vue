<script setup>
import { ref } from "vue"

const myValue = ref()
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
        <d-card class="d-w-full d-max-w-md">
            <template #header>Selects</template>
            <div class="d-space-y-3">
                <div>
                    Simple Select
                    <d-select
                        placeholder="This is a single placeholder"
                        v-model="myValue"
                        :choices="choices1"
                    ></d-select>
                    <span> single: {{ myValue }}</span>
                </div>
                <div>
                    Searchable Single
                    <d-select
                        placeholder="Search your name"
                        searchable
                        v-model="myValueMultiple"
                        :choices="choices"
                    ></d-select>
                    <span>single: {{ myValueMultiple }}</span>
                </div>
                <div>
                    Searchable Multiple
                    <d-select
                        placeholder="Search your name"
                        searchable
                        multiple
                        v-model="myValueMultiple"
                        :choices="choices"
                    ></d-select>
                    <span>multiple: {{ myValueMultiple }}</span>
                </div>
            </div>
        </d-card>
    </div>
</template>
