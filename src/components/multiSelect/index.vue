<template>
  <div class="dd-px-1" :class="props.class">
    <Listbox
      as="div"
      multiple
      v-model="selectedOptions"
      :disabled="isDisabled"
      @update:modelValue="listChange"
    >
      <ListboxLabel
        class="dd-block dd-text-sm dd-font-medium dd-text-gray-700 dd-mb-1"
        v-if="props.label"
      >
        <span class="dd-block dd-truncate"
          >{{ props.label }}
          <span v-if="props.isRequired" class="dd-text-red-500">*</span>
        </span>
      </ListboxLabel>
      <div class="dd-relative">
        <ListboxButton
        
          :class="[isDisabled ?  'dd-cursor-not-allowed' : 'dd-cursor-pointer', hasError ?  ' !dd-border-red-600 focus:!dd-border-red-600 dd-focus:!dd-ring-red-600' : 'dd-border-gray-300 focus:dd-ring-teal-600 focus:!dd-border-teal-600',inputSize  ]"
          class="dd-bg-white dd-pt-1  dd-relative dd-w-full dd-border dd-border-gray-300 dd-rounded-md dd-shadow-sm dd-pl-3 dd-pr-10 dd-text-left   sm:dd-text-sm"
        >
          <!-- <RDTooltipVue
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
          </RDTooltipVue> -->
          <!-- v-if="!props.showTooltip" -->
          <!-- <span
            class=" dd-truncate dd-flex dd-justify-between dd-items-center"
            :class="props.isDisabled ? 'dd-text-gray-300' : ''"
            >
            {{
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
          </span> -->
          <!-- <span v-if="selectedValue"
          class="dd-block dd-truncate dd-text-gray-500 dd-text-sm"></span>
        <span v-else class="dd-text-sm dd-text-gray-400 dd-capitalize">{{ props.placeholder }}</span> -->
          <ddBadge v-for="(val, index) in selectedOptions" :key="index" class="dd-mr-2 dd-mb-1" type="basic" @click.stop closable @close="removeItem(val)"  :title="val[defaultProps.name]" />
          <span
            class="dd-absolute dd-inset-y-0 dd-right-0 dd-flex dd-items-center dd-pr-2 dd-pointer-events-none"
          >
          <ChevronDownIcon  class="dd-h-5 dd-w-5 dd-text-gray-400" aria-hidden="true" />
          <!-- <ChevronUpIcon class="dd-h-5 dd-w-5 dd-text-gray-400" aria-hidden="true" /> -->
          </span>
        </ListboxButton>

        <transition
          leave-active-class="dd-transition dd-ease-in dd-duration-100"
          leave-from-class="dd-opacity-100"
          leave-to-class="dd-opacity-0"
        >
          <ListboxOptions
            class="dd-absolute dd-z-10 dd-mt-1 dd-w-full dd-bg-white dd-shadow-lg dd-max-h-60 dd-rounded-md dd-py-1 dd-text-base dd-ring-1 dd-ring-black dd-ring-opacity-5 dd-overflow-auto focus:dd-outline-none sm:dd-text-sm">
            <ListboxOption
              as="template"
              v-for="item in props.options"
              :key="item[props.defaultProps.value]"
              :value="item"
              v-slot="{ active, selected }"
            >
            <slot name="items" :isSelected="selected ?? item[props.defaultProps.id] === selected[props.defaultProps.id]" :item="item">
              <li
                :class="[
                  active ? 'dd-text-white dd-bg-teal-600' : 'dd-text-gray-900',
                  'dd-cursor-pointer dd-select-none dd-relative dd-py-2 dd-pl-3 dd-pr-9',
                ]"
              >
                <span
                  :class="[
                    selected ? 'dd-font-semibold' : 'dd-font-normal',
                    'dd-block dd-truncate',
                  ]"
                >
                {{ item[props.defaultProps.name] }}
                </span>

                <span
                  v-if="selected "
                  :class="[
                    active ? 'dd-text-white' : 'dd-text-teal-600',
                    'dd-absolute dd-inset-y-0 dd-right-0 dd-flex dd-items-center dd-pr-4',
                  ]"
                >
                  <check-icon class="dd-h-5 dd-w-5" aria-hidden="true" />
                </span>
              </li>
            </slot>
            </ListboxOption>
          </ListboxOptions>
        </transition>
        <span v-if="errorMessage" class="dd-text-xs dd-text-red-600 dd-capitalize">{{ errorMessage }}</span>
      </div>
    </Listbox>
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
import RDTooltipVue from "../tooltip/index.vue";
import { watchEffect, computed, ref, watch } from "vue";
import {useField} from "vee-validate"
import { CheckIcon, ChevronDownIcon,
  
  ChevronUpIcon } from '@heroicons/vue/solid'
import ddBadge from "../badges/index.vue"
const props = defineProps({
  isRequired: {
    type: Boolean,
    default: false,
  },
  size: {
  type: String,
  validator: function ( value ) {
    // The value must match one of these strings
    return (
      ["xs", "sm", "base", "lg", "xl"].indexOf( value ) !== -1
    )
  },
  default: "base",
},
rules:{
  type: [String, RegExp, Function],
  default: ''
  },
// errorMessage: {
//     type: String,
//     default: "",
//   },
  showTooltip: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: () => ('Select' + Math.floor(Math.random() * 5000)),
  },
  options: {
    type: Array,
    default: () => [],
  },
  required: {
    type: Boolean,
    default: false,
  },
  
  isDisabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Array,
  required: true
  },
  defaultProps: {
    type: Object,
    default: () => ( {
      name: 'name',
      value: 'value',
    } )
  }
});

const emits = defineEmits( ['update:modelValue', "change"] )


const inputModelValue = computed( {
  get () {
    return props.modelValue.map((row) => row[props.defaultProps.value])
  },
  set ( val ) {
    emits( "update:modelValue", val )
    emits( "change", val )
  }
} )

const selectedOptions = ref([])

const selectedCount = computed(() => {
   selected.value.filter((row) => row.value != 0).length;
});

watchEffect(() => {
  selectedOptions.value = props.options.filter((row) => props.modelValue.includes(row[props.defaultProps.value]))
})

const listChange = () => {
  inputModelValue.value = selectedOptions.value.map((row) => row[props.defaultProps.value])
}
// const selectedOptions = computed(() => {
  
// });

const removeItem = (i) =>{
  selectedOptions.value = selectedOptions.value.filter((item) => item[props.defaultProps.value] != i[props.defaultProps.value])
  listChange()
}

const inputSize = computed( () => {
  return{
    "dd-min-h-[1.5rem] !dd-text-xs": props.size === "xs",
      "dd-min-h-[1.75rem] ":props.size === "sm",
      "dd-min-h-[2rem] ": props.size === "base",
      "dd-min-h-[2.25rem] ": props.size === "lg",
      "dd-min-h-[2.5rem] ": props.size === "xl",
  }
})
const styles = computed(() =>{
  const styleObj = {}
    styleObj[props.wrapperProperty] = `calc(100vh - ${props.wrapperValue})`
    return styleObj
})
const getRules = () => {
  if(props.rules instanceof RegExp) {
    return {regex: props.rules}
  }
  return props.rules
}

const { errorMessage, value, handleChange } = useField((props.name), getRules(), {label: props.name});

watch(() => value, (newValue) => {
  inputModelValue.value = newValue
})
const hasError = computed( () => {
  if(errorMessage.value){
    return true
  } else{
  return false
  }
} )
</script>
