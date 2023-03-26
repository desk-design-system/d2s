<template>
  <!-- <div> -->
  <!-- default -->
  <button v-bind="$attrs" v-if="type == 'default'" :class="{ ...defaultButton }" class="
          dd-inline-flex
          dd-items-center
          dd-shadow-sm
          dd-font-semibold
          dd-capitalize
          dd-whitespace-nowrap
        ">
      <svgIcon  v-if="prefix" :icon="icon" :size="iconSize" />
      <svg v-if="loader" aria-hidden="true" :class="[size == 'xs' || size == 'sm' ? 'dd-h-3 dd-w-3' : 'dd-h-4 dd-w-4']" class=" dd-animate-spin dd-fill-teal-600 dd-text-white-50 " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
  </svg>
    <slot v-if="!loader"> {{ title }}</slot>
    <svgIcon  v-if="suffix" :icon="icon" :size="iconSize" />
  </button>

  <!-- round -->
  <button v-bind="$attrs" v-else-if="type == 'round'" :class="{
    'border-gray-300 dd-text-gray-700 dd-border  focus:dd-outline-none':
      color == '',
    ' dd-px-2.5 dd-py-1.5 dd-text-xs': size === 'xs',
    ' dd-px-3 dd-py-2 dd-text-sm': size === 'sm',
    ' dd-px-4 dd-py-2 dd-text-sm': size === 'base',
    ' dd-px-4 dd-py-2 dd-text-base': size === 'lg',
    ' dd-px-6 dd-py-3 dd-text-base': size === 'xl',
    'dd-bg-teal-600 dd-text-white hover:dd-bg-teal-700':
      color === 'primary',
    'dd-bg-yellow-600 dd-text-white hover:dd-bg-yellow-700': color === 'warning',
    'dd-bg-green-600 dd-text-white hover:dd-bg-green-700':
      color === 'success',
    'dd-bg-red-600 dd-text-white hover:dd-bg-red-700': color === 'danger',
    'dd-cursor-not-allowed !dd-bg-gray-200 !dd-text-gray-400 hover:dd-bg-gray-300': disable,
  }" class="
          dd-inline-flex
          dd-items-center
          dd-shadow-sm
          dd-rounded-full
          dd-font-medium
          dd-capitalize
          dd-whitespace-nowrap
        ">
    <slot>{{ title }}</slot>
  </button>
  <button v-bind="$attrs" v-else-if="type == 'text'" :class="{
    ' dd-text-gray-700  hover:dd-text-gray-900 ': color == '',
    '  dd-py-1.5 dd-text-xs': size === 'xs',
    '  dd-py-2 dd-text-sm': size === 'sm',
    '  dd-py-2 dd-text-sm': size === 'base',
    '  dd-py-2 dd-text-base': size === 'lg',
    '  dd-py-3 dd-text-base': size === 'xl',
    ' dd-text-teal-700 hover:dd-text-teal-700': color === 'primary',
    ' dd-text-red-600 hover:dd-text-red-700': color === 'danger',
    'dd-text-yellow-600  hover:dd-text-yellow-700': color === 'warning',
    'dd-text-green-600  hover:dd-text-green-700':
      color === 'success',
    'dd-cursor-not-allowed  !dd-text-gray-400 hover:dd-text-gray-500 hover:dd-text-transparent	': disable,
  }" class="
          dd-inline-flex
          dd-items-center
          dd-font-medium
          dd-capitalize
          dd-whitespace-nowrap
        ">
    <slot>{{ title }}</slot>
  </button>

  <button v-else-if="type == 'circle'" :class="{
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
    'dd-cursor-not-allowed !dd-bg-gray-200 !dd-text-gray-400 hover:dd-bg-gray-300': disable,
  }" class="
          dd-inline-flex
          dd-items-center
          dd-shadow-sm
          dd-font-medium
          dd-rounded-full
          dd-capitalize
          dd-whitespace-nowrap
        ">
    <slot>{{ title }}</slot>
  </button>
  <!-- </div> -->
</template>

<script>
import svgIcon from "../svgIcon/index.vue"
export default {
  props: {
    prefix: {
      type: Boolean,
      default: false,
    },
    loader:{
      type: Boolean,
      default: false,
    },
    suffix: {
      type: Boolean,
      default: false,
    },
    iconSize: {
      type: String,
      default: "20",
    },
    icon:{
      type: String,
      default: null,
    },
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
      validator: function ( value ) {
        // The value must match one of these strings
        return (
          ["xs", "sm", "base", "lg", "xl"].indexOf( value ) !== -1
        )
      },
      default: "base",
    },
    type: {
      type: String,
      validator: function ( value ) {
        // The value must match one of these strings
        return ["default", "round", "text", "circle"].indexOf( value ) !== -1
      },
      default: "default",
    },
  },
  computed: {
    defaultButton () {
      return {
        "dd-border-gray-300 dd-text-gray-700 dd-border  focus:dd-outline-none":
          this.color == "",
        "dd-px-2 dd-py-1 dd-text-xs dd-rounded": this.size === "xs",
        "dd-px-2 dd-py-1 dd-text-sm  dd-rounded-md":
          this.size === "sm",
        "dd-px-2.5 dd-py-1.5 dd-text-sm dd-rounded-md": this.size === "base",
        "dd-px-3 dd-py-2 dd-text-sm dd-rounded-md": this.size === "lg",
        "dd-px-3.5 dd-py-2.5 dd-text-sm dd-rounded-md": this.size === "xl",
        "dd-cursor-not-allowed !dd-bg-gray-200 !dd-text-gray-400 hover:dd-bg-gray-300":
          this.disable,
        "dd-bg-teal-600 dd-text-white hover:dd-bg-teal-700":
          this.color === "primary",
        "dd-bg-yellow-600 dd-text-white hover:dd-bg-yellow-700":
          this.color === "warning",
        "dd-bg-green-600 dd-text-white hover:dd-bg-green-700":
          this.color === "success",
        "dd-bg-red-600 dd-text-white hover:dd-bg-red-700":
          this.color === "danger",
        "dd-w-full dd-justify-center": this.block,
        "dd-bg-white dd-ring-1 dd-ring-inset dd-ring-gray-300 dd-text-gray-700 hover:dd-bg-gray-50 focus:dd-outline-none":
          this.color === "white",
        "dd-border dd-border-teal-500 dd-bg-teal-50 dd-text-gray-700":
          this.color === "selected",
      }
    },
  },
  data () {
    return {}
  },
  components:{
    svgIcon
  }
}
</script>

<style lang="scss" scoped></style>
