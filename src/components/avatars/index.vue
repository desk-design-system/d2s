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
                'dd-h-6 dd-w-6': size === 'default',
            }" 
            class="dd-inline-flex dd-inline-block dd-h-6 dd-w-6 dd-rounded-full dd-ring-2 dd-ring-white" 
            :src="srcLink">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
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
  