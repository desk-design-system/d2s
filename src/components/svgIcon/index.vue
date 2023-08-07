<template>
  <Suspense>
    <template #default>
      <component v-bind="$attrs" :stroke="'#d12026'" :style="{'width': `${props.size + 'px'}`, 'height': `${props.size + 'px'}`}" :is="myIcon" class="dd-svg" />
    </template>
    <template #fallback>
     <div></div>
    </template>
   </Suspense>
</template>

<script setup>
import { defineProps, ref,computed,watchEffect,shallowRef, defineAsyncComponent } from "vue";

const props = defineProps({
  icon:{
    type: String,
    required: true,
    default:"Home"
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
//   const currentIcon = shallowRef('')
//   watchEffect(() => {
//   import(`../icons/${props.icon}.vue`).then((val) => {
//     currentIcon.value = val.default;
//   }).catch((error) => {
//     if(error) {
//       return;
//     }
//   });
// });

const myIcon = defineAsyncComponent(async () => {
  try {
    return await import(`../icons/${props.icon}.vue`);
  } catch (e) {
    console.error(e);
  }
});


</script>

<style  scoped>
.dd-svg{
  width: 20px;
  height: 20px;
}
</style>