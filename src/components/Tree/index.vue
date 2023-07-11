<template>
  <div  class="dd-overflow-scroll dd-w-full">
    <listItems v-for="item in list" :key="item.id" :item="item" :buttons="buttons"  :showIcon="showIcon" :selectedItem="currentSelected" @setSelected="setSelected" :activeListId="editId" :newNode="childNode"  @setEditId="setEditId" @SetNewNode="SetNewNode"/>
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

const editId =ref(null);
const currentSelected = ref({});
const childNode = ref(null);

const setSelected = (selectedValue) => {
  currentSelected.value = selectedValue
};

const setEditId = (data) => {
  editId.value = data;
};

const SetNewNode = (data) => {
  childNode.value = data;
}
</script>

<style scoped></style>