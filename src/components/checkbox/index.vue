<template>
  <div class="dd-base">
    <input :disabled="disabled" :indeterminate="selectedId.length > 0 ? indeterminate : null" :checked="checked"
      :value="value" v-bind="$attrs" :id="id" v-model="inputModelValue" type="checkbox"
      :class="[disabled ? ' !dd-cursor-not-allowed !dd-border-gray-200 !dd-text-gray-400' : 'dd-cursor-pointer !dd-border-gray-300 !dd-text-teal-600']"
      class=" !dd-h-4 !dd-w-4 !dd-rounded  !dd-border-solid  focus:!dd-ring-teal-500 " @click="getChecked" />
    <slot name="label">
      <label :class="[disabled ? '!dd-text-gray-300' : '!dd-text-gray-700']" class="!dd-ml-3 !dd-block !dd-text-sm">
        {{ label }}
      </label>
    </slot>
  </div>
</template>

<script setup>
import { computed } from "vue"
const emits = defineEmits(['update:modelValue', 'change', 'click', 'indeterminate'])
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
    type: [String, Number, Boolean],
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false
  },
  checked: {
    type: Boolean,
    default: false,
  },
  value: {
    type: Number,
    default: 0,
  },
  rows: {
    type: Array,
    default: () => ({
      name: "name",
      value: "value",
      avatar: "avatar",
    }),
  },
  selectedId: {
    type: Array,
    default: () => ({
      id: "1",
    }),
  },
})

const inputModelValue = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits("update:modelValue", val)
    emits("change", val)
  }
})

function getChecked() {
  emits("click")
}

const indeterminate = computed(() => {
  if (inputModelValue.value === null || props.modelValue == true) {
    return false;
  } else {
    const allChecked = props.rows.every(row => row.disabled);
    emits('indeterminate')
    return !allChecked;
  }
});

</script>

<style lang="scss" scoped></style>
