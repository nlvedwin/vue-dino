<script setup>
import { reactive, ref } from "vue"

const state = reactive({
    errors: {},
})

setTimeout(() => {
    state.errors = {
        email: "The email field is required.",
        password: "The password field is required.",
    }
}, 1000)

const form = reactive({
    email: "",
    password: "",
})

const loading = ref(false)
const submit = () => {
    loading.value = true
    setTimeout(() => {
        loading.value = false
        state.errors = {}
    }, 1000)
}
</script>

<template>
    <div>
        <d-card class="d-max-w-md d-w-full">
            <template #header>Login Form</template>
            {{ form }}
            <d-form :errors="state.errors" @submit.prevent="submit">
                <d-input
                    label="Name"
                    name="name"
                    required
                    v-model="form.name"
                    placeholder="Enter Name"
                />
                <d-input
                    required
                    label="Email"
                    name="email"
                    v-model="form.email"
                    placeholder="Email"
                />
                <d-input
                    label="password"
                    name="password"
                    type="password"
                    v-model="form.password"
                    placeholder="password"
                />
                <template #footer>
                    <d-button
                        label="Submit"
                        type="submit"
                        :loading="loading"
                        primary
                    />
                    <d-button label="Reset Errors" />
                </template>
            </d-form>
        </d-card>
    </div>
</template>
