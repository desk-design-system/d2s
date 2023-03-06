<template>
    <div class="left-bar" ref="leftBarRef">
      <aside id="default-sidebar" class="dd-fixed dd-top-0 dd-left-0 dd-z-40 dd-w-16 dd-h-screen dd-transition-transform dd-translate-x-full sm:dd-translate-x-0" aria-label="Sidebar">
        <div class="dd-h-full dd-py-4 dd-overflow-y-auto dd-bg-white">
            <ul class="space-y-2">
              <li class="dd-flex dd-align-center dd-justify-center">
                  <a href="#" class="dd-flex dd-justify-center dd-flex-col pp-mt-3 dd-items-center dd-p-2 dd-text-base dd-font-normal dd-text-gray-900 dd-rounded-lg dark:dd-text-white">
                    
                    <div v-for="(item, index) in items" :key="index" :class="selectedItem == item[defaultProps.value] ? 'dd-bg-gray-100' : ''" class="dd-mt-2 hover:dd-bg-gray-100 dd-p-2"> 
                      <leftBarItem @click="handleClicked(item)" :selected-item="selectedItem == item[defaultProps.value] ? selectedItem : ''" :icon="item[defaultProps.icon]" :color="item.color" :height="item.height" :width="item.width" ></leftBarItem>
                    </div>
                  </a>
              </li>
            </ul>
        </div>
        </aside>
    </div>
</template>

<script setup>

import { defineProps, defineEmits, ref,computed } from "vue";
import { emit } from "process"
import leftBarItem from './LeftBarItem.vue'

  const props = defineProps({
    items: {
      type: Array,
      required: true,
    },
    modelValue: {
    type: [String, Number],
    default: null,
  },
  defaultProps: {
    type: Object,
    default: () => ( {
      icon: 'icon',
      value: 'value',
    } )
  }
  }) 

  const inputModelValue = computed( {
  get () {
    return props.modelValue
  },
  set ( val ) {
    emits( "update:modelValue", val )
    
  }
} )

  const selectedItem = ref(null)
  const handleClicked = (item) => {
      selectedItem.value =  item[defaultProps.value]
      emit('itemclicked', item);
    };

</script>