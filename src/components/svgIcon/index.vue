<template>
  <component
    v-bind="$attrs"
    :stroke="color"
    :style="{ width: `${props.size + 'px'}`, height: `${props.size + 'px'}` }"
    :is="myIcon"
    class="dd-svg"
  />
</template>

<script setup>
import {
  defineProps,
  defineAsyncComponent,
  ref,
  watchEffect,
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
    default: "#fff",
  },
});

const myIcon = ref(null);

watchEffect(async () => {
  const iconProp = ref(props.icon);

  myIcon.value = defineAsyncComponent(async () => {
    return await import(`../icons/${iconProp.value}.vue`);
  });
});
</script>

<style scoped>
.dd-svg {
  width: 20px;
  height: 20px;
}
</style>
