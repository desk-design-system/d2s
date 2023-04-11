<template>
  <div class="dd-wrapper" :style="styles" >
<slot></slot>
  </div>
</template>

<script setup>
import { defineProps,computed, onBeforeMount, onMounted, ref, watch } from "vue"
const props = defineProps( {
  wrapperProperty:{
  type: String,
  default: 'height'
  },
  wrapperValue:{
  type: String,
  default: '200px'
  },
  
} )  
const styles = computed(() =>{
  const styleObj = {}
    styleObj[props.wrapperProperty] = `calc(100vh - ${props.wrapperValue})`
    return styleObj
})
</script>

<style lang="scss" scoped>

</style>