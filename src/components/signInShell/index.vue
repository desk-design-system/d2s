<template>
  <div class="dd-bg-gray-100 dd-h-screen">
    <div class="dd-flex dd-flex-col dd-justify-center dd-align-center ">
      <div class="dd-text-center dd-w-[215px] dd-mx-auto dd-mt-20 dd-mb-24">
        <img src="../../assets/rdlogo.png" />
      </div>
      <div v-if="showMessage">
        <ddCard elevation="sm" :x="14" :y="14" class="dd-w-[620px] dd-mx-auto">
          hello
        <slot></slot>
      </ddCard>
      </div>
      <div v-else>
        <p class="dd-text-3xl dd-text-gray-700 dd-font-bold dd-mx-auto dd-mb-6">{{title}}</p>
      <ddCard elevation="sm" :x="10" :y="8" class="dd-w-[450px] dd-mx-auto">
        <slot></slot>
      </ddCard>
      </div>
  </div>
  </div>
</template>

<script setup>
import ddCard from "../card/index.vue"
const props = defineProps( {
  title: {
    type: String,
    default: "",
  },
  icon:{
    type: Boolean,
    default: false,
  },
  showMessage:{
    type: Boolean,
    default: false,
  }
})
</script>

<style lang="scss" scoped>

</style>