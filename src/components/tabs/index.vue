

<template>
  <div>
    <div class="dd-hidden sm:dd-block">
      <div :class="{'dd-border-b dd-border-gray-200' : borderBottom}">
        <nav  class="-dd-mb-px dd-flex dd-space-x-8" aria-label="Tabs">
          <span class="dd-flex" @click="updateTabValue(tab)" v-for="tab in tabs" :key="tab.name" :class="tabStyle(tab)" >
            <component v-if="icon" :is="tab.icon" :class="[tab[defaultProps.value] === inputModelValue ? 'dd-text-teal-500' : 'dd-text-gray-400 group-hover:dd-text-gray-500', '-dd-ml-0.5 dd-mr-2 dd-h-5 dd-w-5']" aria-hidden="true" />

           <slot name="tabLabel" :tab="tab">
            {{ tab.name }}
           </slot> 
          </span>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { Switch, Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/solid'
import ddAvatar from "../avatars/index.vue"
import { emit } from "process"
const emits = defineEmits( ['update:modelValue', "change"] )
const props = defineProps( {
  title: {
    type: String,
    default: "",
  },
  icon:{
    type: Boolean,
    default: false,
  },
  tabs: {
    type: Array,
    required: true
  },
  borderBottom:{
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
  type: {
      type: String,
      validator: function ( value ) {
        // The value must match one of these strings
        return ["default", "pill"].indexOf( value ) !== -1
      },
      default: "default",
    },
  defaultProps: {
    type: Object,
    default: () => ( {
      name: 'name',
      value: 'value',
    } )
  }
} )
const inputModelValue = computed( {
  get () {
    return props.modelValue
  },
  set ( val ) {
    emits( "update:modelValue", val )
    
  }
} )

const tabStyle =  (tab) => {
  var definedValue = tab[props.defaultProps.value]
  if (props.type == 'default') {
   return ( definedValue === inputModelValue.value ? 'dd-border-teal-500 dd-text-teal-600 dd-cursor-pointer' : 'dd-cursor-pointer dd-border-transparent dd-text-gray-500 hover:dd-text-gray-700 hover:dd-border-gray-300') + ' dd-whitespace-nowrap dd-py-4 dd-px-1 dd-border-b-2 dd-font-medium dd-text-sm'
  } else{
    return (definedValue === inputModelValue.value ? 'dd-bg-teal-100 dd-text-teal-700 dd-cursor-pointer ' : 'dd-px-3 dd-cursor-pointer dd-text-gray-500 hover:dd-text-gray-700') + 'dd-px-3 dd-py-2 dd-font-medium dd-text-sm dd-rounded-md'
  }
} 

const updateTabValue = (tab) =>{
  if(inputModelValue.value != tab[props.defaultProps.value] ){
    inputModelValue.value = tab[props.defaultProps.value]
    emits( "change", inputModelValue.value )
  }
}
</script>

<style lang="scss" scoped>

</style>

