<template>
  <div class="dd-mt-3">
    <dd-table :rows="rows" :columns="columns" :buttons="buttons" :Actions="Actions" :values="values" footer checkBoxProp
      fixedHeight rowKey="id" hoveringRow lastCell fixed actionHeader emptyState actionsPanel sortIcon settingbarIcon
      searchIcon />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DdGroupButton from "./components/groupButton/index.vue";
import DdButton from "./components/buttons/index.vue";
import svgIcon from "./components/svgIcon/index.vue";
import DdTable from "./components/table/index.vue";

const columns = ref([
  {
    title: "ID",
    value: "id",
    checked: true,
    size: "60",
    id: 1,
    disabled: true,
    sortDirection: "asc",
  },
  {
    title: "User Name",
    value: "username",
    checked: true,
    size: "130",
    id: 2,
    disabled: false,
    sortDirection: "",
  },
  {
    title: "First Name",
    value: "firstname",
    checked: true,
    size: "130",
    id: 3,
    sortDirection: "",
  },
  {
    title: "Last Name",
    value: "lastname",
    checked: true,
    size: "130",
    id: 4,
    sortDirection: "",
  },
  {
    title: "Email",
    value: "email",
    checked: true,
    size: "130",
    id: 5,
    sortDirection: "",
  },
  {
    title: "Email",
    value: "email",
    checked: true,
    size: "130",
    id: 5,
    sortDirection: "",
  },
  {
    title: "Email",
    value: "email",
    checked: true,
    size: "130",
    id: 5,
    sortDirection: "",
  },
  {
    title: "Email",
    value: "email",
    checked: true,
    size: "130",
    id: 5,
    sortDirection: "",
  },
  {
    title: "Email",
    value: "email",
    checked: true,
    size: "130",
    id: 5,
    sortDirection: "",
  },
  {
    title: "Email",
    value: "email",
    checked: true,
    size: "130",
    id: 5,
    sortDirection: "",
  },
  {
    title: "Email",
    value: "email",
    checked: true,
    size: "130",
    id: 5,
    sortDirection: "",
  },
  {
    title: "Email",
    value: "email",
    checked: true,
    size: "130",
    id: 5,
    sortDirection: "",
  },
  {
    title: "Status",
    value: "status",
    checked: true,
    size: "130",
    id: 6,
    sortDirection: "",
  },
]);
const rows = ref([
  {
    id: 0,
    username: "Herry007",
    firstname: "Herry",
    lastname: "Brook",
    email: "herry@repairdesk.co",
    status: "in progress",
    disabled: false,
  },
  {
    id: 1,
    username: "David2",
    firstname: "David",
    lastname: "Jeman",
    email: "David@repairdesk.co",
    status: "Repaired and Collected",
    disabled: false,
  },
  {
    id: 2,
    username: "Henry0",
    firstname: "Henry",
    lastname: "Cavil",
    email: "henry@repairdesk.co",
    status: "in progress",
  },
  {
    id: 3,
    username: "Herry007",
    firstname: "Herry",
    lastname: "Brook",
    email: "herry@repairdesk.co",
    status: "Repaired and Collected",
  },
  {
    id: 4,
    username: "JSmith",
    firstname: "John",
    lastname: "Smith",
    email: "john.smith@example.com",
    status: "in progress",
  },
  {
    id: 5,
    username: "LGreen",
    firstname: "Lucy",
    lastname: "Green",
    email: "lucy.green@example.com",
    status: "Repaired and Collected",
  },
  {
    id: 6,
    username: "AMiller",
    firstname: "Alice",
    lastname: "Miller",
    email: "alice.miller@example.com",
    status: "in progress",
  },
  {
    id: 7,
    username: "BDavis",
    firstname: "Bob",
    lastname: "Davis",
    email: "bob.davis@example.com",
    status: "Repaired and Collected",
  },
  {
    id: 8,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 9,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 10,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 11,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 12,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 13,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 14,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 15,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 16,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 17,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 18,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 19,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 20,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 21,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 22,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 23,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 24,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 25,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 26,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 27,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 28,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 29,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 30,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 31,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 32,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 33,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
  {
    id: 34,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
]);

const buttons = [
  { id: 1, label: "5", color: "white", size: "sm", active: "15" },
  { id: 2, label: "10", color: "white", size: "sm" },
  { id: 3, label: "15", color: "white", size: "sm" },
];

const Actions = ref([
  {
    name: "DropDown Menu 1",
    icon: "DotHorizontal",
    size: 12,
    value: 1,
  },
  {
    name: "DropDown Menu 2",
    icon: "Trash",
    size: 12,
    value: 2,
  },
  {
    name: "DropDown Menu 3",
    icon: "Pencil",
    size: 12,
    value: 3,
  },
]);

const values = ref([
  {
    name: "DropDown Menu 1",
    value: 1,
    disabled: true,
  },
  {
    name: "DropDown Menu 2",
    value: 2,
  },
  {
    name: "DropDown Menu 3",
    value: 3,
  },
  {
    name: "DropDown Menu 4",
    value: 4,
  },
]);
</script>


<style>
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden !important;
  background: #f3f4f6 !important;
}
</style>