<template>
  <div class="dd-overflow-scroll dd-w-full">
    <listItems
      v-for="item in list"
      :key="item.id"
      :item="item"
      :buttons="buttons"
      :showIcon="showIcon"
      :selectedItem="currentSelected"
      @setSelected="setSelected"
      :activeListId="editId"
      :newNode="childNode"
      :checkBoxProp="checkBoxProp"
      :customContent="customContent"
      :badge="badge"
      :actionButton="actionButton"
      itemKey="id"
      @setEditId="setEditId"
      @SetNewNode="SetNewNode"
      @editListInput="emits('editListInput', $event)"
      @addNewListNode="emits('addNewListNode', $event)"
      @focusNewNode="emits('focusNewNode', $event)"
      @blurNewNode="emits('blurNewNode', $event)"
      @keydownNewNode="emits('keydownNewNode', $event)"
      @keyupNewNode="emits('keyupNewNode', $event)"
      @TrackNewNode="emits('TrackNewNode', $event)"
      @focusEditNode="emits('focusEditNode', $event)"
      @blurEditNode="emits('blurEditNode', $event)"
      @keydownEditNode="emits('keydownEditNode', $event)"
      @keyupEditNode="emits('keyupEditNode', $event)"
      @TrackEditNode="emits('TrackEditNode', $event)"
      @selectedCheckBoxes="emits('selectedCheckBoxes', $event)"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import listItems from "./listItems.vue";

const emits = defineEmits([
  "updateEditList",
  "discardEditChanges",
  "editListInput",
  "addNewListNode",
  "addListInNode",
  "discardListInNode",
  "focusNewNode",
  "blurNewNode",
  "keydownNewNode",
  "keyupNewNode",
  "TrackNewNode",
  "focusEditNode",
  "blurEditNode",
  "keydownEditNode",
  "keyupEditNode",
  "TrackEditNode",
  "selectedCheckBoxes",
]);

const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
  buttons: {
    type: Array,
    required: true,
  },
  checkBoxProp: {
    type: Boolean,
    default: false,
  },
  customContent: {
    type: Boolean,
    default: false,
  },
  badge: {
    type: String,
    default: "",
  },
  actionButton: {
    type: Boolean,
    default: false,
  },
});

const editId = ref(null);
const currentSelected = ref({});
const childNode = ref(null);

const setSelected = (selectedValue) => {
  currentSelected.value = selectedValue;
};

const setEditId = (data) => {
  editId.value = data;
};

const SetNewNode = (data) => {
  childNode.value = data;
};
</script>

<style scoped></style>