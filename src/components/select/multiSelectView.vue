<template>
    <div
    :class="[
    inputSize,
    inputBasicCssClasses,
    selectedOptionsArray.length > 0 ? '!dd-py-1 !dd-pb-0' : '',
    
    disabled ? '!dd-pointer-events-none !dd-cursor-not-allowed' : '',
    'dd-border-solid  dd-border  dd-shadow-sm dd-rounded-md dd-min-w-[200px] dd-max-w-[200px]',
    showDropdown ? '!dd-border-solid !dd-border-teal-600 !dd-outline-none' : '', hasError
      ? ' dd-border-red-600 focus:!dd-border-red-600 focus:!dd-ring-red-600'
      : '!dd-border-gray-300 focus:!dd-ring-teal-600 focus:!dd-border-teal-600',]"
      @click="emits('toggleDropdown', $event)"
     ref="dropdownInputWidth" class="dd-w-full dd-relative dd-flex">
     <div>
      <template v-if="selectedOptionsArray.length > 0">
          <ddBadge v-for="(item, index) in selectedOptionsArray" :key="index" class="dd-mr-1 dd-mb-1" 
            size="xs" @click.stop closable @close="emits('removeItem' , item)" :title="item[defaultProps.name]" />
          <div v-if="showCollapseTag">
            <ddBadge class="dd-ml-1 dd-mt-[5px]" size="xs" @click.stop
              :title="`+${maxCollapseTags ? selectedOptions.length - maxCollapseTags : selectedOptions.length - 1}`" />
          </div>
        </template>
          <input @vnode-mounted="focusToInput"  @click="emits('toggleDropdown',$event)" v-if="showDropdown && filterable" ref="dropdownInput"
            id="inputElement" :class="[
              'focus-visible:dd-outline-none',
            ]" :readonly="!filterable"
            class="dd-w-[100px]"
            :placeholder="queryPlaceholder && !multiple ? queryPlaceholder : selectedOptions.length > 0 ? '' : props.placeholder"
            :disabled="disabled"  v-model="inputValue"
            @input="emits('searchQuery', $event.target.value)" />
      </div>
    <ddAvatar v-if="selectedValue && showAvatar" size="mini" class="dd-mr-3"
      :srcLink="selectedValue[props.defaultProps.avatar]" />
    <span :class="{ 'rotate-icon': isIconRotated }" class="dd-absolute dd-inset-y-0 dd-right-0 dd-flex dd-pt-1.5 dd-pr-2 dd-pointer-events-none">
      <ChevronDownIcon class="dd-h-5 dd-w-5 dd-text-gray-400" aria-hidden="true" />
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
    type: Object,
    default: () => {}
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
  collapseTags: {
    type: Boolean,
    default: false,
  },
  maxCollapseTags: {
    type: [Number, String],
    default: null,
  },
  selectedOptionsArray: {
    type: Array,
    default: () => [],
  },
  selectedOptions: {
    type: Array,
    default: () => [],
  },
  queryPlaceholder: {
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
  inputBasicCssClasses:{
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

defineExpose({
  dropdownInputWidth
})
</script>

<style lang="scss" scoped></style>