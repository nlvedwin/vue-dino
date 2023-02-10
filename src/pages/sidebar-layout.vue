<script setup>
import {
  IconDashboard,
  IconUsers,
  IconSettings,
  IconReport,
  IconHome2,
  IconBasket,
  IconDots,
} from '@tabler/icons-vue'
import { ref, onMounted, inject } from 'vue'

const active = ref('Dashboard')
const links = [
  {
    name: 'Dashboard',
    icon: IconHome2,
    href: '/dashboard',
  },
  {
    name: 'Users',
    icon: IconUsers,
    href: '/users',
  },
  {
    name: 'Products',
    icon: IconBasket,
    href: '/basket',
  },
  {
    name: 'Settings',
    icon: IconSettings,
    href: '/settings',
    children: [
      {
        name: 'Account Settings',
        href: '/settings/account',
      },
      {
        name: 'Timezone',
        href: '/settings/timezone',
      },
      {
        name: 'API Authentication',
        href: '/settings/api-authentication',
      },
      {
        name: 'Billing',
        href: '/settings/billing',
      },
    ],
  },
  //   {
  //     name: 'Admin Settings',
  //     icon: IconSettings,
  //     href: '/settings',
  //     children: [
  //       {
  //         name: 'Defaults',
  //       },
  //       {
  //         name: 'Users',
  //       },
  //     ],
  //   },
  {
    name: 'Reports',
    icon: IconReport,
    href: '/reports',
  },
]
const collapsed = ref(false)

const { showNav, hideNav } = inject('showNav')
onMounted(() => {
  hideNav()
})
</script>

<template>
  <div class="d-flex d-min-h-screen d-bg-gray-200">
    <d-sidebar :collapsed="collapsed" dark class="d-bg-white-600">
      <template #header>
        <span v-if="collapsed">N</span>
        <span v-else class="d-py-2 d-block">
          <img src="@/assets/img/logo.png" alt="" />
        </span>
      </template>
      <d-menu v-model="active" :collapsed="collapsed">
        <template v-for="link in links">
          <d-menu-item v-if="!link.children" :value="link.name">
            <template #icon>
              <component :is="link.icon"></component>
            </template>
            {{ link.name }}
          </d-menu-item>
          <d-submenu-item v-else>
            <template #icon>
              <IconSettings />
            </template>
            {{ link.name }}
            <template #submenu>
              <d-menu-item v-for="child in link.children" :value="child.name">
                {{ child.name }}
              </d-menu-item>
            </template>
          </d-submenu-item>
        </template>
      </d-menu>
      <template #footer>
        <d-dropdown class="d-w-full">
          <template #trigger>
            <div
              class="d-flex d-items-center d-text-xs d-justify-between d-bg-gray-100 hover:d-bg-gray-200 d-transition-all d-duration-200 d-p-2 d-rounded-lg d-cursor-pointer"
              :class="{ 'd-justify-between': !collapsed }"
            >
              <div
                :style="{
                  backgroundImage:
                    'url(https://avatars.githubusercontent.com/u/26597108?v=4)',
                }"
                class="d-h-9 d-w-9 d-rounded-full d-bg-gray-300 d-flex-shrink-0 d-bg-cover d-mx-auto"
              ></div>
              <div v-if="!collapsed">
                <div class="d-font-semibold">Edwin Encomienda</div>
                <div class="d-text-gray-600">edwin@netlinkvoice.com</div>
              </div>
              <div
                v-if="!collapsed"
                class="d-relative d-z-10 d-ml-2 d-flex d-justify-start d-flex-col d-h-full"
              >
                <IconDots size="20" />
              </div>
            </div>
          </template>
          <d-dropdown-item> Account Profile </d-dropdown-item>
          <d-dropdown-item> Settings </d-dropdown-item>
          <d-dropdown-item> Sign out </d-dropdown-item>
        </d-dropdown>
      </template>
    </d-sidebar>
    <div>
      <div class="d-p-6">
        <button @click="collapsed = !collapsed">collapsed</button>

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
