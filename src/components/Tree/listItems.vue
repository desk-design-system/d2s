<template>
  <div v-bind="$attrs" class="dd-relative">
    <div v-if="!item?.children.length" class="dd-flex dd-items-center dd-gap-2">
      <div class="dd-bg-white">
        <span class="curved_line"></span>
        <span class="dd-text-sm dd-font-normal dd-text-gray-700 dd-ml-2">{{
          item?.label
        }}</span>
      </div>
    </div>

    <Disclosure v-else>
      <template v-slot="{ open }">
        <div
          :class="{ 'show-on-hover': !isSelected && !item.disabled }"
          @click="toggleActive"
        >
          <DisclosureButton
            class="dd-bg-white dd-flex dd-items-center dd-w-full dd-justify-between dd-h-8 dd-cursor-pointer hover:dd-bg-gray-50 dd-rounded-[4px] dd-px-1.5 dd-z-0 focus-visible:dd-outline-none"
            :class="[
              isSelected && !item.disabled ? 'dd-bg-gray-50' : '',
              item?.disabled == true
                ? 'dd-opacity-50 dd-cursor-not-allowed dd-pointer-events-none hover:!dd-bg-white'
                : '',
            ]"
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
                    item?.children.length > 1 && open ? 'straight-line' : '',
                  ]"
                ></span>
              </div>
              <div v-if="checkBoxProp" @click.stop="open = false" class="dd-h-5 dd-w-5 dd-text-center dd-rounded-[4px] dd-py-[2px] dd-px-[3px]">
                <slot name="checkbox" :item="item" :open="open" :checkBoxProp="checkBoxProp">
                  <dd-checkbox v-if="checkBoxProp" v-model="item.checked" :disabled="item?.disabled" @click="setChecked(item[itemKey])" />
                </slot>
              </div>
              <div v-if="customContent" @click.stop="open = false" class="dd-h-5 dd-w-5 dd-text-center dd-rounded-[4px] dd-py-[2px] dd-px-[3px]">
                <slot name="content" :item="item" :open="open" :customContent="customContent">
                  <svgIcon v-if="customContent" icon="Alert" size="16" />
                </slot>
              </div>
              <span class="dd-text-sm dd-font-normal dd-text-gray-700">
                {{ item.label }}
              </span>
            </div>
            <div class="dd-w-fit">
              <slot name="actions" :selectedItem="selectedItem" :item="item">
                <actions-button
                  v-if="actionButton"
                  :open="open"
                  :class="{ 'hide-on-hover': !isSelected }"
                  :style="`z-index: ${item.length - index} `"
                  :buttons="buttons"
                  @selected="getClickedButton($event, item?.id)"
                  :disabled="item?.disabled"
                  :values="values"
                  :showIcon="showIcon"
                  @setDropDownEvent="setDropDownEvent"
                />
              </slot>
            </div>
            <slot name="badge" v-if="badge">
              <DdBage type="basic">{{ badge }}</DdBage>
            </slot>
          </DisclosureButton>
          <div class="dd-absolute dd-top-[0px] dd-left-[30px] dd-z-10">
            <dd-input
              v-model="inputValue"
              v-if="item?.id == activeListId"
              :placeholder="item?.label"
              @click.stop="open = false"
              @keydown.enter.prevent="open = false"
              size="base"
              class="dd-w-[260px]"
              @change="editListInput"
              @focus="emits('focusEditNode', { item, inputValue })"
              @blur="emits('blurEditNode', { item, inputValue })"
              @keydown="emits('keydownEditNode', { item, inputValue })"
              @keyup="emits('keyupEditNode', { item, inputValue })"
              @input="emits('TrackEditNode', { item, inputValue })"
            >
              <template #suffix>
                <div
                  class="dd-h-8 dd-w-8 dd-gap-1 dd-flex dd-items-center dd-justify-center dd-relative dd-right-2.5"
                >
                  <dd-button
                    color="white"
                    size="xs"
                    class="!dd-p-1"
                    @click="updateEditList(item)"
                  >
                    <svgIcon icon="Check" size="16" class="dd-mb-1" />
                  </dd-button>
                  <dd-button
                    color="white"
                    size="xs"
                    class="!dd-p-1"
                    @click="discardEditChanges(item)"
                  >
                    <svgIcon icon="Close" size="16" class="dd-mb-1" />
                  </dd-button>
                </div>
              </template>
            </dd-input>
          </div>
        </div>

        <DisclosurePanel class="dd-ml-6">
          <listItems
            v-for="child in item?.children"
            :key="child?.id"
            :item="child"
            :open="open"
            :buttons="buttons"
            :selectedItem="selectedItem"
            :activeListId="activeListId"
            :newNode="newNode"
            :disabled="item?.disabled"
            :checkBoxProp="checkBoxProp"
            :checked="item?.checked"
            :badge="badge"
            :customContent="customContent"
            :actionButton="actionButton"
            :values="values"
            :showIcon="showIcon"
            @set-selected="emits('setSelected', $event)"
            @setEditId="emits('setEditId', $event)"
            @SetNewNode="emits('SetNewNode', $event)"
            @editListInput="emits('editListInput', $event)"
            @addNewListNode="emits('addNewListNode', $event)"
            @focusNewNode="emits('focusNewNode', $event)"
            @blurNewNode="emits('blurNewNode', $event)"
            @keydownNewNode="emits('keydownNewNode', $event)"
            @keyupNewNode="emits('keyupNewNode', $event)"
            @TrackNewNode="emits('TrackNewNode', $event)"
            @focusEditNode="emits('focusEditNode', $event)"
            @blurEditNode="emits('blurEditNode', $event)"
            @keydownEditNode="emits('keydownEditNode', $event)"
            @keyupEditNode="emits('keyupEditNode', $event)"
            @TrackEditNode="emits('TrackEditNode', $event)"
            @selectedCheckBoxes="emits('selectedCheckBoxes', $event)"
          />
          <DisclosureButton
            v-if="item?.id === newNode"
            class="dd-bg-white dd-flex dd-items-center dd-w-full dd-justify-between dd-h-8 dd-pointer-events-none dd-rounded-[4px] focus-visible:dd-outline-none"
          >
            <dd-input
              v-model="newListNode"
              placeholder="Add new node"
              @click.stop="open = false"
              @keydown.enter.prevent="open = false"
              size="base"
              class="dd-pointer-events-auto dd-w-[260px]"
              @change="addNewListNode"
              @focus="emits('focusNewNode', { item, newListNode })"
              @blur="emits('blurNewNode', { item, newListNode })"
              @keydown="emits('keydownNewNode', { item, newListNode })"
              @keyup="emits('keyupNewNode', { item, newListNode })"
              @input="emits('TrackNewNode', { item, newListNode })"
            >
              <template #suffix>
                <div
                  class="dd-h-8 dd-w-8 dd-gap-1 dd-flex dd-items-center dd-justify-center dd-relative dd-right-2.5"
                >
                  <dd-button
                    color="white"
                    size="xs"
                    class="!dd-p-1"
                    @click="addListInNode(item)"
                  >
                    <svgIcon icon="Check" size="16" />
                  </dd-button>
                  <dd-button
                    color="white"
                    size="xs"
                    class="!dd-p-1"
                    @click="discardListInNode(item)"
                  >
                    <svgIcon icon="Close" size="16" />
                  </dd-button>
                </div>
              </template>
            </dd-input>
            <span
              v-if="item?.children.length > 0"
              class="curved_line_two"
            ></span>
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
import DdButton from "../buttons/index.vue";
import DdCheckbox from "../checkbox/index.vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { onBeforeUnmount, onMounted, ref, computed } from "vue";
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
  newNode: {
    type: Number,
    default: 0,
  },
  checkBoxProp: {
    type: Boolean,
    default: false,
  },
  customContent: {
    type: Boolean,
    default: false,
  },
  actionButton: {
    type: Boolean,
    default: false,
  },
  itemKey: {
    type: String,
    default: "id",
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
  values: {
    type: Array,
    required: true,
  },
});

const emits = defineEmits([
  "setSelected",
  "setEditId",
  "SetNewNode",
  "updateEditList",
  "discardEditChanges",
  "editListInput",
  "addNewListNode",
  "addListInNode",
  "discardListInNode",
  "focusNewNode",
  "blurNewNode",
  "keydownNewNode",
  "keyupNewNode",
  "TrackNewNode",
  "focusEditNode",
  "blurEditNode",
  "keydownEditNode",
  "keyupEditNode",
  "TrackEditNode",
  "selectedCheckBoxes",
]);

const inputValue = ref("");
const newListNode = ref("");
const addNewNode = ref(false);
const editListData = ref(false);
const selectedId = ref([]);

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
  if (props.item.disabled === true) {
    return false;
  } else {
    if (isSelected.value) {
      emits("setSelected", {});
    } else {
      emits("setSelected", props.item);
    }
  }
};

const getClickedButton = (data, id) => {
  if (data.buttonType === "Edit") {
    if (props.activeListId == id && props.item.id !== props.activeListId) {
      emits("setEditId", null);
    } else {
      emits("setEditId", id);
    }
  } else if (data.buttonType === "Create") {
    if (props.newNode == id && props.item.id !== props.newNode) {
      emits("SetNewNode", null);
    } else {
      emits("SetNewNode", id);
    }
  }
};

const setDropDownEvent = (event) => {
  event.stopPropagation();
}

const handleDomEvent = (e) => {
  if ((e.target && editListData.value === true) || addNewNode.value === true) {
    editListData.value = false;
    addNewNode.value = false;
  }
};

const editListInput = () => {
  emits("editListInput", inputValue.value);
};

const addNewListNode = () => {
  emits("addNewListNode", newListNode.value);
};

const updateEditList = (item) => {
  if (props.activeListId == item.id) {
    emits("setEditId", null);
    emits("updateEditList", item);
    inputValue.value = "";
  }
};

const discardEditChanges = (item) => {
  if (props.activeListId == item.id) {
    emits("setEditId", null);
    emits("discardEditChanges", item);
    inputValue.value = "";
  }
};

const addListInNode = (item) => {
  if (props.newNode == item.id) {
    emits("SetNewNode", null);
    emits("addListInNode", item);
    newListNode.value = "";
  }
};

const discardListInNode = (item) => {
  if (props.newNode == item.id) {
    emits("SetNewNode", null);
    emits("discardListInNode", item.id);
    newListNode.value = "";
  }
};

const setChecked = (id) => {
  if (props.item?.disabled) return;
  const index = selectedId.value.indexOf(id);
  if (index === -1) {
    selectedId.value.push(id);
    emits("selectedCheckBoxes", selectedId.value);
  } else {
    selectedId.value.splice(index, 1);
  }
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
