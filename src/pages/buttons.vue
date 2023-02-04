<script setup>
import { ref } from 'vue'
import DButton from '../components/Button/DButton.vue'

const loading = ref(false)
const setToLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<template>
  <div>
    <h1>Buttons</h1>
    <d-card>
      <template #header>Basic Button</template>
      <div class="d-flex d-items-center d-space-x-4">
        <d-button primary>Primary</d-button>
        <d-button>Default</d-button>
        <d-button danger>Danger</d-button>
        <d-button :loading="true" primary>Click Me</d-button>
      </div>
      <div class="d-flex d-items-center d-space-x-4 d-mt-4">
        <d-button primary>Primary</d-button>
        <d-button size="xs" primary>xtra small</d-button>
        <d-button size="sm" primary>Small</d-button>
        <d-button size="md" primary>Medium</d-button>
        <d-button size="lg" primary>Large</d-button>
      </div>

      <div class="d-max-w-md">
        <d-button :loading="true" class="d-w-full" primary>wew</d-button>
      </div>
    </d-card>

    <div></div>

    <div class="d-max-w-md d-w-full">
      <d-card class="d-mt-6" title="Sign in to Appllication">
        <d-button primary class="d-w-full">Sign to account</d-button>
      </d-card>
    </div>

    <d-card class="d-mt-6" title="Button Icons">
      <div>
        <d-button :loading="true">
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path
                d="M4 13a8 8 0 0 1 7 7 6 6 0 0 0 3-5 9 9 0 0 0 6-8 3 3 0 0 0-3-3 9 9 0 0 0-8 6 6 6 0 0 0-5 3"
              />
              <path
                d="M7 14a6 6 0 0 0-3 6 6 6 0 0 0 6-3M14 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0"
              />
            </svg>
          </template>
          Deploy
        </d-button>
      </div>
    </d-card>
  </div>
</template>
