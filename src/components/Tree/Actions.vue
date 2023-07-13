<template>
  <div class="dd-flex dd-items-center dd-justify-center">
    <DdGroupButton>
      <dd-Button
      v-for="button in buttons"
      :key="button?.id"
      :color="button?.color"
      :size="button?.size"
      @click="selectButton(button, $event)"
      class="!dd-h-6"
      :disabled="disabled"
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
  open: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  }
});

const selectButton = (button, event) => {
  if(button.buttonType === "Create" && props.open == false) {
    emit("selected", button);
  } else {
    emit("selected", button);
    event.stopPropagation();
  }
};
</script>

<style>

</style>