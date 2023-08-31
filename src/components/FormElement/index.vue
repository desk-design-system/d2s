<template>
  <div v-bind="$attrs" class="dd-flex dd-flex-col dd-gap-1">
    <div class="dd-text-gray-700 dd-text-sm dd-font-medium">{{ label }}</div>
    <div :class="[slotSizes]">
      <slot></slot>
    </div>
    <div :class="[size === 'flexible' && counter ? 'dd-flex dd-items-center dd-justify-between' : '']">
      <div class="dd-text-sm dd-font-medium" :class="colorProperty">
        {{ description }}
      </div>
      <div class="dd-text-sm dd-font-medium" v-if="size === 'flexible' && counter" :class="colorProperty">
        {{ counter ? `(${counter})` : '' }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "Title",
  },
  description: {
    type: String,
    default: "Extra message or notification.",
  },
  counter : {
    type: String,
    default: "",
  },
  hintTextColor: {
    type: String,
    validator: function (value) {
      return ["default", "error"].indexOf(value) !== -1;
    },
    default: "default",
  },
  size: {
    type: String,
    validator: function (value) {
      // The value must match one of these strings
      return ["base", "lg", "flexible"].indexOf(value) !== -1;
    },
    default: "base",
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
  if (props.hintTextColor === "error") {
    return "dd-text-red-500";
  } else {
    return "dd-text-gray-500";
  }
});
</script>

<style>
</style>