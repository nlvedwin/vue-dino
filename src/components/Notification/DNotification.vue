<script setup>
defineProps({
  title: {
    type: String,
  },
  type: {
    type: String,
  },
  message: {
    type: String,
  },
  open: {
    type: Boolean,
  },
})
</script>

<template>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <!-- <div
    aria-live="assertive"
    class="d-pointer-events-none d-fixed d-inset-0 d-flex d-items-end d-px-4 d-py-6 sm:d-items-start sm:d-p-6"
  > -->
    <div
      class="d-flex d-w-full d-flex-col d-items-center d-space-y-4 sm:d-items-end"
    >
      <Transition
        enter-from-class="d-transform d-ease-out d-duration-300 d-transition"
        enter-to-class="d-translate-y-0 d-opacity-100 sm:d-translate-x-0"
        enter-active-class="d-translate-y-2 d-opacity-0 sm:d-translate-y-0 sm:d-translate-x-2"
        leave-from-class="d-opacity-100"
        leave-to-class="d-opacity-0"
        leave-active-class="d-transition d-ease-in d-duration-100"
      >
        <div
        v-if="open"
        class="d-pointer-events-auto d-w-full d-max-w-sm d-overflow-hidden d-rounded-lg d-bg-white d-shadow-lg"
      >
        <div class="d-p-4">
          <div class="d-flex d-items-center">
            <div class="d-flex d-w-0 d-flex-1 d-justify-between">
              <p class="d-w-0 d-flex-1 d-text-sm d-font-medium d-text-gray-900">

               <div class="d-flex d-items-center d-space-x-2">
                <svg v-if="type === 'success'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="d-w-6 d-h-6 d-text-green-500" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>
                <svg v-else-if="type === 'error'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="d-w-6 d-h-6 d-text-red-500" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                <svg v-else-if="type === 'warning'" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="d-w-6 d-h-6 d-text-yellow-500" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>

                <span>{{ title }}</span>
               </div>

                <div v-if="message" class="d-mt-4">{{ message }}</div>
              </p>
            </div>
            <div class="d-ml-4 d-flex d-flex-shrink-0">
              <button
              @click="$emit('close')"
                type="button"
                class="d-inline-flex d-rounded-md d-bg-white d-text-gray-400 hover:d-text-gray-500 focus:d-outline-none focus:d-ring-2 focus:d-ring-primary-500 focus:d-ring-offset-2"
              >
                <span class="d-sr-only">Close</span>
                <!-- Heroicon name: mini/x-mark -->
                <svg
                  class="d-h-5 d-w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      </Transition>
    </div>
  <!-- </div> -->
</template>
