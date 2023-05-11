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
      </ddObserver>
      <DdStepper :steps="stepperItems" :active="0"></DdStepper>
      <ddCard rounded="2xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque labore
        temporibus doloribus animi tempora delectus suscipit repellendus fuga
        saepe impedit debitis laudantium, maiores, accusantium molestiae minus
        illo cumque consectetur consequuntur! Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Neque labore temporibus doloribus animi
        tempora delectus suscipit repellendus fuga saepe impedit debitis
        laudantium, maiores, accusantium molestiae minus illo cumque consectetur
        consequuntur! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Neque labore temporibus doloribus animi tempora delectus suscipit
        repellendus fuga saepe impedit debitis laudantium, maiores, accusantium
        molestiae minus illo cumque consectetur consequuntur!
      </ddCard>

      <dd-text-area label="HEllo" name="helo" :modelValue="mod" />
    </dd-wraper>
  </div>
</template>

<script setup>
import { ref } from "vue";
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
import DdStepper from "./components/stepper/index.vue";
import ddTeleInput from "./components/Telinput/index.vue";
import ddTextArea from "./components/textarea/index.vue";
import ddSvg from "./components/svgIcon/index.vue";
const mod = ref("");
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
</script>
