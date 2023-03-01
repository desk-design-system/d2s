<template>
  <vue-tel-input v-bind="config" :id="id" v-model="inputModelValue"></vue-tel-input>
</template>
<script setup>
import { ref, computed } from "vue"
import {VueTelInput} from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

const emits = defineEmits( ['update:modelValue','change'] )
const props = defineProps( {
  id: {
    type: String,
    default: "",
  },
  config:{
    type: Object,
    default: () =>({}),
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: null,
  },

} )
const inputModelValue = computed( {
  get () {
    return props.modelValue
  },
  set ( val ) {
    emits( "update:modelValue", val )
    emits( "change", val )
  }
} )

</script>
<style >
.vue-tel-input {
  border-radius:6px  !important;
  border-width: 1px;
  border-color: #D1D5DB !important;
}
.vue-tel-input input{
  border-top-right-radius: 6px  !important;
  border-bottom-right-radius: 6px  !important;
  box-shadow: unset !important;
}
.vue-tel-input:focus-within {
  box-shadow: unset !important;
  border-color:  #0f766e !important;
  border-width: 1px;
}
.vti__dropdown{
  border-top-left-radius: 6px  !important;
  border-bottom-left-radius: 6px  !important;
}


</style>