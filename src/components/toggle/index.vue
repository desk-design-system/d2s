<template>
  <Switch  v-bind="$attrs" :class="[
    inputModelValue ? 'dd-bg-teal-600' : 'dd-bg-gray-200', size == 'sm' ? 'dd-h-5.5' : 'dd-h-6.5',
    'dd-relative dd-inline-flex dd-flex-shrink-0   dd-border-2 dd-border-transparent dd-rounded-full dd-cursor-pointer dd-transition-colors dd-ease-in-out dd-duration-200 focus:dd-outline-none '
  ]" v-model="inputModelValue" class="dd-relative dd-inline-flex dd-flex-shrink-0 dd-w-11 dd-base dd-pl-0">
    <span class="dd-sr-only">Use setting</span>
    <span aria-hidden="true"
      :class="[
      inputModelValue ? 'dd-translate-x-5' : 'dd-translate-x-0', size == 'sm' ? 'dd-h-4 dd-w-4' : 'dd-h-5 dd-w-5',
      'dd-pointer-events-none dd-inline-block  dd-rounded-full dd-bg-white dd-shadow dd-transform dd-ring-0 dd-transition dd-ease-in-out dd-duration-200',]">
      <span v-if="showIcon"
        :class="[inputModelValue ? 'dd-opacity-0 dd-ease-out dd-duration-100' : 'dd-opacity-100 dd-ease-in dd-duration-200', 'dd-absolute dd-inset-0 dd-flex dd-h-full dd-w-full dd-items-center dd-justify-center dd-transition-opacity']"
        aria-hidden="true">
        <svg class="dd-h-3 dd-w-3 dd-text-gray-400" fill="none" viewBox="0 0 12 12">
          <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </span>
      <span v-if="showIcon"
        :class="[inputModelValue ? 'dd-opacity-100 dd-ease-in dd-duration-200' : 'dd-opacity-0 dd-ease-out dd-duration-100', 'dd-absolute dd-inset-0 dd-flex dd-h-full dd-w-full dd-items-center dd-justify-center dd-transition-opacity']"
        aria-hidden="true">
        <svg class="dd-h-3 dd-w-3 dd-text-teal-600" fill="currentColor" viewBox="0 0 12 12">
          <path
            d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
        </svg>
      </span>
    </span>
  </Switch>

</template>

<script setup>
import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/solid'
import { Switch } from '@headlessui/vue'

import { ref, computed } from "vue"
const emits = defineEmits( ['update:modelValue','change'] )
const props = defineProps( {
  showIcon: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator: function ( value ) {
      // The value must match one of these strings
      return (
        ["sm", "base"].indexOf( value ) !== -1
      )
    },
    default: "base",
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: null,
  }
} )
const inputModelValue = computed( {
  get () {
    return props.modelValue
  },
  set ( val ) {
    emits( "update:modelValue", val )
    emits( "change", val )
  }
} )
</script>

<style lang="scss" scoped>

</style>