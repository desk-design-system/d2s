<template>
  <div>
    <!-- <DdNavigation label="side navs" prefix suffix active /> -->
    <DdSettings :settings="settings" v-model="modelValue" @getNavTitle="getNavTitle" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DdSettings from "./components/SettingsBar/index.vue";

const modelValue = ref('');
const getNavTitle = (item) => {
  console.log(item, 'onClick');
}

const settings = ref([
  {
    id: 1,
    title: "Module Configure",
    items: [
      {
        id: 1,
        title: "Ticket Management",
        active: false,
        disable: true,
      },
      {
        id: 2,
        title: "Items Management",
        active: false,
        disable: false,
      },
    ],
  },
  {
    id: 2,
    title: "Profile",
    items: [
      {
        id: 1,
        title: "General",
        active: false,
        disable: false,
      },
      {
        id: 2,
        title: "Usage & Billing",
        active: false,
        disable: false,
      },
      {
        id: 3,
        title: "user",
        active: false,
        disable: false,
      },
      {
        id: 4,
        title: "upper",
        active: true,
      },
    ],
  },
  {
    id: 3,
    title: "Profile",
    items: [
      {
        id: 1,
        title: "General",
        active: false,
        disable: false,
      },
      {
        id: 2,
        title: "Usage & Billing",
        active: false,
        disable: false,
      },
      {
        id: 3,
        title: "user",
        active: false,
        disable: false,
      },
      {
        id: 4,
        title: "upper",
        active: false,
        disable: false,
      },
    ],
  },
  {
    id: 4,
    title: "Profile",
    items: [
      {
        id: 1,
        title: "General",
        active: false,
        disable: false,
      },
      {
        id: 2,
        title: "Usage & Billing",
        active: false,
        disable: false,
      },
      {
        id: 3,
        title: "user",
        active: false,
        disable: false,
      },
      {
        id: 4,
        title: "upper",
        active: false,
        disable: false,
      },
    ],
  },
]);
</script>


<style>
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden !important;
  background: #f6f6f6;
}
</style>