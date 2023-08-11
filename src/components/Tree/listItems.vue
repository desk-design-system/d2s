<template>
  <div v-bind="$attrs" class="dd-relative">
    
    <Disclosure>
      <template v-slot="{ open }">
        <div
          :class="{ 'show-on-hover': !isSelected && !item.disabled }"
          @click="toggleActive"
        >
          <DisclosureButton
            class="dd-bg-white dd-flex dd-items-center dd-w-full dd-justify-between dd-h-8 dd-cursor-pointer hover:dd-bg-gray-50 dd-rounded-[4px] dd-px-1.5 dd-z-0 focus-visible:dd-outline-none dd-py-1"
            :class="[
              isSelected && !item.disabled ? 'dd-bg-gray-50' : '',
              item?.disabled == true
                ? 'dd-opacity-50 dd-cursor-not-allowed dd-pointer-events-none hover:!dd-bg-white'
                : '',
              !item.children.length ? 'dd-ml-1' : '',
            ]"
          >
            <div class="dd-flex dd-items-center dd-text-center dd-gap-2">
              <span v-if="!item?.children.length" class="curved_line"></span>
              <div
                :class="[open ? 'dd-mt-[3.1px]' : 'dd-mt-[3px]']"
                v-if="item?.children.length"
              >
                <svgIcon
                  :icon="open ? 'SquareMinus' : 'SquarePlus'"
                  :class="[open ? 'dd-mb-[0.1px]' : '']"
                  size="20"
                  class="dd-cursor-pointer"
                />
                <span
                  :class="[
                    item?.children.length > 0 && open ? 'straight-line' : '',
                  ]"
                ></span>
              </div>
              <div
                v-if="checkBoxProp"
                @click.stop="open = false"
                class="dd-h-5 dd-w-5 dd-text-center dd-rounded-[4px]"
              >
                <slot
                  name="leftSlotOne"
                  :item="item"
                  :open="open"
                  :checkBoxProp="checkBoxProp"
                  :disabled="item?.disabled"
                >
                  <dd-checkbox
                    v-if="checkBoxProp"
                    v-model="item.checked"
                    :disabled="item?.disabled"
                    @click="setChecked(item[itemKey])"
                  />
                </slot>
              </div>
              <div
                v-if="customContent"
                @click.stop="open = false"
                class="dd-h-5 dd-w-5 dd-text-center dd-rounded-[4px] dd-py-[2px]"
              >
                <slot
                  name="leftSlotTwo"
                  :item="item"
                  :open="open"
                  :customContent="customContent"
                  :disabled="item?.disabled"
                >
                  <svgIcon
                    v-if="customContent"
                    icon="Circle"
                    size="16"
                    class="dd-text-gray-500"
                  />
                </slot>
              </div>
              <span class="dd-text-sm dd-font-normal dd-text-gray-700">
                {{ item.label }}
              </span>
              <div class="dd-w-fit">
                <slot
                  v-if="actionButton"
                  name="actions"
                  :selectedItem="selectedItem"
                  :item="item"
                  :values="values"
                  :buttons="buttons"
                  :isSelected="isSelected"
                  :showIcon="showIcon"
                >
                  <actions-button
                    v-if="actionButton"
                    :open="open"
                    :class="{ 'hide-on-hover': !isSelected }"
                    :style="`z-index: ${item.length - index} `"
                    :buttons="buttons"
                    :disabled="item?.disabled"
                    :values="values"
                    :isSelected="isSelected"
                    :showIcon="showIcon"
                    :dropdownProp="dropdownProp"
                    @setDropDownEvent="setDropDownEvent"
                    @selected="getClickedButton($event, item?.id)"
                    @assignToNode="assignToNode"
                    @dropdownValue="emits('dropdownValue', $event)"
                  >
                    <template #dropdown>
                      <slot
                        name="dropdown"
                        :disabled="item?.disabled"
                        :isSelected="isSelected"
                        :open="open"
                      ></slot>
                    </template>
                  </actions-button>
                </slot>
              </div>
            </div>
            <div :class="[!item.children.length ? 'dd-mr-1' : '']">
            <slot name="rightSlot">
                <DdBage v-if="badge" type="red">{{ badge }}</DdBage>
            </slot>
          </div>
          </DisclosureButton>
          <div class="dd-absolute dd-top-[0px] dd-left-[30px] dd-z-10">
            <dd-input
              v-model="inputValue"
              v-if="item?.id == activeListId"
              :placeholder="item?.label"
              @click.stop="open = false"
              @keydown.enter.prevent="open = false"
              size="base"
              successButton
              closeButton
              class="dd-w-[260px]"
              @change="editListInput"
              @focus="emits('focusEditNode', { item, inputValue })"
              @blur="emits('blurEditNode', { item, inputValue })"
              @keydown="emits('keydownEditNode', { item, inputValue })"
              @keyup="emits('keyupEditNode', { item, inputValue })"
              @input="emits('TrackEditNode', { item, inputValue })"
              @success="updateEditList(item)"
              @close="discardEditChanges(item)"
              :class="[!item.children.length ? '-dd-ml-[18px]' : '']"
            />
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
            :dropdownProp="dropdownProp"
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
            @dropdownValue="emits('dropdownValue', $event)"
          >
            <template #leftSlotOne>
              <slot
                v-if="checkBoxProp"
                name="leftSlotOne"
                :item="item"
                :open="open"
                :checkBoxProp="checkBoxProp"
                :disabled="item?.disabled"
              ></slot>
            </template>
            <template #leftSlotTwo>
              <slot
                v-if="customContent"
                name="leftSlotTwo"
                :item="item"
                :open="open"
                :customContent="customContent"
                :disabled="item?.disabled"
              ></slot>
            </template>
            <template #actions>
              <slot
                v-if="actionButton"
                name="actions"
                :selectedItem="selectedItem"
                :item="item"
                :values="values"
                :buttons="buttons"
                :isSelected="isSelected"
                :showIcon="showIcon"
              >
              </slot>
            </template>
            <template #rightSlot>
              <slot v-if="badge" name="rightSlot"></slot>
            </template>
            <template #dropdown="{ isSelected, disabled, open }">
              <slot
                name="dropdown"
                :disabled="disabled"
                :isSelected="isSelected"
                :open="open"
              ></slot>
            </template>
          </listItems>
          <DisclosureButton
            v-if="item?.id === newNode"
            class="dd-bg-white dd-flex dd-items-center dd-w-full dd-justify-between dd-h-8 dd-pointer-events-none dd-rounded-[4px] focus-visible:dd-outline-none dd-mt-1"
          >
            <dd-input
              v-model="newListNode"
              placeholder="Add new node"
              @click.stop="open = false"
              @keydown.enter.prevent="open = false"
              size="base"
              successButton
              closeButton
              class="dd-pointer-events-auto dd-w-[260px]"
              @change="addNewListNode"
              @focus="emits('focusNewNode', { item, newListNode })"
              @blur="emits('blurNewNode', { item, newListNode })"
              @keydown="emits('keydownNewNode', { item, newListNode })"
              @keyup="emits('keyupNewNode', { item, newListNode })"
              @input="emits('TrackNewNode', { item, newListNode })"
              @success="addListInNode(item)"
              @close="discardListInNode(item)"
              :class="[!item.children.length ? 'dd-ml-2' : '']"
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
  dropdownProp: {
    type: Boolean,
    default: false,
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
  "dropdownValue",
]);

const inputValue = ref("");
const newListNode = ref("");
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
};

const handleDomEvent = (e) => {
  if (e.target && props.item?.id == props.activeListId) {
    emits("setEditId", null);
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

const assignToNode = () => {
  if (toggleActive && props.selectedItem?.id == props.item.id) {
    return;
  } else {
    toggleActive();
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
  margin-top: 26px;
  margin-left: -11px;
}
.curved_line {
  position: absolute;
  border-bottom: 1px solid #e5e7eb;
  height: 18px;
  left: -9px;
  width: 16px;
  top: -1px;
  border-left: 1px solid #e5e7eb;
  border-radius: 0 0 0 4px;
}
.curved_line_two {
  position: absolute;
  border-bottom: 1px solid #e5e7eb;
  height: 18px;
  left: 15px;
  width: 16px;
  bottom: 11px;
  border-left: 1px solid #e5e7eb;
  border-radius: 0 0 0 4px;
}
</style>
