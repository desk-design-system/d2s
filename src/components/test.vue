<template>
  <div class="dd-px-1" :class="props.class">
    <Listbox
      as="div"
      :multiple="props.multiple"
      :modelValue="selected"
      :disabled="isDisabled"
      @update:modelValue="listChange"
    >
      <ListboxLabel
        class="dd-block dd-text-sm dd-font-medium dd-text-gray-700 dd-mb-1"
        v-if="props.showTitle"
      >
        <span class="dd-block dd-truncate"
          >{{ props.title }}
          <span v-if="props.isRequired" class="dd-text-red-500">*</span>
        </span>
      </ListboxLabel>
      <div class="dd-relative">
        <ListboxButton
          :class="{
            'dd-cursor-not-allowed': isDisabled,
            'dd-cursor-pointer': !isDisabled,
          }"
          class="dd-bg-white dd-h-9 dd-relative dd-w-full dd-border dd-border-gray-300 dd-rounded-md dd-shadow-sm dd-pl-3 dd-pr-10 dd-text-left focus:dd-outline-none focus:dd-ring-1 focus:dd-ring-teal-500 focus:dd-border-teal-500 sm:dd-text-sm"
        >
          <RDTooltipVue
            v-if="props.showTooltip"
            :tool-tip-position="props.tooltipInfo.position"
            :tool-tip-text="props.tooltipInfo.message"
          >
            <template #content>
              <span class="dd-block dd-truncate"
                >{{
                  props.multiple
                    ? selectedNames || props.title
                    : selected?.title || `${props.placeholder || props.inputID}`
                }}
              </span>
            </template>
          </RDTooltipVue>
          <span
            class="dd-block dd-truncate dd-flex dd-justify-between dd-items-center"
            v-if="!props.showTooltip"
            :class="props.isDisabled ? 'dd-text-gray-300' : ''"
            >{{
              props.multiple
                ? selectedNames || props.title
                : selected?.title || `${props.placeholder || props.inputID}`
            }}

            <p
              class="dd-text-xs dd-bg-gray-100 dd-text-gray-500 dd-px-2 dd-py-1 dd-rounded-full"
              v-if="
                props.multiple &&
                selectedNames != 'All Stores' &&
                selectedCount > 1
              "
            >
              {{ selectedCount }}
            </p>
          </span>
          <span
            v-if="customIcon"
            class="dd-absolute dd-inset-y-0 dd-right-0 dd-flex dd-items-center dd-pr-2 dd-pointer-events-none">
             {{ customIcon }}
          </span>
          <span
            v-else
            class="dd-absolute dd-inset-y-0 dd-right-0 dd-flex dd-items-center dd-pr-2 dd-pointer-events-none"
          >
            <chevron-down-icon
              class="dd-h-5 dd-w-5 dd-text-gray-400"
              aria-hidden="true"
            />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="dd-transition dd-ease-in dd-duration-100"
          leave-from-class="dd-opacity-100"
          leave-to-class="dd-opacity-0"
        >
          <ListboxOptions
            class="dd-absolute dd-z-10 dd-mt-1 dd-w-full dd-bg-white dd-shadow-lg dd-max-h-60 dd-rounded-md dd-py-1 dd-text-base dd-ring-1 dd-ring-black dd-ring-opacity-5 dd-overflow-auto focus:dd-outline-none sm:dd-text-sm"
            :class="props.isPagination ? '-dd-top-[163px]' : 'dd-top-[37px]'"
          >
            <ListboxOption
              as="template"
              v-for="option in props.options"
              :key="option.value"
              :value="option"
              v-slot="{ active, selected }"
            >
              <li
                :class="[
                  active ? 'dd-text-white dd-bg-teal-600' : 'dd-text-gray-900',
                  'dd-cursor-default dd-select-none dd-relative dd-py-2 dd-pl-3 dd-pr-9',
                  showCheckbox ? 'dd-flex' : '',
                ]"
              >
                <span class="dd-mr-2" v-if="showCheckbox">
                  <input
                    id="checkbox-item-2"
                    type="checkbox"
                    value=""
                    aria-hidden="true"
                    class="w-4 h-4"
                  />
                </span>
                <span
                  :class="[
                    selected ? 'dd-font-semibold' : 'dd-font-normal',
                    'dd-block dd-truncate',
                  ]"
                >
                  {{ option.title }}
                </span>

                <span
                  v-if="selected && !showCheckbox"
                  :class="[
                    active ? 'dd-text-white' : 'dd-text-teal-600',
                    'dd-absolute dd-inset-y-0 dd-right-0 dd-flex dd-items-center dd-pr-4',
                  ]"
                >
                  <check-icon class="dd-h-5 dd-w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
            <ListboxOption
              v-if="props.addNewButton"
              @click="addNewFunction"
              as="template"
              value="addNew"
              v-slot="{ active, selected }"
            >
              <li
                :class="[
                  active ? 'dd-text-white dd-bg-teal-600' : 'dd-text-gray-900',
                  'dd-cursor-default dd-select-none dd-relative dd-py-2 dd-pl-3 dd-pr-9',
                ]"
              >
                <span
                  :class="[
                    selected ? 'dd-font-semibold' : 'dd-font-normal',
                    'dd-block dd-truncate',
                  ]"
                >
                  Add New {{ props.title }}
                  <span v-if="props.isRequired" class="dd-text-red-500">*</span>
                </span>

                <span
                  v-if="selected"
                  :class="[
                    active ? 'dd-text-white' : 'dd-text-teal-600',
                    'dd-absolute dd-inset-y-0 dd-right-0 dd-flex dd-items-center dd-pr-4',
                  ]"
                >
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
    <p class="dd-text-red-500 dd-text-sm" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>
<script setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import RDTooltipVue from "./tooltip/index.vue";
import { useField } from "vee-validate";
import { watchEffect, computed, ref } from "vue";

const props = defineProps({
  isRequired: {
    type: Boolean,
    default: false,
  },
  showTooltip: {
    type: Boolean,
    default: false,
  },
  tooltipInfo: {
    type: Object,
    default: {
      position: "top",
      message: "This is default message Enter Props On Selecbox",
    },
  },
  selectedAll: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    default: () => [],
  },
  required: {
    type: Boolean,
    default: false,
  },
  isPagination: {
    type: Boolean, 
    default: false
  },
  inputID: {
    type: String,
    default: "selectid",
  },
  class: String,
  innerClass: String,
  value: [String, Number, Array],
  fieldName: String,
  showTitle: {
    type: Boolean,
    default: true,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  addNewButton: {
    type: Boolean,
    default: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  customIcon: {
    type: String,
    default: "",
  },
  showCheckbox: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:value", "clickedAddNew"]);
const addNewFunction = (e) => {
  handleChange(undefined);
  e.stopPropagation();
  if (props.addNewButton) return emit("clickedAddNew");
};

let {
  value: selected,
  errorMessage,
  handleChange,
} = useField(props.fieldName, null, {
  validateOnMount: false,
  initialValue: undefined,
});

watchEffect(() => {
  if (props.multiple) {
    const selectedOptions = Array.isArray(props.value)
      ? props.options.filter((row) => props.value.includes(row.value))
      : [];
    handleChange(selectedOptions);
  } else {
    const selectedOption = props.options.find(
      (row) => row.value == props.value
    );
    handleChange(selectedOption);
  }
});

const listChange = (event) => {
  if (props.multiple) {
    const previousAllSelectIndex = selected.value.findIndex(
      (row) => row.value == 0
    );
    const newAllSelectIndex = event.findIndex((row) => row.value == 0);
    if (
      previousAllSelectIndex == -1 &&
      newAllSelectIndex >= 0 &&
      props.selectedAll
    ) {
      handleChange(props.options);
    } else if (
      newAllSelectIndex == -1 &&
      previousAllSelectIndex >= 0 &&
      props.selectedAll
    ) {
      handleChange([]);
    } else if (newAllSelectIndex != -1 && previousAllSelectIndex != -1) {
      handleChange(event.filter((row) => row.value != 0));
    } else {
      handleChange(event);
    }

    emit(
      "update:value",
      selected.value?.flatMap((row) => row.value)
    );
  } else {
    selected.value = event.value ? event.value : event;
    emit("update:value", selected.value);
  }
};

const selectedCount = computed(() => {
  if (!props.multiple) {
    return 0;
  }
  return selected.value.filter((row) => row.value != 0).length;
});

const selectedNames = computed(() => {
  return `${
    selected.value.length > 0
      ? selected.value[0]?.title !== "All Stores"
        ? JSON.parse(JSON.stringify(selected.value)).length > 1
          ? "Stores"
          : selected.value[0]?.title
        : JSON.parse(JSON.stringify(selected.value)).length > 1
        ? "Stores"
        : ""
      : props.title
  }`;
});
</script>