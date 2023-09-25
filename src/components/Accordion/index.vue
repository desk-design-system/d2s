<template>
  <div v-for="(tab, index) of tabs" :key="index + 1"
    class="dd-border dd-border-gray-200 dd-rounded-md dd-mb-3 dd-overflow-hidden dd-shadow-sm" :class="[
      isActive && isActive == index + 1
        ? colorClass[color]
        : 'dd-bg-white dd-border-gray-200',
    ]" v-bind="$attrs">
    <div class="dd-cursor-pointer" @click="changeActiveIndex(index + 1)">
      <component v-if="tab.children && tab.children.header" :is="tab.children.header">
      </component>
      <div :class="[isActive ? 'dd-pt-5 dd-pb-3' : 'dd-py-5']" v-else class="dd-flex dd-justify-between dd-px-6">
        <div class="dd-flex dd-items-center dd-gap-x-2">
          <!-- @slot Use this slot header -->
          <component v-if="tab.children && tab.children.left" :is="tab.children.left">
          </component>
          <dd-svg-icon v-else-if="!!getTabProp(tab, 'prepend-icon')" :icon="getTabProp(tab, 'prepend-icon')" size="28">
          </dd-svg-icon>

          <p v-if="tab.props && tab.props.title" class="dd-font-medium dd-text-md dd-text-gray-700 dd-text-left">
            {{ tab.props.title ? tab.props.title : `Tab-${index + 1}` }}
          </p>
        </div>
        <div class="dd-flex dd-items-center dd-gap-2">
          <dd-badge v-if="tab.props?.badge" :title="tab.props?.badge" :closable="tab.props?.closable"
            :color="tab.props?.color" :rounded="tab.props?.rounded" :size="tab.props?.size" :dot="tab.props?.dot"
            @close="$emit('close')" />
          <component v-if="tab.children && tab.children.right" :is="tab.children.right">
          </component>
          <dd-svg-icon v-else-if="!!getTabProp(tab, 'append-icon')" :icon="getTabProp(tab, 'append-icon')" size="28">
          </dd-svg-icon>
          <div class="dd-flex dd-items-center dd-h-full dd-pt-0.5">
            <dd-svg-icon icon="ChevronDown" size="16" class="dd-text-gray-400 dd-text-center" aria-hidden="true" :class="[
              isActive == index + 1
                ? 'dd-transform dd-rotate-180'
                : 'dd-transform dd-rotate-0',
            ]" />
          </div>
        </div>
      </div>
    </div>

    <div v-if="isTabActive(index + 1)" class="">
      <component class="dd-pb-2" :is="tab"></component>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, ref, useSlots } from "vue";

const props = defineProps({
  active: {
    type: Number,
    default: 1,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:active"]);
const slots = useSlots();
const active = ref(props.active)

const ACCORDION_TAB = "AccordionTab";
let isActive = computed({
    get(){
        return active.value
    },
    set(activeVal){
      active.value = activeVal
      emit('update:active', activeVal)
    }
})
const colorProp = ref(props.color);

//Methods
const isAccordionTab = (child) => {
  return child.type.name === ACCORDION_TAB;
};

const tabs = computed(() => {
  if (!slots.default) {
    console.error(
      "<AccordionTab> should always be a direct child of <Accordion>."
    );
    return;
  }
 return slots.default().reduce((tabs, child) => {
    if (isAccordionTab(child)) {
      tabs.push(child);
    } else if (child?.children?.length && child.children !=='v-if') {
      child.children.forEach((tab) => {
        if (isAccordionTab(tab)) {
          tabs.push(tab);
        }
      });
    }
     else {
      console.warn(
        "<AccordionTab> should always be a direct child of <Accordion>."
      );
    }
    return tabs;
  }, []);
});

const colorClass = ref({
  slate: "dd-bg-gradient-to-l dd-from-slate-100 dd-border-slate-200",
  gray: "dd-bg-gradient-to-l dd-from-gray-100 dd-border-gray-200",
  zinc: "dd-bg-gradient-to-l dd-from-zinc-100 dd-border-zinc-200",
  neutral: "dd-bg-gradient-to-l dd-from-neutral-100 dd-border-neutral-200",
  stone: "dd-bg-gradient-to-l dd-from-stone-100 dd-border-stone-200",
  red: "dd-bg-gradient-to-l dd-from-red-100 dd-border-red-200",
  orange: "dd-bg-gradient-to-l dd-from-orange-100 dd-border-orange-200",
  amber: "dd-bg-gradient-to-l dd-from-amber-100 dd-border-amber-200",
  yellow: "dd-bg-gradient-to-l dd-from-yellow-100 dd-border-yellow-200",
  lime: "dd-bg-gradient-to-l dd-from-lime-100 dd-border-lime-200",
  green: "dd-bg-gradient-to-l dd-from-green-100 dd-border-green-200",
  emerald: "dd-bg-gradient-to-l dd-from-emerald-100 dd-border-emerald-200",
  teal: "dd-bg-gradient-to-l dd-from-teal-100 dd-border-teal-200",
  cyan: "dd-bg-gradient-to-l dd-from-cyan-100 dd-border-cyan-200",
  sky: "dd-bg-gradient-to-l dd-from-sky-100 dd-border-sky-200",
  blue: "dd-bg-gradient-to-l dd-from-blue-100 dd-border-blue-200",
  indigo: "dd-bg-gradient-to-l dd-from-indigo-100 dd-border-indigo-200",
  violet: "dd-bg-gradient-to-l dd-from-violet-100 dd-border-violet-200",
  purple: "dd-bg-gradient-to-l dd-from-purple-100 dd-border-purple-200",
  fuchsia: "dd-bg-gradient-to-l dd-from-fuchsia-100 dd-border-fuchsia-200",
  pink: "dd-bg-gradient-to-l dd-from-pink-100 dd-border-pink-200",
  rose: "dd-bg-gradient-to-l dd-from-rose-100 dd-border-rose-200",
});

const changeActiveIndex = async (index) => {
  const active = isTabActive(index);
  if (props.multiple) {
    if (active) {
      isActive.value = isActive.value.filter((i) => i !== index);
    } else {
      if (isActive.value) isActive.value.push(index);
      else isActive.value = [index];
    }
  } else {
    isActive.value = isActive.value === index ? null : index;
  }
  emit("update:active", index);
};

const isTabActive = (index) => {
  return props.multiple
    ? isActive.value && isActive.value.includes(index)
    : isActive.value === index;
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