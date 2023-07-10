<template>
  <div  class="dd-overflow-scroll dd-w-full">
    <listItems v-for="item in list" :key="item.id" :item="item" :buttons="buttons"  :showIcon="showIcon" :selectedItem="currentSelected" @setSelected="setSelected" :activeListId="tempId"  @setTempId="setTempId"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
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

const tempId =ref(null);
const currentSelected = ref({});

const setSelected = (selectedValue) => {
  currentSelected.value = selectedValue
};

const setTempId = (data) => {
  tempId.value = data;
};
</script>

<style scoped></style>