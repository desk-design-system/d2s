<template>
  <component
    v-bind="$attrs"
    :stroke="'#d12026'"
    :style="{ width: `${props.size + 'px'}`, height: `${props.size + 'px'}` }"
    :is="myIcon"
    class="dd-svg"
  />
</template>

<script setup>
import {
  defineProps,
  defineAsyncComponent,
} from "vue";

const props = defineProps({
  icon: {
    type: String,
    required: true,
    default: "Home",
  },
  size: {
    type: String,
    default: "20",
  },
  color: {
    type: String,
    default: "#374151",
  },
});

const myIcon = defineAsyncComponent(async () => {
  return await import(`../icons/${props.icon}.vue`);
});
</script>

<style scoped>
.dd-svg {
  width: 20px;
  height: 20px;
}
</style>
