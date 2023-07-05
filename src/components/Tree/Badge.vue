<template>
  <div class="dd-flex dd-items-center dd-justify-center dd-bg-gray-200 dd-py-[2px] dd-px-1.5">
    <span class="dd-w-fit dd-text-gray-700">
        {{ badge }}
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
    badge: {
        type: String,
        default: "30",
    }
})
</script>

<style>

</style>