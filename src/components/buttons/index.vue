<template>
  <button
    v-if="!loader"
    v-bind="$attrs"
    :id="id"
    :class="{ ...defaultButton }"
    :style="[loader ? 'cursor: not-allowed;' : 'cursor: pointer;']"
    class="dd-inline-flex dd-items-center dd-font-semibold dd-capitalize dd-whitespace-nowrap dd-cursor-pointer dd-justify-center"
  >
    <svg
      v-if="loader"
      aria-hidden="true"
      :class="[
        size == 'xs' || size == 'sm' ? 'dd-h-3.5 dd-w-3.5' : 'dd-h-4 dd-w-4',
        color ? setSpinnerColor : '',
      ]"
      class="dd-animate-spin dd-text-white-50 dd-absolute"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <svgIcon v-if="prefix && !loader" :icon="icon" :size="btnIconSize" />
    <span :class="[prefixSpace, sufixSpace, loader ? 'dd-invisible' : '']">
      <slot> {{ title }}</slot>
    </span>
    <svgIcon v-if="suffix && !loader" :icon="icon" :size="btnIconSize" />
  </button>
  <button
    v-else
    :id="id"
    :class="{ ...defaultButton }"
    :style="[loader ? 'cursor: not-allowed;' : 'cursor: pointer;']"
    class="dd-inline-flex dd-items-center dd-font-semibold dd-capitalize dd-whitespace-nowrap dd-cursor-pointer dd-justify-center"
  >
    <svg
      v-if="loader"
      aria-hidden="true"
      :class="[
        size == 'xs' || size == 'sm' ? 'dd-h-3.5 dd-w-3.5' : 'dd-h-4 dd-w-4',
        color ? setSpinnerColor : '',
      ]"
      class="dd-animate-spin dd-text-white-50 dd-absolute"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <svgIcon v-if="prefix && !loader" :icon="icon" :size="btnIconSize" />
    <span :class="[prefixSpace, sufixSpace, loader ? 'dd-invisible' : '']">
      <slot> {{ title }}</slot>
    </span>
    <svgIcon v-if="suffix && !loader" :icon="icon" :size="btnIconSize" />
  </button>
</template>

<script>
import svgIcon from "../svgIcon/index.vue";
export default {
  props: {
    prefix: {
      type: Boolean,
      default: false,
    },
    loader: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String || Number,
      default: null,
    },
    suffix: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "primary",
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
        return ["xs", "sm", "base", "lg", "xl"].indexOf(value) !== -1;
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
      if (this.type == "default") {
        return {
          "dd-border-gray-300 dd-text-gray-700 dd-border dd-shadow-sm focus:dd-outline-none":
            this.color == "",
          "dd-px-[7px] dd-h-6 dd-text-xs dd-font-normal dd-shadow-sm dd-rounded":
            this.size === "xs",
          "dd-px-[7px] dd-h-7 dd-text-sm  dd-font-normal dd-shadow-sm dd-rounded-md":
            this.size === "sm",
          "dd-px-2 dd-h-8 dd-text-sm dd-font-normal dd-shadow-sm dd-rounded-md":
            this.size === "base",
          "dd-px-2.5 dd-h-9 dd-text-sm dd-font-normal dd-shadow-sm dd-rounded-md":
            this.size === "lg",
          "dd-px-3 dd-h-10 dd-text-sm dd-font-normal dd-shadow-sm dd-rounded-md":
            this.size === "xl",
          "dd-cursor-not-allowed !dd-bg-gray-200 dd-shadow-sm !dd-text-gray-400 hover:dd-bg-gray-300":
            this.disable,
          "dd-bg-teal-600 dd-text-white hover:dd-bg-teal-500":
            this.color === "primary",
          "dd-bg-yellow-600 dd-text-white hover:dd-bg-yellow-500":
            this.color === "warning",
          "dd-bg-green-600 dd-text-white hover:dd-bg-green-500":
            this.color === "success",
          "dd-bg-red-600 dd-text-white hover:dd-bg-red-500":
            this.color === "danger",
          "dd-w-full dd-justify-center": this.block,
          "!dd-bg-white dd-ring-1 dd-ring-inset dd-ring-gray-300 dd-text-gray-700 hover:dd-bg-gray-50 focus:dd-outline-none":
            this.color === "white",
          "dd-border dd-border-teal-500 dd-bg-teal-50 dd-text-gray-700":
            this.color === "selected",
        };
      }
      if (this.type == "round") {
        return {
          "dd-border-gray-300 dd-text-gray-700 dd-border dd-shadow-sm focus:dd-outline-none":
            this.color == "",
          "dd-px-[7px] dd-h-6 dd-text-xs dd-font-normal dd-shadow-sm dd-rounded-lg":
            this.size === "xs",
          "dd-px-[7px] dd-h-7 dd-text-sm  dd-font-normal dd-shadow-sm dd-rounded-xl ":
            this.size === "sm",
          "dd-px-2 dd-h-8 dd-text-sm dd-font-normal dd-shadow-sm dd-rounded-xl ":
            this.size === "base",
          "dd-px-2.5 dd-h-9 dd-text-sm dd-font-normal dd-shadow-sm dd-rounded-xl ":
            this.size === "lg",
          "dd-px-3 dd-h-10 dd-text-sm dd-font-normal dd-shadow-sm dd-rounded-xl ":
            this.size === "xl",
          "dd-cursor-not-allowed !dd-bg-gray-200 dd-shadow-sm !dd-text-gray-400 hover:dd-bg-gray-300":
            this.disable,
          "dd-bg-teal-600 dd-text-white hover:dd-bg-teal-500":
            this.color === "primary",
          "dd-bg-yellow-600 dd-text-white hover:dd-bg-yellow-500":
            this.color === "warning",
          "dd-bg-green-600 dd-text-white hover:dd-bg-green-500":
            this.color === "success",
          "dd-bg-red-600 dd-text-white hover:dd-bg-red-500":
            this.color === "danger",
          "dd-w-full dd-justify-center": this.block,
          "dd-bg-white dd-ring-1 dd-ring-inset dd-ring-gray-300 dd-text-gray-700 hover:dd-bg-gray-50 focus:dd-outline-none":
            this.color === "white",
          "dd-border dd-border-teal-500 dd-bg-teal-50 dd-text-gray-700":
            this.color === "selected",
        };
      }
      if (this.type == "text") {
        return {
          "dd-bg-white dd-text-gray-700 focus:dd-outline-none hover:!dd-bg-white":
            this.color == "",
          "dd-px-[7px] dd-h-6 dd-text-xs dd-bg-white dd-rounded dd-font-normal":
            this.size === "xs",
          "dd-px-[7px] dd-h-7 dd-text-sm  dd-bg-white dd-rounded dd-font-normal":
            this.size === "sm",
          "dd-px-2 dd-h-8 dd-text-sm dd-bg-white dd-rounded dd-font-normal":
            this.size === "base",
          "dd-px-2.5 dd-h-9 dd-text-sm dd-bg-white dd-rounded dd-font-normal":
            this.size === "lg",
          "dd-px-3 dd-h-10 dd-text-sm dd-bg-white dd-rounded dd-font-normal":
            this.size === "xl",
          "dd-cursor-not-allowed !dd-text-gray-300 hover:!dd-bg-white dd-rounded":
            this.disable,
          "dd-text-teal-600 !dd-bd-white hover:dd-bg-gray-50":
            this.color === "primary",
          "dd-text-yellow-600 !dd-bd-white hover:dd-bg-gray-50":
            this.color === "warning",
          "dd-text-green-600 !dd-bd-white hover:dd-bg-gray-50":
            this.color === "success",
          "dd-text-red-600 !dd-bd-white hover:dd-bg-gray-50":
            this.color === "danger",
          "dd-w-full dd-justify-center": this.block,
          "dd-text-gray-700 !dd-bd-white hover:dd-bg-gray-50 focus:dd-outline-none":
            this.color === "white",
        };
      }
      if (this.type == "circle") {
        return {
          "dd-border-gray-300 dd-text-gray-700 dd-border dd-shadow-sm focus:dd-outline-none":
            this.color == "",
          "dd-px-[7px] dd-h-6 dd-text-xs dd-font-normal dd-shadow-sm dd-rounded-full":
            this.size === "xs",
          "dd-px-[7px] dd-h-7 dd-text-sm  dd-font-normal dd-shadow-sm dd-rounded-full ":
            this.size === "sm",
          "dd-px-2 dd-h-8 dd-text-sm dd-font-normal dd-shadow-sm dd-rounded-full ":
            this.size === "base",
          "dd-px-2.5 dd-h-9 dd-text-sm dd-font-normal dd-shadow-sm dd-rounded-full ":
            this.size === "lg",
          "dd-px-3 dd-h-10 dd-text-sm dd-font-normal dd-shadow-sm dd-rounded-full ":
            this.size === "xl",
          "dd-cursor-not-allowed !dd-bg-gray-200 !dd-text-gray-400 hover:dd-bg-gray-300":
            this.disable,
          "dd-bg-teal-600 dd-text-white hover:dd-bg-teal-500":
            this.color === "primary",
          "dd-bg-yellow-600 dd-text-white hover:dd-bg-yellow-500":
            this.color === "warning",
          "dd-bg-green-600 dd-text-white hover:dd-bg-green-500":
            this.color === "success",
          "dd-bg-red-600 dd-text-white hover:dd-bg-red-500":
            this.color === "danger",
          "dd-w-full dd-justify-center": this.block,
          "dd-bg-white dd-ring-1 dd-ring-inset dd-ring-gray-300 dd-text-gray-700 hover:dd-bg-gray-50 focus:dd-outline-none":
            this.color === "white",
          "dd-border dd-border-teal-500 dd-bg-teal-50 dd-text-gray-700":
            this.color === "selected",
        };
      }
    },
    setSpinnerColor() {
      if (this.color === "danger") {
        return "dd-fill-red-600";
      } else if (this.color === "primary") {
        return "dd-fill-teal-600";
      } else if (this.color === "warning") {
        return "dd-fill-yellow-600";
      } else if (this.color === "white") {
        return "dd-fill-teal-600";
      }
      return "dd-fill-gray-600";
    },
    prefixSpace() {
      if (
        (this.prefix && this.icon && !this.loader && this.$slots.default) ||
        this.loader
      ) {
        return "dd-ml-1.5";
      }
    },
    sufixSpace() {
      if (
        (this.suffix && this.icon && !this.loader && this.$slots.default) ||
        this.loader
      ) {
        return "dd-mr-1.5";
      }
    },
    btnIconSize() {
      if (this.size == "xs") {
        return "10";
      } else if (this.size == "sm") {
        return "14";
      } else if (this.size == "base") {
        return "16";
      } else {
        return "16";
      }
    },
  },
  inheritAttrs: false,
  data() {
    return {};
  },
  components: {
    svgIcon,
  },
};
</script>

<style lang="scss" scoped></style>
