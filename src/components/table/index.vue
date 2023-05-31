<template>
  <div class="dd-flow-root" v-bind="$attrs">
    <div class="dd-min-w-full dd-align-middle">
      <div :class="[
        noHeight
          ? ''
          : 'dd-max-h-[calc(100vh-80px)] dd-min-h-[calc(100vh-80px)]',
        fixed || limit < 1 ? 'dd-overflow-scroll' : 'fixedScroll',
        limit < 1 ? 'dd-overflow-y-hidden' : 'custom-scrollbar'
      ]" ref="containerRef" @scroll="handleScroll">
        <!-- header with group button  -->
        <div
          class="dd-flex dd-items-center dd-justify-between !dd-w-full dd-sticky dd-top-0 dd-z-[1000] dd-bg-white group_wrapper">
          <transition name="group" v-if="actionHeader">
            <div class="dd-flex dd-items-center dd-gap-2 dd-py-1.5 dd-pl-2 dd-pr-3 dd-text-left"
              v-if="selectedId.length > 0">
              <DdGroupButton :buttons="buttons">
                <dd-Button color="white" v-if="checkBoxProp">
                  <div class="dd-flex dd-items-center">
                    <dd-checkbox v-model="allSelected" :checked="selectedId.length > 0" @click="selectAllFields"
                      :disabled="checkAllDisabled" />
                    <span class="dd-text-sm dd-font-medium dd-text-gray-700" :disabled="buttons.disabled">{{
                      selectedId.length }} Selected</span>
                  </div>
                </dd-Button>
                <dd-Button color="white" :disabled="buttons.disabled">
                  <div class="dd-flex dd-items-center dd-gap-2">
                    <svgIcon color="white" icon="Printer" :size="size" />
                    <span class="dd-text-sm dd-font-medium dd-text-gray-700">Print</span>
                  </div>
                </dd-Button>
                <dd-Button color="white" :disabled="buttons.disabled">
                  <div class="dd-flex dd-items-center dd-gap-2">
                    <svgIcon color="white" icon="Printer" :size="size" />
                    <span class="dd-text-sm dd-font-medium dd-text-gray-700">Print</span>
                  </div>
                </dd-Button>
                <slot name="groupActions" />
              </DdGroupButton>
              <DdDropDown v-if="noDropdown" color="white" label="Actions" v-model="selectedActions" :options="values" />
              <slot name="customDropDown" />
            </div>
          </transition>
          <svgIcon class="!dd-text-gray-500 dd-mr-3" :class="[selectedId.length === 0 || search ? 'dd-hidden' : '']"
            :icon="selectedId.length > 0 ? 'none' : 'Search'" :size="size" @click="openSearch" />

          <transition name="input">
            <div class="dd-w-full dd-relative dd-cursor-pointer" v-if="search">
              <dd-input type="text" v-model="queryInput" @change="searchQuery" class="focus-visible:!dd-border-none"
                :class="selectedId.length > 0
                  ? 'dd-border dd-border-gray-300 dd-rounded'
                  : ''
                  " :icon="selectedId.length === 0 ? 'Search' : ''" :size="selectedId.length > 0 ? 'sm' : 'lg'"
                Border="none" placeholder="Search Ticket" :prefix="selectedId.length === 0 ? true : false" />
              <svgIcon icon="Close" :size="size" class="dd-absolute dd-right-4 dd-text-gray-400 hover:dd-text-gray-500"
                :class="selectedId.length > 0 ? 'dd-top-[8px]' : 'dd-top-4'" @click="closeSearch" />
            </div>
          </transition>
        </div>
        <slot name="actionHeader" />
        <table class="dd-min-w-full dd-overflow-y-auto dd-divide-y dd-divide-gray-300">
          <!-- tabel head  -->
          <transition name="thead">
            <thead class="!dd-sticky !dd-top-0 dd-bg-white dd-z-[1000]" :class="[limit > 1 ? 'dd-cursor-pointer' : '']"
              v-if="selectedId.length == 0 && !search">
              <tr>
                <div class="dd-py-3.5 dd-pl-4 dd-pr-3 dd-text-left checkbox_wrapper" v-if="checkBoxProp">
                  <dd-checkbox v-model="allSelected" @click="selectAllFields" :disabled="checkAllDisabled || limit < 1" />
                </div>
                <slot name="thead" />
                <th v-for="col in columns" :key="col.value" :value="col" scope="col" v-show="col.checked"
                  class="dd-py-3.5 dd-pl-4 dd-pr-3 dd-text-left dd-text-xs dd-font-medium dd-text-gray-700 dd-sticky"
                  :style="`min-width: ${col.size}px`" @mouseenter="handleMouseEnter(col)" @mouseleave="handleMouseLeave">
                  <div class="dd-flex dd-gap-2 dd-pl-2" style="inline-size: max-content">
                    <span>{{ col.title }}</span>
                    <svgIcon class="!dd-text-gray-500" icon="Selector" :size="size"
                      v-show="isHovered(col) && !col.disabled && !limit < 1" @click="sortRows(col)"
                      :disabled="col.disabled || limit < 1" />
                  </div>
                </th>
                <th>
                  <div class="dd-flex dd-items-center dd-justify-end dd-mx-10 dd-gap-4">
                    <svgIcon class="!dd-text-gray-500" icon="Search" :size="size" @click="openSearch" />
                    <svgIcon ref="settingElement" class="!dd-text-gray-500"
                      :class="[setting ? 'rotated' : 'rotatedReverse']" icon="Settings" :size="size"
                      @click="openSettingsBar" />
                  </div>
                  <!-- settings component  -->
                  <transition name="setting">
                    <div v-if="setting"
                      class="dd-p-2 dd-w-[250px] dd-bg-white dd-container dd-my-[2.1rem] dd-absolute dd-right-4 dd-top-1 dd-shadow-xl dd-rounded-lg dd-border dd-border-gray-100"
                      style="z-index: 1100;">
                      <div class="dd-flex dd-items-center dd-justify-between dd-gap-2 dd-font-sans"
                        v-for="(col, index) in columns" :key="index">
                        <div class="dd-flex dd-items-center dd-gap-0">
                          <dd-Checkbox v-model="col.checked" @click="setSetting(col.checked)" :disabled="col.disabled" />
                          <span class="dd-text-gray-700 dd-text-sm -dd-ml-1">
                            {{ col.title }}
                          </span>
                        </div>
                        <div class="dd-w-16">
                          <dd-input v-model="col.size" type="number" :disabled="col.disabled"
                            class="focus-visible:!dd-border-none dd-mb-2" size="xs" />
                        </div>
                      </div>
                      <div class="dd-border-t dd-border-gray-300">
                        <div class="dd-flex dd-items-center dd-justify-end dd-gap-3 dd-mt-2">
                          <dd-Button color="white"
                            class="[&>button]: dd-ring-0 [&>button]: dd-ring-transparent [&>button]: dd-shadow-none [&>button]: dd-text-teal-600 [&>button]: hover:dd-bg-white [&>button]: dd-font-light dd-cursor-pointer"
                            @click="resetDefault()">
                            Reset
                          </dd-Button>
                          <dd-Button class="[&>button]: dd-font-normal" @click="saveSettings()">
                            Save
                          </dd-Button>
                        </div>
                      </div>
                    </div>
                  </transition>
                </th>
              </tr>
            </thead>
          </transition>
          <tbody class="dd-divide-y dd-divide-gray-200 [&>*:last-child]:!dd-border-b" v-if="displayedRows.length > 0">
            <template v-if="defaultRow">
              <tr v-for="(row, index) in displayedRows" :key="index" class="[&>*:nth-child(2)]:!dd-font-medium" :class="[
                selectedId.includes(row.id)
                  ? '[&>*:nth-child(1)]:dd-bg-gray-100 [&>*:nth-child(2)]:dd-bg-gray-100  [&>*:last-child]:dd-bg-gray-100 dd-bg-gray-100 !dd-border-l-2 !dd-border-t-gray-200 !dd-border-b-gray-200 !dd-border-teal-600'
                  : '',
                row.disabled ? 'dd-bg-gray-100 dd-pointer-event-none' : '',
              ]">
                <td v-if="checkBoxProp"
                  class="dd-py-3.5 dd-px-3 dd-text-left dd-text-xs dd-font-medium dd-text-gray-700 sm:dd-pl-4 dd-w-[56px]">
                  <dd-checkbox :checked="selectedId && selectedId.includes(row.id)" :value="row.id"
                    @click="setChecked(row.id)" :disabled="row.disabled" />
                </td>
                <slot name="td" />
                <!-- :class="row.status === 'Repaired and Collected' ? 'dd-text-blue-300' : 'dd-text-teal-400'" -->
                <td v-for="col in columns" :key="col.value" v-show="col.checked"
                  class="dd-whitespace-nowrap dd-py-4 dd-pl-4 dd-pr-3 dd-text-sm dd-text-gray-500 sm:dd-pl-6"
                  :class="[checkBoxProp ? 'dd-cursor-pointer' : '']" @click="checkBoxProp ? setChecked(row.id) : null">
                  <slot name="row" :column="col" :row="row" :value="row[col.value]" :disabled="row.disabled">
                    {{ row[col.value] }}
                  </slot>
                </td>
                <!-- actions  -->
                <td class="dd-w-full dd-pl-12 dd-pr-8 dd-relative" :style="`z-index: ${displayedRows.length - index} `"
                  :class="[row.disabled ? '!dd-pointer-event-none' : '']">
                  <div v-if="rowActions" class="dd-flex dd-items-center dd-justify-center">
                    <DdGroupButton class="dd-absolute dd-top-2.5 dd-right-9 dd-z-10"
                      @mouseenter="handleMouseEnterActions(row)" @mouseleave="handleMouseLeaveActions"
                      :class="[!(isActionHovered(row) || isMouseHoveredRow(row)) ? '!dd-p-0 dd-rounded-none !dd-border-none dd-ring-0 !dd-shadow-none' : '!dd-p-0']">
                      <dd-Button color="white" v-if="(isActionHovered(row) || isMouseHoveredRow(row))">
                        <svgIcon class="-dd-mb-[2px] dd-m-auto" color="white" icon="Pencil" :size="size" />
                      </dd-Button>
                      <dd-Button color="white" v-if="(isActionHovered(row) || isMouseHoveredRow(row))">
                        <svgIcon class="-dd-mb-[2px] dd-m-auto" color="white" icon="Trash" :size="size" />
                      </dd-Button>
                      <dd-Button color="white" class="!dd-px-1"
                        :class="[!(isActionHovered(row) || isMouseHoveredRow(row)) ? '!dd-p-0 dd-rounded-none !dd-border-none dd-ring-0 !dd-shadow-none !dd-bg-transparent' : '!dd-p-0']">
                        <DdDropDown color="white" class="dd-text-gray-700"
                          :class="[(isActionHovered(row) || isMouseHoveredRow(row)) ? '' : 'dd-rounded-none dd-border-none dd-ring-0 dd-bg-transparent [&>button]:!dd-shadow-none [&>button]:!dd-bg-none']"
                          type="icon" v-model="selected" :options="Actions" :size="actionsIconSize" placement="right"
                          defaultIcon="DotHorizontal" :showIcon="showIcon" />
                      </dd-Button>
                    </DdGroupButton>
                    <slot name="rowActions" />
                  </div>
                </td>
              </tr>
            </template>
            <slot name="tbody" />
          </tbody>
          <tbody v-else>
            <tr>
              <td :colspan="columns.length + 2" class="dd-h-full">
                <slot name="noData" />
                <div class="dd-flex dd-items-center dd-justify-center dd-min-h-[60vh]" v-if="emptyState">
                  <svgIcon size="140" color="white" icon="noData" />
                </div>
              </td>
            </tr>
          </tbody>


        </table>
      </div>
      <div v-if="footer && limit > 1" class="dd-flex dd-items-center dd-justify-between dd-mt-10 dd-z-10">
        <DdGroupButton :buttons="buttons">
          <dd-Button v-for="button in buttons" :key="button.id" :color="button.color" :size="button.size"
            @click="selectNumberOfRows(button)">
            <span>{{ button.label }}</span>
            <svgIcon v-if="showIcon" class="-dd-mb-[2px] dd-m-auto" color="white" :icon="button.icon" :size="size" />
          </dd-Button>
        </DdGroupButton>

        <dd-Button color="white" v-model="selectedButton" :disable="disabled" @click="loadMore()">
          Load More
        </dd-Button>
      </div>
      <div v-else>
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, onMounted, ref, watch } from "vue";
import DdButton from "../buttons/index.vue";
import svgIcon from "../svgIcon/index.vue";
import DdCheckbox from "../checkbox/index.vue";
import DdGroupButton from "../groupButton/index.vue";
import DdDropDown from "../dropdown/index.vue";
import DdInput from "../input/index.vue";
const emits = defineEmits(["update:modelValue", "saveChanges", "resetData", "selectedRow", "NumberOfRow", "loadmore", "allCheckboxes", "searchQuery"]);
const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
  rows: {
    type: Array,
    required: true,
  },
  buttons: {
    type: Array,
    required: true,
  },
  Actions: {
    type: Array,
    required: true,
  },
  values: {
    type: Array,
    required: true,
  },
  noHeight: {
    type: Boolean,
    default: false,
  },
  defaultRow: {
    type: Boolean,
    default: false,
  },
  fixed: {
    type: Boolean,
    default: false,
  },
  rowActions: {
    type: Boolean,
    default: true,
  },
  checkBoxProp: {
    type: Boolean,
    default: true,
  },
  actionHeader: {
    type: Boolean,
    default: true,
  },
  checkAllDisabled: {
    type: Boolean,
    default: false,
  },
  disableDropdown: {
    type: Boolean,
    default: true,
  },
  noDropdown: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: "14",
  },
  actionsIconSize: {
    type: String,
    default: "14",
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
  emptyState: {
    type: Boolean,
    default: false,
  },
  footer: {
    type: Boolean,
    default: false,
  },
  defaultProps: {
    type: Object,
    default: () => ({
      name: "name",
      value: "value",
      avatar: "avatar",
    }),
  },
});


const containerRef = ref(null);

const handleScroll = () => {
  const container = containerRef.value;
  const tableCells1 = container.querySelectorAll('.fixedScroll th:nth-child(1), .fixedScroll td:nth-child(1)');
  const tableCells2 = container.querySelectorAll('.fixedScroll th:nth-child(2), .fixedScroll td:nth-child(2)');
  const tableHeaderCell = container.querySelectorAll('.fixedScroll .checkbox_wrapper');
  const tableLastCell = container.querySelectorAll('.fixedScroll td:last-child, .fixedScroll th:last-child');

  tableHeaderCell.forEach((cell) => {
    if (container.scrollLeft > 100) {
      cell.classList.add('checkbox_cell_wrapper');
    } else if (container.scrollLeft < 100) {
      cell.classList.remove('checkbox_cell_wrapper');
    }
  });

  tableCells1.forEach((cell) => {
    if (container.scrollLeft > 100) {
      cell.classList.add('fixed_cell_one');
    } else if (container.scrollLeft < 100) {
      cell.classList.remove('fixed_cell_one');
    }
  });

  tableCells2.forEach((cell) => {
    if (container.scrollLeft > 100) {
      cell.classList.add('fixed_cell_two');
    } else if (container.scrollLeft < 100) {
      cell.classList.remove('fixed_cell_two');
    }
  });

  tableLastCell.forEach((cell) => {
    const scrollValueFromRight = container.scrollWidth - container.clientWidth - container.scrollLeft;
    if (scrollValueFromRight > 100) {
      cell.classList.add('fixed_last_cell');
    } else if (scrollValueFromRight < 100) {
      cell.classList.remove('fixed_last_cell');
    }
  });

};

const allSelected = ref(false);
const selectedId = ref([]);
const selectedActions = ref("");
const search = ref(false);
const hoveredColumn = ref(null);
const hoveredRow = ref(null);
const sortDirection = ref("asc");
const isMouseHovered = ref(false);
const selectedButton = ref(null);
const selected = ref("");
const setting = ref(false);
const limit = ref(0);
const rowLimit = ref([]);
const queryInput = ref("");
const savedData = ref({});
const settingElement = ref(null);

const selectNumberOfRows = (button) => {
  selectedButton.value = button;
  limit.value = parseInt(button.label);
  emits("NumberOfRow", button);
  setTimeout(() => {
    scrollToBottom();
  }, 50)
};

const scrollToBottom = () => {
  const scrollByAmount = 1;
  const container = containerRef.value;
  container.scrollLeft += scrollByAmount;
};


const handleDomClick = (event) => {
  if (settingElement.value && !settingElement.value.$el.contains(event.target)) {
    setting.value = false;
  }
};

const displayedRows = computed(() => {
  if (limit.value && props.rows) {
    rowLimit.value = props.rows.slice(0, limit.value);
    return rowLimit.value;
  } else {
    return props.rows;
  }
});

const searchQuery = (val) => {
  queryInput.value = val
  emits("searchQuery", val);
}

const loadMore = () => {
  if (limit.value >= props.rows.length) return false;
  if (selectedButton.value) {
    const additionalRowsCount = parseInt(selectedButton.value.label);
    limit.value += additionalRowsCount;
    emits("loadmore", limit.value);
    setTimeout(() => {
      scrollToBottom();
    }, 50)
  }
};
onMounted(() => {
  handleScroll();
  scrollToBottom();
  document.addEventListener('click', handleDomClick);
});
onBeforeMount(() => {
  limit.value = props.rows.length;
  document.addEventListener('click', handleDomClick);
})

watch(
  () => selectedId.value,
  (newValue) => {
    selectedId.value = newValue;
  }
);

const disabled = computed(() => {
  if (limit.value >= props.rows.length) {
    return (disabled.value = true);
  }
});

const selectAllFields = () => {
  if (allSelected.value === false) {
    selectedId.value = [];
    setting.value = false;
    rowLimit.value.forEach((row) => {
      selectedId.value.push(row.id);
      emits("allCheckboxes", row);
    });
  } else {
    search.value = false;
    selectedId.value = [];
    setTimeout(() => {
      scrollToBottom();
    }, 50)
  }
  allSelected.value = !allSelected.value;
};

const setChecked = (id) => {
  const index = selectedId.value.indexOf(id);
  if (index === -1) {
    selectedId.value.push(id);
    setting.value = false;
    emits('selectedRow', id);
  } else {
    search.value = false;
    selectedId.value.splice(index, 1);
    setTimeout(() => {
      scrollToBottom();
    }, 50)
  }
};

const setSetting = (col) => {
  col = !col;
};

const saveSettings = () => {
  savedData.value = props.columns;
  savedData.value.forEach((item) => {
    emits("saveChanges", item);
  });
};

const resetDefault = () => {
  savedData.value = props.columns;
  savedData.value.forEach((item) => {
    item.checked = true;
    item.size = "";
    emits("resetData", item);
  });
};

const openSearch = () => {
  if (limit.value < 1) return;
  search.value = true;
  setting.value = false;
};
const closeSearch = () => {
  search.value = false;
  setTimeout(() => {
    scrollToBottom();
  }, 50)
};

const isHovered = (col) => {
  return hoveredColumn.value === col;
};
const isActionHovered = (rows) => {
  return hoveredRow.value === rows;
};
const handleMouseEnter = (col) => {
  hoveredColumn.value = col;
};
const handleMouseLeave = () => {
  hoveredColumn.value = null;
};

const handleMouseEnterActions = (rowData) => {
  hoveredRow.value = rowData;
  isMouseHovered.value = true;
};

const handleMouseLeaveActions = () => {
  hoveredRow.value = null;
  isMouseHovered.value = false;
};
const isMouseHoveredRow = (rowData) => {
  return hoveredRow.value === rowData;
};

const sortRows = (col) => {
  props.rows.sort((a, b) => {
    const aValue = a[col.value];
    const bValue = b[col.value];

    if (aValue < bValue) return sortDirection.value === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection.value === "asc" ? 1 : -1;
    return 0;
  });
};

const openSettingsBar = () => {
  if (limit.value < 1) return;
  setting.value = !setting.value;
};
</script>

<style scoped>
/* fixed column */
tr:hover td:not(:first-child),
tr:hover>td:first-child {
  background-color: #f3f4f6;
}

.fixedScroll {
  overflow: scroll;
}

.checkbox_cell_wrapper {
  position: sticky;
  left: 0;
  background: #fff;
  z-index: 999;
}

.fixed_cell_one {
  position: sticky;
  left: 0;
  background: #fff;
  z-index: 999;
}

.fixed_cell_two {
  position: sticky;
  left: 56px;
  background: #ffff;
  margin: 0 !important;
  box-shadow: -3px 0 3px -2px rgba(0, 0, 0, 0.2) inset;
  z-index: 999;
}

.fixed_last_cell {
  position: sticky;
  right: 0;
  background: #ffff;
  box-shadow: 3px 0 3px -1px rgba(0, 0, 0, 0.12) inset;
}

.fixedScroll .group_wrapper:nth-child(1) {
  position: sticky;
  left: 0;
}

/* input animation  */
.input-enter-active,
.input-leave-active {
  transition: all 0.5s;
}

.input-enter-from,
.input-leave-to {
  transform: translateX(100%);
  transition-delay: 0;
}

.input-enter-to,
.input-leave-from {
  transform: translateX(0);
  transition-delay: 0.5s;
}

.thead-enter-active,
.thead-leave-active {
  transition: all 0.5s;
}

/* table head animation  */
.thead-enter-from,
.thead-leave-to {
  transform: translateX(100%);
  transition-delay: 0s;
}

.thead-enter-to,
.thead-leave-from {
  transform: translateX(0);
  transition-delay: 0.5s;
}

/* group animation  */
.group-enter-active,
.group-leave-active {
  transition: all 0.5s ease-out;
}

.group-enter-from,
.group-leave-to {
  transform: translateX(-100%);
}

.group-enter-to,
.group-leave-from {
  transform: translateX(0);
  transition-delay: 0.5s;
}

/* icon rotation  */
.rotated {
  transform: rotate(-180deg);
  transition: transform 0.5s ease;
}

.rotatedReverse {
  transform: rotate(0deg);
  transition: transform 0.5s ease;
}

/* setting animation  */

.setting-enter-active {
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

.setting-enter-from {
  opacity: 0;
  transition: all 0.5s ease-out;
}

.setting-leave-to {
  opacity: 0;
  transition: all 0.5s ease;
}

.setting-leave-from {
  opacity: 1;
  transition: all 0.5s ease-out;
}

/* scroll bar  */

.custom-scrollbar {
  scrollbar-width: 2px;
  scrollbar-color: #f1f1f1 !important;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background-color: #fff;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:horizontal {
  width: 3px;
  /* Adjust the width as desired */
}
</style>
