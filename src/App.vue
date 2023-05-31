<template>
  <div class="table_comp">
    <dd-table :rows="rows" :columns="columns" :buttons="buttons" :Actions="Actions" :values="values" showIcon footer fixed
      actionHeader rowActions checkBoxProp checkAllDisabled disableDropdown noDropdown defaultRow emptyState size="12"
      actionsIconSize="12" @saveChanges="saveChanges" @resetData="resetData" @NumberOfRow="NumberOfRow"
      @searchQuery="searchQuery" @loadmore="loadmore" @allCheckboxes="allCheckboxes" @selectedRow="selectedRow" />
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

const options = ref([
  {
    name: "Test",
    value: 1,
  },
  {
    name: "Test2",
    value: 2,
  },
  {
    name: "Test3",
    value: 3,
  },
  {
    name: "Test4",
    value: 4,
  },
  {
    name: "Test5",
    value: 5,
  },
  {
    name: "Test6",
    value: 6,
  },
  {
    name: "Test7",
    value: 7,
  },
  {
    name: "Test8",
    value: 8,
  },
  {
    name: "Test9",
    value: 9,
  },
]);
const options2 = ref([
  {
    title: "Test",
    id: 1,
  },
  {
    title: "Test2",
    id: 2,
  },
]);
const items = ref([
  {
    icon: "LayoutDashboard",
    value: 1,
  },
  {
    icon: "FileAnalytics",
    value: 2,
  },
  {
    icon: "Setting",
    value: 3,
  },
]);

const wraperForm = ref(null);
const fun = async () => {
  const inValid = await wraperForm.value.validate();
  if (inValid.valid) {
    alert("Success");
  } else {
    alert("Los");
  }
};
const model = ref(false);
const text = ref([]);
const coner = ref("");
const open = ref(false);
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
    title: 'Id',
    value: 'id',
    checked: true,
    size: "130",
    id: 1,
    disabled: true,
  },
  {
    title: 'User Name',
    value: 'username',
    checked: true,
    size: "130",
    id: 2,
    disabled: true,
  },
  {
    title: 'First Name',
    value: 'firstname',
    checked: true,
    size: "130",
    id: 3,
  },
  {
    title: 'Last Name',
    value: 'lastname',
    checked: true,
    size: "130",
    id: 4,
  },
  {
    title: 'Email',
    value: 'email',
    checked: true,
    size: "130",
    id: 5,
  },
  {
    title: 'Email',
    value: 'email',
    checked: true,
    size: "130",
    id: 5,
  },
  {
    title: 'Email',
    value: 'email',
    checked: true,
    size: "130",
    id: 5,
  },
  {
    title: 'Email',
    value: 'email',
    checked: true,
    size: "130",
    id: 5,
  },
  {
    title: 'Email',
    value: 'email',
    checked: true,
    size: "130",
    id: 5,
  },
  {
    title: 'Email',
    value: 'email',
    checked: true,
    size: "130",
    id: 5,
  },
  {
    title: 'Email',
    value: 'email',
    checked: true,
    size: "130",
    id: 5,
  },
  {
    title: 'Status',
    value: 'status',
    checked: true,
    size: "130",
    id: 6,
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
  { id: 1, label: "5", color: "white", icon: "" },
  { id: 2, label: "10", color: "white", icon: "" },
  { id: 3, label: "15", color: "white", icon: "" },
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

const srcLink = ref(
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
);
const showAvatar = ref(false);
const showIcon = ref(false);
const count = ref(0);
const limit = ref(0);
const offset = ref(0);
const selected = ref("");
const filterable = ref(false);

const getData = () => {
  count.value = 100;
};

const filteredOptions = computed(() =>
  query.value == ""
    ? people.value
    : people.value.filter((item) => {
      return item.name.toLowerCase().includes(query.value.toLowerCase());
    })
);

const search = (data) => {
  query.value = data
}
const addquery = (data) => {
  const queryArr = {
    value: people.value.length + 1,
    name: data,
  };
  people.value.unshift(queryArr);
  query.value = ""
};

const saveChanges = (data) => {
  console.log(data, 'data from parent');
}
const resetData = (data) => {
  // if (data.checked === false) {
  //   data.checked = true
  // } else if (data.size !== "") {
  //   return data.size = "";
  // }
  console.log(data, 'reset data');
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