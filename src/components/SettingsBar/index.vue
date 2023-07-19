<template>
  <div
    v-bind="$attrs"
    class="dd-w-full dd-flex dd-flex-col dd-rounded-md dd-bg-white dd-overflow-y-scrolls"
  >
    <div class="dd-sticky dd-z-50 dd-bg-white dd-top-0">
      <div
        v-if="searchItem"
        class="dd-flex dd-items-center dd-justify-between dd-p-3 dd-w-full dd-gap-1"
      >
        <svgIcon icon="Search" size="20" class="dd-text-gray-600" />
        <div class="dd-w-full">
          <dd-input
            ref="searchInputRef"
            v-model="searchInput"
            Border="none"
            type="text"
            :placeholder="placeholder"
            size="xs"
            @focus="emits('focus')"
            @blur="emits('blur')"
            @keydown="emits('usekeydown')"
            @keyup="emits('usekeyup')"
            @vnode-mounted="focusInput"
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
    </div>
    <div
      v-for="(value, index) in filteredItems"
      :key="index"
      v-bind="$attrs"
      class="dd-p-3 dd-text-left dd-relative"
    >
      <div class="dd-w-full">
        <div
          class="dd-text-gray-500 dd-text-xs dd-font-bold"
          @click="getNavTitle(value)"
        >
          {{ value?.title }}
        </div>
        <div
          v-for="(item, index) in value.items"
          :key="index"
          class="dd-relative -dd-left-1.5"
          :class="[item?.active ? '!dd-bg-gray-50' : '']"
        >
          <dd-nav
            :label="item?.title"
            :active="item?.id == activeNav"
            :prefix="prefix"
            :suffix="suffix"
            :prefixIcon="prefixIcon"
            :suffixIcon="suffixIcon"
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
import { ref, defineProps, watch, computed, nextTick } from "vue";
import DdNav from "../Navlinks/index.vue";
import DdInput from "../input/index.vue";
import svgIcon from "../svgIcon/index.vue";
import DdDivider from "../divider/index.vue";

const emits = defineEmits([
  "change",
  "focus",
  "blur",
  "usekeyup",
  "usekeydown",
  "getNavValue",
  "getNavTitle",
]);

const props = defineProps({
  settings: {
    type: Array,
    default: null,
  },
  placeholder: {
    type: String,
    default: "",
  },
  prefixIcon: {
    type: String,
    default: "Circle",
  },
  suffixIcon: {
    type: String,
    default: "Circle",
  },
  prefix: {
    type: Boolean,
    default: false,
  },
  suffix: {
    type: Boolean,
    default: false,
  },
  activeNav: {
    type: Number || String,
    default: "",
  },
});

const searchItem = ref(false);
const searchInput = ref("");
const searchInputRef = ref(null);

const openSearch = () => {
  if (!searchItem.value) {
    searchInput.value = "";
  }
  searchItem.value = !searchItem.value;
};

const focusInput = () => {
  searchInputRef.value.inputRef.focus();
};

const filteredItems = computed(() => {
  if (!searchInput.value) {
    return props.settings;
  } else {
    if (searchItem.value == true) {
      const searchTerm = searchInput.value.toLowerCase();

      const filteredItems = [];
      for (const setting of props.settings) {
        const matchingItems = setting.items.filter((item) =>
          item.title.toLowerCase().includes(searchTerm)
        );
        if (matchingItems.length > 0) {
          const filteredSetting = {
            ...setting,
            items: matchingItems,
          };
          filteredItems.push(filteredSetting);
        }
      }

      return filteredItems;
    } else {
      return props.settings;
    }
  }
});

const getNavValue = (item) => {
  emits("getNavValue", item);
};
const getNavTitle = (value) => {
  emits("getNavTitle", value);
};
</script>
  
  <style>
</style>
  