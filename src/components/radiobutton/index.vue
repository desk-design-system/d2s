<template>
  <div :class="[ !list ? 'dd-flex dd-items-center  dd-justify-between' : 'dd-space-y-2' ]" >
    <div  v-for="option in options" :key="option[defaultProps.value]" class="dd-flex dd-items-center dd-base">
      <input :id="option[defaultProps.value]" name="notification-method" :disabled="disabled" type="radio" :checked="option[defaultProps.value]=== inputModelValue" @click="updateCheckedValue(option[defaultProps.value])" :class="[disabled ? 'dd-cursor-not-allowed !dd-border-gray-200 !dd-text-gray-400' : 'dd-cursor-pointer dd-border-gray-300 !dd-text-teal-600' ]" class="dd-border-solid  dd-h-4 dd-w-4   focus:!dd-ring-teal-500 " />
      <slot name="item" :isSelected="option[defaultProps.value]=== inputModelValue" :option="option">
        <label :for="option[defaultProps.value]" :class="[disabled ? 'dd-text-gray-300' : 'dd-text-gray-700' ]"  class="dd-ml-3 dd-block dd-text-sm dd-font-medium ">{{ option[defaultProps.name] }}</label>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
const emits = defineEmits( ['update:modelValue','change'] )
const props = defineProps( {
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: null,
  },
  list:{
    type: Boolean,
    default: false
  },
  disabled:{
    type: Boolean,
    default: false
  },
  defaultProps: {
    type: Object,
    default: () => ( {
      name: 'name',
      value: 'value',
    } )
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

const updateCheckedValue = (value) => {
  inputModelValue.value = value
}
</script>

<style lang="scss" scoped>

</style>