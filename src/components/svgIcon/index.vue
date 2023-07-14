<template>
    <component v-bind="$attrs" :stroke="'#d12026'" :style="{'width': `${props.size + 'px'}`, 'height': `${props.size + 'px'}`}" :is="currentIcon" class="dd-svg" />
</template>

<script setup>
import { defineProps, ref,computed,watchEffect,shallowRef } from "vue";

const props = defineProps({
  icon:{
    type: String,
    required: true,
  },
  size:{
    type: String,
    default: "20"
  },
  color:{
    type: String,
    default: "#374151"
  }
  })
  const currentIcon = shallowRef('')
  watchEffect(() => {
  import(`../icons/${props.icon}.vue`).then((val) => {
    currentIcon.value = val.default;
  }).catch((error) => {
    if(error) {
      return;
    }
  });
});
</script>

<style  scoped>
.dd-svg{
  width: 20px;
  height: 20px;
}
</style>