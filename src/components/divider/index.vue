<template>
  <div class="dd-relative dd-my-2">
    <div class="dd-absolute dd-inset-0 dd-flex dd-items-center" aria-hidden="true">
      <div class="dd-w-full dd-border-t !dd-border-gray-300" />
    </div>
    <div v-if="title && !buttonTitle" :class="`dd-relative dd-flex dd-justify-${placement}`">
      <span class="dd-bg-white dd-px-2 dd-text-sm dd-text-gray-500">{{ title }}</span>
    </div>
    <div v-if="buttonTitle" class="dd-relative dd-flex dd-justify-center">
      <dd-button :title="buttonTitle" :type="buttonType" :content="buttonContent" :size="buttonSize" :icon="buttonIcon" />
    </div>
  </div>
</template>

<script setup>
import DdButton from "../buttons/index.vue"
const props = defineProps({
  title: {
    type: String,
    default: null,
  },
  placement: {
    type: String,
    default: 'center',
  },
  buttonTitle: {
    type: String,
    default: null,
  },
  buttonIcon: {
    type: String,
    default: "Plus",
  },
  buttonType: {
    type: String,
    default: "secondary",
  },
  buttonContent: {
    type: String,
    default: "textOnly",
  },
  buttonSize: {
    type: String,
    default: "base",
  },
});
</script>

<style lang="scss" scoped></style>