<template>
  <div v-bind="$attrs" ref="componentRef">
    <label v-if="label" class="dd-block dd-text-sm dd-font-medium dd-text-gray-700 dd-mb-1">{{ label }} <span
        v-if="isRequired" class="dd-text-red-500">*</span></label>
    <Combobox as="div" v-bind="$attrs" v-model="inputModelValue">
      <div class="dd-mt-1 dd-relative">
        <ComboboxInput :class="[
          hasError
            ? ' !dd-border-red-600 focus:!dd-border-red-600 dd-focus:!dd-ring-red-600'
            : 'dd-border-gray-300 focus:dd-ring-teal-600 focus:!dd-border-teal-600',
          inputSize,
        ]" :readonly="!filterable"
          class="dd-border-solid focus-visible:dd-outline-none dd-flex dd-items-center dd-cursor-pointer dd-bg-white dd-relative dd-w-full dd-border dd-rounded-md dd-shadow-sm dd-pl-3 dd-pr-10 dd-py-2 dd-text-left dd-h-9 sm:dd-text-sm"
          @change="searchQuery($event.target.value)" :displayValue="(val) => findItem(val)" @click="setDropDown()">
          <ddAvatar v-if="selectedValue && showAvatar" size="mini" class="dd-mr-3"
            :srcLink="selectedValue[props.defaultProps.avatar]" />
          <span v-if="selectedValue" class="dd-block dd-truncate dd-text-gray-500 dd-text-sm">{{
            selectedValue[props.defaultProps.name] }}</span>
          <span v-else class="dd-text-sm dd-text-gray-400 dd-capitalize">{{
            props.placeholder
          }}</span>
          <span class="dd-absolute dd-inset-y-0 dd-right-0 dd-flex dd-items-center dd-pr-2 dd-pointer-events-none">
            <ChevronDownIcon class="dd-h-5 dd-w-5 dd-text-gray-400" aria-hidden="true" />
          </span>
        </ComboboxInput>

        <ComboboxButton
          class="dd-absolute dd-inset-y-0 dd-right-2 dd-flex dd-items-center dd-pr-2 dd-bg-white dd-border-solid dd-h-5 dd-top-[7px] dd-transform"
          @click="rotateIcon" :class="{ 'rotate-icon': isIconRotated }">
          <svgIcon icon="ChevronDown" size="12" aria-hidden="true" />
        </ComboboxButton>
        <TransitionRoot leave-active-class="dd-transition dd-ease-in dd-duration-100" leave-from-class="dd-opacity-100"
          leave-to-class="dd-opacity-0">
          <ComboboxOptions v-if="options.length > 0" static :class="listClass"
            class="dd-absolute dd-z-10 dd-mt-1 dd-w-full dd-bg-white dd-shadow-lg dd-max-h-60 dd-rounded-md dd-py-1 dd-text-base dd-ring-1 dd-ring-black dd-ring-opacity-5 dd-overflow-auto focus:dd-outline-none sm:dd-text-sm">
            <ComboboxOption as="template" v-for="item in options" :key="item[props.defaultProps.id]"
              :value="item[props.defaultProps.value]" v-slot="{ active, selected }">
              <slot name="items" :isSelected="selected ??
                item[props.defaultProps.id] === selected[props.defaultProps.id]
                " :item="item">
                <li :class="[
                  active ? 'dd-text-white dd-bg-teal-600' : 'dd-text-gray-900',
                  'dd-cursor-pointer dd-select-none dd-relative dd-py-2',
                  props.checkIcon == 'left'
                    ? ' dd-pl-8 dd-pr-4'
                    : ' dd-pl-3 dd-pr-9',
                ]">
                  <div class="dd-flex dd-items-center">
                    <span v-show="showOnline && props.checkIcon != 'left'" class="dd-mr-3" :class="[
                      selected ? 'dd-bg-green-400' : 'dd-bg-gray-200',
                      'dd-inline-block dd-h-2 dd-w-2 dd-flex-shrink-0 dd-rounded-full',
                    ]" aria-hidden="true" />
                    <ddAvatar size="mini" class="dd-mr-3" v-if="showAvatar" :srcLink="item[props.defaultProps.avatar]" />
                    <span :class="[
                      selected ? 'dd-font-semibold' : 'dd-font-normal',
                      'dd-block dd-truncate',
                    ]">
                      {{ item[props.defaultProps.name] }}
                    </span>
                  </div>
                  <span v-if="selected && props.checkIcon != 'none'" :class="[
                    active ? 'dd-text-white' : 'dd-text-teal-600',
                    `dd-absolute dd-inset-y-0  dd-flex dd-items-center  ${props.checkIcon == 'left'
                      ? 'dd-left-1 pl-1.5'
                      : 'dd-right-0 dd-pr-4'
                    }`,
                  ]">
                    <CheckIcon class="dd-h-5 dd-w-5" aria-hidden="true" />
                  </span>
                </li>
              </slot>
            </ComboboxOption>
          </ComboboxOptions>
          <ComboboxOptions class="dd-shadow-md dd-text-center dd-rounded-md" v-if="queries !== '' && options.length === 0"
            v-model="queries">
            <ComboboxOption
              class="dd-p-4 dd-text-sm dd-text-left dd-text-gray-700 dd-cursor-pointer dd-font-medium hover:dd-bg-teal-600 hover:dd-text-white hover:dd-rounded-lg"
              @click="addQuery(queries)">
              Add <span class="!dd-font-bold">{{ queries }}</span>  as new
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
        <span v-if="errorMessage" class="dd-text-xs dd-text-red-600 dd-capitalize">{{ errorMessage }}</span>
      </div>
    </Combobox>
  </div>
</template>
<script setup>
import { useField } from "vee-validate";
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
import {
  Switch,
  Combobox,
  ListboxButton,
  ListboxLabel,
  ComboboxOption,
  ComboboxOptions,
  ComboboxInput,
  ComboboxButton,
} from "@headlessui/vue";
import { CheckIcon, ChevronDownIcon } from "@heroicons/vue/solid";
import ddAvatar from "../avatars/index.vue";
import svgIcon from "../svgIcon/index.vue";
const emits = defineEmits([
  "update:modelValue",
  "change",
  "searchQuery",
  "addQuery",
]);
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
  name: {
    type: String,
    default: () => "Select" + Math.floor(Math.random() * 5000),
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
  value: {
    type: String,
    default: null,
  },
  listClass: {
    type: String,
    default: null,
  },
  showAvatar: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
  srcLink: {
    type: [String],
    default: null,
  },
  size: {
    type: String,
    validator: function (value) {
      // The value must match one of these strings
      return ["xs", "sm", "base", "lg", "xl"].indexOf(value) !== -1;
    },
    default: "base",
  },
  checkIcon: {
    type: String,
    validator: function (value) {
      // The value must match one of these strings
      return ["left", "right", "none"].indexOf(value) !== -1;
    },
    default: "right",
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

const inputModelValue = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emits("update:modelValue", val);
    emits("change", val);
  },
});

const componentRef = ref(null);
const handleOutsideDropdown = (event) => {
  if (event.target !== componentRef.value && event.composedPath().includes(componentRef.value)) return;
  showDropdown.value = false;
}

onMounted(() => { window.addEventListener('click', handleOutsideDropdown) })
onBeforeUnmount(() => {window.removeEventListener('click', handleOutsideDropdown)})

const inputSize = computed(() => {
  return {
    "dd-h-6 !dd-text-xs": props.size === "xs",
    "dd-h-7  ": props.size === "sm",
    "dd-h-8 ": props.size === "base",
    "dd-h-9 ": props.size === "lg",
    "dd-h-10 ": props.size === "xl",
  };
});
const selectedValue = computed(() => {
  showDropdown.value = false
  return props.options.find((predicate) => {
    return predicate[props.defaultProps.value] == inputModelValue.value;
  });
});

// const getRandomInt = (max = 1000) => {
//   return Math.floor(Math.random() * max);
// }

const isIconRotated = ref(false);
const rotateIcon = () => {
  isIconRotated.value = !isIconRotated.value;
};
const showDropdown = ref(false);
const queries = ref("");
const searchQuery = (val) => {
  queries.value = val;
  emits("searchQuery", val);
};

const setDropDown = () => {
  showDropdown.value = !showDropdown.value;
  isIconRotated.value = !isIconRotated.value;
};

const addQuery = (query) => {
  queries.value = query
  isIconRotated.value = false;
  showDropdown.value = false;
  emits("addQuery", query);
};


const findItem = (val) => {
  const item = props.options.find((predicate) =>
    predicate[props.defaultProps.value] == val
  )
  return item?.[props.defaultProps.name] ?? queries.value
}

const getRules = () => {
  if (props.rules instanceof RegExp) {
    return { regex: props.rules };
  }
  return props.rules;
};

const { errorMessage, value, handleChange } = useField(props.name, getRules(), {
  label: props.name,
});

watch(
  () => value,
  (newValue) => {
    inputModelValue.value = newValue;
  }
);

const hasError = computed(() => {
  if (errorMessage.value) {
    return true;
  } else {
    return false;
  }
});
</script>

<style scoped>
.rotate-icon svg {
  transform: rotate(180deg);
}
</style>
