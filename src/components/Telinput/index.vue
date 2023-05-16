<template>
  <div>
    <label
      class="dd-block dd-text-sm dd-font-medium dd-text-gray-700 dd-mb-1"
      >{{ label }}  {{ hasError }} <span v-if="isRequired" class="dd-text-red-500">*</span></label
    >
    <vue-tel-input
    :name="name"
      :style="{ height: `${inputSize} !important`, borderColor: `${hasError ? '#dc2626' : '#d1d5db'} !important` }"
      v-bind="config"
      :id="id"
      v-model="inputModelValue"
    ></vue-tel-input>
     <span
      v-if="errorMessage"
      class="dd-text-xs dd-text-red-500 dd-capitalize dd-pt-px"
      >{{ errorMessage }}</span>
  </div>
</template>
<script setup>
import { ref, computed,watch } from "vue";
import { VueTelInput } from "vue-tel-input";
import { useField } from "vee-validate";
import "vue-tel-input/dist/vue-tel-input.css";

const emits = defineEmits(["update:modelValue", "change"]);
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  rules: {
    type: [String, RegExp, Function],
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: null,
  },
  config: {
    type: Object,
    default: () => ({}),
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: null,
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator: function (value) {
      // The value must match one of these strings
      return ["xs", "sm", "base", "lg", "xl"].indexOf(value) !== -1;
    },
    default: "base",
  },
  name: {
    type: String,
    default: () => "Select" + Math.floor(Math.random() * 5000),
  },
});
const inputModelValue = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    handleChange(val);
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
});

const hasError = computed(() => {
  if (errorMessage.value) {
    return true;
  } else {
    return false;
  }
});

const getRules = () => {
  if (props.rules instanceof RegExp) {
    return { regex: props.rules };
  }
  return props.rules;
};

const { errorMessage, value, handleChange } = useField(props.name, getRules(), {
  label: props.name,
});
watch(
  () => value,
  (newValue) => {
    inputModelValue.value = newValue;
  }
);
</script>
<style>
.vue-tel-input {
  border-radius: 6px !important;
  border-width: 1px;
  /* border-color: #d1d5db !important; */
  height: 36px !important;
}
.vue-tel-input input {
  border-top-right-radius: 6px !important;
  border-bottom-right-radius: 6px !important;
  box-shadow: unset !important;
}
.vue-tel-input input::placeholder{
  font-size: .875rem!important;
color: #6b7280 !important;

}
.vue-tel-input:focus-within {
  box-shadow: unset !important;
  border-color: #0f766e !important;
  border-width: 1px;
}
.vti__dropdown {
  border-top-left-radius: 6px !important;
  border-bottom-left-radius: 6px !important;
}
</style>
