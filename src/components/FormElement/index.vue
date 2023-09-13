<template>
  <div v-bind="$attrs" :class="description ? 'dd-flex dd-flex-col dd-gap-1' : '' ">
    <slot name="label">
      <div class="dd-block dd-text-gray-700 dd-text-sm dd-font-medium">
        {{ label }} <span v-if="isRequired" class="dd-text-red-500">*</span>
      </div>
    </slot>

    <div :class="[slotSizes]">
      <slot></slot>
    </div>
    <div
      v-if="!errorMessage"
      :class="[
        size === 'flexible' && counter
          ? 'dd-flex dd-items-center dd-justify-between'
          : '',
      ]"
    >
      <div class="dd-text-sm dd-font-medium" :class="colorProperty">
        {{ description }}
      </div>
      <div
        class="dd-text-sm dd-font-medium"
        v-if="size === 'flexible' && counter"
        :class="colorProperty"
      >
        {{ counter ? `(${counter})` : "" }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  errorMessage: {
    type: Boolean,
    default: null,
  },
  counter: {
    type: String,
    default: "",
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  hintTextColor: {
    type: String,
    validator: function (value) {
      return ["gray", "red"].indexOf(value) !== -1;
    },
    default: "gray",
  },
  size: {
    type: String,
    validator: function (value) {
      // The value must match one of these strings
      return ["base", "lg", "flexible"].indexOf(value) !== -1;
    },
    default: "flexible",
  },
});

const slotSizes = computed(() => {
  if (props.size === "base") {
    return "!dd-h-8 !dd-max-h-8 !dd-min-h-fit !dd-overflow-hidden";
  } else if (props.size === "lg") {
    return "!dd-h-9 !dd-max-h-9 !dd-min-h-fit !dd-overflow-hidden";
  } else if (props.size === "flexible") {
    return "!dd-h-auto !dd-max-h-auto";
  }
});

const colorProperty = computed(() => {
  if (props.hintTextColor === "red") {
    return "dd-text-red-500";
  } else {
    return "dd-text-gray-500";
  }
});
</script>

<style></style>