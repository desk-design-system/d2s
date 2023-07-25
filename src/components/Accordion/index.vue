<template>
  <div
    v-for="(tab, index) of tabs"
    :key="index + 1"
    class="!dd-border dd-rounded-md dd-mb-3 dd-bg-white dd-overflow-hidden"
    :class="[ddActive ? getGradientClasess : 'dd-bg-white dd-border-gray-200']"
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
        <div class="dd-flex dd-gap-2.5 dd-items-center dd-text-center">
          <dd-badge
            v-if="tab.props?.badge"
            :title="tab.props?.badge"
            :closable="tab.props?.closable"
            :type="tab.props?.type"
            :rounded="tab.props?.rounded"
            :size="tab.props?.size"
            :dot="tab.props?.dot"
            @close="$emit('close')"
          />
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
          <div class="dd-flex dd-align-center dd-h-full dd-pt-0.5">
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

    <div v-if="isTabActive(index + 1)" class="">
      <component class="dd-px-3 dd-pb-2" :is="tab"></component>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, useSlots } from "vue";
import { DdSvgIcon } from "../components";
import DdBadge from "../badges/index.vue";

const props = defineProps({
  active: {
    type: Number,
    default: 1,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  gradient: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:active", "close"]);
const slots = useSlots();

const ACCORDION_TAB = "AccordionTab";
let ddActive = ref(props.active);

//Methods
const isAccordionTab = (child) => {
  return child.type.name === ACCORDION_TAB;
};

const tabs = computed(() => {
  if (!slots.default) {
    console.error(
      "<AccordionTab> should always be a direct shild of <Accordion>."
    );
    return;
  }
  return slots.default().reduce((tabs, child) => {
    if (isAccordionTab(child)) {
      tabs.push(child);
    } else {
      console.warn(
        "<AccordionTab> should always be a direct shild of <Accordion>."
      );
    }
    return tabs;
  }, []);
});
//gradient
const getGradientClasess = computed(() => {
    return {
    " dd-bg-gradient-to-l dd-from-slat-100 dd-border-slat-200":
      props.gradient === "slat",
    " dd-bg-gradient-to-l dd-from-gray-100 dd-border-gray-200":
      props.gradient === "gray",
    " dd-bg-gradient-to-l dd-from-neutral-100 dd-border-neutral-200":
      props.gradient === "neutral",
    " dd-bg-gradient-to-l dd-from-zinc-100 dd-border-zinc-200":
      props.gradient === "zinc",
      " dd-bg-gradient-to-l dd-from-stone-100 dd-border-stone-200":
      props.gradient === "stone",
    " dd-bg-gradient-to-l dd-from-red-100 dd-border-red-200":
      props.gradient === "red",
    " dd-bg-gradient-to-l dd-from-orange-100 dd-border-orange-200":
      props.gradient === "orange",
    " dd-bg-gradient-to-l dd-from-amber-100 dd-border-amber-200":
      props.gradient === "amber",
      " dd-bg-gradient-to-l dd-from-yellow-100 dd-border-yellow-200":
      props.gradient === "yellow",
    " dd-bg-gradient-to-l dd-from-lime-100 dd-border-lime-200":
      props.gradient === "lime",
    " dd-bg-gradient-to-l dd-from-green-100 dd-border-green-200":
      props.gradient === "green",
    " dd-bg-gradient-to-l dd-from-emerald-100 dd-border-emerald-200":
      props.gradient === "emerald",
      " dd-bg-gradient-to-l dd-from-teal-100 dd-border-teal-200":
      props.gradient === "teal",
    " dd-bg-gradient-to-l dd-from-cyan-100 dd-border-cyan-200":
      props.gradient === "cyan",
    " dd-bg-gradient-to-l dd-from-sky-100 dd-border-sky-200":
      props.gradient === "sky",
    " dd-bg-gradient-to-l dd-from-blue-100 dd-border-blue-200":
      props.gradient === "blue",
      " dd-bg-gradient-to-l dd-from-indigo-100 dd-border-indigo-200":
      props.gradient === "indigo",
    " dd-bg-gradient-to-l dd-from-voilet-100 dd-border-voilet-200":
      props.gradient === "voilet",
    " dd-bg-gradient-to-l dd-from-purple-100 dd-border-purple-200":
      props.gradient === "purple",
      " dd-bg-gradient-to-l dd-from-fuchsia-100 dd-border-fuchsia-200":
      props.gradient === "fuchsia",
    " dd-bg-gradient-to-l dd-from-pink-100 dd-border-pink-200":
      props.gradient === "pink",
    " dd-bg-gradient-to-l dd-from-rose-100 dd-border-rose-200":
      props.gradient === "rose"
  };
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

</style>
