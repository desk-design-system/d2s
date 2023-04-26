<template>
  <nav class="dd-shadow dd-flex dd-items-center dd-justify-between dd-bg-white dd-fixed dd-w-full dd-z-10">
    <div class="dd-flex dd-items-center dd-justify-center dd-opacity-100 dd-h-14  dd-bg-teal-700 dd-rounded-r-full">
      <span class="dd-pl-5 dd-pr-11 dd-opacity-100 dd-text-sm dd-font-medium dd-not-italic dd-tracking-normal dd-text-center dd-align-center dd-text-white dd-leading-4">{{title}}</span>
    </div>
    <div class="dd-flex dd-items-center dd-justify-end dd-w-full dd-mr-6 dd-flex-grow lg:dd-flex lg:dd-items-center lg:dd-w-auto">
      <!-- <div class="dd-text-sm lg:dd-flex-grow">
        <ddinput @update:modelValue="value" @change="emitSparkSearchEntry" class="dd-w-3/5 dd-ml-12" />
      </div> -->
      <dd-drop type="avatar" placement="right" avatarSize="small" @command="command" :avatarLink="props.srcLink" :options="props.options" />
    </div>
  </nav>
</template>

<script setup>
import { defineComponent, defineProps } from 'vue'

// import ddinput from '../input/index.vue'
import ddDrop from '../dropdown/index.vue'
const emits = defineEmits( [ 'command'] )
const props = defineProps( {
  srcLink: {
    type: String,
    default: "https://img.freepik.com/free-icon/user_318-563642.jpg",
  },
  options: {
    type: Array,
    required: true
  },
  title:{
    type: String,
    default: "Store Name",
  }
})
const emitSparkSearchEntry = (value) => {
  emit('sparkSearch', value)
}
const command  = (i) =>{
  emits('command', i)
}
</script>
