<template>
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
      </ddObserver>
    </dd-wraper>
    <ddStepper :active="active" :steps="stepperItems">
      <template #default>
        <div v-if="active === 0">
          {{ step }}
          <dd-button @click="next"> Next </dd-button>
        </div>
        <div v-else-if="active === 1">
          <div class="dd-flex">
            <dd-button @click="next"> Next </dd-button>
            <dd-button @click="back"> Back </dd-button>
          </div>
        </div>
        <div v-else-if="active === 2">
          <div class="dd-flex">
            <dd-button @click="next"> Next </dd-button>
            <dd-button @click="back"> Back </dd-button>
          </div>
        </div>
      </template>
    </ddStepper>
  </div>
</template>

<script setup>
import { ref } from "vue";
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
import ddSvg from "./components/svgIcon/index.vue";
import ddStepper from "./components/stepper/index.vue";
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

let active = ref(0);
function next() {
  active.value += 1;
  active.log("Complete", active);
}
function back() {
  active.value -= 1;
  console.log("Complete", active);
}

const stepperItems = ref(["Job details", "Application form", "Preview"]);
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
</script>
