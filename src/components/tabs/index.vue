

<template>
  <div>
    <div class="dd-hidden sm:dd-block">
      <div :class="borderBottomProperty">
        <nav class="-dd-mb-px dd-flex dd-space-x-8" aria-label="Tabs">
          <span class="dd-flex dd-gap-2" @click="updateTabValue(tab)" v-for="tab in tabs" :key="tab.name"
            :class="tabStyle(tab)">
            <slot name="tabLabel" :tab="tab">
              {{ tab.name }}
            </slot>
            <dd-badge v-if="rightBadge" title="2" :color="badgeColor(tab)" size="xs" />
          </span>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, onUnmounted } from "vue";
import DdBadge from "../badges/index.vue";
const emits = defineEmits(["update:modelValue", "change"]);
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  rightBadge: {
    type: Boolean,
    default: false,
  },
  tabs: {
    type: Array,
    required: true,
  },
  borderBottom: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
  type: {
    type: String,
    validator: function (value) {
      // The value must match one of these strings
      return ["underlined36", "underlined44", "pill"].indexOf(value) !== -1;
    },
    default: "underlined36",
  },
  defaultProps: {
    type: Object,
    default: () => ({
      name: "name",
      value: "value",
    }),
  },
});
const inputModelValue = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emits("update:modelValue", val);
  },
});

const tabStyle = (tab) => {
  var definedValue = tab[props.defaultProps.value];
  if (props.type === "underlined36") {
    return (
      (definedValue === inputModelValue.value
        ? "dd-border-teal-500 dd-text-teal-600 dd-cursor-pointer"
        : "dd-cursor-pointer dd-border-transparent dd-text-gray-500 hover:dd-text-gray-700 hover:dd-border-gray-300") +
      " dd-whitespace-nowrap dd-py-[7px] dd-px-1 dd-border-b-2 dd-font-medium dd-text-sm"
    );
  } else if (props.type === "underlined44") {
    return (
      (definedValue === inputModelValue.value
        ? "dd-border-teal-500 dd-text-teal-600 dd-cursor-pointer"
        : "dd-cursor-pointer dd-border-transparent dd-text-gray-500 hover:dd-text-gray-700 hover:dd-border-gray-300") +
      " dd-whitespace-nowrap dd-py-[11px] dd-px-1 dd-border-b-2 dd-font-medium dd-text-sm"
    );
  } else {
    return (
      (definedValue === inputModelValue.value
        ? "dd-bg-teal-100 dd-text-teal-700 dd-cursor-pointer "
        : "dd-bg-gray-100 dd-text-gray-700 dd-px-3 dd-cursor-pointer dd-text-gray-500 hover:dd-text-gray-700") +
      "dd-px-3 dd-py-1.5 dd-font-medium dd-text-sm dd-rounded-md"
    );
  }
};

const badgeColor = computed(() => {
  return (tab) => {
    if (tab.value === inputModelValue.value) return "teal";
  };
});

const borderBottomProperty = computed(() => {
  if (props?.borderBottom && props?.type === "pill") {
    return "!dd-border-none";
  } else if (props?.borderBottom) {
    return "dd-border-b dd-border-gray-200";
  } else {
    return "!dd-border-none";
  }
});

const updateTabValue = (tab) => {
  if (inputModelValue.value != tab[props.defaultProps.value]) {
    inputModelValue.value = tab[props.defaultProps.value];
    emits("change", tab);
  }
};

onMounted(() => {
  emits("change", ...props.tabs);
});
onUnmounted(() => {
  emits("change", ...props.tabs);
});
</script>

<style lang="scss" scoped></style>

