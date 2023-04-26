<template>
  <Menu as="div" class="dd-relative dd-inline-block dd-text-left">
    <div v-if="type == 'avatar'">
      <MenuButton class="dd-bg-transparent dd-cursor-pointer" >
        <ddAvatar :size="avatarSize" :srcLink="avatarLink"  />
      </MenuButton>
    </div>
    <div v-else-if="type == 'button'">
      <MenuButton :class="{ ...basicButton }" class="dd-inline-flex dd-w-full dd-justify-center dd-cursor-pointer">
        <slot>
          {{ label }}
        </slot>
        <span :class="[size == 'xs' ? 'dd-h-4 dd-w-4' : 'dd-h-5 dd-w-5', label != '' ? '-dd-mr-1 dd-ml-1' : '']" class="">
          <slot name="icon">
            <ChevronDownIcon aria-hidden="true" />
          </slot>
        </span>
      </MenuButton>
    </div>

    <transition enter-active-class="dd-transition dd-ease-out dd-duration-100"
      enter-from-class="dd-transform dd-opacity-0 dd-scale-95" enter-to-class="dd-transform dd-opacity-100 dd-scale-100"
      leave-active-class="dd-transition dd-ease-in dd-duration-75"
      leave-from-class="dd-transform dd-opacity-100 dd-scale-100" leave-to-class="dd-transform dd-opacity-0 dd-scale-95">
      <MenuItems
        :class="`dd-absolute dd-${placement}-0 dd-z-10 dd-mt-2 dd-w-fit dd-whitespace-nowrap dd-origin-top-${placement} dd-rounded-md dd-bg-white dd-shadow-lg dd-ring-1 dd-ring-black dd-ring-opacity-5 focus:dd-outline-none`">
        <div class="dd-py-1">
          <MenuItem @click="getClick(item)" v-for="item in options" :key="item" v-slot="{ active }">
          <span href="#"
            :class="[active ? 'dd-bg-teal-50 dd-text-teal-600' : 'dd-text-gray-700', 'dd-block dd-py-2 dd-px-4 dd-cursor-pointer', size == 'xs' ? 'dd-text-xs' : 'dd-text-sm']">
            <slot name="items" :item="item">
              {{ item[props.defaultProps.name] }}
            </slot>
          </span>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { ref, computed } from "vue"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import ddAvatar from "../avatars/index.vue"
const emits = defineEmits( ['update:modelValue', "change", 'command'] )
const props = defineProps( {
  label: {
    type: String,
    default: "",
  },
  avatarSize:{
    type: String,
    default: "medium",
  },
  avatarLink:{
    type: String,
    default: "https://img.freepik.com/free-icon/user_318-563642.jpg",
  },
  options: {
    type: Array,
    required: true
  },
  // type: {
  //     type: String,
  //     validator: function ( value ) {
  //       // The value must match one of these strings
  //       return (
  //         ["text", "button", "avatar"].indexOf( value ) !== -1
  //       )
  //     },
  //     default: "button",
  //   },
  defaultProps: {
    type: Object,
    default: () => ( {
      name: 'name',
      value: 'value',
      avatar: 'avatar'
    } )
  },
  color: {
    size: {
    type: String,
    validator: function ( value ) {
      // The value must match one of these strings
      return (
        ["primary", "danger", "white",'transparent'].indexOf( value ) !== -1
      )
    },
    default: "white",
  },
  },
  type: {
    type: String,
    validator: function ( value ) {
      // The value must match one of these strings
      return (
        ["button", "text",].indexOf( value ) !== -1
      )
    },
    default: "button",
  },
  placement: {
    type: String,
    validator: function ( value ) {
      // The value must match one of these strings
      return (
        ["right", "left",].indexOf( value ) !== -1
      )
    },
    default: "right",
  },
  size: {
    type: String,
    validator: function ( value ) {
      // The value must match one of these strings
      return (
        ["xs", "sm", "base", "lg", "xl"].indexOf( value ) !== -1
      )
    },
    default: "base",
  },
  defaultProps: {
    type: Object,
    default: () => ( {
      name: 'name',
      value: 'value',
    } )
  }
} )
const getClick = ( i ) => {
  emits( "command", i )
}
const basicButton = computed( () => {
  // return {
  // if ( props.type == 'text' ) {
  //   return {
  //     "dd-text-xs ": props.size === "xs",
  //     "dd-text-sm  ":
  //       props.size === "sm",
  //     "dd-text-sm ": props.size === "base",
  //     "dd-text-base ": props.size === "lg",
  //     "dd-text-base ": props.size === "xl",
  //     "dd-text-teal-600  hover:dd-text-teal-700": props.color === "primary",
  //     "dd-text-red-600  hover:dd-text-red-200": props.color === "danger",
  //     " dd-text-gray-600 dd-border hover:dd-text-gray-700 dd-bg-transparent":
  //       props.color === "",
  //   }
  // } else {
    return {
      "dd-px-2.5 dd-py-1.5 dd-h-6 dd-text-xs dd-rounded": props.size === "xs",
      "dd-px-3 dd-py-2 dd-text-sm dd-h-7 dd-rounded-md":
        props.size === "sm",
      "dd-px-4 dd-py-2 dd-text-sm dd-rounded-md dd-h-8": props.size === "base",
      "dd-px-4 dd-py-2 dd-text-base dd-rounded-md dd-h-9": props.size === "lg",
      "dd-px-6 dd-py-3 dd-text-base dd-rounded-md dd-h-10": props.size === "xl",
      "dd-cursor-not-allowed !dd-bg-gray-200 !dd-text-gray-400 hover:dd-bg-gray-300":
        props.disable,
      "dd-bg-teal-600 dd-text-white hover:dd-bg-teal-700":
        props.color === "primary",
      "dd-bg-red-600 dd-text-white hover:dd-bg-red-700":
        props.color === "danger",
      "dd-bg-white dd-border-gray-300 dd-text-gray-700 dd-border hover:dd-bg-gray-50 focus:dd-outline-none":
        props.color === "white",
        "dd-text-gray-700 dd-bg-transparent":
        props.color =='transparent',
    }
  // }
} )

</script>