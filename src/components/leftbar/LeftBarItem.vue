<template>
<div>
  <div v-if="currentIcon" :style="{'width': props.width, 'height': props.height}" >
    <component :is="currentIcon" :stroke="props.selectedItem ? 'teal' : 'gray'"/>
  </div>
</div>                         
</template>

<script setup>

import { defineProps, watchEffect, shallowRef, defineEmits, defineAsyncComponent } from "vue";
  const props = defineProps({
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
      default: 'red'
    },
  height: {
      type: String,
      default: '20px'
    },
    width: {
      type: String,
      default: '20px'
    },
    selectedItem: {
      type: Boolean,
      default: false
    }
  }) 
  const currentIcon = shallowRef('')

  watchEffect(() => {
    import(`../icons/${props.icon}.vue`).then(val => {
      currentIcon.value = val.default
    })
  })
</script>