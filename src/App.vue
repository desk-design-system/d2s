<template>
  <div>
    <dd-tree
      :list="generatedArray"
      actionButton
      :buttons="buttons"
      :values="values"
      checkBoxProp
      badge="title"
      dropdownProp
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DdTree from "./components/Tree/index.vue"

function generateArrayWithUniqueIds(count, maxDepth) {
  let nextId = 1;

  function generateChildrenArray(level, maxLevel) {
    const children = [];
    const numChildren = Math.floor(Math.random() * count) + 1;

    for (let i = 0; i < numChildren; i++) {
      const childId = nextId++;
      const childLabel = `Child ${childId}`;
      const child = {
        id: childId,
        label: childLabel,
        icon: "",
        checkbox: true,
        checked: false,
        badge: true,
        actions: true,
        disabled: false,
        count: count.toString(),
        children: [],
      };

      if (level < maxLevel) {
        child.children = generateChildrenArray(level + 1, maxLevel);
      }

      children.push(child);
    }

    return children;
  }

  const topLevelArray = [];
  const numTopLevelItems = Math.floor(Math.random() * count) + 1;

  for (let i = 0; i < numTopLevelItems; i++) {
    const topLevelId = nextId++;
    const topLevelLabel = `Top Level ${topLevelId}`;
    const topLevelItem = {
      id: topLevelId,
      label: topLevelLabel,
      icon: "",
      checkbox: true,
      checked: false,
      badge: true,
      actions: true,
      disabled: false,
      count: count.toString(),
      children: [],
    };

    if (maxDepth > 1) {
      topLevelItem.children = generateChildrenArray(2, maxDepth);
    }

    topLevelArray.push(topLevelItem);
  }

  return topLevelArray;
}

const generatedArray = generateArrayWithUniqueIds(10, 3);

const buttons = ref([
  {
    id: 0,
    buttonType: "Create",
    label: "",
    color: "white",
    size: "16",
    icon: "Plus",
  },
  {
    id: 1,
    buttonType: "Edit",
    label: "",
    color: "white",
    size: "16",
    icon: "Pencil",
  },
]);

const values = ref([
  {
    name: "DropDown Menu 1",
    value: 1,
    icon: "Plus",
  },
  {
    name: "DropDown Menu 2",
    value: 2,
    icon: "Pencil",
  },
  {
    name: "DropDown Menu 3",
    value: 3,
    icon: "Trash",
  },
  {
    name: "DropDown Menu 4",
    value: 4,
    icon: "Alert",
  },
]);
</script>


<style>
body {
  padding: 0;
  margin: 0;
  z-index: 0;
}
</style>