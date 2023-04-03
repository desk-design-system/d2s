<template>
  <div v-bind="$attrs">
    <label v-if="label" class="dd-block dd-text-sm dd-font-medium dd-text-gray-700 dd-mb-1">{{ label }}  <span v-if="isRequired" class="dd-text-red-500 ">*</span> </label>
    <div class="dd-relative  dd-rounded-md ">
      <div v-if="prefix"
        class="!dd-pointer-events-none !dd-absolute !dd-inset-y-0 !dd-left-0 !dd-flex !dd-items-center !dd-pl-3 !dd-pr-10">
        <svgIcon  :icon="icon" size="16" />
      </div>
      <input :class="[suffix ? 'dd-pr-10' : 'dd-pr-2', prefix ? 'dd-pl-10' : 'dd-pl-2', hasError ?  '!dd-border-red-600' : '!dd-border-gray-300', errorMessage ? 'dd-mb-1' : ''  ]"  v-model="inputModelValue" :type="type"
        class="dd-border-solid	 !dd-block !dd-w-full !dd-rounded-md   focus:!dd-border-teal-600 dd-focus:!dd-ring-teal-600 sm:!dd-text-sm focus:ring-2 focus:dd-ring-inset focus:dd-ring-teal-600 dd-shadow-sm"
        :placeholder="placeholder" />
        <!-- $slots.suffix -->
        <div v-if="suffix"
        class="!dd-pointer-events-none !dd-absolute !dd-inset-y-0 !dd-right-0 !dd-flex !dd-items-center !dd-pl-3 !dd-pr-3">
        <svgIcon  :icon="icon" size="16" />
        <!-- <slot name="suffix">
        </slot> -->
      </div>
      <span v-if="errorMessage" class="dd-text-xs dd-text-red-500 dd-capitalize dd-pt-px">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script setup>
import svgIcon from "../svgIcon/index.vue"
import { ref, computed } from "vue"
const emits = defineEmits( ['update:modelValue', "change"] )
const props = defineProps( {
  label: {
    type: String,
    default: "",
  },
  prefix:{
    type: Boolean,
    default: false,
  },
  suffix:{
    type: Boolean,
    default: false,
  },
  icon: {
      type: String,
      default: null,
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
const  btnIconSize = () => {
      if ( this.size == 'xs' ) {
        return '10'
      } else if ( this.size == 'sm' ) {
        return '12'
      } else {
        return '16'
      }
    }
</script>

<style lang="css" scoped>
input{
  padding-top: 0.5em;
    padding-bottom: 0.5em;
}
</style>
