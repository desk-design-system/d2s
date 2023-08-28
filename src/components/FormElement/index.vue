<template>
  <div v-bind="$attrs" class="dd-flex dd-flex-col dd-gap-1">
    <div class="dd-text-gray-700 dd-text-sm dd-font-medium">{{ title }}</div>
    <div :class="[slotSizes]">
      <slot></slot>
    </div>
    <div class="dd-text-gray-500 dd-text-sm dd-font-medium">
      {{ description }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Title",
  },
  size: {
    type: String,
    validator: function (value) {
      // The value must match one of these strings
      return ["base", "lg", "flexible"].indexOf(value) !== -1;
    },
    default: "base",
  },
  description: {
    type: String,
    default: "Extra message or notification.",
  },
});

const slotSizes = computed(() => {
  if (props.size === "base") {
    return "!dd-h-8 !dd-max-h-8 !dd-min-h-fit !dd-overflow-hidden";
  } else if (props.size === "lg") {
    return "!dd-h-9 !dd-max-h-9 !dd-min-h-fit !dd-overflow-hidden";
  } else if(props.size === "flexible") {
    return "!dd-h-auto !dd-max-h-auto";
  }
});
</script>

<style>
</style>