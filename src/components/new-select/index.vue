<template>
  <div>
    <div
      class="dd-w-full dd-relative"
      v-on-click-outside="hideDropdown"
    >
      <label class="">
        <input
          ref="parent"
          :placeholder="placeholder ? queryModelValue : ''"
          :readonly="!filterable"
          v-remove-focus-if="!showDropdown"
          class="dd-w-full dd-h-8 dropdown-button dd-border-solid focus-visible:dd-outline-none dd-items-center dd-cursor-pointer dd-bg-white dd-border dd-border-gray-300 dd-rounded-md dd-shadow-sm dd-pl-3 dd-pr-10 dd-py-2 dd-text-left sm:dd-text-sm"
          @click="openDropdown"
          @input="searchQuery"
          :value="placeholder && filterable ? query : queryModelValue"
        />
        <span
          class="dd-absolute dd-inset-y-0 dd-right-0 dd-flex dd-items-center dd-pt-1.5 dd-pr-3 dd-pointer-events-none"
        >
          <DdSvgIcon
            icon="ChevronDown"
            size="12"
            class="dd-text-gray-400"
          />
        </span>
      </label>
    </div>
    <!-- Dropdown starts here -->
    <div
      ref="elementRef"    
      :style="floatingStyles"
    >
    <div v-if="showDropdown" 
    class="dd-bg-white dd-max-h-60 dd-rounded-md dd-py-1 dd-shadow-lg dd-text-base dd-ring-1 dd-ring-black dd-ring-opacity-5 dd-overflow-auto focus:dd-outline-none sm:dd-text-sm"
    >
      <ul ref="dropdownList"  v-if="showDropdown && filteredOptions">
        <li
          v-for="(item, index) in filteredOptions"
          :key="index"
          class="hover:dd-bg-teal-600 hover:!dd-text-white dd-cursor-pointer dd-select-none dd-py-2 dd-px-4"
          @click="selectItem(item)"
        >
          <div>{{ item[itemText] }}</div>
        </li>
      </ul>

      <!-- Add new Item Dropdown -->
      <ul class="dd-shadow-md dd-text-center dd-rounded-md add-new"
        v-if="query !== '' && filteredOptions.length === 0 && filterable">
        <li class="dd-p-4 dd-text-sm dd-text-left  dd-cursor-pointer dd-text"
          @click="addItem(query)">
          Add 
          <span class="dd-break-words dd-text-teal-700 dd-font-medium">{{ query }}</span>
          as new item.
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  size,
} from "@floating-ui/vue";
import { DdSvgIcon } from "../components";
import { useSelect } from "./composables"

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  rules: {
    type: [String, RegExp, Function],
    default: "",
  },
  showOnline: {
    type: Boolean,
    default: false,
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: () => "Select" + Math.floor(Math.random() * 5000),
  },
  itemText: {
    type: String,
    default: "name",
  },
  itemValue: {
    type: String,
    default: "value",
  },
  options: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  filterable: {
    type: Boolean,
    default: false,
  },
  collapseTags: {
    type: Boolean,
    default: false,
  },
  maxCollapseTags: {
    type: [Number, String],
    default: null,
  },
  addNewItem: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  showAvatar: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [Number, String, Array],
    default: null,
  },
  checkIcon: {
    type: String,
    validator: function (value) {
      return ["left", "right", "none"].indexOf(value) !== -1;
    },
    default: "right",
  },
});

const emits = defineEmits([
  "update:modelValue",
  "change"
])

const {
    showDropdown,
    query,
    queryModelValue,
    filteredOptions,
    placeholder,
    selectItem,
    addItem,
    hideDropdown,
    openDropdown,
    searchQuery
} = useSelect(props, emits, autoUpdate)


const parent = ref(null);
const elementRef = ref(null);

const { floatingStyles } = useFloating(parent, elementRef, {
  placement: "bottom",
  middleware: [offset(10), flip(), shift(), size()],
  whileElementsMounted(...args) {
    const cleanup = autoUpdate(...args, { animationFrame: true });
    console.log("Width");
    setPopperWidth();
    return cleanup;
  },
});

const setPopperWidth = () => {
  elementRef.value.style.width = parent.value.clientWidth + 'px'; 
};

onMounted(()=>{
  setPopperWidth()
})

</script>
