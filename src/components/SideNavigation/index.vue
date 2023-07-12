<template>
  <div class="dd-inline-flex dd-items-center dd-justify-between dd-p-1.5">
    <div v-if="prefix" class="dd-w-5 dd-h-5 dd-flex dd-items-center dd-justify-center dd-cursor-pointer dd-mr-1.5">
      <slot name="iconSlot" :active="active">
        <svgIcon v-if="prefix" :icon="icon" :class="getActiveState" @click="onClick" />
      </slot>
    </div>
    <span class="dd-text-sm dd-font-medium dd-text-left" :class="getActiveState">{{ label }}</span>
    <div v-if="suffix" class="dd-w-5 dd-h-5 dd-flex dd-items-center dd-cursor-pointer dd-ml-1.5" :class="getActiveState">
      <slot name="contentSlot" :active="active">
        <svgIcon v-if="suffix" :icon="icon" :size="size" />
      </slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import svgIcon from "../svgIcon/index.vue";

const emits = defineEmits('onIconClick',)

const props = defineProps({
  label: {
    type: String,
    default: "Side Navigation with Slots",
  },
  active: {
    type: Boolean,
    default: false,
  },
  icon: {
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
    return 'dd-text-teal-600'
  }
});

const onClick = () => {
  emits('onIconClick')
};
</script>

<style>
</style>