<template>
  <div class="dd-h-screen dd-w-full dd-flex dd-items-center dd-justify-center">
    <!-- Spinner -->
    <div class="dd-relative">
      <!-- Outer Ring-->
      <div :class="[loaderOuterRingStyling]"></div>
      <!-- Inner Ring -->
      <div :class="[loaderInnerRingStyling]"></div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    color: {
      type: String,
      validator: function (value) {
        // The value must match one of these strings
        return (
          ["green", "red", "blue", "purple", "yellow", "gray"].indexOf(
            value
          ) !== -1
        );
      },
      default: "gray",
    },
    size: {
      type: String,
      validator: function (value) {
        // The value must match one of these strings
        return ["xs", "sm", "md", "lg", "xl", "xxl"].indexOf(value) !== -1;
      },
      default: "sm",
    },
  },
  data() {
    return {
      xs: " dd-w-6 dd-h-6 dd-border-2 ",
      sm: " dd-w-8 dd-h-8 dd-border-2 ",
      md: " dd-w-10 dd-h-10 dd-border-4 ",
      lg: " dd-w-12 dd-h-12 dd-border-4 ",
      xl: " dd-w-14 dd-h-14 dd-border-8 ",
      xxl: " dd-w-16 dd-h-16 dd-border-8 ",
    };
  },
  computed: {
    loaderOuterRingStyling() {
      let fixedStyle =
        " dd-rounded-full dd-absolute dd-border-solid dd-border-gray-200 ";

      switch (this.size) {
        case "xs":
          return (fixedStyle + this.xs);
        case "sm":
          return (fixedStyle + this.sm);
        case "md":
          return (fixedStyle + this.md);
        case "lg":
          return (fixedStyle + this.lg);
        case "xl":
          return (fixedStyle + this.xl);
        case "xxl":
          return (fixedStyle + this.xxl);
        default:
          break;
      }
    },

    loaderInnerRingStyling() {
      let fixedProperties =
        " dd-absolute dd-border-solid dd-rounded-full dd-border-t-transparent dd-animate-spin ";

      switch (this.size) {
        case "xs":
          fixedProperties = fixedProperties + this.xs;
          break;
        case "sm":
          fixedProperties = fixedProperties + this.sm;
          break;
        case "md":
          fixedProperties = fixedProperties + this.md;
          break;
        case "lg":
          fixedProperties = fixedProperties + this.lg;
          break;
        case "xl":
          fixedProperties = fixedProperties + this.xl;
          break;
        case "xxl":
          fixedProperties = fixedProperties + this.xxl;
          break;
        default:
          break;
      }

      switch (this.color) {
        case "green":
          return fixedProperties + " " + " dd-border-green-500 " + " ";

        case "red":
          return fixedProperties + " " + " dd-border-red-500 " + " ";

        case "blue":
          return fixedProperties + " " + " dd-border-blue-500 " + " ";

        case "purple":
          return fixedProperties + " " + " dd-border-purple-500 " + " ";

        case "yellow":
          return fixedProperties + " " + " dd-border-yellow-500 " + " ";

        case "gray":
          return fixedProperties + " " + " dd-border-gray-500 " + " ";

        default:
          break;
      }
    },
  },
};
</script>
  