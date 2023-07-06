<template>
  <div v-bind="$attrs" class="dd-relative">
    <div v-if="!item.children.length" class="dd-flex dd-items-center dd-gap-2">
      <svgIcon
        icon="Curved"
        size="16"
        class="dd-relative -dd-left-[12px] dd-top-[2px]"
      />
      <div class="dd-bg-white dd-text-sm dd-font-normal dd-text-gray-700">
        {{ item.label }}
      </div>
    </div>

    <Disclosure v-else>
      <template v-slot="{ open }">
        <div class="show-on-hover">
          <DisclosureButton
            class="dd-bg-white dd-flex dd-items-center dd-w-full dd-justify-between dd-h-8 dd-cursor-pointer"
          >
            <div class="dd-flex items-center dd-gap-3">
              <div>
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
            <actions-button
              :buttons="buttons"
              class="hide-on-hover"
              @selected="getClickedButton"
              @click.stop="open"
            />
            <Badge
              v-if="item.count !== ''"
              :badge="item.count"
              class="!dd-sticky !dd-right-0"
            />
          </DisclosureButton>
        </div>

        <DisclosurePanel class="dd-ml-6">
          <listItems
            v-for="child in item.children"
            :key="child.id"
            :item="child"
            :buttons="buttons"
            class="dd-relative"
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
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
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

const getClickedButton = (data) => {
  console.log(data);
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
  height: 100%;
  background-color: #e5e7eb;
  position: absolute;
  margin-top: 15px;
  margin-left: -9px;
}
</style>
