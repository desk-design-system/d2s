<template>
  <div class="dd-container dd-mx-auto dd-m-5">
  <ddHeadr :items="items" />  
  <ddAlert title="elo" closable />
  <ddAvatar srcLink="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
  <ddBadge title="elo" />
  <ddBadge title="elo" rounded size="large" />
  <ddBadge title="elo" rounded size="large" dot />
  <ddButton @click="alertt" prefix icon="Plus" title="elo" />
  <ddBred :items="options" seprator="chevron" shadow />
  <ddCheckBox />
    <ddRadion size="sm" prefix suffix icon="Search"  />
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
import ddRadion from "./components/input/index.vue"

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
const alertt = () =>{
alert("elo")
}
</script>



