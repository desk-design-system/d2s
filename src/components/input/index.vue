<template>
  <div>
    <label class="dd-block dd-text-sm dd-font-medium dd-text-gray-700">{{ label }}</label>
    <div class="dd-relative dd-mt-1 dd-rounded-md dd-shadow-sm">
      <div v-if="$slots.prefix"
        class="dd-pointer-events-none dd-absolute dd-inset-y-0 dd-left-0 dd-flex dd-items-center dd-pl-3 dd-pr-10">
        <slot name="prefix">
        </slot>
      </div>
      <input :class="[$slots.prefix ? 'dd-pl-10' : 'dd-pl-2' ]" v-bind="$attrs" v-model="inputModelValue" :type="type"
        class="dd-block dd-w-full dd-rounded-md !dd-border-gray-300  focus:dd-border-teal-600 dd-focus:dd-ring-teal-600 sm:dd-text-sm"
        :placeholder="placeholder" />
      <div v-if="$slots.suffix"
        class="dd-pointer-events-none dd-absolute dd-inset-y-0 dd-right-0 dd-flex dd-items-center dd-pl-3 dd-pr-3">
        <slot name="suffix">
        </slot>
      </div>
    </div>
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
</script>

<style lang="scss" scoped>

</style>
