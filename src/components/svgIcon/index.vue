<template>
    <component v-bind="$attrs" :style="{'width': props.width, 'height': props.height}" :is="currentIcon" class="dd-svg" />
</template>

<script setup>
import { defineProps, ref,computed,watchEffect,shallowRef } from "vue";

const props = defineProps({
  icon:{
    type: String,
    required: true,
  },
  width:{
    type: String,
    default: "20"
  },
  height:{
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
  });
});
</script>

<style  scoped>
.dd-svg{
  width: 20px;
  height: 20px;
}
</style>