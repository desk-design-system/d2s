<template>
  <div :class="[ !list ? 'dd-flex dd-items-center dd-justify-center' : 'dd-space-y-2' ]" >
    <div  v-for="option in options" :key="option[defaultProps.value]" class="dd-flex dd-items-center">
      <input :id="option[defaultProps.value]" name="notification-method" type="radio" :checked="option[defaultProps.value]=== inputModelValue" @click="updateCheckedValue(option[defaultProps.value])" class="dd-cursor-pointer dd-h-4 dd-w-4 dd-border-gray-300 dd-text-teal-600 " />
      <slot name="item" :isSelected="option[defaultProps.value]=== inputModelValue" :option="option">
        <label :for="option[defaultProps.value]" class="dd-ml-3 dd-block dd-text-sm dd-font-medium dd-text-gray-700">{{ option[defaultProps.name] }}</label>
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