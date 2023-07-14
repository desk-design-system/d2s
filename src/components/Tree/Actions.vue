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
        <div ref="svgRef" class="svgContainer" :value="button.id">
          <svgIcon
            class="dd-flex dd-items-center dd-justify-center"
            :icon="button?.icon ?? ''"
            :size="button?.size"
          />
        </div>
      </dd-Button>
      <slot name="dropdown">
        <dd-button v-if="dropdownProp" color="white" class="!dd-p-[2px] !dd-h-6" @click="setDropDownEvent($event)">
          <dd-dropdown
            color="transparent"
            class="[&>svg]:dd-relative dd-top-[2px]"
            v-model="treeActions"
            :options="values"
            type="icon"
            placement="right"
            defaultIcon="DotHorizontal"
            :showIcon="showIcon"
            :disabled="disabled"
            @command="getDropdownVal"
            @click="assignToNode($event)"
          />
        </dd-button>
      </slot>
    </DdGroupButton>
  </div>
</template>

<script setup>
import DdButton from "../buttons/index.vue";
import DdGroupButton from "../groupButton/index.vue";
import DdDropdown from "../dropdown/index.vue";
import svgIcon from "../svgIcon/index.vue";
import { ref } from "vue";
const emits = defineEmits(["selected", "dropdownValue", "setDropDownEvent", "assignToNode"]);
const props = defineProps({
  buttons: {
    type: Array,
    required: true,
  },
  open: {
    type: Boolean,
    default: false,
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
  values: {
    type: Array,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  isSelected: {
    type: Boolean,
    default: false,
  },
  dropdownProp: {
    type: Boolean,
    default: false,
  }
});

const treeActions = ref("");

const selectButton = (button, event) => {
  if (button.buttonType === "Create" && props.open == false) {
    emits("selected", button);
  } else {
    emits("selected", button);
    event.stopPropagation();
  }
};
const getDropdownVal = (data) => {
  emits("dropdownValue", data);
};
const setDropDownEvent = (event) => {
  emits('setDropDownEvent', event)
}
const assignToNode = (event) => {
  event.stopPropagation();
  emits('assignToNode')
}
</script>

<style scoped>
</style>