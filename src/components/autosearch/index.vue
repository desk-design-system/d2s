<template>
  <div class="dd-base" v-bind="$attrs">
    <label v-if="label" class="dd-block dd-text-sm dd-font-medium dd-text-gray-700 dd-mb-1">{{ label }}</label>
    <Combobox v-model="inputModelValue">
      <div class="dd-relative ">
        <div v-if="prefix"
          class="!dd-pointer-events-none !dd-absolute !dd-inset-y-0 !dd-left-0 !dd-flex !dd-items-center !dd-pl-3 !dd-pr-10">
          <svgIcon class="dd-text-gray-400" :icon="icon" :size="btnIconSize" />
        </div>
        <ComboboxInput
        :displayValue="(val) => findItem(val) "
          :class="[inputSize, suffix ? '!dd-pr-10' : '!dd-pr-2', prefix ? '!dd-pl-10' : '!dd-pl-2', size == 'sx' || size == 'sm' ? 'dd-text-xs' : 'dd-text-sm']"
          class="!dd-border-gray-300 focus:!dd-ring-teal-600 focus:!dd-border-teal-600    dd-text-gray-700 placeholder:!dd-text-gray-400 focus:!dd-ring-0  !dd-border-solid !dd-block !dd-w-full !dd-rounded-md      focus:!ring-2 focus:!dd-ring-inset  !dd-shadow-sm"
          :placeholder="placeholder" @change="searchQuery($event.target.value)" />
        <div  v-if="suffix "
          class="dd-cursor-pointer !dd-absolute !dd-inset-y-0 !dd-right-0 !dd-flex !dd-items-center !dd-pl-3 !dd-pr-3">
          <svgIcon class="dd-text-gray-400" :icon="icon" :size="btnIconSize" />
        </div>
      </div>
      <TransitionRoot
          leave="dd-transition dd-ease-in dd-duration-100"
          leaveFrom="dd-opacity-100"
          leaveTo="dd-opacity-0"
          @after-leave ="query = ''"
        >
      <ComboboxOptions v-if="options.length > 0" static
        class="dd-max-h-72 dd-scroll-py-2  dd-overflow-y-auto dd-py-2 dd-text-sm dd-text-gray-800 dd-shadow-md dd-rounded-md">
        <div v-if="loader" class="dd-text-center dd-py-4">
          <svg aria-hidden="true" :class="['',size == 'xs' || size == 'sm' ? 'dd-h-4 dd-w-4' : 'dd-h-5 dd-w-5']"
            class=" dd-animate-spin dd-fill-teal-600  " viewBox="0 0 100 101" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#e6e6e6" />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill" />
          </svg>
        </div>
        <ComboboxOption v-else v-for="item in options" :key="item[defaultProps.value]" :value="item[defaultProps.value]" as="template"
          v-slot="{ active }">
          <slot name="items"  :item="item">
          <li :class="['dd-cursor-pointer dd-select-none dd-px-4 dd-py-2', active && 'dd-bg-teal-600 dd-text-white']">
            {{ item[defaultProps.name] }}
          </li>
        </slot>
        </ComboboxOption>
      </ComboboxOptions>
      <ComboboxOptions class="dd-shadow-md dd-text-center dd-rounded-md "
        v-if="query !== '' && options.length === 0">
          <slot name="noData">
            <p class="dd-p-4 dd-text-sm dd-text-gray-400">No Data found.</p>
          </slot>
      </ComboboxOptions>
      </TransitionRoot>
    </Combobox>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
// import { MagnifyingGlassIcon } from '@heroicons/vue/solid'
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import svgIcon from "../svgIcon/index.vue"
const emits = defineEmits( ['update:modelValue', "change", "searchQuery"] )
const props = defineProps( {
  label: {
    type: String,
    default: "",
  },
  prefix: {
    type: Boolean,
    default: false,
  },
  options:{
    type: Array,
    required: true
  },
  suffix: {
    type: Boolean,
    default: false,
  },
  loader: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: "Search",
  },
  modelValue: {
    type: [String, Number, Object],
    default: null,
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
  defaultProps: {
    type: Object,
    default: () => ( {
      name: 'name',
      value: 'value',
    } )
  }
} )

const query = ref('')
const inputSize = computed( () => {
  return {
    "dd-h-6 !dd-text-xs": props.size === "xs",
    "dd-h-7  ": props.size === "sm",
    "dd-h-8 ": props.size === "base",
    "dd-h-9 ": props.size === "lg",
    "dd-h-10 ": props.size === "xl",
  }
} )
const findItem = (val) =>{
  const item = props.options.find((predicate) =>
    predicate[props.defaultProps.value] == val
  )
  return item?.[props.defaultProps.name] ?? ''
}
const btnIconSize = computed( () => {
  if ( props.size == 'xs' ) {
    return '10'
  } else if ( props.size == 'sm' ) {
    return '12'
  } else {
    return '16'
  }
} )
const inputModelValue = computed( {
  get () {
    return props.modelValue
  },
  set ( val ) {
    emits( "update:modelValue", val )
    emits( "change", val )
  }
} )

const searchQuery = (val) => {
  query.value = val
  emits( "searchQuery", val )
}
</script>

<style lang="scss" scoped></style>