<script setup>
import { ref } from "vue"

const name = ref()
const country = ref("Philippines")
</script>

<template>
    <div>
        <h1>Inputs</h1>
        <d-card>
            <template #header>Basic Input</template>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe modi
            quaerat atque eligendi animi ullam amet qui magnam praesentium
            expedita, officiis dicta possimus illum repudiandae laudantium eaque
            accusamus recusandae? Ipsa.
            <div class="mt-4 max-w-sm space-y-4">
                <d-input
                    v-model="name"
                    type="text"
                    placeholder="Enter Name"
                ></d-input>
                <span>{{ name }}</span>
                <d-input type="password"></d-input>
                <d-input type="text" v-model="country"></d-input>
                <span>{{ country }}</span>
            </div>
        </d-card>
    </div>
</template>
