<template>
  <dd-input  type="number" @blur="handleBlur" :suffix="controls || $slots.suffix" class="input-number" v-model="numberInputModelVal" >
    <template v-if="controls || $slots.suffix" #suffix>
      <slot v-if="!controls" name="suffix">
    
      </slot>
      <template v-if="controls">
        <div class="dd-flex dd-gap-x-1 -dd-m-[7px]">
          <dd-button
          type="secondary"
          content="iconOnly"
          :disabled="isString"
            icon="Plus"
            size="xs"
            class="!dd-px-1"
            @click="increment"
          />

          <dd-button
            type="secondary"
            content="iconOnly"
            icon="Minus"
            size="xs"
            class="!dd-px-1 disbled-button"
            :disabled="disabled"
            @click="decrement"
          />
        </div>
      </template>
    </template>
  </dd-input>
</template>

<script setup>
import { computed, nextTick } from "vue";
import { DdButton, DdInput } from "../components";

let oldValue = null

const props = defineProps({
  modelValue: {
    type: [Number,String],
    default:null,
  },
  min: {
    type: Number,
    default: null,
  },
  max: {
    type: Number,
    default: null,
  },
  controls: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["update:modelValue", "blur"]);

const minValue = () =>{
  if(Number(props.min) > Number(numberInputModelVal.value)) {
    numberInputModelVal.value = oldValue
  }
}
const maxValue = () =>{
  if(Number(props.max) < Number(numberInputModelVal.value)) {
    numberInputModelVal.value = oldValue
  }
}

const handleBlur = (event)=> {

if (numberInputModelVal.value == null || numberInputModelVal.value == '') {
  numberInputModelVal.value = 0
}

  if (props.min !== null) {
    minValue()
  } 
  if (props.max !== null) {
    maxValue()
  }
  nextTick(() =>{
    oldValue = numberInputModelVal.value
  })
emit('blur', event)
}

const numberInputModelVal = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit("update:modelValue", val);
  },
});

const disabled = computed(()=>{
  return numberInputModelVal.value == 0 || numberInputModelVal.value == null || !Number.isInteger( numberInputModelVal.value)
})

const increment = () => {
  numberInputModelVal.value = !numberInputModelVal.value ? numberInputModelVal.value + 1 :  parseInt(numberInputModelVal.value) + 1;
};

const decrement = () => {
  numberInputModelVal.value = !numberInputModelVal.value ? numberInputModelVal.value-1 :  parseInt(numberInputModelVal.value) - 1;
};

const isString = computed( ()=>{
  return !Number.isInteger(parseInt(numberInputModelVal.value)) && numberInputModelVal.value 
})

// const nonNegativeNumber = (event) => {
//   numberInputModelVal.value =  !!numberInputModelVal.value && Math.abs(numberInputModelVal.value) >= 0 ? Math.abs(numberInputModelVal.value) : null
// }

</script>

<style>
.input-number input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.input-number input[type="number"] {
  -moz-appearance: textfield;
}

.input-number button[class*='!dd-cursor-not-allowed']{
  padding-inline: 4px;
}
</style>
