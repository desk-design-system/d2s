<template>
  <div>
    <!-- <dd-table :rows="rows" :columns="columnVal" :buttons="buttons" :Actions="Actions" :values="values" footer checkBoxProp
      fixedHeight rowKey="id" hoveringRow lastCell fixed actionHeader emptyState actionsPanel sortIcon settingbarIcon
      searchIcon @updateSettings="updateSettings" dragDrop /> -->
<<<<<<< HEAD
    <dd-tree
      :list="generatedArray"
      :buttons="buttons"
      badge="2345"
      @dropdownValue="dropdownValue"
      checkBoxProp
      customContent
      actionButton
      :values="values"
      showIcon
      dropdownProp
    >
      <template #badge>
        test
      </template>
  </dd-tree>
=======
    <dd-tree :list="generatedArray" :buttons="buttons" />
>>>>>>> origin/Tree-component
  </div>
</template>

<script setup>
import { ref } from "vue";
import DdTable from "./components/table/index.vue";
import DdTree from "./components/Tree/index.vue";

const buttons = ref([
<<<<<<< HEAD
  { id: 0, label: "button", color: "white", size: "16", icon: "" },
  {
    id: 1,
    buttonType: "Create",
    label: "",
    color: "white",
    size: "16",
    icon: "Plus",
  },
  {
    id: 2,
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
    icon: "Mail",
  },
]);

const dropdownValue = (data) => {
  console.log(data, "emitted data");
};
=======
  // { id: 0, label: "button", color: "white", size: "16", icon: "" },
  { id: 1, label: "", color: "white", size: "16", icon: "Plus" },
  { id: 2, label: "", color: "white", size: "16", icon: "Pencil" },
  { id: 3, label: "", color: "white", size: "16", icon: "DotHorizontal" },
]);
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
        checked: true,
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
      checked: true,
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


>>>>>>> origin/Tree-component

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
  z-index: 0;
}
</style>