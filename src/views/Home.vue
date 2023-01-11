<script setup>
import rdButton from "@/components/buttons/index.vue";
import rdAvatarDrop from "@/components/avatarDropdown/index.vue";
import rdTable from "@/components/tables/index.vue";
import rdBadge from "@/components/badge/index.vue"
import rdAutocomplete from "@/components/autocomplete/index.vue"
import rdInput from "@/components/inputFields/index.vue"
const test = [
  {label:"option 4" , value:'option 4'},{label:"option 5 ", value:'option 5'},

]

const people = [
  {
    empName: "Lindsay Walton",
    empstoreName: "Front-end Developer",
    empphone: "lindsay.walton@example.com",
    empemail: "lindsay.walton@example.com",
    emprole: "Member",
    empHourlyPrice: "5.5",
  },
  {
    empName: "Lindsay Walton",
    empstoreName: "Front-end Developer",
    empphone: "lindsay.walton@example.com",
    empemail: "lindsay.walton@example.com",
    emprole: "Member",
    empHourlyPrice: "3.4",
  },
  {
    empName: "Lindsay Walton",
    empstoreName: "Front-end Developer",
    empphone: "lindsay.walton@example.com",
    empemail: "lindsay.walton@example.com",
    emprole: "Member",
    empHourlyPrice: "7.6",
  },
  {
    empName: "Lindsay Walton",
    empstoreName: "Front-end Developer",
    empphone: "lindsay.walton@example.com",
    empemail: "lindsay.walton@example.com",
    emprole: "Member",
    empHourlyPrice: "3.5",
  },
  // More people...
];
const tableColumns = [
  { title: "Employee Name", class: "min-w-[12rem] px-3", prop: "empName" },
  { title: "Store Name", prop: "empstoreName" },
  { title: "Phone", prop: "empphone" },
  { title: "Email", prop: "empemail" },
  { title: "Store Role", prop: "emprole" },
  { title: "Hourly Price", prop: "empHourlyPrice" },
  { title: "" },
];
</script>

<template>
  <div class="container mx-auto">
    <div class="flex justify-between">
      <rd-button color="danger" size="mini" />
      <rd-button color="primary"  />

      <rd-avatar-drop />
    </div>
    <rd-table :columns="tableColumns" :data="people" />
    <rd-badge />

    <rd-autocomplete />

    <rd-input title="Input Field" />
    <rd-input title="Select" type="select" />
    <rd-input type="checkbox" />
    <rd-input type="toggle" />
  </div>
</template>
