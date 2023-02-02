<template>
  <div class="container mx-auto">
    <div class="flex justify-between">
      <p class="dd-text-primary">Hello</p>
      <dd-button color="success"> kamil </dd-button>
      <img src="./assets/test.svg" alt="">
      <img src="./assets/Add User.svg" alt="">
      <svgIcon2 />
    </div>
  </div>
</template>
<script>
import DdButton from "@/components/buttons/index.vue";
import svgIcon2 from "./components/icons/AlertIcon.vue"
export default {
  data() {
    return {};
  },
  components: {
    DdButton,
    svgIcon2
  },
};
</script>
