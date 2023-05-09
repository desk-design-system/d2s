<template>
  <button
    class="dd-bg-white dd-cursor-pointer dd-w-full"
    :class="[
      hasError
        ? ' !dd-border-red-600 focus:!dd-border-red-600 dd-focus:!dd-ring-red-600'
        : 'dd-border-gray-300 focus:dd-ring-teal-600 focus:!dd-border-teal-600',
    ]"
    @click="open = !open"
  >
    <div
      class="dd-flex dd-items-center dd-justify-between dd-p-2 focus-visible:dd-outline-none"
    >
      <div class="dd-flex dd-items-center dd-gap-4">
        <ddAvatar v-show="showAvatar" :srcLink="srcLink" size="mini" />
        <span
          class="dd-font-medium dd-text-sm dd-text-gray-700 dd-text-left"
        >
          {{ label }}
        </span>
      </div>
      <span
        class="dd-inset-y-0 dd-right-0 dd-flex dd-items-center dd-pr-2 dd-pointer-events-none dd-mt-1"
      >
        <ChevronDownIcon
          class="dd-h-5 dd-w-5 dd-text-gray-400"
          aria-hidden="true"
          :class="[
            open ? 'dd-transform dd-rotate-180' : 'dd-transform dd-rotate-0',
          ]"
        />
      </span>
    </div>
  </button>
  <transition
    leave-active-class="dd-transition dd-ease-in dd-duration-100"
    leave-from-class="dd-opacity-100"
    leave-to-class="dd-opacity-0"
  >
    <ul v-if="open" class="dd-p-2 dd-w-full dd-ml-2">
      <slot name="content" />
    </ul>
  </transition>
  <span v-if="errorMessage" class="dd-text-xs dd-text-red-600 dd-capitalize">{{
    errorMessage
  }}</span>
</template>

<script setup>
import { useField } from "vee-validate";
import { computed } from "vue";
import ddAvatar from "../avatars/index.vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";

const props = defineProps({
  label: {
    type: String,
    default: "Customers",
  },
  rules: {
    type: [String, RegExp, Function],
    default: "",
  },
  srcLink: {
    type: [String],
    default: null,
  },
  showAvatar: {
    type: Boolean,
    default: false,
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
  open: {
    type: Boolean,
    default: false,
  },
});

const getRules = () => {
  if (props.rules instanceof RegExp) {
    return { regex: props.rules };
  }
  return props.rules;
};

const { errorMessage } = useField(props.label, getRules(), {
  label: props.label,
});

const hasError = computed(() => {
  if (errorMessage.value) {
    return true;
  } else {
    return false;
  }
});
</script>

<style>
</style>