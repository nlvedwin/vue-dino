<script setup>
import {
  IconDashboard,
  IconUsers,
  IconSettings,
  IconReport,
} from '@tabler/icons-vue'
import { ref } from 'vue'

const active = ref('Timezone')
const links = [
  {
    name: 'Dashboard',
    icon: IconDashboard,
    href: '/dashboard',
  },
  {
    name: 'Users',
    icon: IconUsers,
    href: '/users',
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
</script>

<template>
  <div>
    <button @click="collapsed = !collapsed">collapsed</button>
  </div>
  <div class="d-flex d-space-x-6">
    <d-sidebar>
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
    </d-sidebar>
    <d-sidebar class="d-bg-gray-800">
      <d-menu v-model="active" dark :collapsed="collapsed">
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
    </d-sidebar>
    <d-sidebar class="d-bg-sky-500">
      <d-menu v-model="active" dark :collapsed="collapsed">
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
    </d-sidebar>
  </div>
</template>
