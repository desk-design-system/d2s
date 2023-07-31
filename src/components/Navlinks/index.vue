<template>
  <div v-bind="$attrs" class="dd-w-full dd-inline-flex dd-items-center dd-justify-between dd-p-1.5 dd-rounded-md dd-text-gray-600" :class="[!props.disabled ? 'hover:dd-bg-gray-50 dd-cursor-pointer ' : 'dd-cursor-not-allowed']" @click="onClick">
    <div v-if="prefix" class="dd-w-5 dd-h-5 dd-flex dd-items-center dd-justify-center dd-cursor-pointer dd-mr-1.5">
      <slot name="prefixSlot" :active="active">
        <svgIcon v-if="prefix" :icon="prefixIcon" :class="[getActiveState, getDisabledState]" />
      </slot>
    </div>
    <span class="dd-text-sm  dd-text-left dd-text-gray-800" :class="[getActiveState, getDisabledState]">{{ label }}</span>
    <div v-if="suffix" class="dd-w-5 dd-h-5 dd-flex dd-items-center dd-cursor-pointer dd-ml-1.5" :class="[getActiveState, getDisabledState]">
      <slot name="suffixSlot" :active="active">
        <svgIcon v-if="suffix" :icon="suffixIcon" :size="size" />
      </slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import svgIcon from "../svgIcon/index.vue";

const emits = defineEmits('onClick',)

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  active: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  prefixIcon: {
    type: String,
    default: "Circle",
  },
  suffixIcon: {
    type: String,
    default: "Circle",
  },
  prefix: {
    type: Boolean,
    default: false,
  },
  suffix: {
    type: Boolean,
    default: false,
  },
});

const getActiveState = computed(() => {
  if(props.active === true) {
    return '!dd-text-teal-600'
  }
});

const getDisabledState = computed(() => {
  if(props.disabled === true) {
    return '!dd-text-gray-400'
  }
});

const onClick = () => {
  emits('onClick')
};
</script>

<style>
</style>