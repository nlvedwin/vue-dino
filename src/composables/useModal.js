import { createApp, defineComponent, ref, h, reactive, onMounted } from "vue"
import DButton from "../components/Button/DButton.vue"
import DModal from "../components/Modal/DModal.vue"

export function useModal(options = {}) {
    const stateProps = reactive({
        open: false,
        data: {},
    })

    const create = () => {
        const container = document.createElement("div")
        container.classList = "d-modal-container"
        document.body.appendChild(container)

        const modal = createApp({
            name: "DModal",
            render: () =>
                h(DModal, {
                    modelValue: stateProps.open,
                    ...options,
                    onConfirm: () => {
                        if (options.onConfirm) {
                            options.onConfirm({
                                ...stateProps.data,
                            })
                        } else {
                            stateProps.open = false
                        }
                    },
                    onCancel: () => {
                        if (options.onCancel) {
                            options.onCancel()
                        } else {
                            stateProps.open = false
                        }
                    },
                }),
        })

        modal.component("DButton", DButton)
        modal.mount(container)

        return this
    }

    const show = (data = {}) => {
        stateProps.data = data
        stateProps.open = true
    }
    const hide = () => (stateProps.open = false)

    onMounted(() => {
        create()
    })

    return {
        show,
        hide,
    }
}
