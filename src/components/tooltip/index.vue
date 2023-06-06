<template>
  <div @mouseleave="toolTipVisibility" @mouseenter="toolTipVisibility" class="dd-relative dd-py-2">
    <span v-if="showToolTip" v-bind:class="toolTipStyling">{{ toolTipText }}
    </span>
    <slot></slot>
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
      let fixedProperties =
        "dd-z-50 dd-whitespace-pre-line  after:dd-content-[''] after:dd-absolute after:dd-p-1 after:-dd-rotate-45 " + this.fixedStylePin + " dd-text-white dd-absolute  dd-flex dd-items-center dd-justify-left dd-text-xs dd-p-2 dd-rounded-md " + this.fixedStyle + " dd-drop-shadow-md dd-z-50";

      const addAnimation = this.isAnimate ? "motion-safe:dd-animate-bounce" : "";

      switch (this.tooltipWidth) {
        case "dd-fixed":
          fixedProperties = fixedProperties + "  dd-min-w-[5rem] ";
        case "dd-auto":
          fixedProperties = fixedProperties + " dd-max-w-[20rem] ";
      }

      switch (this.toolTipPosition) {
        case "top-start":
          return (
            fixedProperties +
            " " +
            "after:-dd-bottom-1 after:dd-left-4 dd-bottom-9 " +
            " " +
            addAnimation
          );

        case "top":
          return (
            fixedProperties +
            " " +
            "after:-dd-bottom-1 after:dd-left-9 dd-bottom-9 " +
            " " +
            addAnimation
          );

        case "top-end":
          return (
            fixedProperties +
            " " +
            "after:-dd-bottom-1 after:dd-left-14 dd-bottom-9 " +
            " " +
            addAnimation
          );

        case "bottom-start":
          return (
            fixedProperties +
            " " +
            addAnimation +
            " " +
            "after:-dd-top-1 after:dd-left-4 dd-top-10 "
          );

        case "bottom":
          return (
            fixedProperties +
            " " +
            addAnimation +
            " " +
            "after:-dd-top-1 after:dd-left-9 dd-top-10 "
          );

        case "bottom-end":
          return (
            fixedProperties +
            " " +
            addAnimation +
            " " +
            "after:-dd-top-1 after:dd-left-14 dd-top-10 "
          );

        case "left-start":
          return (
            fixedProperties +
            " " +
            addAnimation +
            " " +
            "after:-dd-right-1 after:dd-top-2 -dd-left-20 dd-top-0 "
          );

        case "left":
          return (
            fixedProperties +
            " " +
            addAnimation +
            " " +
            "after:-dd-right-1 after:dd-top-3 -dd-left-20 dd-top-0 "
          );

        case "left-end":
          return (
            fixedProperties +
            " " +
            addAnimation +
            " " +
            "after:-dd-right-1 after:dd-top-4 -dd-left-20 dd-top-0 "
          );

        case "right-start":
          return (
            fixedProperties +
            " " +
            addAnimation +
            " " +
            "after:-dd-left-1 after:dd-top-2 dd-left-24 dd-top-0 "
          );

        case "right":
          return (
            fixedProperties +
            " " +
            addAnimation +
            " " +
            "after:-dd-left-1 after:dd-top-3 dd-left-24 dd-top-0 "
          );

        case "right-end":
          return (
            fixedProperties +
            " " +
            addAnimation +
            " " +
            "after:-dd-left-1 after:dd-top-4 dd-left-24 dd-top-0 "
          );

        default:
          break;
      }
    },
  },
};
</script>
