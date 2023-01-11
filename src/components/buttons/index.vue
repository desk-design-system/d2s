<template>
  <div>
    <!-- default -->
    <button
      v-bind="$attrs"
      v-if="type == 'default'"
      :class="{
        'dd-border-gray-300 dd-text-gray-700 dd-border hover:dd-bg-gray-50 focus:dd-outline-none':
          color == '',
        'dd-px-2.5 dd-py-1.5 dd-text-xs': size === 'mini',
        'dd-px-3 dd-py-2 dd-text-sm  dd-h-9': size === 'small',
        'dd-px-4 dd-py-2 dd-text-sm': size === 'medium',
        'dd-px-4 dd-py-2 dd-text-base': size === 'large',
        'dd-px-6 dd-py-3 dd-text-base': size === 'xLarge',
        'dd-opacity-60 dd-cursor-not-allowed': disable,
        'dd-bg-teal-600 dd-text-white': color === 'primary',
        'dd-bg-red-600 dd-text-white': color === 'danger',
        'dd-bg-green-600 dd-text-white': color === 'success',
        'dd-w-full dd-justify-center': block,
        'dd-bg-white dd-border-gray-300 dd-text-gray-700 dd-border hover:dd-bg-gray-50 focus:dd-outline-none':
          color === 'white',
        'dd-border dd-border-teal-500 dd-bg-teal-50 dd-text-gray-700':
          color === 'selected',
      }"
      class="dd-inline-flex dd-items-center dd-shadow-sm dd-font-medium dd-rounded dd-capitalize dd-whitespace-nowrap"
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
        'border-gray-300 dd-text-gray-700 dd-border hover:dd-bg-gray-50 focus:dd-outline-none':
          color == '',
        ' dd-px-2.5 dd-py-1.5 dd-text-xs': size === 'mini',
        ' dd-px-3 dd-py-2 dd-text-sm': size === 'small',
        ' dd-px-4 dd-py-2 dd-text-sm': size === 'medium',
        ' dd-px-4 dd-py-2 dd-text-base': size === 'large',
        ' dd-px-6 dd-py-3 dd-text-base': size === 'xLarge',
        'dd-bg-teal-700 dd-text-white': color === 'primary',
        'dd-bg-red-600 dd-text-white': color === 'danger',
      }"
      class="dd-inline-flex dd-items-center dd-shadow-sm dd-rounded-full dd-font-medium dd-capitalize dd-whitespace-nowrap"
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
        ' dd-px-2.5 dd-py-1.5 dd-text-xs': size === 'mini',
        ' dd-px-3 dd-py-2 dd-text-sm': size === 'small',
        ' dd-px-4 dd-py-2 dd-text-sm': size === 'medium',
        ' dd-px-4 dd-py-2 dd-text-base': size === 'large',
        ' dd-px-6 dd-py-3 dd-text-base': size === 'xLarge',
        ' dd-text-teal-700': color === 'primary',
        ' dd-text-red-600': color === 'danger',
      }"
      class="dd-inline-flex dd-items-center dd-font-medium dd-capitalize dd-whitespace-nowrap"
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
        ' dd-p-1 dd-text-xs': size === 'mini',
        ' dd-p-1.5 dd-text-sm ': size === 'small',
        ' dd-p-2 dd-text-sm ': size === 'medium',
        ' dd-p-2  dd-text-base': size === 'large',
        ' dd-p-3 dd-text-base': size === 'xLarge',
        'dd-bg-teal-700 dd-text-white': color === 'primary',
        'dd-bg-red-600 dd-text-white': color === 'danger',
      }"
      class="dd-inline-flex dd-items-center dd-shadow-sm dd-font-medium dd-rounded-full dd-capitalize dd-whitespace-nowrap"
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
    prependIcon: {
      type: String,
      default: null,
    },
    appendIcon: {
      type: String,
      default: null,
    },
    vertical: Boolean,
    iconstyle: {
      type: String,
      default: null,
    },
    iconSize: {
      type: String,
      default: "20",
    },
    suffix: {
      type: String,
      default: null,
    },
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
          ["mini", "small", "medium", "large", "xLarge"].indexOf(value) !== -1
        );
      },
      default: "medium",
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
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
