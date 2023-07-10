<template>
  <div  class="dd-overflow-scroll dd-w-full">
    <listItems v-for="item in list" :key="item.id" :item="item" :buttons="buttons"  :showIcon="showIcon" :selectedItem="currentSelected" @setSelected="setSelected" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DdCheckbox from "../checkbox/index.vue";
import svgIcon from "../svgIcon/index.vue";
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

const currentSelected = ref({});

const setSelected = (selectedValue) => {
  currentSelected.value = selectedValue
}
</script>

<style scoped></style>