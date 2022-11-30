<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue"
import IconX from "../Shared/IconX.vue"

const props = defineProps({
    modelValue: Boolean,
    confirmText: { type: String, default: "Confirm" },
    cancelText: { type: String, default: "Cancel" },
    showConfirm: { type: Boolean, default: true },
    showCancel: { type: Boolean, default: true },
    headerText: String,
    contentText: String,
    size: String,
    loading: Boolean,
    disabledConfirm: Boolean,
    danger: Boolean,
})

const emit = defineEmits([
    "update:modelValue",
    "onUpdate:modelValue",
    "confirm",
    "cancel",
])

const openFromTrigger = ref(false)
const open = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit("update:modelValue", value)
        openFromTrigger.value = value
    },
})

const cancel = () => {
    open.value = false
    emit("cancel")
}

const shouldOpen = computed(() => {
    return open.value || openFromTrigger.value
})

const size = {
    sm: "sm:d-w-full sm:d-max-w-sm sm:d-my-8 sm:d-p-6",
    md: "md:d-w-full md:d-max-w-xl md:d-my-8 md:d-p-6",
    lg: "lg:d-w-full lg:d-max-w-4xl lg:d-my-8 lg:d-p-6",
}
const sizeSelected = size[props.size] || size.sm

const modalRef = ref()
onMounted(() => {
    const closeHandler = (e) => {
        const modalBody = modalRef.value.querySelector(".d-modal-body")
        if (!modalBody.contains(e.target)) {
            open.value = false
            emit("cancel")
        }
    }
    modalRef.value.addEventListener("click", closeHandler)
    onBeforeUnmount(() =>
        modalRef.value.removeEventListener("click", closeHandler)
    )
})
</script>

<template>
    <span v-if="$slots.trigger" @click="openFromTrigger = true">
        <slot name="trigger"></slot>
    </span>

    <div
        ref="modalRef"
        class="d-relative d-z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
    >
        <Transition
            enter-from-class="d-opacity-0"
            enter-to-class="d-opacity-100"
            enter-active-class="d-ease-out d-duration-300"
            leave-from-class="d-opacity-100"
            leave-to-class="d-opacity-0"
            leave-active-class="d-ease-in d-duration-200"
        >
            <div
                v-if="shouldOpen"
                class="d-backdrop d-fixed d-inset-0 d-bg-gray-500 d-bg-opacity-75 d-transition-opacity"
            ></div>
        </Transition>

        <div
            class="d-modal-card d-fixed d-inset-0 d-z-10 d-overflow-y-auto"
            v-show="shouldOpen"
        >
            <div
                class="d-flex d-min-h-full d-justify-center d-p-4 d-text-center d-items-center md:d-p-0"
            >
                <Transition
                    enter-from-class="d-opacity-0 d-translate-y-4 sm:d-translate-y-0 sm:d-scale-95"
                    enter-to-class="d-opacity-100 d-translate-y-0 sm:d-scale-100"
                    enter-active-class="d-ease-out d-duration-300"
                    leave-from-class="d-opacity-100 d-translate-y-0 sm:d-scale-100"
                    leave-to-class="d-opacity-0 d-translate-y-4 sm:d-translate-y-0 sm:d-scale-95"
                    leave-active-class="d-ease-in d-duration-200"
                >
                    <div
                        v-if="shouldOpen"
                        ref="modalContentRef"
                        class="d-modal-body d-relative d-transform d-overflow-hidden d-rounded-lg d-bg-white d-px-4 d-pt-5 d-pb-4 d-text-left d-shadow-xl d-transition-all"
                        :class="sizeSelected"
                    >
                        <div>
                            <div
                                class="d-font-semibold d-text-lg d-flex d-items-center"
                            >
                                <div class="d-flex-1">
                                    <slot name="header">{{ headerText }}</slot>
                                </div>
                                <a
                                    @click="cancel"
                                    class="d-ml-3 d-inline-block hover:d-text-primary-500"
                                >
                                    <IconX />
                                </a>
                            </div>
                            <div class="d-mt-3 sm:d-mt-5">
                                <slot name="content">
                                    <span v-html="contentText"></span>
                                </slot>
                            </div>
                        </div>
                        <div class="d-mt-5 sm:d-mt-6 d-space-x-3 d-text-right">
                            <slot name="footer">
                                <d-button
                                    v-if="showCancel"
                                    :disabled="loading"
                                    @click="cancel"
                                    :label="cancelText"
                                />
                                <d-button
                                    v-if="showConfirm"
                                    :primary="!danger"
                                    :danger="danger"
                                    @click="
                                        () => {
                                            emit('confirm')
                                        }
                                    "
                                    :label="confirmText"
                                    :loading="loading"
                                    :disabled="disabledConfirm"
                                />
                            </slot>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>
