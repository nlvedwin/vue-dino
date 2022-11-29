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
    role: "",
    country: "",
    showCountry: false,
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
            <div class="d-mb-6">
                {{ form }}
            </div>
            <d-form :errors="state.errors" @submit.prevent="submit">
                <d-input
                    component="select"
                    label="Role"
                    name="Role"
                    :choices="[
                        { value: 'admin', label: 'Admin' },
                        { value: 'user', label: 'User' },
                    ]"
                    v-model="form.role"
                    placeholder="select role"
                />
                <d-input
                    v-if="form.showCountry"
                    component="select"
                    label="country"
                    name="country"
                    :choices="[
                        { value: 'philippines', label: 'Philippines' },
                        { value: 'usa', label: 'USA' },
                    ]"
                    v-model="form.country"
                    placeholder="select country"
                />
                <d-input
                    label="Name"
                    name="name"
                    required
                    v-model="form.name"
                    placeholder="enter name"
                />
                <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
                <d-switch v-model="form.showCountry"></d-switch>
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
