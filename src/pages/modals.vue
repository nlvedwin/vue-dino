<script setup>
import { ref } from "vue"
import { useModal } from "../composables/useModal"
const openModal = ref(false)

const modalDanger = useModal({
    danger: true,
    headerText: "Confirm",
    contentText: "Are you sure you want to delete this?",
    confirmText: "Yes",
    cancelText: "No",
    showCancel: true,
    onConfirm: (data) => {
        modalDanger.hide()
        console.log("modalDanger", data)
    },
})
const modalPrimary = useModal({
    headerText: "Confirm",
    contentText: "Are you sure you want to delete this?",
    confirmText: "Yes",
})
</script>

<template>
    <div>
        <div class="d-flex d-items-center d-space-x-4 d-mb-4">
            <d-button
                label="Modal Primary Basic"
                primary
                @click="openModal = true"
            />
            <d-button
                label="Modal Primary Confirm"
                primary
                @click="modalPrimary.show()"
            />
            <d-button
                danger
                label="Modal Danger Confirm"
                primary
                @click="modalDanger.show({ id: 200 })"
            />
        </div>

        <d-modal v-model="openModal">
            <template #header> Basic Modal </template>
            <template #content>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit, delectus quo. Laboriosam commodi excepturi nemo dolorem
                fuga accusantium, repellendus porro nesciunt voluptatem harum
                esse culpa molestias cumque officiis maxime incidunt.
            </template>
        </d-modal>
    </div>
</template>
