<template>
  <dd-input :suffix="controls" class="input-number" v-model="numberInputModelVal">
    <template v-if="controls" #suffix>
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
  </dd-input>
</template>

<script setup>
import { computed } from "vue";
import { DdButton, DdInput } from "../components";

const props = defineProps({
  modelValue: {
    type: Number,
    default:null,
  },
  controls: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

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
