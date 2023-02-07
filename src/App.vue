<template>
  <div class="container mx-auto">
    <div class="flex justify-between">
      <p class="dd-text-primary">Hello</p>
      <dd-button color="success"> kamil </dd-button>
      <div class="dd-flex">
        <span v-for="temp in sizes">
          <dd-avatar type="default" :size="temp" altName="User" srcLink="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"></dd-avatar>
        </span>
      </div>
      <div class="dd-flex">
      <span v-for="temp in sizes">
        <dd-avatar type="group" :size="temp" altName="User" title="Button" srcLink="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"></dd-avatar>
      </span>
      </div>
      <div class="dd-flex">
      <span v-for="temp in sizes">
        <dd-avatar type="text" :size="temp" title="Button"></dd-avatar>
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
import DdAvatar from "@/components/avatars/index.vue";

import svgIcon2 from "./components/icons/AlertIcon.vue"
export default {
  data() {
    return {
      sizes:["mini", "small", "medium", "large", "xLarge"]
    };
  },
  components: {
    DdButton,
    DdAvatar,
    svgIcon2
  },
};
</script>
