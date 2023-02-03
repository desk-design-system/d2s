<template>
    <div>
      <!-- default -->
      <div
      v-if="type == 'default'">
      <img
        v-bind="$attrs"
            :class="{
            'dd-h-6 dd-w-6': size === 'mini',
            'dd-h-8 dd-w-8': size === 'small',
            'dd-h-10 dd-w-10': size === 'medium',
            'dd-h-12 dd-w-12': size === 'large',
            'dd-h-14 dd-w-14': size === 'xLarge',
            }"
            class="dd-inline-flex dd-inline-block dd-rounded-full" 
            :src="srcLink">
        </div>
    
      <!-- group -->
      <div 
      v-else-if="type == 'group'">
        <img
            v-bind="$attrs"
            :class="{
                'dd-h-6 dd-w-6': size === 'mini',
            }" 
            class="dd-inline-flex dd-inline-block dd-h-6 dd-w-6 dd-space-x-1 dd-overflow-hidden dd-rounded-full dd-ring-2 dd-ring-white" 
            :src="srcLink">
      </div>
      
      <div
      v-else-if="type == 'text'">
      <span
        v-bind="$attrs"
            :class="{
            'dd-text-white':color == '',
            'dd-h-6 dd-w-6 dd-leading-none dd-text-xs dd-font-medium': size === 'mini',
            'dd-h-8 dd-w-8 dd-leading-none dd-text-sm dd-font-medium': size === 'small',
            'dd-h-10 dd-w-10 dd-leading-none dd-font-medium': size === 'medium',
            'dd-h-12 dd-w-12 dd-leading-none dd-text-lg dd-font-medium': size === 'large',
            'dd-h-14 dd-w-14 dd-leading-none dd-text-xl dd-font-medium': size === 'xLarge',
            }"
            class="dd-inline-flex dd-items-center dd-font-medium dd-justify-center dd-rounded-full dd-bg-gray-500"
            ><slot>{{ title.charAt(0) }}</slot></span>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        validator: function (value) {
        },
        default: "",
      },
      srcLink: {
        type: String,
        validator: function (value) {
        },
        default: "",
      },
      size: {
        type: String,
        validator: function (value) {
          return (
            ["mini", "small", "medium", "large", "xLarge"].indexOf(value) !== -1
          );
        },
        default: "medium",
      },
      type: {
        type: String,
        validator: function (value) {
          return ["default", "group"].indexOf(value) !== -1;
        },
        default: "default",
      },
    },
    data() {
      return {};
    },
  };
  </script>
  
  <style lang="scss" scoped></style>
  