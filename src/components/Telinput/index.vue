<template>
  <div>
    <slot name="label">
      <label class="dd-block dd-text-sm dd-font-medium dd-text-gray-700 dd-mb-1"
        >{{ label }}
        <span  v-if="isRequired" class="dd-text-red-500">*</span></label
      >
    </slot>
    
    <vue-tel-input
    ref="vueTelRef"
      :name="name"
      :style="{
        height: `${inputSize} !important`,
        borderColor: `${hasError ? '#dc2626' : '#d1d5db'} !important`,
      }"
      v-bind="config"
      :id="id"
      v-model="value"
    ></vue-tel-input>
    <span
      v-if="errorMessage"
      class="dd-text-xs dd-text-red-500 dd-capitalize dd-pt-px"
      >{{ errorMessage }}</span
    >
  </div>
</template>
<script setup>
import { ref, computed, watch } from "vue";
import { VueTelInput } from "vue-tel-input";
import { useField } from "vee-validate";
import "vue-tel-input/dist/vue-tel-input.css";

const emits = defineEmits(["update:modelValue", "change"]);
const vueTelRef = ref()
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
  config: {
    type: Object,
    default: () => ({}),
  },
  modelValue: {
    type: [String],
    required: true,
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

const propModelValue = computed(() => {
  if (!props.modelValue) {
    return "";
  }
  return props.modelValue.toString();
});
const inputModelValue = computed({
  get() {
    return propModelValue;
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
  initialValue: propModelValue.value,
});
watch(
  () => value,
  (newValue) => {
    inputModelValue.value = newValue.value;
  }
);

watch(
  () => propModelValue,
  (newValue) => {
    handleChange(newValue.value);
  },
  {
    immediate: true,
  }
);
defineExpose({
  vueTelRef
})
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
.vue-tel-input input::placeholder {
  font-size: 0.875rem !important;
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
.vti__dropdown-item strong,
.vti__dropdown-item span {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25rem;
  color: #4B5563 !important; 
}
.vti__dropdown-list.below {
  border-radius: 6px;
}
.vti__flag {
  margin-right: 0px;
  margin-left: 0px;
}
.vti__dropdown-item .vti__flag {
  margin-right: 8px;
}
.vti__dropdown-item {
  cursor: pointer;
  padding: 4px 10px;
}
.vti__dropdown-arrow {
  margin-left: 5px;
}
</style>
