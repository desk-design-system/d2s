<template>
   <div class="dd-relative dd-my-2">
    <div class="dd-absolute dd-inset-0 dd-flex dd-items-center" aria-hidden="true">
      <div class="dd-w-full dd-border-t dd-border-gray-300" />
    </div>
    <div v-if="title" :class="`dd-relative dd-flex dd-justify-${placement}`">
      <span class="dd-bg-white dd-px-2 dd-text-sm dd-text-gray-500"> <slot>{{title}}</slot></span>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps( {
    title: {
    type: String,
    default: null,
  },
  placement: {
    type: String,
    default: 'center',
  },
} )
</script>

<style lang="scss" scoped>

</style>