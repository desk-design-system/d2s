<template>
  <div>
    {{ inputSize }}
    <label
      class="dd-block dd-text-sm dd-font-medium dd-text-gray-700 dd-mb-1"
      >{{ label }}</label
    >
    <vue-tel-input
      :style="{ height: `${inputSize} !important` }"
      class="dd-h-20"
      v-bind="config"
      :id="id"
      v-model="inputModelValue"
    ></vue-tel-input>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";

const emits = defineEmits(["update:modelValue", "change"]);
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  config: {
    type: Object,
    default: () => ({}),
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: null,
  },
  size: {
    type: String,
    validator: function (value) {
      // The value must match one of these strings
      return ["xs", "sm", "base", "lg", "xl"].indexOf(value) !== -1;
    },
    default: "base",
  },
});
const inputModelValue = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emits("update:modelValue", val);
    emits("change", val);
  },
});

const inputSize = computed(() => {
  switch (props.size) {
    case "sm":
      return "1.75rem";
    case "base":
      return "2rem";
    case "lg":
      return "2.25rem";
    case "xl":
      return "2.5rem";
    default:
      return "2rem";
  }
  return {
    "1.75rem": props.size === "sm",
    "2rem": props.size === "base",
    "2.25rem": props.size === "lg",
    "2.5rem": props.size === "xl",
  };
});
</script>
<style>
.vue-tel-input {
  border-radius: 6px !important;
  border-width: 1px;
  border-color: #d1d5db !important;
  height: 36px !important;
}
.vue-tel-input input {
  border-top-right-radius: 6px !important;
  border-bottom-right-radius: 6px !important;
  box-shadow: unset !important;
}
.vue-tel-input:focus-within {
  box-shadow: unset !important;
  border-color: #0f766e !important;
  border-width: 2px;
}
.vti__dropdown {
  border-top-left-radius: 6px !important;
  border-bottom-left-radius: 6px !important;
}
</style>
