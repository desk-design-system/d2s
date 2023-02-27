<template>
  <div class="dd-flex dd-items-center  dd-justify-start" >
    
      <input value="test" v-bind="$attrs" :id="id" v-model="inputModelValue" type="checkbox"  class="dd-h-4 dd-w-4 dd-rounded dd-border-gray-300 dd-text-teal-600 focus:dd-ring-teal-500 dd-cursor-pointer" />
      <slot name="title">
        <label class="dd-ml-3 dd-block dd-text-sm dd-font-medium dd-text-gray-700">
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