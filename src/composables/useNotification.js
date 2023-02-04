import { createApp, h, onMounted, reactive } from 'vue'
import DNotification from '../components/Notification/DNotification.vue'

export function useNotification() {
  const stateProps = reactive({
    open: false,
    options: {},
  })

  let notificationContainer = null

  const create = () => {
    let parentContainer = null
    if (document.querySelector('#d-notification-parent')) {
      parentContainer = document.querySelector('#d-notification-parent')
    } else {
      parentContainer = document.createElement('div')
      parentContainer.id = 'd-notification-parent'
      parentContainer.classList =
        'd-flex d-flex-col d-space-y-3 d-fixed d-inset-0 d-pointer-events-none d-p-6'
      document.body.appendChild(parentContainer)
    }

    const container = document.createElement('div')
    container.classList = 'd-notification-container'
    console.log(parentContainer)
    parentContainer.appendChild(container)

    const notification = createApp({
      name: 'DNotitication',
      render: () =>
        h(DNotification, {
          open: stateProps.open,
          ...stateProps.options,
          onClose: () => {
            close()
          },
        }),
    })

    notification.mount(container)
    notificationContainer = container

    return this
  }

  const close = () => {
    stateProps.open = false
    setTimeout(() => {
      notificationContainer.remove()
    }, 500)
  }

  const open = () => {
    create()

    setTimeout(() => {
      setTimeout(() => {
        stateProps.open = true
      })
      setTimeout(() => {
        close()
      }, stateProps.options.duration || 2 * 1000)
    })
  }

  const success = (options = {}) => {
    stateProps.options = {
      ...options,
      type: 'success',
    }
    open()
  }

  const error = (options = {}) => {
    stateProps.options = {
      ...options,
      type: 'error',
    }
    open()
  }

  const warning = (options = {}) => {
    stateProps.options = {
      ...options,
      type: 'warning',
    }
    open()
  }

  return {
    success,
    error,
    warning,
  }
}
