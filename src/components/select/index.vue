<template>
  <div v-bind="$attrs" ref="componentRef">
    <!---- label ---->
    <slot name="label">
      <label v-if="label" class="dd-block dd-text-sm dd-font-medium dd-text-gray-700 dd-mb-1">{{ label }} <span
          v-if="isRequired" class="dd-text-red-500">*</span></label>
    </slot>

    <div
      class="dd-relative dd-w-full">
      <input
        ref="dropdownInput"
        :class="[
          hasError
            ? ' !dd-border-red-600 focus:!dd-border-red-600 dd-focus:!dd-ring-red-600'
            : 'dd-border-gray-300 focus:dd-ring-teal-600 focus:!dd-border-teal-600',
          inputSize,
          disabled ? 'dd-pointer-events-none dd-cursor-not-allowed' : ''
        ]"
        :readonly="!filterable"
        :placeholder="queryPlaceholder ? queryPlaceholder : props.placeholder"
        :disabled="disabled"
        class="select-input dropdown-button dd-border-solid focus-visible:dd-outline-none 
          dd-flex dd-items-center dd-cursor-pointer dd-bg-white dd-relative dd-w-full 
          dd-border dd-rounded-md dd-shadow-sm dd-pl-3 dd-pr-10 dd-py-2 dd-text-left 
          dd-h-9 sm:dd-text-sm"
        v-model="inputModelValue"
        @input="searchQuery($event.target.value)"
        :displayValue="(val) => findItem(val)"
        @click="toggleDropdown"
      />
      <ddAvatar v-if="selectedValue && showAvatar" size="mini" class="dd-mr-3"
        :srcLink="selectedValue[props.defaultProps.avatar]" />
      <span class="dd-absolute dd-inset-y-0 dd-right-0 dd-flex dd-pt-1.5 dd-pr-2 dd-pointer-events-none">
        <ChevronDownIcon @click="toggleDropdown" class="dd-h-5 dd-w-5 dd-text-gray-400" aria-hidden="true" />
      </span>

      <ul
        v-if="filteredOptions.length > 0 && showDropdown"
        ref="dropdownList"
        class="select-list dropdown-menu dd-fixed dd-z-10 dd-mt-1 dd-w-full dd-bg-white dd-shadow-lg dd-max-h-60 dd-rounded-md dd-py-1 dd-text-base dd-ring-1 dd-ring-black dd-ring-opacity-5 dd-overflow-auto focus:dd-outline-none sm:dd-text-sm custom-select-overflow">
        <li
          v-for="(item, index) in filteredOptions"
          :key="item[props.defaultProps.value]"
          :value="item[props.defaultProps.value]"
          class="select-item hover:dd-bg-teal-600 hover:!dd-text-white dd-cursor-pointer dd-select-none dd-relative dd-py-2" :class="[
            props.checkIcon == 'left'
              ? ' dd-pl-8 dd-pr-4'
              : ' dd-pl-3 dd-pr-9'
          ]" @click="selectItem(item)">
          <!-- show online items for single select -->
          <div class="dd-flex dd-items-center">
            <span v-show="showOnline && props.checkIcon != 'left'" class="dd-mr-3" :class="[
               (inputModelValue == item[props.defaultProps.name] || (queryPlaceholder == item[props.defaultProps.name]))
                ? 'dd-bg-green-400' : 'dd-bg-gray-200',
              'dd-inline-block dd-h-2 dd-w-2 dd-flex-shrink-0 dd-rounded-full',
            ]" aria-hidden="true">
            </span>
            <ddAvatar size="mini" class="dd-mr-3" v-if="showAvatar" :srcLink="item[props.defaultProps.avatar]" />
            <span :class="[
              props.checkIcon != 'none' && (inputModelValue == item[props.defaultProps.name]
               || (queryPlaceholder == item[props.defaultProps.name]))  ? 'dd-font-semibold' : 'dd-font-normal',
              'dd-block dd-truncate',
            ]">
              {{ item[props.defaultProps.name] }}
            </span>
            <!-- tick icon single select -->
          </div>
          <span
            v-if="(!multiple && props.checkIcon != 'none' && (inputModelValue == item[props.defaultProps.name]
              || (queryPlaceholder == item[props.defaultProps.name])))"
            class="custom-tick" :class="[
              `dd-absolute dd-inset-y-0 dd-flex dd-items-center ${props.checkIcon == 'left'
                ? 'dd-left-1 pl-1.5'
                : 'dd-right-0 dd-pr-4'
              }`
            ]">
              <CheckIcon class="dd-h-5 dd-w-5" aria-hidden="true" />
          </span>
        </li>
      </ul>
      <!-- add new -->
      <ul class="dd-shadow-md dd-text-center dd-rounded-md add-new"
        v-if="queries !== '' && filteredOptions.length === 0 && addNewItem">
        <li class="dd-p-4 dd-text-sm dd-text-left dd-text-gray-500 dd-cursor-pointer dd-text dd-font-semibold"
          @click="addQuery(queries)">
          Add as new:
          <span class="dd-break-words">{{ queries }}</span>
        </li>
      </ul>
    </div>

    <!-- error message on apply rules -->
    <span v-if="errorMessage" class="dd-text-xs dd-text-red-600 dd-ml-3 dd-capitalize error-message">{{ errorMessage }}</span>
  </div>
</template>
<script setup>
import { useField } from "vee-validate"
import { ref, computed, watch, watchEffect, onMounted, onBeforeUnmount, nextTick } from "vue"
import { CheckIcon, ChevronDownIcon } from "@heroicons/vue/solid"
import ddAvatar from "../avatars/index.vue"

//emits
const emits = defineEmits([
  "update:modelValue",
  "change"
])

//props
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
  addNewItem: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
    default: null,
  },
  showAvatar: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [Number, String],
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
})

//data properties
const isIconRotated = ref(false)
const showDropdown = ref(false)
const queries = ref("")
const queryPlaceholder = ref("")
const optionsArray = ref(props.options)
const componentRef = ref(null)
const dropdownInput = ref("")
const dropdownList = ref("")

//computed
const inputModelValue = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits("update:modelValue", val);
    emits("change", val);
  },
})

const filteredOptions = computed(() =>
  queries.value == ""
    ? optionsArray.value
    : optionsArray.value.filter((el) => {
      return el.name.toLowerCase().includes(queries.value.toLowerCase())
    })
)

const inputSize = computed(() => {
  return {
    "dd-h-6 !dd-text-xs": props.size === "xs",
    "dd-h-7  ": props.size === "sm",
    "dd-h-8 ": props.size === "base",
    "dd-h-9 ": props.size === "lg",
    "dd-h-10 ": props.size === "xl",
  }
})

const selectedValue = computed(() => {
  return props.options.find((predicate) => {
    return predicate[props.defaultProps.value] == inputModelValue.value;
  })
})

const hasError = computed(() => {
  if (errorMessage.value) {
    return true;
  } else {
    return false;
  }
})

//watcher
watch([queries, filteredOptions], ([newVal]) => {
    filteredOptions.value.filter((el) => {
      return el.name.toLowerCase().includes(newVal.toLowerCase())
    })
    if(newVal) {
      showDropdown.value = true
    }
})

//mounted hook
onMounted(() => {
  window.addEventListener('click', handleOutsideDropdown)
})

//destroy hook
onBeforeUnmount(() => {
  window.removeEventListener('click', handleOutsideDropdown)
})

//methods
const handleOutsideDropdown = (event) => {
  /* handled close case of dropdown */
  if (event.target !== componentRef.value && event.composedPath().includes(componentRef.value)) return;
  if((queries.value == props.modelValue) && showDropdown.value && !queryPlaceholder.value) {
    emits("update:modelValue", "");
    showDropdown.value = false;
    isIconRotated.value = false;
    queries.value = "";
    return
  }
  if (showDropdown.value && queryPlaceholder.value) {
    emits("update:modelValue", queryPlaceholder.value)
    showDropdown.value = false;
    isIconRotated.value = false;
    queries.value = "";
    return 
  }
  showDropdown.value = false;
  isIconRotated.value = false;
  /* Set the last selected item in select dropdown */
  queries.value = "";
  emits("update:modelValue", props.modelValue);
}

const selectItem = (item) => {
  showDropdown.value = false
  queries.value = ""
  emits("update:modelValue", item.name);
  emits("change", item);
}

const searchQuery = (val) => {
  queries.value = val 
}

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
  isIconRotated.value = !isIconRotated.value;
  if (showDropdown.value && props.modelValue) {
    queryPlaceholder.value = props.modelValue
    emits("update:modelValue", "")
  }
  nextTick(() => {
    adjustDropdownPosition();

  })
}

const addQuery = (query) => {
  queries.value = query;
  const queryObj = {
    name: query,
    value: props.options.length + 1,
  };
  props.options.unshift(queryObj);
  emits("update:modelValue", queryObj.name);
  showDropdown.value = false;
  isIconRotated.value = false;
  queries.value = "";
}

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
}

const { errorMessage, value, handleChange } = useField(props.name, getRules(), {
  label: props.name,
})

const adjustDropdownPosition = () => {
  const dropdownButton = dropdownInput.value
  const dropdownMenu = dropdownList.value
  const buttonRect = dropdownButton.getBoundingClientRect();
  const menuRect = dropdownMenu?.getBoundingClientRect();

  if (menuRect?.right > window.innerWidth) {
    dropdownMenu.style.left = `${window.innerWidth - menuRect.width}px`;
  }
  if (menuRect?.bottom > window.innerHeight) {
    dropdownMenu.style.top = `${buttonRect.top - menuRect.height}px`;
  }
}

</script>

<style scoped>
.rotate-icon svg {
  transform: rotate(180deg);
}
</style>
