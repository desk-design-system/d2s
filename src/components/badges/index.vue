<template>
  <span
    :class="{
      'dd-px-2 dd-py-0.5 dd-text-xs': size === 'medium',
      'dd-px-2.5 dd-py-0.5 dd-text-sm ': size === 'large',
      '!dd-px-2': closable && size === 'large',
      'dd-rounded-full': rounded,
      'dd-bg-gray-100 dd-text-gray-700': type === 'basic',
      'dd-bg-yellow-100 dd-text-yellow-800': type === 'warning',
      'dd-bg-green-100 dd-text-green-800': type === 'success',
      'dd-bg-red-100 dd-text-red-800': type === 'danger',
      'dd-bg-blue-100 dd-text-blue-800': type === 'info',
      'dd-bg-purple-100 dd-text-purple-800': type === 'purple',
    }"
    class="dd-inline-flex dd-items-center dd-font-medium dd-rounded"
  >
    <svg
      v-if="dot"
      :class="{
        tagText,
      }"
      class="dd-mr-1.5 dd-h-2 dd-w-2"
      fill="currentColor"
      viewBox="0 0 8 8"
    >
      <circle cx="4" cy="4" r="3" />
    </svg>
    <slot name="prefix"></slot>
    <slot>{{ title }}</slot>
    <slot name="suffix"></slot>
    <!-- <dd-button
      v-if="closable"
      @click="$emit('close')"
      type="text"
      class="!dd-py-0 !dd-px-0"
    >
      
    </dd-button> -->
    <XIcon
    v-if="closable && title || $slots.default"
      @click="$emit('close')"
        :class="{
          ...tagText,
          'dd-h-3.5 dd-w-3.5 ': size === 'medium',
          'dd-h-4 dd-w-4 ': size === 'large',
        }"
        class="dd-ml-1.5 dd-inline-flex hover:!dd-text-teal-700 "
        aria-hidden="true"
      />
  </span>
</template>

<script >
import { XIcon } from "@heroicons/vue/solid";
import ddButton from "../buttons/index.vue";
// const emits = defineEmits( [ "close"] )
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    closable: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      validator: function (value) {
        // The value must match one of these strings
        return (
          ["basic", "danger", "warning", "success", "info", "purple"].indexOf(
            value
          ) !== -1
        );
      },
      default: "basic",
    },
    size: {
      type: String,
      validator: function (value) {
        // The value must match one of these strings
        return ["medium", "large"].indexOf(value) !== -1;
      },
      default: "medium",
    },
    dot: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    XIcon,
    ddButton,
  },
  computed: {
    tagText() {
      return {
        "!dd-text-gray-700": this.type === "basic",
        "!dd-text-yellow-800": this.type === "warning",
        "!dd-text-green-800": this.type === "success",
        "!dd-text-red-800": this.type === "danger",
        "!dd-text-blue-800": this.type === "info",
        "!dd-text-purple-800": this.type === "purple",
      };
    },
  },
};
</script>

<style lang="scss"></style>
