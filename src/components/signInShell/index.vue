<template>
  <div class="dd-bg-gray-100 dd-h-screen">
    <div class="dd-flex dd-flex-col dd-justify-center dd-align-center ">
      <div class=" dd-w-[215px] dd-mx-auto dd-mt-20 sm:dd-mb-18 dd-mb-24">
        <img src="../../assets/rdlogo.png" />
      </div>
      <div v-if="showMessage">
        <ddCard elevation="sm" :x="14" :y="14" :className="[`dd-w-[${width}px]`, 'dd-mx-auto']">
        <slot></slot>
      </ddCard>
      </div>
      <div class="" v-else>
        <p class="dd-text-center dd-text-3xl dd-text-gray-700 dd-font-bold">{{title}}</p>
      <ddCard elevation="sm" :x="10" :y="8" :className="[`dd-w-[350px]`, ' dd-mt-6 dd-mx-auto']">
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
  width: {
    type: Number,
    default: 450,
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