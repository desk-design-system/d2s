<template>
  <div class="dd-flow-root" v-bind="$attrs">
    <div class="dd-min-w-full dd-align-middle">
      <div :class="[
        noHeight
          ? ''
          : getCalculatedHeight,
        fixed || limit < 1 ? '' : 'fixedScroll',
        limit < 1 ? 'dd-overflow-y-hidden' : '',
      ]" ref="containerRef" @scroll="handleScroll">
        <!-- header with group button  -->
        <div
          class="dd-flex dd-items-center dd-justify-between !dd-w-full group_wrapper !dd-sticky !dd-top-0 !dd-bg-white !dd-z-[1000]" :class="[selectedId.length > 0 ? ' dd-border-b-[1px] dd-border-gray-300 dd-h-[40px]': '']">
          <div v-if="selectedId.length > 0 || !actionHeader" class="dd-flex dd-items-center dd-gap-2 dd-py-2 dd-pl-3 dd-pr-3 dd-text-left">
            <DdGroupButton :buttons="buttons">
              <dd-Button color="white" v-if="checkBoxProp" size="sm">
                <div class="dd-flex dd-items-center">
                  <dd-checkbox v-model="allSelected" @click="selectAllFields" :disabled="checkAllDisabled" :rows="rows"
                    @indeterminate="indeterminate" :allCheckboxesChecked="allCheckboxesChecked" />
                  <span class="dd-text-sm dd-font-medium dd-text-gray-700 dd-pl-2" :disabled="buttons.disabled">{{
                    selectedId.length }} Selected</span>
                </div>
              </dd-Button>
              <dd-Button color="white" :disabled="buttons.disabled" size="sm">
                <div class="dd-flex dd-items-center dd-gap-2">
                  <svgIcon color="white" icon="Printer" size="16" />
                  <span class="dd-text-sm dd-font-medium dd-text-gray-700">Print</span>
                </div>
              </dd-Button>
              <dd-Button color="white" :disabled="buttons.disabled" size="sm">
                <div class="dd-flex dd-items-center dd-gap-2">
                  <svgIcon color="white" icon="Printer" size="16" />
                  <span class="dd-text-sm dd-font-medium dd-text-gray-700">Print</span>
                </div>
              </dd-Button>
              <slot name="groupActions" />
            </DdGroupButton>
            <DdDropDown v-if="noDropdown" color="white" label="Actions" v-model="headerActions" :options="values"
              size="sm" />
            <slot name="customDropDown" />
          </div>
          <svgIcon class="!dd-text-gray-500 dd-mr-3" :class="[selectedId.length === 0 ? 'dd-hidden' : '']"
            :icon="selectedId.length > 0 ? 'Search' : 'none'" size="25" @click="openSearch" />

          <div class="dd-w-full dd-cursor-pointer" v-if="search">
            <dd-input type="text" v-model="queryInput" @change="searchQuery" class="focus-visible:!dd-border-none dd-relative"
              :icon="selectedId.length === 0 ? 'Search' : ''" Border="none" placeholder="Search Ticket" :size="selectedId.length > 0 ? 'lg' : 'xl'"
              :prefix="selectedId.length === 0 ? true : false" />
            <svgIcon icon="Close" size="12"
              class="dd-absolute dd-right-4 dd-text-gray-400 dd-top-4 hover:dd-text-gray-500" @click="closeSearch" />
          </div>
        </div>
        <slot name="actionHeader" />
        <table class="dd-border-0">
          <!-- tabel head  -->
          <thead class="!dd-sticky !dd-top-0 !dd-bg-white !dd-z-[1000]" :class="[limit > 1 ? 'dd-cursor-pointer' : '']"
            v-if="selectedId.length == 0 && !search">
            <tr class="dd-bg-white">
              <th class="dd-py-2 dd-pl-5 dd-text-left checkbox_wrapper !dd-leading-3 dd-h-[40px] table_head_row dd-sticky dd-top-0"
                v-if="checkBoxProp">
                <dd-checkbox v-model="allSelected" @click="selectAllFields" :disabled="checkAllDisabled || limit < 1" />
              </th>
              <slot name="thead" />
              <th v-for="col in columns" :key="col.value" :value="col" scope="col" v-show="col.checked"
                class="dd-py-2 dd-pl-3 dd-pr-3 dd-text-left dd-text-xs dd-font-medium dd-text-gray-500 !dd-leading-3 dd-h-[40px] table_head_row dd-sticky dd-top-0"
                :style="`min-width: ${col.size}px`" @mouseenter="handleMouseEnter(col)" @mouseleave="handleMouseLeave"
                @click="sortRows(col)">
                <div class="dd-flex dd-gap-2">
                  <span class="dd-text-xs">{{ col.title }}</span>
                  <svgIcon class="!dd-text-gray-500 dd-relative dd-top-[3px]" icon="Selector" size="10"
                    v-show="isHovered(col) && !limit < 1 && col.sortDirection === ''"
                    :disabled="col.disabled || limit < 1" />
                  <svgIcon class="!dd-text-gray-500 dd-relative dd-top-[3px]" icon="SelectorUp" size="10"
                    v-show="col.sortDirection === 'desc'" @click="sortRows(col)" />
                  <svgIcon class="!dd-text-gray-500 dd-relative dd-top-[3px]" icon="SelectorDown" size="10"
                    v-show="col.sortDirection === 'asc'" @click="sortRows(col)" />
                </div>
              </th>


              <th v-if="headRowActions" class="table_head_row dd-sticky dd-top-0">
                <div
                  class="dd-flex dd-items-center dd-justify-end dd-gap-4 dd-relative dd-right-5 !dd-z-[999] dd-bg-white dd-pl-2.5">
                  <svgIcon v-if="searchIcon" class="!dd-text-gray-500" icon="Search" size="20" @click="openSearch" />
                  <svgIcon ref="settingIcon" class="!dd-text-gray-500" :class="[setting ? 'rotated' : 'rotatedReverse']"
                    icon="Settings" size="20" @click="openSettingsBar" />
                </div>
                <!-- settings component  -->
                <transition name="setting">
                  <div v-if="setting" ref="settingElement"
                    class="dd-px-2 dd-pt-2 dd-w-[250px] dd-bg-white dd-container dd-my-[2.1rem] dd-absolute dd-right-4 dd-top-1 dd-shadow-xl dd-rounded-lg dd-border dd-border-gray-100"
                    style="z-index: 1100;">
                    <div class="dd-flex !dd-items-center dd-justify-between dd-gap-2 dd-font-sans"
                      v-for="(col, index) in columns" :key="index">
                      <div class="dd-flex dd-items-center dd-gap-3 dd-ml-2">
                        <dd-Checkbox v-model="col.checked" @click="setSetting(col.checked)" :disabled="col.disabled" />
                        <span class="dd-text-gray-700 dd-text-sm -dd-ml-1">
                          {{ col.title }}
                        </span>
                      </div>
                      <div class="dd-w-16 dd-mr-2">
                        <dd-input Right v-model="col.size" type="text" pattern="[0-9]*" :disabled="col.disabled"
                          class="focus-visible:!dd-border-none dd-my-1" size="xs" />
                      </div>
                    </div>
                    <div class="dd-flex dd-items-center dd-justify-end dd-gap-3 dd-my-2 dd-mr-2">
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
                </transition>
              </th>
              <slot name="headerActions" />
            </tr>
          </thead>
          <tbody class="dd-bg-white" v-if="displayedRows.length > 0" ref="parentRef">
            <template v-if="defaultRow">
              <tr v-for="(row, index) in displayedRows" :key="index"
                class="[&>*:nth-child(2)]:!dd-font-medium dd-relative dd-border-b dd-border-gray-300" :class="[
                  selectedId.includes(row.id)
                    ? '[&>*:nth-child(1)]:dd-bg-gray-100 [&>*:nth-child(2)]:dd-bg-gray-100  [&>*:last-child]:dd-bg-gray-100 dd-bg-gray-100'
                    : '',
                  row.disabled ? '[&>*:nth-child(1)]:dd-bg-gray-100 [&>*:nth-child(2)]:dd-bg-gray-100  [&>*:last-child]:dd-bg-gray-100  dd-bg-gray-100 dd-pointer-event-none' : '',
                ]" @mouseenter="handleMouseEnterActions(row)" @mouseleave="handleMouseLeaveActions">
                <td v-if="checkBoxProp" class="dd-py-2.5 dd-pl-5 dd-pr-1 dd-text-xs dd-font-medium dd-text-gray-700" @click.prevent="setChecked(row.id), stopScroll($event.target)">
                  <div
                    class="dd-w-full"
                    :class="[selectedId.includes(row.id) ? '[&>*:nth-child(1)]:after:!dd-border-l-[3px] [&>*:nth-child(1)]:after:!dd-border-t-gray-200 [&>*:nth-child(1)]:after:!dd-border-b-gray-200 [&>*:nth-child(1)]:after:!dd-border-teal-600 [&>*:nth-child(1)]:after:dd-left-0 [&>*:nth-child(1)]:after:dd-absolute [&>*:nth-child(1)]:after:dd-top-0 [&>*:nth-child(1)]:after:dd-bottom-0' : '']">
                    <div class="dd-h-full -dd-my-2.5">
                      <dd-checkbox :checked="selectedId && selectedId.includes(row.id) && !row.disabled" :value="row.id"
                      :disabled="row.disabled || checkAllDisabled" />
                    </div>
                  </div>
                </td>
                <slot name="td" />
                <td v-for="col in columns" :key="col.value" v-show="col.checked"
                  class="dd-whitespace-nowrap dd-py-2.5 dd-px-3 dd-text-sm dd-text-gray-500"
                  :class="[row.disabled || !checkBoxProp ? '' : 'dd-cursor-pointer']"
                  @click="row.disabled ? null : setChecked(row.id)" :style="`min-width: ${col.size}px`">
                  <slot name="row" :column="col" :row="row" :value="row[col.value]" :disabled="row.disabled">
                    {{ row[col.value] }}
                  </slot>
                </td>
                <!-- actions  -->
                <td class="dd-pl-9 dd-pr-9 dd-relative dd-min-w-[56px]" :style="`z-index: ${displayedRows.length - index} `"
                  :class="[row.disabled ? '!dd-pointer-event-none' : '']" @click.prevent="stopScroll($event.target)">
                  <div v-if="rowActions">
                    <DdGroupButton class="dd-absolute dd-top-1 dd-right-5 dd-z-10"
                      :class="[!(isActionHovered(row) || isMouseHoveredRow(row)) ? '!dd-p-0 dd-rounded-none !dd-border-none dd-ring-0 !dd-shadow-none' : '!dd-p-0']">
                      <dd-Button @click="editRow()" color="white" v-if="(isActionHovered(row) || isMouseHoveredRow(row))">
                        <svgIcon class="dd-mt-[5px] dd-m-auto dd-text-gray-500" color="white" icon="Pencil" size="16" />
                      </dd-Button>
                      <dd-Button @click="deleteRow()" color="white"
                        v-if="(isActionHovered(row) || isMouseHoveredRow(row))">
                        <svgIcon class="dd-mt-[5px] dd-m-auto dd-text-gray-500" color="white" icon="Trash" size="16" />
                      </dd-Button>
                      <dd-Button color="white" class="!dd-p-[0px]"
                        :class="[!(isActionHovered(row) || isMouseHoveredRow(row)) ? '!dd-p-0 dd-rounded-none !dd-border-none dd-ring-0 !dd-shadow-none !dd-bg-transparent' : '!dd-p-0']">
                        <DdDropDown color="white" class="dd-text-gray-700 !dd-w-[28px] !dd-h-[28px] [&>svg]:dd-pt-[2px]"
                          :class="[(isActionHovered(row) || isMouseHoveredRow(row)) ? '' : 'dd-rounded-none dd-border-none dd-ring-0 dd-bg-transparent [&>button]:!dd-shadow-none']"
                          type="icon" v-model="rowActionsIcons" :options="Actions" placement="right"
                          defaultIcon="DotHorizontal" :showIcon="showIcon" :disabled="row.disabled" />
                      </dd-Button>
                    </DdGroupButton>
                  </div>
                  <slot name="rowActions" />
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
      <div v-if="footer && limit > 1" class="dd-flex dd-items-center dd-justify-between dd-py-3 dd-px-3">
        <DdGroupButton :buttons="buttons">
          <dd-Button v-for="button in buttons" :key="button.id" :color="button.color" :size="button.size" :disabled="parseInt(button.label) > rows.length"
            @click="selectNumberOfRows(button)">
            <span class="dd-text-sm"
              :class="[parseInt(button.label) === limit ? '!dd-font-semibold dd-text-gray-600' : 'dd-font-normal dd-text-gray-500']">{{
                button.label }}</span>
            <svgIcon v-if="showIcon" color="white" :icon="button.icon" :size="size" />
          </dd-Button>
        </DdGroupButton>

        <dd-Button color="white" size="sm" v-model="selectedButton" :disable="disabled" @click="loadMore()">
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
import { computed, nextTick, onBeforeMount, onMounted, onUnmounted, reactive, ref, watch, watchEffect } from "vue";
import DdButton from "../buttons/index.vue";
import svgIcon from "../svgIcon/index.vue";
import DdCheckbox from "../checkbox/index.vue";
import DdGroupButton from "../groupButton/index.vue";
import DdDropDown from "../dropdown/index.vue";
import DdInput from "../input/index.vue";
const emits = defineEmits(["update:modelValue", "saveChanges", "resetData", "selectedRow", "NumberOfRow", "loadmore", "allCheckboxes", "searchQuery", "editRow", "deleteRow"]);
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
  noDropdown: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: "12",
  },
  selected: {
    type: String,
    default: "",
  },
  headerselectedActions: {
    type: String,
    default: "",
  },
  actionsIconSize: {
    type: String,
    default: "14",
  },
  tabelHeight: {
    type: String,
    default: "492"
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
  headRowActions: {
    type: Boolean,
    default: true,
  },
  searchIcon: {
    type: Boolean,
    default: true,
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
  const tableHeadCells = container.querySelectorAll('.fixedScroll th:nth-child(1)');
  const tableRowCells = container.querySelectorAll('.fixedScroll td:nth-child(1)');
  const tableCells2 = container.querySelectorAll('.fixedScroll td:nth-child(2)');
  const tableCells2Head = container.querySelectorAll('.fixedScroll th:nth-child(2)');
  const tableHeaderCell = container.querySelectorAll('.fixedScroll .checkbox_wrapper');
  const tableLastCell = container.querySelectorAll('.fixedScroll td:last-child');
  const tableLastHead = container.querySelectorAll('.fixedScroll th:last-child');

  tableHeaderCell.forEach((cell) => {
    if (container.scrollLeft > 1) {
      cell.classList.add('checkbox_cell_wrapper');
    } else if (container.scrollLeft < 1) {
      cell.classList.remove('checkbox_cell_wrapper');
    }
  });

  tableHeadCells.forEach((cell) => {
    if (container.scrollLeft > 1) {
      cell.classList.add('fixed_head_cell_one');
    } else if (container.scrollLeft < 1) {
      cell.classList.remove('fixed_head_cell_one');
    }
  });
  tableRowCells.forEach((cell) => {
    if (container.scrollLeft > 1) {
      cell.classList.add('fixed_cell_one');
    } else if (container.scrollLeft < 1) {
      cell.classList.remove('fixed_cell_one');
    }
  });

  tableCells2.forEach((cell) => {
    if (container.scrollLeft > 1) {
      cell.classList.add('fixed_cell_two');
    } else if (container.scrollLeft < 1) {
      cell.classList.remove('fixed_cell_two');
    }
  });

  tableCells2Head.forEach((cell) => {
    if (container.scrollLeft > 1) {
      cell.classList.add('fixed_cell_two_head');
    } else if (container.scrollLeft < 1) {
      cell.classList.remove('fixed_cell_two_head');
    }
  });

  tableLastCell.forEach((cell) => {
    const scrollValueFromRight = container.scrollWidth - container.clientWidth - container.scrollLeft;
    if (scrollValueFromRight > 1) {
      cell.classList.add('fixed_last_cell');
    } else if (scrollValueFromRight < 1) {
      cell.classList.remove('fixed_last_cell');
    }
  });

  tableLastHead.forEach((cell) => {
    const scrollValueFromRight = container.scrollWidth - container.clientWidth - container.scrollLeft;
    if (scrollValueFromRight > 1) {
      cell.classList.add('fixed_last_cell_head');
    } else if (scrollValueFromRight < 1) {
      cell.classList.remove('fixed_last_cell_head');
    }
  });

};

const stopScroll = (event) => {
  const container = containerRef.value;
  const firstChild = container.querySelectorAll('.fixedScroll td:nth-child(1)');
  if(firstChild && Array.from(firstChild).includes(event)) {
    container.classList.remove('fixedScroll')
    setTimeout(() => {
      container.classList.add('fixedScroll')
    }, 500);
  }
}

const parentRef = ref(null);
// const isSticky = ref(false);

// onMounted(() => {
//   window.addEventListener('scroll', handleScrolltop);
// });

// onUnmounted(() => {
//   window.removeEventListener('scroll', handleScrolltop);
// });

// function handleScrolltop() {
//   const distanceFromTop = parentRef.value.getBoundingClientRect().top;
//   isSticky.value = distanceFromTop <= -1;
//   setTimeout(() => {
//     handleScroll();
//   }, 50);
// }

const getCalculatedHeight = computed(() => {
  if (!props.noHeight) {
    if(limit.value < 13) {
      return 'dd-max-h-[calc(100vh-200px)] dd-min-h-[calc(100vh-200px)]'
    } else {
      return 'dd-max-h-[calc(100vh-200px)] dd-min-h-[calc(100vh-200px)]'
    }
  }
})

const allSelected = ref(false);
const selectedId = ref([]);
const search = ref(false);
const hoveredColumn = ref(null);
const hoveredRow = ref(null);
const isMouseHovered = ref(false);
const selectedButton = ref(null);
const setting = ref(false);
const limit = ref(0);
const rowLimit = ref([]);
const queryInput = ref("");
const savedData = ref({});
const settingElement = ref(null);
const settingIcon = ref(null);
const allCheckboxesChecked = ref(false);
const headerActions = ref(props.headerselectedActions);
const rowActionsIcons = ref(props.selected);

const selectNumberOfRows = (button) => {
  selectedButton.value = button;
  limit.value = parseInt(button.label);
  emits("NumberOfRow", button);
  setTimeout(() => {
    handleScroll();
  }, 50)
};

// const scrollToRight = () => {
//   const scrollByAmount = 1;
//   const container = containerRef.value;
//   container.scrollLeft += scrollByAmount;
// };


// const scrollToLeft = () => {
//   const scrollByAmount = 1;
//   const container = containerRef.value;
//   container.scrollLeft -= scrollByAmount;
// };
//dom click
const handleDomClick = (event) => {
  if (settingElement.value && !settingElement.value.contains(event.target) && !settingIcon.value.$el.contains(event.target)) {
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
      handleScroll();
    }, 0)
  }
};
onMounted(() => {
  handleScroll();
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
      if (!row.disabled === true) {
        selectedId.value.push(row.id);
        emits("allCheckboxes", row);
      }
    });
  } else {
    search.value = false;
    selectedId.value = [];
    setTimeout(() => {
      handleScroll();
    }, 0)
  }
  allSelected.value = !allSelected.value;
};

const setChecked = (id) => {
  if (props.checkBoxProp === false || props.checkAllDisabled === true) return;
  const index = selectedId.value.indexOf(id);
  if (index === -1) {
    selectedId.value.push(id);
    setting.value = false;
    emits('selectedRow', id);
  } else {
    search.value = false;
    selectedId.value.splice(index, 1);
    setTimeout(() => {
      handleScroll();
    }, 0)
  }
};

const indeterminate = () => {
  if (selectedId.value.length === limit.value) {
    return allSelected.value = true;
  }
};

watchEffect(() => {
  if (selectedId.value.length !== limit.value) {
    return allSelected.value = false;
  }
})

const setSetting = (col) => {
  col = !col;
};

const saveSettings = () => {
  savedData.value = props.columns;
  savedData.value.forEach((item) => {
    emits("saveChanges", item);
  });
  setTimeout(() => {
    handleScroll();
  }, 0);
};

const resetDefault = () => {
  savedData.value = props.columns;
  savedData.value.forEach((item) => {
    item.checked = true;
    emits("resetData", item);
  });
  setTimeout(() => {
    handleScroll();
  }, 0);
};

const openSearch = () => {
  if (limit.value < 1) return;
  search.value = true;
  setting.value = false;
};
const closeSearch = () => {
  search.value = false;
  setTimeout(() => {
    handleScroll();
  }, 0)
};

const isHovered = (col) => {
  return hoveredColumn.value === col;
};
const isActionHovered = (rows) => {
  if (rows.disabled === true) return;
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
  if (rowData.disabled === true) return;
  return hoveredRow.value === rowData;
};

const sortRows = (col) => {
  props.columns.forEach((column) => {
    if (column !== col) {
      column.sortDirection = '';
    }
  });

  if (col.sortDirection === '') {
    col.sortDirection = 'asc';
    props.rows.sort((a, b) => {
      const aValue = a[col.value];
      const bValue = b[col.value];
      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
      return 0;
    });
  } else if (col.sortDirection === 'asc') {
    col.sortDirection = 'desc';
    props.rows.sort((a, b) => {
      const aValue = a[col.value];
      const bValue = b[col.value];
      if (aValue < bValue) return 1;
      if (aValue > bValue) return -1;
      return 0;
    });
  } else if (col.sortDirection === 'desc') {
    col.sortDirection = '';
    props.rows.sort((a, b) => a.index - b.index);
  }
};

const openSettingsBar = () => {
  if (limit.value < 1) return;
  setting.value = !setting.value;
};

const editRow = () => {
  emits("editRow")
}
const deleteRow = () => {
  emits("deleteRow")
}
</script>

<style scoped>
.table_head_row::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #D1D5DB !important;
}

.selected-label {
  font-weight: bold !important;
}

/* fixed column */
tr:hover td:not(:first-child),
tr:hover>td:first-child {
  background-color: #f3f4f6;
}

.fixedScroll {
  overflow-y: scroll;
}
.fixedScroll::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.fixedScroll::-webkit-scrollbar-thumb {
  background-color: transparent;
}

.checkbox_cell_wrapper {
  position: sticky;
  left: 0;
  background: #fff;
  z-index: 999;
}

.fixed_head_cell_one {
  position: sticky;
  left: 0;
  background: #fff;
  z-index: 999 !important;
}

.fixed_cell_one {
  position: sticky;
  left: 0;
  background: #fff;
  z-index: 10 !important;
}

.fixed_cell_two {
  position: sticky;
  left: 40px;
  background: #ffff;
  margin: 0 !important;
  box-shadow: -2px 0 2px -2px rgba(0, 0, 0, 0.2) inset;
}

.fixed_cell_two_head {
  position: sticky;
  left: 40px;
  background: #ffff;
  margin: 0 !important;
  z-index: 999 !important;
}

.fixed_last_cell {
  position: sticky;
  right: 0;
  background: #ffff;
  margin: 0 !important;
  box-shadow: 2px 0 2px -2px rgba(0, 0, 0, 0.12) inset;
}

.fixed_last_cell_head {
  position: sticky;
  right: 0;
  background: #ffff;
}

.fixedScroll .group_wrapper:nth-child(1) {
  position: sticky;
  left: 0;
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

/* .custom-scrollbar {
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
} */
</style>
