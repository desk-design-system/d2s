<template>
  <div>
    <DdTopbar />
  </div>
  <div class="dd-container dd-mx-auto dd-m-5">
    <dd-wraper>
      <ddHeadr :items="items" />
      <ddAlert title="elo" closable />
      <ddAvatar
        srcLink="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      />
      <ddBadge title="elo" />
      <ddBadge title="elo" rounded size="large" />
      <ddBadge title="elo" rounded size="large" dot />
      <ddButton @click="fun" prefix icon="Plus" title="Form" />
      <ddBred :items="options" seprator="chevron" shadow />
      <ddCheckBox v-model="model" />
      <ddObserver ref="wraperForm">
        <ddRadion :options="options" />
        <!-- <ddInput  rules="required|min:6" label="Input" v-model="text"  />
    <ddInput  rules="required|confirmed:@Jazib" label="Confirm" v-model="coner"  /> -->
        <ddMulti
          label="elo"
          rules="required"
          showTooltip
          customIcon
          v-model="text"
          :options="options"
        />
        <div class="dd-mb-10">
          <DdAccordion
            rules="required"
            :srcLink="srcLink"
            :showAvatar="showAvatar"
          >
            Customers
            <template #content>
              <div>test dropdown</div>
            </template>
          </DdAccordion>
          <DdPagination
            :count="count"
            :limit="limit"
            :offset="offset"
            @fetch-data="getData"
          />
        </div>
        <ddSelect
          v-model="selected"
          :options="filteredOptions"
          :filterable="filterable"
          @searchQuery="search"
          @addQuery="addquery"
        />
        <tabel />
      </ddObserver>
      <dd-text-area v-model="mod" rules="^[0-9]+$" label="rules" />
    </dd-wraper>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import DdPagination from "./components/Pagination/index.vue";
import DdAccordion from "./components/Accordion/index.vue";
import DdTopbar from "./components/topbar/index.vue";
import ddObserver from "./components/validations/ddForm.vue";
import ddAlert from "./components/alerts/index.vue";
import ddAvatar from "./components/avatars/index.vue";
import ddBadge from "./components/badges/index.vue";
import ddBred from "./components/breadcrumbs/index.vue";
import ddButton from "./components/buttons/index.vue";
import ddCheckBox from "./components/checkbox/index.vue";
import ddRadion from "./components/radiobutton/index.vue";
import ddWraper from "./components/scrollerApp/index.vue";
import ddMulti from "./components/multiSelect/index.vue";
import ddSelect from "./components/select/index.vue";

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
const stepperItems = ref(["Personal Details", "Business Details"]);
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
const people = ref ([
  { value: 1, name: "Leslie Alexander" },
  { value: 2, name: "Aeslie Blexander" },
  { value: 3, name: "Ceslie Dlexander" },
  { value: 4, name: "Eeslie Flexander" },
  { value: 5, name: "Geslie Hlexander" },
  { value: 6, name: "Ieslie Jlexander" },
  { value: 7, name: "Jeslie KJlexander" },
  // More people...
]);
const srcLink = ref(
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
);
const showAvatar = ref(false);
const count = ref(0);
const limit = ref(5);
const offset = ref(0);
const selected = ref("");
const query = ref("");
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

const search = (data) =>{
 query.value = data
}
const addquery = (data) => {
  selected.value = "";
  const queryArr = {
    value: people.value.length + 1,
    name: data,
  };
  people.value.unshift(queryArr);
  query.value = ""
};
</script>
