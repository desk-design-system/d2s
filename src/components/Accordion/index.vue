<template>
  <div
    v-for="(tab, index) of tabs"
    :key="index + 1"
    class=" dd-border dd-border-gray-200 dd-rounded-md dd-mb-3 dd-bg-white dd-overflow-hidden"
    v-bind="$attrs"
  >
    <div class="dd-cursor-pointer" @click="changeActiveIndex(index + 1)">
      <component
        v-if="tab.children && tab.children.header"
        :is="tab.children.header"
      >
      </component>
      <div v-else class="dd-flex dd-justify-between dd-p-3">
        <div class="dd-flex">
            <!-- @slot Use this slot header -->
          <component
            v-if="tab.children && tab.children.prepend"
            :is="tab.children.prepend"
          >
          </component>
          <dd-svg-icon
            v-else-if="!!getTabProp(tab, 'prepend-icon')"
            :icon="getTabProp(tab, 'prepend-icon')"
            size="20"
            class="dd-mr-2"
          >
          </dd-svg-icon>

          <p
            v-if="tab.props && tab.props.title"
            class="dd-font-medium dd-text-sm dd-text-gray-700 dd-text-left"
          >
            {{ tab.props.title ? tab.props.title : `Tab-${index + 1}` }}
          </p>
        </div>
        <div class="dd-flex">
          <component
            v-if="tab.children && tab.children.append"
            :is="tab.children.append"
          >
          </component>
          <dd-svg-icon
            v-else-if="!!getTabProp(tab, 'append-icon')"
            :icon="getTabProp(tab, 'append-icon')"
            size="20"
            class="dd-mr-2"
          >
          </dd-svg-icon>
          <div class="dd-flex dd-align-center dd-h-full dd-pt-0.5" >
            <dd-svg-icon
              icon="ChevronDown"
              size="16"
              class="dd-text-gray-400 dd-text-center"
              aria-hidden="true"
              :class="[
                ddActive == index + 1
                  ? 'dd-transform dd-rotate-180'
                  : 'dd-transform dd-rotate-0',
              ]"
            />
          </div>
        </div>
      </div>
    </div>

    <Transition name="dd-toggleable-content">
      <div v-if="isTabActive(index + 1)" class="">
        <component class="dd-px-3 dd-pb-2"  :is="tab"></component>
      </div>
    </Transition>
  </div>

</template>

<script setup>
import { computed, ref, useSlots } from "vue";
import { DdSvgIcon } from "../components";

const props = defineProps({
active: {
  type: Number,
  default: 1,
},
multiple: {
  type: Boolean,
  default: false,
},
});

const emit = defineEmits(["update:active"]);
const slots = useSlots();

const ACCORDION_TAB = "AccordionTab";
let ddActive = ref(props.active);


//Methods
const isAccordionTab = (child) => {
return child.type.name === ACCORDION_TAB;
};

const tabs = computed(() => {
  if(!slots.default){
    console.error("<AccordionTab> should always be a direct shild of <Accordion>.")
      return
  }
  return slots.default().reduce((tabs, child) => {
    if (isAccordionTab(child)) {
      tabs.push(child);
    }else{
      console.warn("<AccordionTab> should always be a direct shild of <Accordion>.")
    }
    return tabs;
  }, []);
});

const changeActiveIndex = (index) => {
  const active = isTabActive(index);
  if (props.multiple) {
    if (active) {
      ddActive.value = ddActive.value.filter((i) => i !== index);
    } else {
      if (ddActive.value) ddActive.value.push(index);
      else ddActive.value = [index];
    }
  } else {
    ddActive.value = ddActive.value === index ? null : index;
  }
  emit("update:active", index);
};

const isTabActive = (index) => {
return props.multiple
  ? ddActive.value && ddActive.value.includes(index)
  : ddActive.value === index;
};

const getTabProp = (tab, name) => {
return tab.props ? tab.props[name] : undefined;
};

</script>

<style>
.dd-toggleable-content-enter-from,
.dd-toggleable-content-leave-to {
max-height: 0;
}

.dd-toggleable-content-enter-to,
.dd-toggleable-content-leave-from {
max-height: 1000px;
}

.dd-toggleable-content-leave-active {
overflow: hidden;
transition: max-height 0.4s cubic-bezier(0, 1, 0, 1);
}

.dd-toggleable-content-enter-active {
overflow: hidden;
transition: max-height 0.4s cubic-bezier(1, 0, 1, 0);
}
</style>
