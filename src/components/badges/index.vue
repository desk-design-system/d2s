<template>
  <span
    :class="[badgeStyling]"
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
    <XIcon
      v-if="closable"
      @click="$emit('close')"
      :class="{
        ...tagText,
        'dd-h-3 dd-w-3 ': size === 'xs',
        'dd-h-3 dd-w-3 ': size === 'base',
      }"
      class="dd-ml-1 dd-inline-flex"
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
      default: "badge",
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    closable: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      validator: function (value) {
        return (
          [
            "white",
            "green",
            "gray",
            "blue",
            "red",
            "yellow",
            "green",
            "lime",
            "info",
            "purple",
            "slat",
            "neutral",
            "zinc",
            "stone",
            "red",
            "orange",
            "amber",
            "lime",
            "teal",
            "emerald",
            "cyan",
            "sky",
            "indigo",
            "voilet",
            "fuchsia",
            "pink",
            "rose",
          ].indexOf(value) !== -1
        );
      },
      default: "gray",
    },
    size: {
      type: String,
      validator: function (value) {
        // The value must match one of these strings
        return ["xs", "base"].indexOf(value) !== -1;
      },
      default: "base",
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
        "!dd-text-white-600": this.color === "white",
        "!dd-text-green-600": this.color === "green",
        "!dd-text-rose-600": this.color === "rose",
        "!dd-text-pink-600": this.color === "pink",
        "!dd-text-fuchsia-600": this.color === "fuchsia",
        "!dd-text-voilet-600": this.color === "voilet",
        "!dd-text-indigo-600": this.color === "indigo",
        "!dd-text-sky-600": this.color === "sky",
        "!dd-text-cyan-600": this.color === "cyan",
        "!dd-text-emerald-600": this.color === "emerald",
        "!dd-text-amber-600": this.color === "amber",
        "!dd-text-orange-600": this.color === "orange",
        "!dd-text-red-600": this.color === "red",
        "!dd-text-stone-600": this.color === "stone",
        "!dd-text-zinc-600": this.color === "zinc",
        "!dd-text-gray-600": this.color === "gray",
        "!dd-text-slat-600": this.color === "slat",
        "!dd-text-neutral-600": this.color === "neutral",
        "!dd-text-amber-600": this.color === "yellow",
        "!dd-text-teal-600": this.color === "teal",
        "!dd-text-lime-600": this.color === "lime",
        "!dd-text-red-600": this.color === "red",
        "!dd-text-blue-600": this.color === "blue",
        "!dd-text-purple-600": this.color === "purple",
      };
    },
    badgeStyling() {
      return {
        " dd-px-1.5 dd-py-0.5 dd-text-xs ": this.size === "xs",
        " dd-px-2 dd-py-1 dd-text-sm ": this.size === "base",
        " dd-rounded-xl ": this.rounded,
        " !dd-bg-gray-50 dd-text-gray-700 ": this.color === "white",
        " !dd-bg-green-100 dd-text-green-700 ": this.color === "green",
        " !dd-bg-rose-100 dd-text-rose-700 ": this.color === "rose",
        " !dd-bg-pink-100 dd-text-pink-700 ": this.color === "pink",
        " !dd-bg-fuchsia-100 dd-text-fuchsia-700 ": this.color === "fuchsia",
        " !dd-bg-voilet-100 dd-text-voilet-700 ": this.color === "voilet",
        " !dd-bg-indigo-100 dd-text-indigo-700 ": this.color === "indigo",
        " !dd-bg-sky-100 dd-text-sky-700 ": this.color === "sky",
        " !dd-bg-cyan-100 dd-text-cyan-700 ": this.color === "cyan",
        " !dd-bg-emerald-100 dd-text-emerald-700 ": this.color === "emerald",
        " !dd-bg-amber-100 dd-text-amber-700 ": this.color === "amber",
        " !dd-bg-orange-100 dd-text-orange-700 ": this.color === "orange",
        " !dd-bg-red-100 dd-text-red-700 ": this.color === "red",
        " !dd-bg-stone-100 dd-text-stone-700 ": this.color === "stone",
        " !dd-bg-zinc-100 dd-text-zinc-700 ": this.color === "zinc",
        " !dd-bg-gray-200 dd-text-gray-700 ": this.color === "gray",
        "!dd-bg-slat-100 dd-text-slat-700 ": this.color === "slat",
        "!dd-bg-neutral-100 dd-text-neutral-700 ": this.color === "neutral",
        " dd-bg-amber-100 dd-text-amber-700 ": this.color === "yellow",
        " dd-bg-teal-100 dd-text-teal-700 ": this.color === "teal",
        " dd-bg-lime-100 dd-text-lime-700 ": this.color === "lime",
        " dd-bg-red-100 dd-text-red-700 ": this.color === "red",
        " dd-bg-blue-100 dd-text-blue-700 ": this.color === "blue",
        " dd-bg-purple-100 dd-text-purple-700 ": this.color === "purple",
      };
    },
  },
};
</script>
