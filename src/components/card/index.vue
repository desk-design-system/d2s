<template>
  <div class="dd-card" :class="[hasCustomClass ? customStyle : defaultClasses, elevationFun ]">
    <slot> {{ title }} </slot>
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
  data () {
    return {
      defaultClasses: "dd-p-6 dd-rounded dd-bg-white"
    }
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    customStyle: {
      type: String,
      default: ""
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

