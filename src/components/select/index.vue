<template>
  <Listbox v-bind="$attrs" as="div" v-model="inputModelValue">
    <ListboxLabel v-if="props.title != ''" class="dd-block text-sm dd-font-medium  dd-text-gray-700 dd-capitalize"> {{ props.label }}
    </ListboxLabel>
    <div class="mt-1 relative">
      <ListboxButton
        class="dd-flex dd-items-center dd-cursor-pointer dd-bg-white dd-relative dd-min-w-[320px] dd-border dd-border-gray-300 dd-rounded-md dd-shadow-sm dd-pl-3 dd-pr-10 dd-py-2 dd-text-left  dd-h-9   sm:dd-text-sm">
        <!-- <div class="dd-flex dd-items-center dd-mb-3"> -->
        <ddAvatar v-if="selectedValue && showAvatar" size="mini" class="dd-mr-3"
          :srcLink="selectedValue[props.defaultProps.avatar]" />
        <span v-if="selectedValue"
          class="dd-block dd-truncate dd-text-gray-500 dd-text-sm">{{ selectedValue[props.defaultProps.name] }}</span>
        <span v-else class="dd-text-sm dd-text-gray-400 dd-capitalize">{{ props.placeholder }}</span>
        <!-- </div> -->
        <span class="dd-absolute dd-inset-y-0 dd-right-0 dd-flex dd-items-center dd-pr-2 dd-pointer-events-none">
          <ChevronDownIcon class="dd-h-5 dd-w-5 dd-text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="dd-transition dd-ease-in dd-duration-100" leave-from-class="dd-opacity-100"
        leave-to-class="dd-opacity-0">
        <ListboxOptions :class="listClass"
          class="dd-absolute dd-z-10 dd-mt-1 dd-min-w-[320px] dd-bg-white dd-shadow-lg dd-max-h-60 dd-rounded-md dd-py-1 dd-text-base dd-ring-1 dd-ring-black dd-ring-opacity-5 dd-overflow-auto focus:dd-outline-none sm:dd-text-sm">
          <ListboxOption as="template" v-for="item in options" :key="item[props.defaultProps.id]"
            :value="item[props.defaultProps.value]" v-slot="{ active, selected }">
            <slot name="items" :isSelected="selected ?? item[props.defaultProps.id] === selected[props.defaultProps.id]" :item="item">
              <li
                :class="[active ? 'dd-text-white dd-bg-teal-600' : 'dd-text-gray-900', 'dd-cursor-pointer dd-select-none dd-relative dd-py-2', props.checkIcon == 'left' ? ' dd-pl-8 dd-pr-4' : ' dd-pl-3 dd-pr-9']">
                <div class="dd-flex dd-items-center">
                  <span v-show="showOnline && props.checkIcon != 'left'" class="dd-mr-3"
                    :class="[selected ? 'dd-bg-green-400' : 'dd-bg-gray-200', 'dd-inline-block dd-h-2 dd-w-2 dd-flex-shrink-0 dd-rounded-full']"
                    aria-hidden="true" />
                  <ddAvatar size="mini"  class="dd-mr-3" v-if="showAvatar"
                    :srcLink="item[props.defaultProps.avatar]" />
                  <span :class="[selected ? 'dd-font-semibold' : 'dd-font-normal', 'dd-block dd-truncate']">
                    {{ item[props.defaultProps.name] }}
                  </span>
                </div>
                <span v-if="selected && props.checkIcon != 'none'"
                  :class="[active ? 'dd-text-white' : 'dd-text-teal-600', `dd-absolute dd-inset-y-0  dd-flex dd-items-center  ${props.checkIcon == 'left' ? 'dd-left-1 pl-1.5' : 'dd-right-0 dd-pr-4'}`]">
                  <CheckIcon class="dd-h-5 dd-w-5" aria-hidden="true" />
                </span>
              </li>
            </slot>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
<script setup>
import { ref, computed } from "vue"
import { Switch, Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/solid'
import ddAvatar from "../avatars/index.vue"
const emits = defineEmits( ['update:modelValue', "change"] )
const props = defineProps( {
  label: {
    type: String,
    default: "",
  },
  showOnline: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array,
    required: true
  },
  placeholder: {
    type: String,
    default: "Select",
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
    type: [String,],
    default: null,
  },
  checkIcon: {
    type: String,
    validator: function ( value ) {
      // The value must match one of these strings
      return (
        ["left", "right", "none"].indexOf( value ) !== -1
      )
    },
    default: "right",
  },
  defaultProps: {
    type: Object,
    default: () => ( {
      name: 'name',
      value: 'value',
      avatar: 'avatar'
    } )
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
const selectedValue = computed( () => {
  return props.options.find( ( predicate ) => {
    return predicate[props.defaultProps.value] == inputModelValue.value
  } )

} )
</script>

<style lang="scss" scoped>

</style>
