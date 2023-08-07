<template>
  <div
    v-bind="$attrs"
    class="dd-card dd-bg-white dd-mb-4"
    :class="[elevationFun, className, roundedFun]"
  >
    <div
      :style="headerCustomePadding"
      class="dd-border-b dd-border-gray-300"
      v-if="header"
    >
      <p class="dd-text-lg dd-text-gray-700 dd-font-medium dd-pb-1">
        {{ title }}
      </p>
      <p class="dd-text-sm dd-text-gray-500">{{ subTitle }}</p>
    </div>
    <div :style="customePadding" >
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
    customePadding() {
      return   {'padding-top': this.y+'px','padding-bottom': this.y+'px','padding-left': this.x+'px','padding-right': this.x+'px',}
    },
    headerCustomePadding() {
      return   {'padding-top': this.headerY+'px','padding-bottom': this.headerY+'px','padding-left': this.headerX+'px','padding-right': this.headerX+'px',}
    },
  },

  props: {
    className: {
      type: String,
      default: "",
    },
    headerX: {
      type: Number,
      default: 20,
    },
    headerY: {
      type: Number,
      default: 20,
    },
    x: {
      type: Number,
      default: 20,
    },
    y: {
      type: Number,
      default: 20,
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
      default: "none",
    },
  },
};
</script>
