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
        <d-card class="max-w-md w-full">
            <template #header>Login Form</template>
            <d-form :errors="state.errors">
                <d-form-item label="Email">
                    <d-input
                        name="email"
                        v-model="form.email"
                        placeholder="Email"
                    />
                </d-form-item>
                <d-form-item label="Password">
                    <d-input
                        name="password"
                        type="password"
                        v-model="form.password"
                        placeholder="Password"
                    />
                </d-form-item>
                <d-form-item>
                    <div class="space-x-3 flex items-center">
                        <d-button :loading="loading" @click="submit" primary
                            >Submit</d-button
                        >
                        <d-button @click="() => (state.errors = {})">
                            Reset errors
                        </d-button>
                    </div>
                </d-form-item>
            </d-form>
        </d-card>
    </div>
</template>
