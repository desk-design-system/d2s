<script>
import RDMessageBox from "./MessageBoxUi.vue";
import { render } from "vue";
import { removeElement } from "../notification/helpers.js";

export default {
  components: {
    RDMessageBox,
  },
  mounted() {
    this.showAlert = true;
    this.saveTitle="";
    this.closeTitle = "",
    this.id = ""
  },
  methods: {
    dismiss() {
      render(null, this.$el);
      removeElement(this.$el);
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
  <RDMessageBox v-model="showAlert" :saveTitle="saveTitle" :closeTitle="closeTitle" type="Error" :id="id" @removeElement="dismiss" />
</template>
