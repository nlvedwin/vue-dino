<script setup>
import {
  IconDashboard,
  IconDots,
  IconDoor,
  IconAlarm,
  IconNotes,
  IconPhone,
  IconUsers,
  IconHistory,
  IconQuestionCircle,
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarRightCollapse,
} from '@tabler/icons-vue'
import { ref, onMounted, inject } from 'vue'

const active = ref('Dashboard')
const links = [
  {
    name: 'Dashboard',
    icon: IconDashboard,
    href: '/dashboard',
  },
  {
    name: 'Rooms',
    icon: IconDoor,
  },
  {
    name: 'Wakeup Calls',
    icon: IconAlarm,
  },
  {
    name: 'Phone',
    icon: IconPhone,
  },
  {
    name: 'Groups',
    icon: IconUsers,
  },
  {
    name: 'History',
    icon: IconHistory,
    children: [
      {
        name: 'Guest Call History',
      },
      {
        name: 'Guest History',
      },
    ],
  },
  {
    name: 'Logs',
    icon: IconNotes,
  },
  {
    name: 'Help',
    icon: IconQuestionCircle,
  },
]
const collapsed = ref(false)

const { showNav, hideNav } = inject('showNav')
onMounted(() => {
  hideNav()
})
</script>

<template>
  <div class="d-flex d-min-h-screen d-bg-gray-200 font-sans">
    <d-sidebar
      @collapse="collapsed = $event"
      :collapsed="collapsed"
      dark
      class="d-bg-white"
      :width="280"
    >
      <template #header>
        <a>
          <span v-if="collapsed">
            <img src="@/assets/img/logo-icon.png" alt="" class="d-w-6" />
          </span>
          <span v-else class="d-py-2 d-block">
            <img src="@/assets/img/phonesuite-logo.svg" class="d-w-44" alt="" />
          </span>
        </a>
      </template>
      <d-menu v-model="active" :collapsed="collapsed">
        <template v-for="link in links">
          <d-menu-item
            v-if="!link.children"
            :value="link.name"
            :class="{
              'd-bg-sky-50 d-text-sky-500': active === link.name,
              'hover:d-bg-sky-50 hover:d-text-sky-500': true,
            }"
          >
            <template #icon>
              <component :is="link.icon"></component>
            </template>
            {{ link.name }}
          </d-menu-item>
          <d-submenu-item
            v-else
            :class="{
              'd-bg-sky-50 d-text-sky-500': active === link.name,
              'hover:d-bg-sky-50 hover:d-text-sky-500': true,
            }"
          >
            <template #icon>
              <component :is="link.icon"></component>
            </template>
            {{ link.name }}
            <template #submenu>
              <d-menu-item
                v-for="child in link.children"
                :value="child.name"
                :class="{
                  'd-bg-sky-50 d-text-sky-500': active === child.name,
                  'hover:d-bg-sky-50 hover:d-text-sky-500': true,
                }"
              >
                {{ child.name }}
              </d-menu-item>
            </template>
          </d-submenu-item>
        </template>
      </d-menu>
      <template #footer>
        <d-dropdown class="d-w-full">
          <template #trigger>
            <d-tooltip
              :disabled="!collapsed"
              content="Edwin Encomienda <br> edwin@netlinkvoice.com"
              :options="{ placement: 'right-end', allowHTML: true }"
            >
              <div
                class="d-flex d-items-center d-text-sm d-justify-between d-bg-gray-100 hover:d-bg-gray-200 d-transition-all d-duration-200 d-p-2 d-rounded-lg d-cursor-pointer"
              >
                <div
                  :style="{
                    backgroundImage:
                      'url(https://avatars.githubusercontent.com/u/26597108?v=4)',
                  }"
                  class="d-h-9 d-w-9 d-rounded-full d-bg-gray-300 d-flex-shrink-0 d-bg-cover"
                  :class="{ 'd-mx-auto': collapsed }"
                ></div>
                <div
                  v-if="!collapsed"
                  class="flex-1 d-flex d-justify-center d-flex-col d-mx-2 d-overflow-hidden"
                >
                  <div class="d-font-semibold d-truncate">Edwin Encomienda</div>
                  <div class="d-text-gray-600 d-truncate">
                    encomienda.dev@gmail.com
                  </div>
                </div>
                <div
                  v-if="!collapsed"
                  class="d-relative d-z-10 d-ml-3 d-flex d-justify-start d-flex-col d-h-full"
                >
                  <IconDots size="20" />
                </div>
              </div>
            </d-tooltip>
          </template>
          <d-dropdown-item> Account Profile </d-dropdown-item>
          <d-dropdown-item> Settings </d-dropdown-item>
          <d-dropdown-item> Sign out </d-dropdown-item>
        </d-dropdown>
      </template>
    </d-sidebar>
    <div>
      <div class="d-p-6">
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
          cupiditate. Nobis, sunt recusandae at, aspernatur necessitatibus
          corrupti quis similique cumque harum eos atque officiis blanditiis
          velit laboriosam! Eligendi, repellat itaque.
        </div>
      </div>
    </div>
  </div>
</template>
