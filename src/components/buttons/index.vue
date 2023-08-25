<template>
  <button
    v-if="disabled"
    :id="id"
    :class="{ ...defaultButton }"
    :style="[
      loader ? 'cursor: not-allowed;' : 'cursor: pointer;',
      title && content !== 'iconOnly' ? 'gap: 4px' : 'gap: 0px',
    ]"
    class="dd-inline-flex dd-items-center focus:!dd-ring-0 dd-font-semibold dd-capitalize dd-whitespace-nowrap dd-cursor-pointer dd-justify-center"
  >
    <svg
      v-if="loader"
      aria-hidden="true"
      :class="[
        size == 'xs' || size == 'sm' ? 'dd-h-3.5 dd-w-3.5' : 'dd-h-4 dd-w-4',
        setSpinnerColor,
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
    <svgIcon
      v-if="leftIconProperty"
      :icon="!loader ? icon : ''"
      :size="btnIconSize"
      class="dd-text-gray-500"
    />
    <span
      v-if="content !== 'iconOnly'"
      :class="[leftIconSpace, rightIconSpace, loader ? 'dd-invisible' : '']"
    >
      <slot v-if="content !== 'iconOnly'"> {{ title }}</slot>
    </span>
    <svgIcon
      v-if="rightIconProperty"
      :icon="!loader ? icon : ''"
      :size="btnIconSize"
      class="dd-text-gray-500"
    />
  </button>

  <button
    v-else-if="!loader"
    v-bind="$attrs"
    :id="id"
    :class="{ ...defaultButton }"
    :style="[
      loader ? 'cursor: not-allowed;' : 'cursor: pointer;',
      title && content !== 'iconOnly' ? 'gap: 4px' : 'gap: 0px',
    ]"
    class="dd-inline-flex dd-items-center dd-font-semibold dd-capitalize dd-whitespace-nowrap dd-cursor-pointer dd-justify-center"
  >
    <svg
      v-if="loader"
      aria-hidden="true"
      :class="[
        size == 'xs' || size == 'sm' ? 'dd-h-3.5 dd-w-3.5' : 'dd-h-4 dd-w-4',
        setSpinnerColor,
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
    <svgIcon
      v-if="leftIconProperty"
      :icon="!loader ? icon : ''"
      :size="btnIconSize"
      class="dd-text-gray-500"
    />
    <span
      v-if="content !== 'iconOnly'"
      :class="[leftIconSpace, rightIconSpace, loader ? 'dd-invisible' : '']"
    >
      <slot v-if="content !== 'iconOnly'"> {{ title }}</slot>
    </span>
    <svgIcon
      v-if="rightIconProperty"
      :icon="!loader ? icon : ''"
      :size="btnIconSize"
      class="dd-text-gray-500"
    />
  </button>

  <button
    v-else
    :id="id"
    :class="{ ...defaultButton }"
    :style="[loader ? 'cursor: not-allowed;' : 'cursor: pointer;']"
    class="dd-inline-flex focus:!dd-ring-0 dd-items-center dd-font-semibold dd-capitalize dd-whitespace-nowrap dd-cursor-pointer dd-justify-center"
  >
    <svg
      v-if="loader "
      aria-hidden="true"
      :class="[
        size == 'xs' || size == 'sm' ? 'dd-h-3.5 dd-w-3.5' : 'dd-h-4 dd-w-4',
        setSpinnerColor,
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
    <div :class="loaderProperty"></div>
    <span
      v-if="content !== 'iconOnly'"
      :class="[leftIconSpace, rightIconSpace, loader ? 'dd-invisible' : '']"
    >
      <slot> {{ title }}</slot>
    </span>
    <div :class="loaderProperty"></div>
  </button>
</template>

<script>
import svgIcon from "../svgIcon/index.vue";
export default {
  props: {
    loader: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String || Number,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: "",
    },
    disabled: {
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
        return (
          ["primary", "secondary", "tertiary", "danger"].indexOf(value) !== -1
        );
      },
      default: "primary",
    },
    content: {
      type: String,
      validator: function (value) {
        // The value must match one of these strings
        return (
          ["textOnly", "leftIcon", "rightIcon", "iconOnly"].indexOf(value) !==
          -1
        );
      },
      required: true,
      default: "textOnly",
    },
  },
  inheritAttrs: false,
  computed: {
    defaultButton() {
      if (this.type == "primary") {
        return {
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
          "!dd-cursor-not-allowed !dd-bg-gray-100 focus:!dd-ring-0 dd-shadow-sm !dd-text-gray-400 hover:dd-bg-gray-300":
            this.disabled,
          "dd-w-full dd-justify-center": this.block,
          "dd-bg-teal-600 dd-text-white hover:dd-bg-teal-500 focus:dd-ring focus:!dd-ring-teal-400":
            this.type == "primary",
        };
      }
      if (this.type == "secondary") {
        return {
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
          "!dd-cursor-not-allowed !dd-bg-gray-100 focus:!dd-ring-0 dd-shadow-sm !dd-text-gray-400 hover:dd-bg-gray-300":
            this.disabled,
          "dd-w-full dd-justify-center": this.block,
          "dd-border-gray-300 dd-text-gray-700 focus:dd-ring focus:!dd-ring-teal-500 dd-border dd-bg-white dd-shadow-sm focus:dd-outline-none":
            this.type == "secondary",
        };
      }
      if (this.type == "danger") {
        return {
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
          "!dd-cursor-not-allowed !dd-bg-gray-100 focus:!dd-ring-0 dd-shadow-sm !dd-text-gray-400 hover:dd-bg-gray-300":
            this.disabled,
          "dd-bg-red-600 dd-text-white hover:dd-bg-red-400 focus:dd-ring focus:!dd-ring-red-400":
            this.type == "danger",
          "dd-w-full dd-justify-center": this.block,
        };
      }
      if (this.type == "tertiary") {
        return {
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
          "!dd-cursor-not-allowed !dd-text-gray-300 focus:!dd-ring-0 hover:!dd-bg-white dd-rounded":
            this.disabled,
          "dd-text-teal-600 !dd-bd-white hover:dd-bg-gray-50 focus:dd-ring focus:!dd-ring-teal-500":
            this.type == "tertiary",
          "dd-w-full dd-justify-center": this.block,
        };
      }
    },
    leftIconProperty() {
      if (this.content === "leftIcon") {
        return true;
      } else if (this.content === "iconOnly") {
        return true;
      }
    },
    rightIconProperty() {
      if (this.content === "rightIcon") {
        return true;
      } else if (this.content === "iconOnly") {
        return false;
      }
    },
    setSpinnerColor() {
      if (this.type === "danger") {
        return "dd-fill-red-400";
      } else if (this.type === "primary") {
        return "dd-fill-teal-400";
      } else if (this.type === "secondary") {
        return "dd-fill-gray-300";
      } else if (this.type === "tertiary") {
        return "dd-fill-gray-200";
      }
      return "dd-fill-gray-200";
    },
    leftIconSpace() {
      if (
        this.content === "leftIcon" &&
        this.icon &&
        !this.loader &&
        this.$slots.default
      ) {
        return "dd-ml-1.5";
      }
    },
    rightIconSpace() {
      if (
        this.content === "rightIcon" &&
        this.icon &&
        !this.loader &&
        this.$slots.default
      ) {
        return "dd-mr-1.5";
      }
    },
    btnIconSize() {
      if (this.size == "xs") {
        return "16";
      } else if (this.size == "sm") {
        return "16";
      } else if (this.size == "base") {
        return "16";
      } else if (this.size == "lg") {
        return "20";
      } else if (this.size == "xl") {
        return "20";
      }
    },
    loaderProperty() {
      if (this.content === "textOnly") {
        return;
      } else if (this.content === "iconOnly") {
        if (this.size == "xs") {
          return "!dd-w-2 !dd-h-2";
        } else if (this.size == "sm") {
          return "!dd-w-2 !dd-h-2";
        } else if (this.size == "base") {
          return "!dd-w-2 !dd-h-2";
        } else if (this.size == "lg") {
          return "!dd-w-2.5 !dd-h-2.5";
        } else if (this.size == "xl") {
          return "!dd-w-2.5 !dd-h-2.5";
        }
      } else {
        if (this.size == "xs") {
          return "!dd-w-2.5 !dd-h-2.5";
        } else if (this.size == "sm") {
          return "!dd-w-2.5 !dd-h-2.5";
        } else if (this.size == "base") {
          return "!dd-w-2.5 !dd-h-2.5";
        } else if (this.size == "lg") {
          return "!dd-w-3 !dd-h-3";
        } else if (this.size == "xl") {
          return "!dd-w-3 !dd-h-3";
        }
      }
    },
  },
  components: {
    svgIcon,
  },
};
</script>

<style lang="scss" scoped></style>
