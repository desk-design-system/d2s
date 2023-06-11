<template>
  <div class="dd-bg-gray-50">
    <dd-table :rows="rows" :columns="columns" :buttons="buttons" :Actions="Actions" :values="values" defaultRow footer emptyState @editRow="reset" />
  </div>
  <!-- <div>
    <DdTopbar />
  </div> -->
  <!-- <div class="dd-container dd-mx-auto dd-m-5"> -->
  <!-- <dd-wraper> -->
  <!-- <ddHeadr :items="items" />
      <ddAlert title="elo" closable />
      <ddAvatar srcLink="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
      <ddBadge title="elo" />
      <ddBadge title="elo" rounded size="large" />
      <ddBadge title="elo" rounded size="large" dot />
      <ddButton @click="fun" prefix icon="Plus" title="Form" />
      <ddBred :items="options" seprator="chevron" shadow />
      <ddCheckBox v-model="model" /> -->
  <!-- <ddObserver ref="wraperForm"> -->
  <!-- <ddRadion :options="options" /> -->
  <!-- <ddInput  rules="required|min:6" label="Input" v-model="text"  />
    <ddInput  rules="required|confirmed:@Jazib" label="Confirm" v-model="coner"  /> -->
  <!-- <ddMulti label="elo" rules="required" showTooltip customIcon v-model="text" :options="options" />
        <div class="dd-mb-10">
          <DdAccordion rules="required" :srcLink="srcLink" :showAvatar="showAvatar">
            Customers
            <template #content>
              <div>test dropdown</div>
            </template>
          </DdAccordion>
          <DdPagination :count="count" :limit="limit" :offset="offset" @fetch-data="getData" />
        </div> -->
  <!-- <ddSelect v-model="selected" :options="filteredOptions" :filterable="filterable" @searchQuery="search"
          @addQuery="addquery" /> -->
  <!-- </ddObserver> -->
  <!-- <dd-text-area v-model="mod" rules="^[0-9]+$" label="rules" /> -->
  <!-- </dd-wraper> -->
  <!-- </div> -->
</template>

<script setup>
import { ref, computed } from "vue";
import DdTable from "./components/table/index.vue"
import DdSelect from "./components/select/index.vue"
import DdAccordion from "./components/Accordion/index.vue";
import DdTopbar from "./components/topbar/index.vue";
import ddObserver from "./components/validations/ddForm.vue";
import ddAlert from "./components/alerts/index.vue";
import ddBadge from "./components/badges/index.vue";
import ddBred from "./components/breadcrumbs/index.vue";
import ddButton from "./components/buttons/index.vue";
import ddCheckBox from "./components/checkbox/index.vue";
import ddRadion from "./components/radiobutton/index.vue";
import ddWraper from "./components/scrollerApp/index.vue";
import ddMulti from "./components/multiSelect/index.vue";


const people = ref([
  { value: 1, name: "Leslie Alexander" },
  { value: 2, name: "Aeslie Blexander" },
  { value: 3, name: "Ceslie Dlexander" },
  { value: 4, name: "Eeslie Flexander" },
  { value: 5, name: "Geslie Hlexander" },
  { value: 6, name: "Ieslie Jlexander" },
  { value: 7, name: "Jeslie KJlexander" },
  // More people...
]);
const columns = ref([
  {
    title: 'ID',
    value: 'id',
    checked: true,
    size: "100",
    id: 1,
    disabled: true,
    sortDirection: 'asc',
  },
  {
    title: 'User Name',
    value: 'username',
    checked: true,
    size: "130",
    id: 2,
    disabled: true,
    sortDirection: '',
  },
  {
    title: 'First Name',
    value: 'firstname',
    checked: true,
    size: "130",
    id: 3,
    sortDirection: '',
  },
  {
    title: 'Last Name',
    value: 'lastname',
    checked: true,
    size: "130",
    id: 4,
    sortDirection: '',
  },
  {
    title: 'Email',
    value: 'email',
    checked: true,
    size: "130",
    id: 5,
    sortDirection: '',
  },
  {
    title: 'Email',
    value: 'email',
    checked: true,
    size: "130",
    id: 5,
    sortDirection: '',
  },
  {
    title: 'Email',
    value: 'email',
    checked: true,
    size: "130",
    id: 5,
    sortDirection: '',
  },
  {
    title: 'Email',
    value: 'email',
    checked: true,
    size: "130",
    id: 5,
    sortDirection: '',
  },
  {
    title: 'Email',
    value: 'email',
    checked: true,
    size: "130",
    id: 5,
    sortDirection: '',
  },
  {
    title: 'Email',
    value: 'email',
    checked: true,
    size: "130",
    id: 5,
    sortDirection: '',
  },
  {
    title: 'Email',
    value: 'email',
    checked: true,
    size: "130",
    id: 5,
    sortDirection: '',
  },
  {
    title: 'Email',
    value: 'email',
    checked: true,
    size: "130",
    id: 5,
    sortDirection: '',
  },
  {
    title: 'Status',
    value: 'status',
    checked: true,
    size: "130",
    id: 6,
    sortDirection: '',
  },
])
const rows = ref([
  {
    id: 1,
    username: "Herry007",
    firstname: "Herry",
    lastname: "Brook",
    email: "herry@repairdesk.co",
    status: "in progress",
    disabled: false,
  },
  {
    id: 2,
    username: "David2",
    firstname: "David",
    lastname: "Jeman",
    email: "David@repairdesk.co",
    status: "Repaired and Collected",
    disabled: false,
  },
  {
    id: 3,
    username: "Henry0",
    firstname: "Henry",
    lastname: "Cavil",
    email: "henry@repairdesk.co",
    status: "in progress",
  },
  {
    id: 4,
    username: "Herry007",
    firstname: "Herry",
    lastname: "Brook",
    email: "herry@repairdesk.co",
    status: "Repaired and Collected"
  },
  {
    id: 5,
    username: "JSmith",
    firstname: "John",
    lastname: "Smith",
    email: "john.smith@example.com",
    status: "in progress",
  },
  {
    id: 6,
    username: "LGreen",
    firstname: "Lucy",
    lastname: "Green",
    email: "lucy.green@example.com",
    status: "Repaired and Collected"
  },
  {
    id: 7,
    username: "AMiller",
    firstname: "Alice",
    lastname: "Miller",
    email: "alice.miller@example.com",
    status: "in progress",
  },
  {
    id: 8,
    username: "BDavis",
    firstname: "Bob",
    lastname: "Davis",
    email: "bob.davis@example.com",
    status: "Repaired and Collected"
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
  {
    id: 35,
    username: "KJohnson",
    firstname: "Kate",
    lastname: "Johnson",
    email: "kate.johnson@example.com",
    status: "in progress",
  },
])

const buttons = [
  { id: 1, label: "5", color: "white", size: "sm" },
  { id: 2, label: "10", color: "white", size: "sm" },
  { id: 3, label: "15", color: "white", size: "sm" },
];

const Actions = ref([
  {
    name: 'DropDown Menu 1',
    icon: 'DotHorizontal',
    size: 12,
    value: 1,
  },
  {
    name: 'DropDown Menu 2',
    icon: 'Trash',
    size: 12,
    value: 2,
  },
  {
    name: 'DropDown Menu 3',
    icon: 'Pencil',
    size: 12,
    value: 3,
  }
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

function reset() {
  console.log('item');
}
</script>


<style>
#app {
  padding: 0;
  margin: 0;
  overflow: hidden !important;
  overflow-y: hidden !important;
}
</style>