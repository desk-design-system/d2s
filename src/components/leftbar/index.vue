<template>
  <div class="flex">
    <div class="left-bar" ref="leftBarRef">
      <!-- <component v-for="icon in icons" :key="icon.name" :is="icon.component" class="mb-4"></component> -->
      <aside id="default-sidebar" class="dd-fixed dd-top-0 dd-left-0 dd-z-40 dd-w-16 dd-h-screen dd-transition-transform dd-translate-x-full sm:dd-translate-x-0" aria-label="Sidebar">
        <div class="dd-h-full dd-py-4 dd-overflow-y-auto dd-bg-gray-100">
            <ul class="space-y-2">
              <li class="dd-flex dd-align-center dd-justify-center">
                  <a href="#" class="dd-flex dd-justify-center dd-flex-col pp-mt-3 dd-items-center dd-p-2 dd-text-base dd-font-normal dd-text-gray-900 dd-rounded-lg dark:dd-text-white">
                    
                    <div v-for="(item, index) in items" :key="index" class="dd-mt-2 hover:dd-bg-gray-200 dd-p-2 dark:hover:dd-bg-gray-700"> 
                      <leftBarItem @click="emitEventClicked(item)" :item="item" :color="item.color" :height="item.height" :width="item.width"></leftBarItem>
                    </div>
                  </a>
              </li>
            </ul>
        </div>
        </aside>
    </div>
  </div>
</template>

<script setup>

import { defineProps } from "vue";
import leftBarItem from './LeftBarItem.vue'

  const props = defineProps({
    items: {
      type: Array,
      required: true,
    },
  }) 
  const emitEventClicked = (item) => {
      emit('itemclicked', item);
    };

</script>
