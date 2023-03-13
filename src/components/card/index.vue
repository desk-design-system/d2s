<template>
  <div class="dd-card dd-rounded dd-bg-white" :class="elevationFun">
    <div class="dd-p-5 dd-border-b dd-border-gray-300" v-if="header">
      <p class="dd-text-lg dd-text-gray-700 dd-font-medium dd-pb-1">{{ title }} </p>
      <p class="dd-text-sm dd-text-gray-700">{{ subTitle }}</p>
    </div>
    <!-- :class="[hasCustomClass ? customStyle : defaultClasses]" -->
    <div class="dd-p-5" >
    <slot> {{ content }} </slot>
  </div>
  </div>
</template>

<script>
export default {
  computed: {
    hasCustomClass () {
      if ( this.customStyle ) {
        return true
      }
      return false
    },
    elevationFun () {
      if ( this.elevation == 'sm' ) {
        return 'dd-drop-shadow-sm'
      } else if ( this.elevation == 'lg' ) {
        return 'dd-drop-shadow-lg'
      } else if ( this.elevation == 'xl' ) {
        return 'dd-drop-shadow-xl'
      } else {
        return ''
      }
    }
  },
  // data () {
  //   return {
  //     defaultClasses: "dd-p-6 dd-rounded dd-bg-white"
  //   }
  // },
  props: {
    content: {
      type: String,
      default: ""
    },
    customStyle: {
      type: String,
      default: ""
    },
    header:{
      type: Boolean,
      default: false
    },
    heading:{
      type: String,
      default: ''
    },
    subTitle:{
      type: String,
      default: ''
    },
    elevation: {
      type: String,
      validator: function ( value ) {
        // The value must match one of these strings
        return (
          ["none", "sm", "lg", 'xl'].indexOf( value ) !== -1
        )
      },
      default: "none",
    },
  }
}
</script>

