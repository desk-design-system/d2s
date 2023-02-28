<template>
<div>
  <div v-if="currentIcon" :width='props.width' :height='props.height'>
    <component :is="currentIcon" />
  </div>
</div>                         
</template>

<script setup>

import { defineProps, watchEffect, shallowRef, defineAsyncComponent } from "vue";
  const props = defineProps({
    item: {
      type: Object,
      required: true,
    },
    color: {
      type: String,
      required: true,
      default: 'red'
    },
    height: {
      type: String,
      default: '32px'
    },
    width: {
      type: String,
      default: '32px'
    }
  }) 
  const currentIcon = shallowRef('')

  watchEffect(() => {
    import(`../icons/${props.item.component}.vue`).then(val => {
      currentIcon.value = val.default
    })
  })
</script>
