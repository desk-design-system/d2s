<template>
  <div v-if="actionsPanel">
    <DdGroupButton
      class="dd-absolute dd-top-1 dd-right-5 dd-z-10"
      :class="[
        !isActionHovered(row)
          ? '!dd-p-0 dd-rounded-none !dd-border-none dd-ring-0 !dd-shadow-none'
          : '!dd-p-0',
      ]"
      ref="groupBtnRef"
    >
      <slot name="customActions" />
      <dd-Button
        @click="editRow()"
        color="white"
        size="base"
        v-if="isActionHovered(row)"
      >
        <svgIcon
          class="dd-mt-[5px] dd-m-auto dd-text-gray-500"
          color="white"
          icon="Pencil"
          size="16"
        />
      </dd-Button>
      <dd-Button
        @click="deleteRow()"
        color="white"
        size="base"
        v-if="isActionHovered(row)"
      >
        <svgIcon
          class="dd-mt-[5px] dd-m-auto dd-text-gray-500"
          color="white"
          icon="Trash"
          size="16"
        />
      </dd-Button>
      <dd-Button
        color="white"
        class="!dd-p-[0px]"
        size="base"
        :class="[
          !isActionHovered(row)
            ? '!dd-p-0 dd-rounded-none !dd-border-none dd-ring-0 !dd-shadow-none !dd-bg-transparent'
            : '!dd-px-1',
        ]"
      >
        <DdDropDown
          color="white"
          class="dd-text-gray-700 !dd-w-[28px] !dd-h-[28px] [&>svg]:dd-pt-[2px]"
          :class="[
            isActionHovered(row)
              ? ''
              : 'dd-rounded-none dd-border-none dd-ring-0 dd-bg-transparent [&>button]:!dd-shadow-none',
              rowDisabled ? '!dd-bg-gray-50' : 'dd-bg-white'
          ]"
          type="icon"
          v-model="rowActionsIcons"
          :options="values"
          placement="right"
          defaultIcon="DotHorizontal"
          :showIcon="showIcon"
          :disabled="rowDisabled"
        />
      </dd-Button>
    </DdGroupButton>
  </div>
</template>

<script setup>
import DdButton from "../buttons/index.vue";
import svgIcon from "../svgIcon/index.vue";
import DdGroupButton from "../groupButton/index.vue";
import DdDropDown from "../dropdown/index.vue";
import { ref } from "vue";
const emits = defineEmits(["editRow", "deleteRow"]);
const props = defineProps({
  selected: {
    type: String,
    default: "",
  },
  values: {
    type: Array,
    required: true,
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
  rowDisabled: {
    type: Boolean,
    default: false,
  },
  actionsPanel: {
    type: Boolean,
    default: false,
  },
  row: {
    tyep: Object,
    default: {},
  },
  hoveredRow: {
    tyep: Object,
    default: {},
  },
});

const rowActionsIcons = ref(props.selected);
const isActionHovered = (rows) => {
  if (rows.disabled === true) return;
  return props.hoveredRow === rows;
};

const editRow = () => {
  emits("editRow");
};
const deleteRow = () => {
  emits("deleteRow");
};
</script>

<style>
</style>