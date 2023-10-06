<template>
  <div class="dd-base dd-w-full" v-bind="$attrs">
    <dd-form-element
      :label="label"
      :description="hintText"
      :size="size"
      :hintTextColor="hintTextColor"
      :counter="counter"
      :isRequired="isRequired"
      :errorMessage="errorMessage"
    >
      <div class="dd-w-full dd-rounded-md">
        <textarea
          :name="name"
          :disabled="disabled"
          :class="[
            inputSize,
            hasError ? 'dd-input-error' : 'dd-input-no-error',
            errorMessage ? 'dd-mb-1' : '',
            disabled ? 'dd-input-disabled' : ' dd-text-gray-700',
          ]"
          v-model="inputModelValue"
          class="dd-textarea dd-w-full !dd-rounded"
          :placeholder="placeholder"
          :rows="rows"
          @focus="emits('focus')"
          @blur="emits('blur')"
        />
      </div>
    </dd-form-element>
  </div>
</template>
<script setup>
import { useField } from "vee-validate";
import { computed, watch } from "vue";
import DdFormElement from "../FormElement/index.vue";
const emits = defineEmits([
  "update:modelValue",
  "change",
  "suffixIconClick",
  "focus",
  "blur",
]);
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  hintText: {
    type: String,
    default: "",
  },
  hintTextColor: {
    type: String,
    default: "gray",
  },
  counter: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "",
  },
  rules: {
    type: [String, RegExp, Function],
    default: "",
  },

  disabled: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: () => "Input" + Math.floor(Math.random() * 5000),
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
  rows: {
    type: Number,
    default: 4,
  },
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

const inputSize = computed(() => {
  return {
    "dd-h-6 !dd-text-xs": props.size === "xs",
    "dd-h-7  ": props.size === "sm",
    "dd-h-8 ": props.size === "base",
    "dd-h-9 ": props.size === "lg",
    "dd-h-10 ": props.size === "xl",
  };
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

const hasError = computed(() => {
  if (errorMessage.value) {
    return true;
  } else {
    return false;
  }
});
</script>

<style lang="css" scoped>
input {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
</style>
