<template>
  <div class="dd-w-full dd-bg-gray-100">
    <div class="dd-flex dd-items-center dd-justify-between dd-bg-white dd-w-full dd-relative dd-top-0 dd-z-20">
      <div class="dd-flex dd-items-center dd-py-3 dd-px-4 dd-gap-4">
        <div class="dd-bg-teal-700 dd-pt-1 dd-pb-1.5 dd-px-3 dd-rounded-3xl">
          <span class="dd-text-white dd-text-center">Repair shop</span>
        </div>
        <div>
          <input type="text" placeholder="Spark Search"
            class="dd-border-2 dd-border-gray-100 dd-py-1.5 dd-px-3 focus-visible:dd-outline-none dd-rounded-lg dd-w-[500px]" />
        </div>
      </div>
      <div class="dd-flex dd-items-center dd-py-3 dd-px-4 dd-gap-4">
        <DdGroupButton>
          <dd-Button color="white"> Register A </dd-Button>
          <dd-Button color="white"> Morning shift </dd-Button>
        </DdGroupButton>
        <div class="dd-flex dd-items-center dd-gap-3">
          <svgIcon color="white" icon="Bulb" class="dd-mb-1" />
          <div class="dd-w-8 dd-h-8 dd-bg-gray-200 dd-rounded-full"></div>
        </div>
      </div>
    </div>
    <div class="dd-w-16 dd-bg-white dd-h-full dd-absolute dd-left-0 dd-top-0 dd-z-10">
      <div class="dd-flex dd-items-center dd-justify-between dd-h-full dd-flex-col">
        <div class="dd-flex dd-items-center dd-text-center dd-gap-8 dd-flex-col dd-mt-24">
          <svgIcon color="white" icon="Bulb" class="dd-text-gray-400 hover:dd-text-gray-700" />
          <svgIcon color="white" icon="switch" class="dd-text-gray-400 hover:dd-text-gray-700" />
          <svgIcon color="white" icon="Star" class="dd-text-gray-400 hover:dd-text-gray-700" />
          <svgIcon color="white" icon="Lock" class="dd-text-gray-400 hover:dd-text-gray-700" />
          <svgIcon color="white" icon="Mail" class="dd-text-gray-400 hover:dd-text-gray-700" />
        </div>
        <div class="dd-h-fit">
          <div class="dd-border-t dd-border-gray-300 dd-w-6 dd-mb-6"></div>
          <svgIcon class="!dd-text-gray-500 dd-mb-6" icon="Settings" size="20" />
        </div>
      </div>
    </div>
    <div class="dd-w-full dd-h-full dd-pl-20">
      <div class="dd-w-full">
        <div class="dd-flex dd-items-center dd-justify-between dd-py-6 dd-pr-6">
          <span class="dd-text-gray-700 dd-text-xl dd-font-semibold">Manage Tickets</span>
          <div class="dd-flex dd-gap-4">
            <dd-Button color="white"> Export </dd-Button>
            <dd-Button> Create Ticket </dd-Button>
          </div>
        </div>
        <div class="dd-relative dd-pl-6 dd-w-full">
          <div class="dd-absolute dd-left-0">
            <div class="dd-flex dd-items-end dd-gap-3 dd-flex-col">
              <dd-Button color="white" size="sm">
                <svgIcon color="white" icon="Bulb"
                  class="dd-flex dd-items-center dd-justify-center dd-text-gray-400 hover:dd-text-gray-700" />
              </dd-Button>
              <dd-Button color="white" size="sm">
                <svgIcon color="white" icon="switch"
                  class="dd-flex dd-items-center dd-justify-center dd-text-gray-400 hover:dd-text-gray-700" />
              </dd-Button>
              <dd-Button color="white" size="sm">
                <svgIcon color="white" icon="Star"
                  class="dd-flex dd-items-center dd-justify-center dd-text-gray-400 hover:dd-text-gray-700" />
              </dd-Button>
            </div>
          </div>
            <div class="dd-w-full dd-min-w-full dd-px-6">
              <dd-table :rows="rows" :columns="columns" :buttons="buttons" :Actions="Actions" :values="values"
               footer checkBoxProp noHeight rowKey="id" :paginationButton="paginationButton" :limitVal="limitVal" hoveringRow headRowActions fixed  />
            </div>
        </div>
      </div>
    </div>
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
  { id: 1, label: "5", color: "white", size: "sm", disabled: true },
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