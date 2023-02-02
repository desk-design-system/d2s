<template>
  <div class="container mx-auto">
    <div class="flex justify-between">
      <dd-button color="success"> kamil </dd-button>
      <span v-for="temp in sizes">
        <img-avatar :size="temp" srcLink="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"></img-avatar>
      </span>
    </div>
  </div>
</template>
<script>
import DdButton from "@/components/buttons/index.vue";
import ImgAvatar from "@/components/avatars/index.vue";

export default {
  data() {
    return {
      sizes:["mini", "small", "medium", "large", "xLarge"]
    };
  },
  components: {
    DdButton,
    ImgAvatar
  },
};
</script>
