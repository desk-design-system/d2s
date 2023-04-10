<template>
  <div class="dd-flex !dd-items-center  !dd-justify-start dd-base" >
    
      <input value="test" :disabled="disabled" v-bind="$attrs" :id="id" v-model="inputModelValue" type="checkbox" :class="[disabled ? ' !dd-cursor-not-allowed !dd-border-gray-200 !dd-text-gray-400' : 'dd-cursor-pointer !dd-border-gray-300 !dd-text-teal-600' ]" class=" !dd-h-4 !dd-w-4 !dd-rounded  !dd-border-solid  focus:!dd-ring-teal-500 " />
      <slot name="label">
        <label :class="[disabled ? '!dd-text-gray-300' : '!dd-text-gray-700' ]" class="!dd-ml-3 !dd-block !dd-text-sm  ">
          {{ label }}
        </label>
      </slot>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
const emits = defineEmits( ['update:modelValue','change'] )
const props = defineProps( {
  label: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: null,
  },
  disabled:{
    type: Boolean,
    default: false
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

</script>

<style lang="scss" scoped>

</style>