<template>
  <div
    @mouseleave="toolTipVisibility"
    @mouseenter="toolTipVisibility"
    class="dd-relative dd-py-2"
  >
    <span v-if="showToolTip" v-bind:class="toolTipStyling"
      >{{ toolTipText }}
    </span>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  props: {
    toolTipText: {
      type: String,
    },
    tooltipWidth: {
      type: String,
      default: "dd-fixed",
    },
    toolTipPosition: {
      type: String,
    },
    isAnimate: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    fixedStyle: {
      type: String,
      default: "dd-bg-slate-800"
    },
    fixedStylePin: {
      type: String,
      default: "after:dd-bg-slate-800"
    }
  },
  data() {
    return {
      showToolTip: false,
    };
  },
  methods: {
    toolTipVisibility() {
      if (this.disabled) {
        return;
      }
      this.showToolTip = !this.showToolTip;
    },
  },
  computed: {
    toolTipStyling() {
      let tooltippin = ""

      let fixedProperties =
        "dd-whitespace-pre-line  after:dd-content-[''] after:dd-absolute after:dd-p-1 after:-dd-dd-rotate-45 " + this.fixedStylePin +  " dd-text-white dd-absolute  dd-dd-flex dd-items-center dd-justify-left dd-text-xs dd-p-2 dd-rounded-md " + this.fixedStyle + " dd-drop-shadow-md dd-z-50";

      const addAnimation = this.isAnimate ? "motion-safe:dd-animate-bounce" : "";

      switch (this.tooltipWidth) {
        case "dd-fixed":
          fixedProperties = fixedProperties + "  dd-min-w-[20rem] ";
        case "dd-auto":
          fixedProperties = fixedProperties + " dd-max-w-[20rem] ";
      }

      switch (this.toolTipPosition) {
        case "top":
          return (
            fixedProperties +
            " " +
            "after:-dd-bottom-1 after:dd-left-3  dd-bottom-8 " +
            " " +
            addAnimation
          );

        case "bottom":
          return (
            fixedProperties +
            " " +
            addAnimation +
            " " +
            "after:-dd-top-1 after:dd-left-3 dd-top-10"
          );
        case "left":
          return (
            fixedProperties +
            " " +
            addAnimation +
            " " +
            "after:-dd-right-1 after:dd-top-4 dd-right-[105%] dd-top-0 "
          );

        case "right":
          return (
            fixedProperties +
            " " +
            addAnimation +
            " " +
            "after:-dd-left-1 after:dd-top-4 dd-left-[50%] dd-top-0 "
          );

        default:
          break;
      }
    },
  },
};
</script>
