<template>
  <div class="dd-flex dd-justify-between dd-items-center">
    <div class="dd-flex ">
      <span v-if="isBack" @click="$emit('onGoBack')" class="dd-cursor-pointer dd-pt-2 dd-mr-2  ">
        <svgComponent icon="ArrowLeft" size="16" class="dd-text-gray-500"  />
      </span>
      <div>
        <p class="dd-flex dd-items-center dd-text-lg dd-text-gray-700 dd-font-medium">{{ title }} <svgComponent @click="$emit('onEdit')" v-if="isEdit" icon="Edit" size="16" class="dd-text-gray-500 dd-ml-2"  /></p> 
        <p class="dd-text-sm dd-text-gray-700">{{ subTitle }}</p>
      </div>
    </div>
    <div v-if="isButton" class="dd-flex dd-items-center">
      <dd-button @click="$emit('onCancel')" size="base" color="white" :title="cancelLabel" class="dd-mr-4" />
      <dd-button @click="$emit('onSave')" size="base" :title="saveLabel" />
    </div>
  </div>
</template>

<script setup>
import DdButton from "../buttons/index.vue"
import svgComponent from "../svgIcon/index.vue"
import { defineProps, ref } from "vue";
const props = defineProps( {
  title: {
    type: String,
    default: "Heading",
  },
  subTitle: {
    type: String,
    default: "Sub Heading",
  },
  saveLabel: {
    type: String,
    default: "Save",
  },
  cancelLabel: {
    type: String,
    default: "Cancel",
  },
  isButton: {
    type: Boolean,
    default: false,
  },
  isEdit: {
    type: Boolean,
    default: false,
  },
  isBack: {
    type: Boolean,
    default: true,
  },
})
</script>
