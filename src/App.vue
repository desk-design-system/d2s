<template>
  <div>
    <dd-button :color="options.type.toLocaleLowerCase()" @click="showAlertWarning()">{{ options.type }}</dd-button>
  </div>
</template>

<script setup>
import { inject } from "vue";
import DdButton from "./components/buttons/index.vue"


const modal = inject('$modal')
const options = {
  title: "Delete Unit",
  message: "Are you sure you want to delete this unit from the multistore? This action cannot be undone",
  saveTitle: "Yes, Delete",
  closeTitle: "Close",
  type: "Error",
  closed: true,
  solved: true,
  modalWidth: "45%",
}

const showAlertWarning = () => { modal.error("Delete Unit", "Are you sure you want to delete this unit from the multistore? This action cannot be undone", "", "Yes, Delete", "Close", true, true, "45%").then(() => console.log("accepted")).catch(() => console.log("rejected")) }
</script>


<style>
#app {
  padding: 0;
  margin: 0;
  overflow: hidden !important;
  overflow-y: hidden !important;
}
</style>