<template>
  <div class="dd-card" :class="hasCustomClass ? customStyle : defaultClasses">
   {{ title }} {{ customStyle }}
    <slot></slot>
  </div>
</template>

<script>
export default {
  computed:{
    hasCustomClass(){
      if(this.customStyle){
        return true
      } 
      return false
    }
  },
  data() {
    return {
      defaultClasses: "dd-p-6 dd-rounded  dd-drop-shadow-sm dd-bg-white"
    }
  },
    props:{
        title:{
            type: String,
            default: ""
        },
        customStyle:{
          type: String,
          default: ""
        }
    }
};
</script>

