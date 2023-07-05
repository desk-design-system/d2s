<template>
  <div class="dd-flex dd-items-center dd-justify-center">
    <DdGroupButton class="dd-p-1">
      <dd-Button
      v-for="button in buttons"
      :key="button?.id"
      :color="button?.color"
      :size="button?.size"
      @click="selectButton(button)"
    >
      {{ button?.label }}
      <svgIcon
        v-if="showIcon"
        class="dd-flex dd-items-center dd-justify-center"
        :icon="button?.icon"
        :size="button?.size"
      />
    </dd-Button>
    </DdGroupButton>
  </div>
</template>

<script setup>
import { DdButton } from "../components";
import DdGroupButton from "../groupButton/index.vue";
import svgIcon from "../svgIcon/index.vue"
const emit = defineEmits(["selected"]);
const props = defineProps({
  showIcon: {
    type: Boolean,
    default: false,
  },
  buttons: {
    type: Array,
    required: true,
  },
});

const selectButton = (button) => {
  emit("selected", button);
};
</script>

<style>

</style>