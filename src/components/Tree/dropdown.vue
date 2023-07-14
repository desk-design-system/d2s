<template>
  <slot name="dropdown" :selectedList="selectedList" :openList="openList"></slot>
</template>

<script setup>
const props = defineProps({
  selectedList: {
    type: Boolean,
    default: false,
  },
  openList: {
    type: Boolean,
    default: false,
  },
});
</script>

<style>
</style>