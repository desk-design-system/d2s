<template>
  <div class="dd-base dd-flex dd-items-center dd-p-[2px] !dd-h-5">
    <input
      :checked="checked"
      :disabled="disabled"
      :indeterminate="selectedId.length > 0 ? indeterminate : null"
      :value="value ? value : modelValue"
      v-bind="$attrs"
      v-model="inputModelValue"
      :id="id"
      type="checkbox"
      :class="[
        disabled
          ? ' !dd-cursor-not-allowed !dd-border-gray-200 !dd-text-gray-400'
          : 'dd-cursor-pointer !dd-text-teal-600',
      ]"
      class="
        !dd-h-4 !dd-w-4 !dd-rounded !dd-border-solid
        focus:!dd-ring-teal-500
      "
      style="border-color: rgb(209, 213, 219)"
      @click="getChecked"
      @change="onChange"
    />
    <dd-form-element
      :label="label"
      class="!dd-ml-2"
      :class="[disabled ? '!dd-text-gray-300' : '!dd-text-gray-700']"
    >
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
    </dd-form-element>

  </div>
</template>

<script setup>
import { computed, ref, toRaw } from "vue";
const emits = defineEmits([
  "update:modelValue",
  "change",
  "click",
  "indeterminate",
]);
import DdFormElement from "../FormElement/index.vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  value: {
    type: [String, Number, Boolean],
    default: null,
  },
  rows: {
    type: [Array, Object],
    default: () => ({
      name: "name",
      value: "value",
      avatar: "avatar",
    }),
    required: false,
  },
  selectedId: {
    type: [Array, Object],
    default: () => ({
      id: "1",
    }),
    required: false,
  },
});



const inputModelValue = ref(props.modelValue)

const modelValArray = ref([])
const onChange = () => {
  if (Array.isArray(toRaw(props.modelValue))) {
    modelValArray.value = [...props.modelValue]
    if(modelValArray.value.includes(props.value)) modelValArray.value = modelValArray.value.filter(el => el!== ( props.value || props.modelValue ))
    else modelValArray.value.push(props.value)
      emits("update:modelValue", modelValArray.value);
      emits("change", modelValArray.value);
    } else {
      emits("update:modelValue", props.value == props.modelValue  ? null : props.value || inputModelValue.value);
      emits("change", props.value );
    }
}

function getChecked() {
  emits("click");
}

const indeterminate = computed(() => {
  if (inputModelValue.value === null || props.modelValue == true) {
    return false;
  } else {
    const allChecked = props.rows.every((row) => row.disabled);
    emits("indeterminate");
    return !allChecked;
  }
});
</script>

<style lang="scss" scoped></style>
