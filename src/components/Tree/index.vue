<template>
<<<<<<< HEAD
  <div class="dd-overflow-scroll dd-w-full">
    <listItems
      v-for="item in list"
      :key="item.id"
      :item="item"
      :buttons="buttons"
      :showIcon="showIcon"
      :selectedItem="currentSelected"
      :activeListId="editId"
      :newNode="childNode"
      :checkBoxProp="checkBoxProp"
      :customContent="customContent"
      :badge="badge"
      :actionButton="actionButton"
      :values="values"
      itemKey="id"
      :dropdownProp="dropdownProp"
      @setSelected="setSelected"
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
      @dropdownValue="emits('dropdownValue', $event)"
    >
    <template #dropdown="{disabled, isSelected, open}">
        <slot name="dropdown" :disabled="disabled" :isSelected="isSelected" :open="open"></slot>
    </template>
    <template #checkbox="{checkBoxProp, open, item, disabled}">
      <slot name="checkbox" :checkBoxProp="checkBoxProp" :item="item" :open="open" :disabled="disabled"></slot>
    </template>
    <template #content="{customContent, open, item, disabled}">
      <slot name="content" :customContent="customContent" :item="item" :open="open" :disabled="disabled"></slot>
    </template>
    <template  v-if="badge" #badge>
      <slot name="badge"></slot>
    </template>
  </listItems>
=======
  <div  class="dd-overflow-scroll dd-w-full">
    <listItems v-for="item in list" :key="item.id" :item="item" :buttons="buttons"  :showIcon="showIcon" :selectedItem="currentSelected" @setSelected="setSelected" :activeListId="editId" :newNode="childNode"  @setEditId="setEditId" @SetNewNode="SetNewNode"/>
>>>>>>> origin/Tree-component
  </div>
</template>

<script setup>
import { ref } from "vue";
import listItems from "./listItems.vue";
<<<<<<< HEAD

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
  "dropdownValue",
]);

const props = defineProps({
  list: {
    type: Array,
    default: () => ({}),
  },
  buttons: {
    type: Array,
    default: () => ({}),
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
  showIcon: {
    type: Boolean,
    default: false,
  },
  values: {
    type: Array,
    required: true,
  },
  dropdownProp: {
    type: Boolean,
    default: false,
  }
});

const editId = ref(null);
=======
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
>>>>>>> origin/Tree-component
const currentSelected = ref({});
const childNode = ref(null);

const setSelected = (selectedValue) => {
<<<<<<< HEAD
  currentSelected.value = selectedValue;
=======
  currentSelected.value = selectedValue
>>>>>>> origin/Tree-component
};

const setEditId = (data) => {
  editId.value = data;
};

const SetNewNode = (data) => {
  childNode.value = data;
<<<<<<< HEAD
};
=======
}
>>>>>>> origin/Tree-component
</script>

<style scoped></style>