<template>
  <div :style="attrStyle" :class="[
    inputSize,
    inputBasicCssClasses,
    attrClass,
    disabled ? '!dd-pointer-events-none !dd-cursor-not-allowed' : '',
    'dd-border-solid  dd-border  dd-shadow-sm dd-rounded-md',
    showDropdown ? '!dd-border-solid !dd-border-teal-600 !dd-outline-none' : '', hasError
      ? ' dd-border-red-600 focus:!dd-border-red-600 focus:!dd-ring-red-600'
      : '!dd-border-gray-300 focus:!dd-ring-teal-600 focus:!dd-border-teal-600',]"
    @click="emits('toggleDropdown', $event)" ref="dropdownInputWidth" class="dd-w-full dd-relative dd-flex ">

    <input @vnode-mounted="focusToInput"  v-if="showDropdown" id="inputElement"
      ref="dropdownInput" :class="[
        ' focus-visible:dd-outline-none',
      ]" :readonly="!filterable"
      :placeholder="inputModelValue"
      v-model="inputValue" @input="emits('searchQuery', $event.target.value)" />
    <input  :placeholder="placeholder" class="focus-visible:dd-outline-none dd-cursor-pointer" :value="inputModelValue" readonly v-else />
    <ddAvatar v-if="selectedValue && showAvatar" size="mini" class="dd-mr-3"
      :srcLink="selectedValue[props.defaultProps.avatar]" />
    <span :class="{ 'rotate-icon': showDropdown }"
      class="dd-absolute dd-inset-y-0 dd-right-0 dd-flex dd-pt-1.5 dd-pr-2 dd-pointer-events-none">
      <ChevronDownIcon class=" dd-h-5 dd-w-5 dd-text-gray-400" aria-hidden="true" />
    </span>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, watchEffect } from "vue"
import { ChevronDownIcon } from "@heroicons/vue/solid"
import ddAvatar from "../avatars/index.vue"
import ddBadge from "../badges/index.vue"

const dropdownInput = ref( "" )
const inputValue = ref( '' )
const dropdownInputWidth = ref()
const emits = defineEmits( [
  "toggleDropdown",
  "searchQuery",
  "removeItem"
] )

const focusToInput = ( e ) => {
  inputValue.value = ""
  dropdownInput.value.focus()
}



const props = defineProps( {
  attrClass: {
    type: String,
  default: ""
  },
  attrStyle: {
    type: String,
    default: ""
  },
  inputModelValue: {
    type: [String, Number],
    default: '',
  },
  isIconRotated: {
    type: Boolean,
    default: false,
  },
  showAvatar: {
    type: Boolean,
    default: false,
  },
  showDropdown: {
    type: Boolean,
    default: false,
  },
  hasError: {
    type: Boolean,
    default: false,
  },
  inputSize: {
    type: String,
    default: ''
  },
  showCollapseTag: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },

  filterable: {
    type: Boolean,
    default: false,
  },
  selectedOptions: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: null,
  },
  selectedValue: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [Number, String, Array],
    default: null,
  },
  srcLink: {
    type: [String],
    default: null,
  },
  inputBasicCssClasses: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    validator: function ( value ) {
      // The value must match one of these strings
      return ["xs", "sm", "base", "lg", "xl"].indexOf( value ) !== -1
    },
    default: "base",
  },
  checkIcon: {
    type: String,
    validator: function ( value ) {
      // The value must match one of these strings
      return ["left", "right", "none"].indexOf( value ) !== -1
    },
    default: "right",
  },
  defaultProps: {
    type: Object,
    default: () => ( {
      name: "name",
      value: "value",
      avatar: "avatar",
    } ),
  },

} )

defineExpose( {
  dropdownInputWidth
} )
</script>

<style >
.rotate-icon svg {
  transform: rotate(180deg);
  transition: 0.2s ease-in-out;
}
</style>