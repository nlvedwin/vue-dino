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
            <div class="mt-4 d-max-w-sm d-space-y-4 d-mt-6">
                <d-input
                    v-model="name"
                    type="text"
                    placeholder="Enter Name"
                    helpText="Enter your full name to secure your account"
                />
                <d-input placeholder="Enter your password" type="password" />
                <d-input placeholder="Enter Number" type="number" />
                <d-input type="text" v-model="country" />
                <d-input
                    placeholder="With Error"
                    type="text"
                    error="Something went wrong"
                />
            </div>
        </d-card>
    </div>
</template>
