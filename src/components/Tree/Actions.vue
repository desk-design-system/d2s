<template>
  <div class="dd-flex dd-items-center dd-justify-center">
    <DdGroupButton>
      <dd-Button
      v-for="button in buttons"
      :key="button?.id"
      :color="button?.color"
      :size="button?.size"
      @click="selectButton(button)"
      class="!dd-h-6"
    >
      {{ button?.label }}
      <svgIcon
        class="dd-flex dd-items-center dd-justify-center"
        :icon="button?.icon ?? ''"
        :size="button?.size"
      />
    </dd-Button>
    </DdGroupButton>
  </div>
</template>

<script setup>
import DdButton from "../buttons/index.vue";
import DdGroupButton from "../groupButton/index.vue";
import svgIcon from "../svgIcon/index.vue"
const emit = defineEmits(["selected"]);
const props = defineProps({
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