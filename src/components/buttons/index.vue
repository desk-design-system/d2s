<template>
  <div>
    <!-- default -->
    <button
      v-bind="$attrs"
      v-if="type == 'default'"
      :class="defaultButton"
      class="
        dd-inline-flex
        dd-items-center
        dd-shadow-sm
        dd-font-medium
        dd-capitalize
        dd-whitespace-nowrap
      "
    >
      <!-- <component
        v-if="prependIcon != null"
        :size="iconSize"
        :is="prependIcon + '-icon'"
        :class="iconstyle"
        :style="prependIcon != '' ? 'margin-righ:8px' : ''"
      /> -->
      <slot>{{ title }}</slot>
      <!-- <component
        v-if="appendIcon != null"
        :style="appendIcon == '' ? '' : 'margin-left:8px'"
        :class="iconstyle"
        :is="appendIcon + '-icon'"
        :size="iconSize"
      /> -->
    </button>

    <!-- round -->
    <button
      v-bind="$attrs"
      v-else-if="type == 'round'"
      :class="{
        'border-gray-300 dd-text-gray-700 dd-border  focus:dd-outline-none':
          color == '',
        ' dd-px-2.5 dd-py-1.5 dd-text-xs': size === 'xs',
        ' dd-px-3 dd-py-2 dd-text-sm': size === 'sm',
        ' dd-px-4 dd-py-2 dd-text-sm': size === 'base',
        ' dd-px-4 dd-py-2 dd-text-base': size === 'lg',
        ' dd-px-6 dd-py-3 dd-text-base': size === 'xl',
        'dd-bg-teal-600 dd-text-white hover:dd-bg-teal-700':
          color === 'primary',
        'dd-bg-red-600 dd-text-white hover:dd-bg-red-700': color === 'danger',
        'dd-cursor-not-allowed dd-bg-gray-200 dd-text-gray-400 hover:dd-bg-gray-300' : disable,
      }"
      class="
        dd-inline-flex
        dd-items-center
        dd-shadow-sm
        dd-rounded-full
        dd-font-medium
        dd-capitalize
        dd-whitespace-nowrap
      "
    >
      <slot>{{ title }}</slot>
      <!-- <component
        v-if="prependIcon != null"
        :size="iconSize"
        :is="prependIcon + '-icon'"
        :class="iconstyle"
        :style="prependIcon != '' ? 'margin-righ:8px' : ''"
      />
      {{ title }}
      <component
        v-if="appendIcon != null"
        :style="appendIcon == '' ? '' : 'margin-left:8px'"
        :class="iconstyle"
        :is="appendIcon + '-icon'"
        :size="iconSize"
      /> -->
    </button>
    <button
      v-bind="$attrs"
      v-else-if="type == 'text'"
      :class="{
        ' dd-text-gray-700  hover:dd-text-gray-900 ': color == '',
        ' dd-px-2.5 dd-py-1.5 dd-text-xs': size === 'xs',
        ' dd-px-3 dd-py-2 dd-text-sm': size === 'sm',
        ' dd-px-4 dd-py-2 dd-text-sm': size === 'base',
        ' dd-px-4 dd-py-2 dd-text-base': size === 'lg',
        ' dd-px-6 dd-py-3 dd-text-base': size === 'xl',
        ' dd-text-teal-700 hover:dd-bg-teal-700': color === 'primary',
        ' dd-text-red-600 hover:dd-bg-red-700': color === 'danger',
        'dd-cursor-not-allowed  dd-text-gray-400 hover:dd-text-gray-500 hover:dd-bg-transparent	' : disable,
      }"
      class="
        dd-inline-flex
        dd-items-center
        dd-font-medium
        dd-capitalize
        dd-whitespace-nowrap
      "
    >
      <slot>{{ title }}</slot>
      <!-- <component
        v-if="prependIcon != null"
        :size="iconSize"
        :is="prependIcon + '-icon'"
        :class="iconstyle"
        :style="prependIcon != '' ? 'margin-righ:8px' : ''"
      />
      {{ title }}
      <component
        v-if="appendIcon != null"
        :style="appendIcon == '' ? '' : 'margin-left:8px'"
        :class="iconstyle"
        :is="appendIcon + '-icon'"
        :size="iconSize"
      /> -->
    </button>

    <button
      v-else-if="type == 'circle'"
      :class="{
        'dd-border-gray-300 dd-text-gray-700 dd-border hover:dd-bg-gray-50 focus:dd-outline-none':
          color == '',
        ' dd-p-1 dd-text-xs': size === 'xs',
        ' dd-p-1.5 dd-text-sm ': size === 'sm',
        ' dd-p-2 dd-text-sm ': size === 'base',
        ' dd-p-2  dd-text-base': size === 'lg',
        ' dd-p-3 dd-text-base': size === 'xl',
        'dd-bg-teal-600 dd-text-white hover:dd-bg-teal-700':
          color === 'primary',
        'dd-bg-red-600 dd-text-white hover:dd-bg-red-700': color === 'danger',
        'dd-cursor-not-allowed dd-bg-gray-200 dd-text-gray-400 hover:dd-bg-gray-300' : disable,
      }"
      class="
        dd-inline-flex
        dd-items-center
        dd-shadow-sm
        dd-font-medium
        dd-rounded-full
        dd-capitalize
        dd-whitespace-nowrap
      "
    >
      <slot>{{ title }}</slot>
      <!-- <component
        v-if="prependIcon != null"
        :size="iconSize"
        :is="prependIcon + '-icon'"
        :class="iconstyle"
        :style="prependIcon != '' ? 'margin-righ:8px' : ''"
      />
      {{ title }}
      <component
        v-if="appendIcon != null"
        :style="appendIcon == '' ? '' : 'margin-left:8px'"
        :class="iconstyle"
        :is="appendIcon + '-icon'"
        :size="iconSize"
      /> -->
    </button>
  </div>
</template>

<script>
export default {
  props: {
    // prependIcon: {
    //   type: String,
    //   default: null,
    // },
    // appendIcon: {
    //   type: String,
    //   default: null,
    // },
    // vertical: Boolean,
    // iconstyle: {
    //   type: String,
    //   default: null,
    // },
    // iconSize: {
    //   type: String,
    //   default: "20",
    // },
    // suffix: {
    //   type: String,
    //   default: null,
    // },
    title: {
      type: String,
      default: "Button",
    },
    color: {
      type: String,
      default: "",
    },
    disable: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        // The value must match one of these strings
        return (
          ["xs", "sm", "base", "lg", "xl"].indexOf(value) !== -1
        );
      },
      default: "base",
    },
    type: {
      type: String,
      validator: function (value) {
        // The value must match one of these strings
        return ["default", "round", "text", "circle"].indexOf(value) !== -1;
      },
      default: "default",
    },
  },
  computed: {
    defaultButton() {
      return {
        "dd-border-gray-300 dd-text-gray-700 dd-border  focus:dd-outline-none":
          this.color == "",
        "dd-px-2.5 dd-py-1.5 dd-text-xs dd-rounded": this.size === "mini",
        "dd-px-3 dd-py-2 dd-text-sm  dd-h-9 dd-rounded-md":
          this.size === "small",
        "dd-px-4 dd-py-2 dd-text-sm dd-rounded-md": this.size === "medium",
        "dd-px-4 dd-py-2 dd-text-base dd-rounded-md": this.size === "large",
        "dd-px-6 dd-py-3 dd-text-base dd-rounded-md": this.size === "xLarge",
        "dd-cursor-not-allowed dd-bg-gray-200 dd-text-gray-400 hover:dd-bg-gray-300":
          this.disable,
        "dd-bg-teal-600 dd-text-white hover:dd-bg-teal-700":
          this.color === "primary" ,
        "dd-bg-red-600 dd-text-white hover:dd-bg-red-700":
          this.color === "danger" ,
        // "dd-bg-green-600 dd-text-white hover:dd-bg-green-700":
        //   this.color === "success" ,
        "dd-w-full dd-justify-center": this.block,
        "dd-bg-white dd-border-gray-300 dd-text-gray-700 dd-border hover:dd-bg-gray-50 focus:dd-outline-none":
          this.color === "white",
        "dd-border dd-border-teal-500 dd-bg-teal-50 dd-text-gray-700":
          this.color === "selected",
      };
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
