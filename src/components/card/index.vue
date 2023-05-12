<template>
  <div
    v-bind="$attrs"
    class="dd-card rounded dd-mb-4"
    :class="[elevationFun, className, roundedFun]"
  >
    <div
      :class="`dd-py-${headerY} dd-px-${headerX}`"
      class="dd-border-b dd-border-gray-300"
      v-if="header"
    >
      <p class="dd-text-lg dd-text-gray-700 dd-font-medium dd-pb-1">
        {{ title }}
      </p>
      <p class="dd-text-sm dd-text-gray-500">{{ subTitle }}</p>
    </div>
    <div :class="`dd-py-${y} dd-px-${x}`">
      <slot> {{ content }} </slot>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    hasCustomClass() {
      if (this.customStyle) {
        return true;
      }
      return false;
    },
    elevationFun() {
      if (this.elevation == "sm") {
        return "dd-drop-shadow-sm";
      } else if (this.elevation == "lg") {
        return "dd-drop-shadow-lg";
      } else if (this.elevation == "xl") {
        return "dd-drop-shadow-xl";
      } else {
        return "";
      }
    },
    roundedFun() {
      return this.rounded ? `dd-rounded-${this.rounded}` : `dd-rounded`;
    },
  },
  // data () {
  //   return {
  //     defaultClasses: "dd-p-6 dd-rounded dd-bg-white"
  //   }
  // },
  props: {
    className: {
      type: String,
      default: "",
    },
    headerX: {
      type: Number,
      default: 5,
    },
    headerY: {
      type: Number,
      default: 5,
    },
    x: {
      type: Number,
      default: 5,
    },
    y: {
      type: Number,
      default: 5,
    },
    content: {
      type: String,
      default: "",
    },
    customStyle: {
      type: String,
      default: "",
    },
    header: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    elevation: {
      type: String,
      validator: function (value) {
        // The value must match one of these strings
        return ["none", "sm", "lg", "xl"].indexOf(value) !== -1;
      },
      default: "none",
    },
    rounded: {
      type: String,
      validator: function (value) {
        // The value must match one of these strings
        return (
          ["none", "sm", "md", "lg", "xl", "2xl", "full"].indexOf(value) !== -1
        );
      },
      default: "",
    },
  },
};
</script>
