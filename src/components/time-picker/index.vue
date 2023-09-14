<template>
  <div>
    <div class="dd-flex dd-gap-1 dd-items-center">
      <DdInputNumber
        class="dd-max-w-[44px]"
        :controls="false"
        v-model="hours"
        placeholder="00"
        @input="inputModelValue"
      />
      :
      <DdInputNumber
        class="dd-max-w-[44px]"
        :controls="false"
        v-model="minutes"
        placeholder="00"
        @input="inputModelValue"
      />
      :
      <DdButton type="secondary" content="textOnly">
        <template #default>
          <div class="dd-flex dd-items-center dd-gap-x-0.5">
            <p>
              {{ meridiem.toUpperCase() }}
            </p>
            <div class="dd-rotate-90">
              <DdSvgIcon @click.stop="changeMeridiem" icon="Shift" size="16" />
            </div>
          </div>
        </template>
      </DdButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DdButton, DdInput, DdInputNumber, DdSvgIcon } from "../components";

const props = defineProps({
  modelValue: {
    type: String,
    default: "00 00 am",
  },
});

const emit = defineEmits(["update:modelValue"]);

const hours = ref("");
const minutes = ref("");
const meridiem = ref("am");

const changeMeridiem = () => {
  meridiem.value = meridiem.value === "am" ? "pm" : "am";
  inputModelValue();
};

const inputModelValue = () => {
  hours.value = hours.value > 12 ? 12 : hours.value;
  minutes.value = minutes.value > 59 ? 59 : minutes.value;
  const modelString = `${hours.value == "" ? "00" : hours.value}:${
    minutes.value == "" ? "00" : minutes.value
  } ${meridiem.value}`;
  emit("update:modelValue", modelString);
};
</script>
