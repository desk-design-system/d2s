<script>
import RDAlertMessage from "./notificationUI.vue";
import { render } from "vue";
import { removeElement } from "./helpers";

export default {
  components: {
    RDAlertMessage,
  },
  mounted() {
    console.log("setting alert")
    this.showAlert = true;
  },
  methods: {
    dismiss() {
      setTimeout(() => {
        render(null, this.$el);
        removeElement(this.$el);
      }, 2000);
    },
  },
  data() {
    return {
      showAlert: false,
    };
  },
};
</script>

<template>
  <RDAlertMessage
    ref="root"
    v-model:show="showAlert"
    @removeElement="dismiss"
  />
</template>
