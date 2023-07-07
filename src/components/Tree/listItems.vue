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
        <div
          :class="{ 'show-on-hover': isHovered }"
          @click="showActionsItem(item)"
        >
          <DisclosureButton
            class="test-this-button dd-bg-white dd-flex dd-items-center dd-w-full dd-justify-between dd-h-8 dd-cursor-pointer hover:dd-bg-gray-50 dd-rounded-[4px] dd-px-1.5"
            :class="[!isHovered ? 'dd-bg-gray-50' : '']"
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
              <dd-input
                v-model="inputValue"
                v-if="editListData"
                :placeholder="item.label"
                @click.stop="open = false"
                size="base"
                @change="editListValue"
              />
              <span v-else class="dd-text-sm dd-font-normal dd-text-gray-700">
                {{ item.label }}
              </span>
            </div>
            <actions-button
              :buttons="buttons"
              :class="{ 'hide-on-hover': isHovered }"
              @selected="getClickedButton"
              @click.stop="open = false"
            />
            <Badge
              v-if="item.count !== ''"
              :badge="item.count"
              class="!dd-sticky !dd-right-0"
            />
          </DisclosureButton>
          <DisclosureButton v-if="addNewNode" class="dd-h-10 dd-bg-white dd-w-[163.5px] dd-ml-6">
            <dd-input
                v-model="newListNode"
                placeholder="Add new node"
                @click.stop="open = false" 
                @keydown.enter.prevent="open = false"
                size="base"
              />
          </DisclosureButton>
        </div>

        <DisclosurePanel class="dd-ml-6">
          <listItems
            v-for="child in item.children"
            :key="child.id"
            :item="child"
            :buttons="buttons"
          />
        </DisclosurePanel>
      </template>
    </Disclosure>
  </div>
</template>

<script setup>
import svgIcon from "../svgIcon/index.vue";
import ActionsButton from "./Actions.vue";
import Badge from "./Badge.vue";
import DdInput from "../input/index.vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { onBeforeUnmount, onMounted, ref } from "vue";
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
});

const isHovered = ref(true);
const editListData = ref(false);
const inputValue = ref("");
const newListNode = ref("");
const addNewNode = ref(false);

onMounted(() => {
  document.addEventListener("click", handleDomEvent);
});

onBeforeUnmount(() => {
  document.addEventListener("click", handleDomEvent);
});


const getClickedButton = (data) => {
  if (data.id === 2) {
    editListData.value = !editListData.value;
  } else if(data.id === 1) {
    addNewNode.value = !addNewNode.value;
  }
};

const showActionsItem = (item) => {
  isHovered.value = !isHovered.value;
  editListData.value = false;
  console.log(item, "list");
};

const handleDomEvent = (e) => {
  if (e.target && editListData.value === true || addNewNode.value === true) {
    editListData.value = false;
    addNewNode.value = false;
  }
};

const editListValue = (e) => {
  console.log(inputValue.value);
}
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
</style>