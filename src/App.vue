<template>
  <div class="container mx-auto">
    <div class="flex justify-between">
      <p class="dd-text-primary">Hello</p>
      <dd-button color="success"> kamil </dd-button>
      <div class="dd-flex">
        <span v-for="temp in sizes">
          <img-avatar type="default" :size="temp" srcLink="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"></img-avatar>
        </span>
      </div>
      <div class="dd-flex">
      <span v-for="temp in sizes">
        <img-avatar type="group" :size="temp" srcLink="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"></img-avatar>
      </span>
      </div>
      <div class="dd-flex">
      <span v-for="temp in sizes">
        <img-avatar type="text" :size="temp" title="Button"></img-avatar>
      </span>
    </div>
      <img src="./assets/test.svg" alt="">
      <img src="./assets/Add User.svg" alt="">
      <svgIcon2 />
    </div>
  </div>
</template>
<script>
import DdButton from "@/components/buttons/index.vue";
import ImgAvatar from "@/components/avatars/index.vue";

import svgIcon2 from "./components/icons/AlertIcon.vue"
export default {
  data() {
    return {
      sizes:["mini", "small", "medium", "large", "xLarge"]
    };
  },
  components: {
    DdButton,
    ImgAvatar,
    svgIcon2
  },
};
</script>
