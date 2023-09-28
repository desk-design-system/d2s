<template>
 <div class="dd-w-full dd-relative dd-flex">
        <div class="dd-border dd-min-h-8 dd-border-gray-300 dd-shadow-sm dd-box-border dd-rounded-md dd-cursor-pointer dd-px-0.5" :class="[
        showDropdown ? 'dd-border-teal-600 dd-outline-none' : '', hasError
          ? ' !dd-border-red-600 focus:!dd-border-red-600 dd-focus:!dd-ring-red-600'
          : 'dd-border-gray-300 focus:dd-ring-teal-600 focus:!dd-border-teal-600',]"
          ref="dropdownInputMutiple">
          <input @vnode-mounted="focusToInput" @click="toggleDropdown" v-if="showDropdown" ref="dropdownInput"
            id="inputElement" :class="[
              inputSize,
              disabled ? 'dd-pointer-events-none dd-cursor-not-allowed' : ''
            ]" :readonly="!filterable"
            :placeholder="queryPlaceholder && !multiple ? queryPlaceholder : selectedOptions.length > 0 ? '' : props.placeholder"
            :disabled="disabled" class=" select-input dropdown-button dd-border-solid focus-visible:dd-outline-none 
                 dd-items-center dd-cursor-pointer dd-bg-white dd-relative
                dd-border dd-rounded-md dd-shadow-sm dd-pl-3 dd-pr-10 dd-py-2 dd-text-left 
                dd-h-9 sm:dd-text-sm !dd-w-full !dd-flex-1" v-model="inputValue"
            @input="searchQuery($event.target.value)"/>
            <!-- !multiple ? 'dd-w-full' : 'dd-border-none !dd-h-[30px]', -->
          <div @click="toggleDropdown" v-else :class="[
            inputSize,
            disabled ? 'dd-pointer-events-none dd-cursor-not-allowed' : ''
          ]" class=" dd-border-solid focus-visible:dd-outline-none 
                 dd-items-center dd-cursor-pointer dd-bg-white dd-relative
                dd-border dd-rounded-md dd-shadow-sm dd-pl-3 dd-pr-10 dd-py-2 dd-text-left 
                dd-h-9 sm:dd-text-sm dd-min-w-[200px] dd-flex">
            <span >
              <ddBadge v-for="(item, index) in selectedOptionsArray" :key="index" :class="[index == 0 ? '' : 'dd-ml-1']"
                size="xs" @click.stop closable @close="removeItem(item)" :title="item[defaultProps.name]" />
              <div v-if="showCollapseTag">
                <ddBadge class="dd-ml-1 dd-mt-[5px]" size="xs" @click.stop
                  :title="`+${maxCollapseTags ? selectedOptions.length - maxCollapseTags : selectedOptions.length - 1}`" />
              </div>
            </span>
          </div>
        </div>
        <ddAvatar v-if="selectedValue && showAvatar" size="mini" class="dd-mr-3"
          :srcLink="selectedValue[props.defaultProps.avatar]" />
        <span class="dd-absolute dd-inset-y-0 dd-right-0 dd-flex dd-pt-1.5 dd-pr-2 dd-pointer-events-none">
          <ChevronDownIcon class="dd-h-5 dd-w-5 dd-text-gray-400" aria-hidden="true" />
        </span>
      </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick, watchEffect } from "vue"
import { CheckIcon, ChevronDownIcon } from "@heroicons/vue/solid"
import ddAvatar from "../avatars/index.vue"
import ddBadge from "../badges/index.vue"

const dropdownInput = ref( "" )
const inputValue = ref( '' )

const emits = defineEmits( [
  "toggleDropdown",
  "searchQuery"
] )

const focusToInput = ( e ) => {
  inputValue.value = ""
  dropdownInput.value.focus()
}



const props = defineProps( {
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
    default: '',
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
    default: () => [] ,
  },
  selectedOptions: {
    type: Array,
    default: () => [] ,
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
</script>

<style lang="scss" scoped>

</style>