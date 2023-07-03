<template>
  <div v-if="actionsPanel">
    <DdGroupButton
      class="dd-absolute dd-top-1.5 dd-right-5 dd-z-10"
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
        class="!dd-px-1 dd-w-[28px] dd-h-[28px]"
        :class="[selectedId.includes(row.id) ? '!dd-bg-gray-50' : '']"
        v-if="isActionHovered(row)"
      >
        <svgIcon
          class="dd-flex dd-items-center dd-justify-center dd-text-gray-500"
          color="white"
          icon="Pencil"
          size="20"
        />
      </dd-Button>
      <dd-Button
        @click="deleteRow()"
        color="white"
        size="base"
        class="!dd-px-1 dd-w-[28px] dd-h-[28px]"
        :class="[selectedId.includes(row.id) ? '!dd-bg-gray-50' : '']"
        v-if="isActionHovered(row)"
      >
        <svgIcon
          class="dd-flex dd-items-center dd-justify-center dd-text-gray-500"
          color="white"
          icon="Trash"
          size="20"
        />
      </dd-Button>
      <dd-Button
        color="white"
        class="!dd-p-0 !dd-h-7 !dd-w-7"
        size="base"
        :class="[
          !isActionHovered(row)
            ? '!dd-p-0 dd-rounded-none !dd-border-none dd-ring-0 !dd-shadow-none !dd-bg-transparent'
            : '!dd-px-0 !dd-bg-white',
        ]"
      >
        <DdDropDown
          color="transparent"
          class="dd-text-gray-700 dd-top-[3px] dd-left-[1px]"
          :class="[
            isActionHovered(row)
              ? ''
              : 'dd-rounded-none dd-border-none dd-ring-0 dd-bg-transparent [&>button]:!dd-shadow-none',
              rowDisabled ? '!dd-bg-gray-50' : 'dd-bg-white',
              selectedId.includes(row.id) ? '!dd-bg-gray-50' : ''
          ]"
          type="icon"
          v-model="rowActionsIcons"
          :options="values"
          placement="right"
          defaultIcon="DotHorizontal"
          size="base"
          :showIcon="showIcon"
          :disabled="rowDisabled"
          @command="getDropdownVal"
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
const emits = defineEmits(["editRow", "deleteRow", "dropdownValue"]);
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
  selectedId: {
    type: Array,
    default: () => ({
      name: "1",
    }),
  }
});

const rowActionsIcons = ref(props.selected);
const isActionHovered = (rows) => {
  if (rows.disabled === true) return;
  return props.hoveredRow === rows;
};

const getDropdownVal = (data) => {
  emits("dropdownValue", data);
}

const editRow = () => {
  emits("editRow", props.row);
};
const deleteRow = () => {
  emits("deleteRow", props.row);
};
</script>

<style>
</style>