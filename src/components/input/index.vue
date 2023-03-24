<template>
  <div>
    <label v-if="label" class="dd-block dd-text-sm dd-font-medium dd-text-gray-700 dd-mb-1">{{ label }}  <span v-if="isRequired" class="dd-text-red-500 ">*</span> </label>
    <div class="dd-relative  dd-rounded-md ">
      <div v-if="$slots.prefix"
        class="!dd-pointer-events-none !dd-absolute !dd-inset-y-0 !dd-left-0 !dd-flex !dd-items-center !dd-pl-3 !dd-pr-10">
        <slot name="prefix">
        </slot>
      </div>
      <input :class="[$slots.prefix ? 'dd-pl-10' : 'dd-pl-2', hasError ?  '!dd-border-red-600' : '!dd-border-gray-300'  ]" v-bind="$attrs" v-model="inputModelValue" :type="type"
        class="!dd-block !dd-w-full !dd-rounded-md   focus:!dd-border-teal-600 dd-focus:!dd-ring-teal-600 sm:!dd-text-sm focus:ring-2 focus:dd-ring-inset focus:dd-ring-teal-600 dd-shadow-sm"
        :placeholder="placeholder" />
      <div v-if="$slots.suffix"
        class="!dd-pointer-events-none !dd-absolute !dd-inset-y-0 !dd-right-0 !dd-flex !dd-items-center !dd-pl-3 !dd-pr-3">
        <slot name="suffix">
        </slot>
      </div>
    </div>
    <span v-if="errorMessage" class="dd-text-xs dd-text-red-500 dd-capitalize">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
const emits = defineEmits( ['update:modelValue', "change"] )
const props = defineProps( {
  label: {
    type: String,
    default: "",
  },
  errorMessage: {
    type: String,
    default: "",
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
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
const hasError = computed( () => {
  if(props.errorMessage){
    return true
  } else{
  return false
  }
} )
</script>

<style lang="scss" scoped>

</style>
