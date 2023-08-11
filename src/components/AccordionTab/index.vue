<template>
    <div class="dd-px-6" >
        <slot>

        </slot>
    </div>
</template>

<script>
  export default {
    name: 'AccordionTab',
  }
</script>

<script setup>

const props = defineProps({
  title: {
    type: String,
    required:true
  },
  appendIcon: {
    type: String,
    default: false,
  },
  prependIcon: {
    type: String,
    default: false,
  },
});

</script>