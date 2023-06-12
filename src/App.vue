<template>
  <div>
    <dd-button :color="options.type.toLocaleLowerCase()" @click="showAlertWarning()">{{ options.type }}</dd-button>
  </div>
</template>

<script setup>

const showAlertWarning = () => { modal.warning("Delete Unit", "Are you sure you want to delete this unit from the multistore? This action cannot be undone", "Yes, Delete", "Close", "Warning", true, "45%", true).then(() => console.log("accepted")).catch(() => console.log("rejected")) }
</script>


<style>
#app {
  padding: 0;
  margin: 0;
  overflow: hidden !important;
  overflow-y: hidden !important;
}
</style>