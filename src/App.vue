<template>
  <div>
    <!-- <dd-table :rows="rows" :columns="columnVal" :buttons="buttons" :Actions="Actions" :values="values" footer checkBoxProp
      fixedHeight rowKey="id" hoveringRow lastCell fixed actionHeader emptyState actionsPanel sortIcon settingbarIcon
      searchIcon @updateSettings="updateSettings" dragDrop /> -->
    <dd-tree :list="generatedArray" :buttons="buttons" badge="2345" @keydownEditNode="keydownEditNode" checkBoxProp customContent actionButton />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DdTable from "./components/table/index.vue";
import DdTree from "./components/Tree/index.vue";

const buttons = ref([
  // { id: 0, label: "button", color: "white", size: "16", icon: "" },
  { id: 1, buttonType: "Create", label: "", color: "white", size: "16", icon: "Plus" },
  { id: 2, buttonType: "Edit", label: "", color: "white", size: "16", icon: "Pencil" },
  { id: 3, buttonType: "Options", label: "", color: "white", size: "16", icon: "DotHorizontal" },
]);


const keydownEditNode = (data) => {
  console.log(data, 'emitted data');
}



function generateArrayWithUniqueIds(count) {
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
      children: generateChildrenArray(1, 3),
    };

    topLevelArray.push(topLevelItem);
  }

  return topLevelArray;
}

const generatedArray = generateArrayWithUniqueIds(10);



</script>


<style>
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden !important;
}
</style>