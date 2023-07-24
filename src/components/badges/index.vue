<template>
  <span
    :class="[badgeStyling]"
    class="dd-inline-flex dd-items-center dd-font-medium dd-rounded dd-py-0.5"
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
    <slot>
      <span class="dd-flex dd-items-center dd-justify-center">
        {{ title }}
      </span>
    </slot>
    <slot name="suffix"></slot>
    <XIcon
    v-if="closable "
      @click="$emit('close')"
        :class="{
          ...tagText,
          'dd-h-3.5 dd-w-3.5 ': size === 'medium',
          'dd-h-4 dd-w-4 ': size === 'large',
        }"
        class="dd-ml-1.5 dd-inline-flex"
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
        return (
          ["white", "gray", "danger", "warning", "green", "lime", "info", "purple"].indexOf(
            value
          ) !== -1
        );
      },
      default: "white",
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
        "!dd-text-gray-600": this.type === "white",
        "!dd-text-gray-600": this.type === "gray",
        "!dd-text-amber-600": this.type === "warning",
        "!dd-text-teal-600": this.type === "success",
        "!dd-text-lime-600": this.type === "lime",
        "!dd-text-red-600": this.type === "danger",
        "!dd-text-sky-600": this.type === "info",
        "!dd-text-purple-600": this.type === "purple",
      };
    },
    badgeStyling() {
      return {
        ' dd-px-2 dd-text-[12px]': this.size === 'medium',
        ' dd-px-3 dd-text-[14px]': this.size === 'large',
        ' !dd-px-2 ': this.closable && this.size === 'large',
        ' dd-rounded-xl ': this.rounded,
        ' dd-bg-gray-50 dd-text-gray-700 ': this.type === 'white',
        ' dd-bg-gray-200 dd-text-gray-700 ': this.type === 'gray',
        ' dd-bg-amber-100 dd-text-amber-800 ': this.type === 'warning',
        ' dd-bg-teal-100 dd-text-teal-800 ': this.type === 'success',
        ' dd-bg-lime-100 dd-text-lime-800 ': this.type === 'lime',
        ' dd-bg-red-100 dd-text-red-800 ': this.type === 'danger',
        ' dd-bg-sky-100 dd-text-sky-800 ': this.type === 'info',
        ' dd-bg-purple-100 dd-text-purple-800 ': this.type === 'purple',
      }
    }
  }
};
</script>
