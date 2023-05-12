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
        <ddSelect
          label="testing"
          rules="required"
          v-model="coner"
          :options="options"
        />
        <div class="dd-mt-10">
          <!-- <DdAccordion
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
          /> -->
          <dd-group-btn
            :buttons="buttons"
            :showIcon="showIcon"
            :selected="selected"
            @selected="onButtonSelected"
          />
        </div>
        <tabel />
      </ddObserver>
      <dd-text-area v-model="mod" rules="^[0-9]+$" label="rules" />
    </dd-wraper>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DdGroupBtn from "./components/groupButton/index.vue";
import DdPagination from "./components/Pagination/index.vue";
import DdAccordion from "./components/Accordion/index.vue";
import DdTopbar from "./components/topbar/index.vue";
import ddObserver from "./components/validations/ddForm.vue";
import ddAlert from "./components/alerts/index.vue";
import ddAvatar from "./components/avatars/index.vue";
import ddBadge from "./components/badges/index.vue";
import ddBred from "./components/breadcrumbs/index.vue";
import ddButton from "./components/buttons/index.vue";
import ddCard from "./components/card/index.vue";
import ddCheckBox from "./components/checkbox/index.vue";
import ddDialog from "./components/dialog/index.vue";
import ddDivider from "./components/divider/index.vue";
import ddDrawer from "./components/drawer/index.vue";
import ddDropDown from "./components/dropdown/index.vue";
import ddRadion from "./components/radiobutton/index.vue";
import ddWraper from "./components/scrollerApp/index.vue";
import ddInput from "./components/input/index.vue";
import ddMulti from "./components/multiSelect/index.vue";
import ddSelect from "./components/select/index.vue";
import { ChevronDoubleDownIcon, ChevronUpIcon } from "@heroicons/vue/solid";

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
    name: "Test2",
    value: 3,
  },
  {
    name: "Test2",
    value: 4,
  },
  {
    name: "Test2",
    value: 5,
  },
  {
    name: "Test2",
    value: 6,
  },
  {
    name: "Test2",
    value: 7,
  },
  {
    name: "Test2",
    value: 8,
  },
  {
    name: "Test2",
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
const srcLink = ref(
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
);
const showAvatar = ref(false);
const count = ref(0);
const limit = ref(5);
const offset = ref(0);

const getData = () => {
  count.value = 100;
};

const showIcon = ref(true);
const buttons = [
  { id: 1, label: "Button 1", color: "white", icon: "ChevronLeft" },
  { id: 2, label: "Button 2", color: "primary", icon: "ChevronRight" },
  { id: 3, label: "Button 3", color: "danger", icon: "ChevronDown" },
  { id: 4, label: "Button 4", color: "warning", icon: "ChevronLeft" },
  { id: 5, label: "Button 5", color: "selected", icon: "ChevronRight" },
  { id: 6, label: "", size:"xs", color: "white", icon: "ChevronUp" },
  { id: 7, label: "", size:"xl", color: "white", icon: "ChevronDown" },
];

const onButtonSelected = (button) => {
  console.log(button, "from parent");
};
</script>
