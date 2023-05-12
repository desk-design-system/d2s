<template>
  <div class="dd-inline-flex dd-shadow-sm">
    <dd-Button
      v-for="(button, index) in buttons"
      :key="button.id"
      :color="button.color"
      :size="button.size"
      :style="getButtonStyle(index)"
      @click="selectButton(button)"
      class="dd-rounded-none"
    >
      {{ button.label }}
      <svgIcon
        v-if="showIcon"
        class="-dd-mb-[2px] dd-m-auto"
        color="white"
        :icon="button.icon"
        size="12"
      />
    </dd-Button>
  </div>
</template>
    
    <script setup>
import DdButton from "../buttons/index.vue";
import svgIcon from "../svgIcon/index.vue";

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

const emit = defineEmits(["selected"]);

const selectButton = (button) => {
  emit("selected", button);
};

const getButtonStyle = (index) => {
  if (index === 0) {
    return "border-radius: 8px 0 0 8px;";
  } else if (index === props.buttons.length - 1) {
    return "border-radius: 0 8px 8px 0;";
  } else {
    return "";
  }
};
</script>