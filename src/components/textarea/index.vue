<template>
  <div class="dd-base dd-w-full" v-bind="$attrs">
    <slot name="label">
      <label v-if="label" class="dd-input-label"
        >{{ label }} <span v-if="isRequired" class="dd-text-red-500">*</span>
      </label>
    </slot>
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
    <span v-if="errorMessage" class="dd-input-error-message">{{
      errorMessage
    }}</span>
  </div>
</template>
<script setup>
import { useField } from "vee-validate";
import svgIcon from "../svgIcon/index.vue";
import { ref, computed, watch } from "vue";
const emits = defineEmits(["update:modelValue", "change", "suffixIconClick", 'focus', 'blur']);
const props = defineProps({
  label: {
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
    type:  Number,
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
