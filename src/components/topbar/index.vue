<template>
  <nav class="dd-shadow dd-flex dd-items-center dd-justify-between dd-bg-white dd-fixed dd-w-full dd-z-10">
    <div class="dd-flex dd-items-center dd-justify-center dd-opacity-100 dd-h-14 dd-w-32 dd-bg-teal-700 dd-rounded-r-full">
      <span class="dd-opacity-100 dd-text-sm dd-font-medium dd-not-italic dd-tracking-normal dd-text-center dd-align-center dd-text-white dd-leading-4">Repair Shop</span>
    </div>
    <div class="dd-w-full dd-mr-2 dd-block dd-flex-grow lg:dd-flex lg:dd-items-center lg:dd-w-auto">
      <!-- <div class="dd-text-sm lg:dd-flex-grow">
        <ddinput @update:modelValue="value" @change="emitSparkSearchEntry" class="dd-w-3/5 dd-ml-12" />
      </div> -->
      <dddrop type="avatar" placement="left" avatarSize="small" :avatarLink="props.srcLink" :options="props.options" />
    </div>
  </nav>
</template>

<script setup>
import { defineComponent, defineProps } from 'vue'
import ddinput from '../input/index.vue'
import ddavatar from '../avatars/index.vue'
import { emit } from 'process';

const props = defineProps( {
  srcLink: {
    type: String,
    default: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  options: {
    type: Array,
    required: true
  },
})
const emitSparkSearchEntry = (value) => {
  emit('sparkSearch', value)
}
</script>
