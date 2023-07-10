<template>
  <div v-bind="$attrs" class="dd-relative">
    <div v-if="!item.children.length" class="dd-flex dd-items-center dd-gap-2">
      <div class="dd-bg-white">
        <span class="curved_line"></span>
        <span class="dd-text-sm dd-font-normal dd-text-gray-700 dd-ml-2">{{
          item.label
        }}</span>
      </div>
    </div>

    <Disclosure v-else>
      <template v-slot="{ open }">
        <div :class="{ 'show-on-hover': !isSelected }" @click="toggleActive">
          <DisclosureButton
            class="dd-bg-white dd-flex dd-items-center dd-w-full dd-justify-between dd-h-8 dd-cursor-pointer hover:dd-bg-gray-50 dd-rounded-[4px] dd-px-1.5 dd-z-0"
            :class="[isSelected ? 'dd-bg-gray-50' : '']"
          >
            <div class="dd-flex dd-items-center dd-gap-2">
              <div :class="[open ? 'dd-mt-[1px]' : 'dd-mt-0']">
                <svgIcon
                  :icon="open ? 'SquareMinus' : 'SquarePlus'"
                  size="16"
                  class="dd-cursor-pointer"
                />
                <span
                  :class="[
                    item.children.length > 1 && open ? 'straight-line' : '',
                  ]"
                ></span>
              </div>
              <span class="dd-text-sm dd-font-normal dd-text-gray-700">
                {{ item.label }}
              </span>
            </div>
            <div :class="{ 'hide-on-hover': !isSelected }" class="dd-w-fit">
              <slot name="actions" :selectedItem="selectedItem" :item="item">
                <actions-button
                  :buttons="buttons"
                  @selected="getClickedButton($event, item.id)"
                  @click.stop="open = false"
                />
              </slot>
            </div>
            <slot name="badge">
              <DdBage type="basic">{{ item.count }}</DdBage>
            </slot>
          </DisclosureButton>
          <div class="dd-absolute dd-top-[1px] dd-left-[30px] dd-z-10">
            <dd-input
              v-model="inputValue"
              v-if="editListData && item.id == activeListId"
              :placeholder="item.label"
              @click.stop="open = false"
              size="sm"
              @change="editListValue"
            />
          </div>
        </div>

        <DisclosurePanel class="dd-ml-6">
          <listItems
            v-for="child in item.children"
            :key="child.id"
            :item="child"
            :buttons="buttons"
            :selectedItem="selectedItem"
            :activeListId="activeListId"
            @set-selected="emits('setSelected', $event)"
            @setTempId="emits('setTempId', $event)"
          />
          <DisclosureButton
            v-if="addNewNode"
            class="dd-bg-white dd-flex dd-items-center dd-w-full dd-justify-between dd-h-8 dd-cursor-pointer hover:dd-bg-gray-50 dd-rounded-[4px]"
          >
            <dd-input
              v-model="newListNode"
              placeholder="Add new node"
              @click.stop="open = false"
              @keydown.enter.prevent="open = false"
              size="sm"
            />
            <span class="curved_line_two"></span>
          </DisclosureButton>
        </DisclosurePanel>
      </template>
    </Disclosure>
  </div>
</template>

<script setup>
import svgIcon from "../svgIcon/index.vue";
import ActionsButton from "./Actions.vue";
import DdInput from "../input/index.vue";
import DdBage from "../badges/index.vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { onBeforeUnmount, onMounted, ref, computed, watchEffect } from "vue";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  buttons: {
    type: Array,
    required: false,
  },
  badge: {
    type: String,
    default: "",
  },
  selectedItem: {
    type: Object,
    default: () => ({}),
  },
  activeListId: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(["setSelected", "setTempId"]);

const inputValue = ref("");
const newListNode = ref("");
const addNewNode = ref(false);
const editListData = ref(false);

onMounted(() => {
  document.addEventListener("click", handleDomEvent);
});

onBeforeUnmount(() => {
  document.addEventListener("click", handleDomEvent);
});

const isSelected = computed(() => {
  return props.selectedItem?.id == props.item.id;
});
const toggleActive = () => {
  if (isSelected.value) {
    emits("setSelected", {});
  } else {
    emits("setSelected", props.item);
  }
};

const getClickedButton = (data, id) => {
  if (data.id === 2) {
    editListData.value = !editListData.value;
    emits("setTempId", id);
  } else if (data.id === 1) {
    addNewNode.value = !addNewNode.value;
  }
};

const handleDomEvent = (e) => {
  if ((e.target && editListData.value === true) || addNewNode.value === true) {
    editListData.value = false;
    addNewNode.value = false;
  }
};

const editListValue = (e) => {
  console.log(inputValue.value);
};
</script>

<style scoped>
.hide-on-hover {
  display: none;
}

.show-on-hover:hover .hide-on-hover {
  display: block;
}

.straight-line::before {
  content: "";
  width: 1px;
  height: calc(100% - 49px);
  background-color: #e5e7eb;
  position: absolute;
  margin-top: 30px;
  margin-left: -9px;
}
.curved_line {
  position: absolute;
  border-bottom: 1px solid #e5e7eb;
  height: 18px;
  left: -11px;
  width: 16px;
  top: -4px;
  border-left: 1px solid #e5e7eb;
  border-radius: 0 0 0 4px;
}
.curved_line_two {
  position: absolute;
  border-bottom: 1px solid #e5e7eb;
  height: 18px;
  left: 13px;
  width: 16px;
  bottom: 11px;
  border-left: 1px solid #e5e7eb;
  border-radius: 0 0 0 4px;
}
</style>
