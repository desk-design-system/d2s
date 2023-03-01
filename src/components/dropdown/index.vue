<template>
  <Menu as="div" class="dd-relative dd-inline-block dd-text-left">
    <div>
      <MenuButton class="dd-inline-flex dd-w-full dd-justify-center dd-rounded-md dd-border dd-border-gray-300 dd-bg-white dd-px-4 dd-py-2 dd-text-sm dd-font-medium dd-text-gray-700 dd-shadow-sm hover:dd-bg-gray-50">
        Options
        <ChevronDownIcon class="-dd-mr-1 dd-ml-2 dd-h-5 dd-w-5" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition enter-active-class="dd-transition dd-ease-out dd-duration-100" enter-from-class="dd-transform dd-opacity-0 dd-scale-95" enter-to-class="dd-transform dd-opacity-100 dd-scale-100" leave-active-class="dd-transition dd-ease-in dd-duration-75" leave-from-class="dd-transform dd-opacity-100 dd-scale-100" leave-to-class="dd-transform dd-opacity-0 dd-scale-95">
      <MenuItems class="dd-absolute dd-left-0 dd-z-10 dd-mt-2 dd-w-fit dd-whitespace-nowrap dd-origin-top-right dd-rounded-md dd-bg-white dd-shadow-lg dd-ring-1 dd-ring-black dd-ring-opacity-5 focus:dd-outline-none">
        <div class="dd-py-1">
          <MenuItem v-slot="{ active }">
            <a href="#" :class="[active ? 'dd-bg-gray-100 dd-text-gray-900' : 'dd-text-gray-700', 'dd-block dd-px-4 dd-py-2 dd-text-sm']">Account settings</a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
</script>