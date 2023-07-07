<template>
  <div  class="dd-overflow-scroll dd-w-full">
    <listItems v-for="item in list" :key="item.id" :item="item" :buttons="buttons"  :showIcon="showIcon" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DdCheckbox from "../checkbox/index.vue";
import svgIcon from "../svgIcon/index.vue";
import Badge from "./Badge.vue";
import Actions from "./Actions.vue";
import listItems from "./listItems.vue";

const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
  buttons: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>