<template>
  <div class="">
    <div v-if="!item.children.length" class="dd-flex dd-items-center dd-gap-2">
      <div>{{ item.label }}</div>
    </div>

    <Disclosure v-else>
      <template v-slot="{ open }">
        <div
          class="show-on-hover dd-min-w-[568px] dd-max-w-[568px]"
        >
          <DisclosureButton class="dd-bg-gray-400 dd-flex flex dd-items-center dd-w-full dd-justify-between dd-h-8">
            <div class="dd-flex items-center dd-gap-3">
              <svgIcon
                :icon="open ? 'SquareMinus' : 'SquarePlus'"
                size="16"
                class="dd-cursor-pointer"
              />
              <span>{{ item.label }}</span>
              <actions-button
                :buttons="buttons"
                @selected="getClickedButton"
              />
            </div>
            <Badge v-if="item.count !== ''" :badge="item.count" />
          </DisclosureButton>
        </div>

        <DisclosurePanel class="dd-ml-6">
          <listItems
            v-for="child in item.children"
            :key="child.id"
            :item="child"
            :buttons="buttons"
            class="flex"
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
</style>