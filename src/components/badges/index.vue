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
        'dd-h-3.5 dd-w-3.5 ': size === 'base',
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
        "!dd-text-white-600": this.type === "white",
        "!dd-text-green-600": this.type === "green",
        "!dd-text-rose-600": this.type === "rose",
        "!dd-text-pink-600": this.type === "pink",
        "!dd-text-fuchsia-600": this.type === "fuchsia",
        "!dd-text-voilet-600": this.type === "voilet",
        "!dd-text-indigo-600": this.type === "indigo",
        "!dd-text-sky-600": this.type === "sky",
        "!dd-text-cyan-600": this.type === "cyan",
        "!dd-text-emerald-600": this.type === "emerald",
        "!dd-text-amber-600": this.type === "amber",
        "!dd-text-orange-600": this.type === "orange",
        "!dd-text-red-600": this.type === "red",
        "!dd-text-stone-600": this.type === "stone",
        "!dd-text-zinc-600": this.type === "zinc",
        "!dd-text-gray-600": this.type === "gray",
        "!dd-text-slat-600": this.type === "slat",
        "!dd-text-neutral-600": this.type === "neutral",
        "!dd-text-amber-600": this.type === "yellow",
        "!dd-text-teal-600": this.type === "teal",
        "!dd-text-lime-600": this.type === "lime",
        "!dd-text-red-600": this.type === "red",
        "!dd-text-blue-600": this.type === "blue",
        "!dd-text-purple-600": this.type === "purple",
      };
    },
    badgeStyling() {
      return {
        " dd-px-1.5 dd-py-0.5 dd-text-xs ": this.size === "xs",
        " dd-px-2 dd-py-1 dd-text-sm ": this.size === "base",
        " dd-rounded-xl ": this.rounded,
        " !dd-bg-gray-50 dd-text-gray-700 ": this.type === "white",
        " !dd-bg-green-100 dd-text-green-700 ": this.type === "green",
        " !dd-bg-rose-100 dd-text-rose-700 ": this.type === "rose",
        " !dd-bg-pink-100 dd-text-pink-700 ": this.type === "pink",
        " !dd-bg-fuchsia-100 dd-text-fuchsia-700 ": this.type === "fuchsia",
        " !dd-bg-voilet-100 dd-text-voilet-700 ": this.type === "voilet",
        " !dd-bg-indigo-100 dd-text-indigo-700 ": this.type === "indigo",
        " !dd-bg-sky-100 dd-text-sky-700 ": this.type === "sky",
        " !dd-bg-cyan-100 dd-text-cyan-700 ": this.type === "cyan",
        " !dd-bg-emerald-100 dd-text-emerald-700 ": this.type === "emerald",
        " !dd-bg-amber-100 dd-text-amber-700 ": this.type === "amber",
        " !dd-bg-orange-100 dd-text-orange-700 ": this.type === "orange",
        " !dd-bg-red-100 dd-text-red-700 ": this.type === "red",
        " !dd-bg-stone-100 dd-text-stone-700 ": this.type === "stone",
        " !dd-bg-zinc-100 dd-text-zinc-700 ": this.type === "zinc",
        " !dd-bg-gray-200 dd-text-gray-700 ": this.type === "gray",
        "!dd-bg-slat-100 dd-text-slat-700 ": this.type === "slat",
        "!dd-bg-neutral-100 dd-text-neutral-700 ": this.type === "neutral",
        " dd-bg-amber-100 dd-text-amber-700 ": this.type === "yellow",
        " dd-bg-teal-100 dd-text-teal-700 ": this.type === "teal",
        " dd-bg-lime-100 dd-text-lime-700 ": this.type === "lime",
        " dd-bg-red-100 dd-text-red-700 ": this.type === "red",
        " dd-bg-blue-100 dd-text-blue-700 ": this.type === "blue",
        " dd-bg-purple-100 dd-text-purple-700 ": this.type === "purple",
      };
    },
  },
};
</script>
