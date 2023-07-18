<template>
  <div v-bind="$attrs" class="dd-w-[209px] dd-flex dd-flex-col dd-rounded-md dd-bg-white">
    <div
      v-if="searchItem"
      class="dd-flex dd-items-center dd-justify-between dd-p-3 dd-w-full"
    >
      <div class="dd-flex dd-items-center">
        <svgIcon icon="Search" size="20" class="dd-text-gray-600" />
        <dd-input
          v-model="inputModelValue"
          Border="none"
          type="text"
          :placeholder="placeholder"
          size="xs"
          @focus="emits('focus')"
          @blur="emits('blur')"
          @keydown="emits('usekeydown')"
          @keyup="emits('usekeyup')"
        />
      </div>
      <svgIcon
        icon="Close"
        size="20"
        class="dd-text-gray-600 dd-cursor-pointer"
        @click.prevent="searchItem = false"
      />
    </div>
    <div
      v-else
      class="dd-flex dd-items-center dd-justify-between dd-p-3 dd-w-full"
    >
      <h3 class="dd-text-sm dd-text-gray-600 dd-font-medium">Settings</h3>
      <svgIcon
        icon="Search"
        size="20"
        class="dd-text-gray-600 dd-cursor-pointer"
        @click.prevent="openSearch"
      />
    </div>
    <dd-divider class="!dd-my-0" />
    <div
      v-for="(value, index) in settings"
      :key="index"
      v-bind="$attrs"
      class="dd-p-3 dd-text-left dd-relative"
    >
      <div class="dd-w-full">
        <div class="dd-text-gray-500 dd-text-xs dd-font-bold" @click="getNavTitle(value)">
          {{ value?.title }}
        </div>
        <div v-for="(item, index) in value.items" :key="index" class="dd-relative -dd-left-1.5">
          <dd-nav
            :label="item?.title"
            :active="item?.active"
            :disabled="item?.disable"
            class="dd-text-sm dd-font-medium"
            @onClick="getNavValue(item)"
          />
        </div>
      </div>
      <dd-divider
        v-if="index !== settings.length - 1"
        class="dd-absolute dd-top-3"
      />
    </div>
  </div>
</template>
  
  <script setup>
import { ref, defineProps, watch, computed } from "vue";
import DdNav from "../Navlinks/index.vue";
import DdInput from "../input/index.vue";
import svgIcon from "../svgIcon/index.vue";
import DdDivider from "../divider/index.vue";

const emits = defineEmits([
  "update:modelValue",
  "change",
  "focus",
  "blur",
  "usekeyup",
  "usekeydown",
  "getNavValue",
  "getNavTitle"
]);

const props = defineProps({
  settings: {
    type: Array,
    default: null,
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const searchItem = ref(false);

const openSearch = () => {
  searchItem.value = !searchItem.value;
};



const inputModelValue = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emits("update:modelValue", val);
    emits("change", val);
  },
});

watch(
  () => inputModelValue.value,
  (newValue) => {
    inputModelValue.value = newValue;
  }
);

const getNavValue = (item) => {
  emits('getNavValue', item);
};
const getNavTitle = (value) => {
  emits('getNavTitle', value)
}
</script>
  
  <style>
</style>
  