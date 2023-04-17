<template>
  <div class="dd-container dd-mx-auto dd-m-5">
    <dd-wraper>
  <ddHeadr :items="items" />  
  <ddAlert title="elo" closable />
  <ddAvatar srcLink="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
  <ddBadge title="elo" />
  <ddBadge title="elo" rounded size="large" />
  <ddBadge title="elo" rounded size="large" dot />
  <ddButton @click="alertt" prefix icon="Plus" title="elo" />
  <ddBred :items="options" seprator="chevron" shadow />
  <ddCheckBox  v-model="model" />
    <ddRadion  :options="options" />
    <ddInput v-model="text"  />
    <ddMulti showTooltip customIcon  v-model="text" :options="options" />
    <ddSelect v-model="coner" :options="options" />
  </dd-wraper>
  </div>
</template>

<script setup>
import {ref} from "vue"
import ddAlert from "./components/alerts/index.vue"
import ddAvatar from "./components/avatars/index.vue"
import ddBadge from "./components/badges/index.vue"
import ddBred from "./components/breadcrumbs/index.vue"
import ddButton from "./components/buttons/index.vue"
import ddCard from "./components/card/index.vue"
import ddCheckBox from "./components/checkbox/index.vue"
import ddDialog from "./components/dialog/index.vue"
import ddDivider from "./components/divider/index.vue"
import ddDrawer from "./components/drawer/index.vue"
import ddDropDown from "./components/dropdown/index.vue"
import ddRadion from "./components/radiobutton/index.vue"
import ddWraper from "./components/scrollerApp/index.vue"
import ddInput from "./components/input/index.vue"
import ddMulti from "./components/multiSelect/index.vue"
import ddSelect from "./components/select/index.vue"
import ddSvg from "./components/svgIcon/index.vue"
const options = ref([
{
name: "Test",
value: 1
},
{
name: "Test2",
value: 2
}
])
const options2 = ref([
{
title: "Test",
id: 1
},
{
title: "Test2",
id: 2
}
])
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
const model = ref(false)
const text = ref([])
const coner = ref('')
</script>



