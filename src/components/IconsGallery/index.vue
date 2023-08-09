<template>
  <div class="dd-grid dd-grid-cols-5 dd-gap-4 dd-p-5">
    <div class="dd-flex dd-justify-end dd-col-span-5">
      <DdInput
        label="Search"
        placeholder="Search Icon"
        class="dd-w-[30%]"
        @change="filterIcons"
        v-model="searchIcon"
      />
    </div>
    <template v-if="filteredIcons.length">
      <div v-for="(icon, index) in filteredIcons" :key="index">
        <div
          class="
            dd-flex
            dd-flex-col
            dd-gap-y-2
            dd-items-center
            dd-border
            dd-p-2
            dd-rounded-lg
          "
        >
          <p class="dd-text-sm dd-text-gray-600">{{ icon }}</p>
          <DdSvgIcon :icon="icon" size="30"></DdSvgIcon>
        </div>
      </div>
    </template>
    <template v-else>
        <div class="dd-text-center dd-col-span-8">
            <p class="dd-text-lg dd-text-gray-700 dd-text-center">No icon found.</p>
        </div>
    </template>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import DdSvgIcon from "../svgIcon/index.vue";
import DdInput from "../input/index.vue";

let fileNames = ref([]);

const importComponents = async () => {
  const modules = import.meta.glob("../../components/icons/*.vue");
  const names = Object.values(modules).map((mod) => {
    const pathSplit = mod.name.split("/");
    const fileName = pathSplit[pathSplit.length - 1].replace(".vue", "");
    return fileName;
  });
  return names;
};

onMounted(async () => {
  fileNames.value = await importComponents();
});

const searchIcon = ref("");

const filteredIcons = computed(() => {
  const fileNameCopy = [...fileNames.value];
  if (searchIcon.value.length) {
    return fileNames.value.filter((name) => name.includes(searchIcon.value));
  } else {
    return fileNameCopy;
  }
});

</script>
