<template>
  <div class="dd-base" v-bind="$attrs">
    <slot name="label">
      <label
        v-if="label"
        class="dd-block dd-text-sm dd-font-medium dd-text-gray-700 dd-mb-1"
        >{{ label }} <span v-if="isRequired" class="dd-text-red-500">*</span>
      </label>
    </slot>
    <div class="dd-relative dd-rounded-md">
      <div
        v-if="prefix"
        class="!dd-pointer-events-none !dd-absolute !dd-inset-y-0 !dd-left-0 !dd-flex !dd-items-center !dd-pl-3 !dd-pr-3"
      >
        <svgIcon
          :class="[
            hasError
              ? ' !dd-border-red-600 focus:!dd-border-red-600 dd-focus:!dd-ring-red-600'
              : 'dd-border-gray-300 focus:dd-ring-teal-600 focus:!dd-border-teal-600',
            hintTextPropertyIcon,
            Right
              ? 'dd-text-right !dd-text-xs !dd-text-gray-700 !dd-font-normal'
              : 'dd-text-left',
          ]"
          :icon="icon"
          :size="btnIconSize"
        />
      </div>
      <input
        :name="name"
        :disabled="disabled"
        :class="[
          inputSize,
          noBorder,
          suffix ? '!dd-pr-2' : '!dd-pr-2',
          prefix ? '!dd-pl-10' : '!dd-pl-2',
          hasError
            ? ' !dd-border-red-600 focus:!dd-border-red-600 dd-focus:!dd-ring-red-600'
            : hintTextProperty,
          Right
            ? 'dd-text-right !dd-text-xs !dd-text-gray-700 !dd-font-normal'
            : 'dd-text-left',
          disabled
            ? '!dd-text-gray-500 dd-ring-gray-200 dd-bg-gray-50 dd-cursor-not-allowed dd-select-none'
            : '',
        ]"
        v-model="inputModelValue"
        :type="inputType"
        class="!dd-block !dd-w-full !dd-rounded-md sm:!dd-text-sm focus:ring-2 focus:dd-ring-inset dd-shadow-sm"
        :placeholder="placeholder"
        @focus="emits('focus')"
        @blur="emits('blur')"
        @keydown="emits('usekeydown')"
        @keyup="emits('usekeyup')"
      />
      <!-- $slots.suffix -->
      <div
        @click="suffixIconClick"
        v-if="suffix"
        class="dd-cursor-pointer !dd-absolute !dd-inset-y-0 !dd-right-0 !dd-flex !dd-items-center !dd-pl-3 !dd-pr-3"
      >
        <svgIcon
          :class="[
            hasError
              ? ' !dd-border-red-600 focus:!dd-border-red-600 dd-focus:!dd-ring-red-600'
              : 'dd-border-gray-300 focus:dd-ring-teal-600 focus:!dd-border-teal-600',
            hintTextPropertyIcon,
          ]"
          :icon="suffixIcon"
          :size="btnIconSize"
        />
      </div>
      <!-- button -->
      <div
        v-if="type !== 'password' && !Right"
        class="dd-cursor-pointer !dd-absolute !dd-inset-y-0 !dd-right-0 !dd-flex !dd-items-center !dd-pl-1 !dd-pr-1 dd-gap-1"
      >
        <slot name="suffix" />
      </div>
    </div>
    <span v-if="errorMessage" class="dd-text-xs dd-text-red-500 dd-capitalize dd-pt-px">{{ errorMessage }}</span>
    <span
      v-if="hintText && !errorMessage"
      class="dd-text-sm dd-font-normal dd-pt-px"
      :class="`dd-text-${hintTextColor}-600`"
      >{{ hintText }}</span
    >
  </div>
</template>

<script setup>
import { useField } from "vee-validate";
import svgIcon from "../svgIcon/index.vue";
import { ref, computed, watch, watchEffect } from "vue";
const emits = defineEmits([
  "update:modelValue",
  "change",
  "suffixIconClick",
  "focus",
  "blur",
  "usekeyup",
  "usekeydown",
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
  rules: {
    type: [String, RegExp, Function],
    default: "",
  },
  Right: {
    type: Boolean,
    default: false,
  },
  prefix: {
    type: Boolean,
    default: false,
  },
  suffix: {
    type: Boolean,
    default: false,
  },
  InputActions: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: null,
  },
  hintTextColor: {
    type: String,
    default: "gray",
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
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
  Border: {
    type: String,
    default: "",
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

const getRules = () => {
  if(props.rules instanceof RegExp) {
    return {regex: props.rules}
  }
  return props.rules
}

const { errorMessage, value, handleChange } = useField(( props.name ), getRules(), {label: props.name});

watch(() => value, (newValue) => {
  inputModelValue.value = newValue
})

const inputType = ref("text");
const inputSize = computed(() => {
  return {
    "dd-h-6 !dd-text-xs": props.size === "xs",
    "dd-h-7  ": props.size === "sm",
    "dd-h-8 ": props.size === "base",
    "dd-h-9 ": props.size === "lg",
    "dd-h-10 ": props.size === "xl",
  };
});
const noBorder = computed(() => {
  return {
    "!dd-border-none focus:!dd-ring-0 !dd-shadow-none": props.Border === "none",
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

const btnIconSize = computed(() => {
  if (props.size == "xs") {
    return "10";
  } else if (props.size == "sm") {
    return "12";
  } else {
    return "16";
  }
});
const suffixIcon = computed(() => {
  if (props.icon) {
    return props.icon;
  } else if (props.type == "password" && inputType.value == "text") {
    return "Eyeoff";
  } else {
    return "Eye";
  }
});
const suffixIconClick = () => {
  if (props.type == "password") {
    inputType.value = inputType.value == "password" ? "text" : "password";
  }
  emits("suffixIconClick", true);
};

watch( () => props.type, ( newVal ) => {
  inputType.value = newVal
},{immediate: true} )


const hasError = computed( () => {
  if ( errorMessage.value ) {
    return true
  } else {
    return false
  }
} );

watchEffect(() => {
  console.log(props.hintText && errorMessage.value == '');
})

const hintTextProperty = computed(() => {
  if (errorMessage?.value) {
    return "dd-border-red-600";
  } else if (props.hintTextColor && props.hintText && errorMessage?.value) {
    return "!dd-border !dd-border-red-600 dd-text-red-600";
  } else if (props.hintText && !errorMessage?.value) {
    if (props.hintTextColor === "red") {
      return "!dd-border !dd-border-solid !dd-border-red-600 !dd-text-red-600 focus:!dd-border-red-600";
    } else if (props.hintTextColor === "teal") {
      return "!dd-border !dd-border-solid !dd-border-teal-600 !dd-text-teal-600 focus:!dd-border-teal-600";
    } else if (props.hintTextColor === "gray") {
      return "!dd-border !dd-border-solid !dd-border-gray-300 !dd-text-gray-600 focus:!dd-border-teal-600";
    }
  }
});

const hintTextPropertyIcon = computed(() => {
  if (errorMessage?.value) {
    return "dd-border-red-600";
  } else if (props.hintTextColor && props.hintText && errorMessage?.value) {
    return "dd-border-red-600 dd-text-red-600";
  } else if (props.hintText && !errorMessage?.value) {
    if (props.hintTextColor === "red") {
      return "!dd-text-red-600";
    } else if (props.hintTextColor === "teal") {
      return "!dd-text-teal-600";
    } else if (props.hintTextColor === "gray") {
      return "!dd-text-gray-600";
    }
  }
});
</script>

<style lang="css" scoped>
input {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
</style>
