<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="messageBoxValue">
    <Dialog as="div" class="dd-relative dd-z-[10001]" @close="close()">
      <TransitionChild
        as="template"
        enter="dd-ease-out dd-duration-300"
        enter-from="dd-opacity-0"
        enter-to="dd-opacity-100"
        leave="dd-ease-in dd-duration-200"
        leave-from="dd-opacity-100"
        leave-to="dd-opacity-0"
      >
        <div
          class="dd-fixed dd-inset-0 dd-bg-gray-500 dd-bg-opacity-75 dd-transition-opacity"
        />
      </TransitionChild>

      <div class="dd-fixed dd-z-10 dd-inset-0 dd-overflow-y-auto">
        <div
          class="dd-flex dd-items-end sm:dd-items-center dd-justify-center dd-min-h-full dd-p-4 dd-text-center sm:dd-p-0"
        >
          <TransitionChild
            as="template"
            enter="dd-ease-out dd-duration-300"
            enter-from="dd-opacity-0 dd-translate-y-4 sm:dd-translate-y-0 sm:dd-scale-95"
            enter-to="dd-opacity-100 dd-translate-y-0 sm:dd-scale-100"
            leave="dd-ease-in dd-duration-200"
            leave-from="dd-opacity-100 dd-translate-y-0 sm:dd-scale-100"
            leave-to="dd-opacity-0 dd-translate-y-4 sm:dd-translate-y-0 sm:dd-scale-95"
          >
            <DialogPanel
              :style="{ width: modalWidth }"
              class="dd-relative dd-bg-white dd-rounded-lg dd-overflow-hidden dd-shadow-xl dd-transform dd-transition-all"
            >
              <div class="dd-p-6">
                <div class="dd-mb-4">
                  <slot name="header">
                    <div class="dd-flex dd-items-start dd-gap-4">
                      <div
                        class="dd-flex-shrink-0 dd-h-10 dd-w-10 dd-rounded-full dd-flex dd-items-center dd-justify-center"
                        :class="conditionalIcons.color"
                      >
                        <component
                          v-if="conditionalIcons"
                          :is="conditionalIcons.icon"
                          :class="conditionalIcons.class"
                          class="dd-h-6 dd-w-6"
                          aria-hidden="true"
                        />
                      </div>
                      <div class="dd-text-left">
                        <p class="dd-text-lg dd-font-medium dd-text-gray-900">
                          {{ title }}
                        </p>
                        <p class="dd-mt-1 dd-text-sm dd-text-gray-500">
                          {{ message }}
                        </p>
                      </div>
                    </div>
                  </slot>
                </div>
                <div class="dd-flex dd-flex-shrink-0 dd-justify-end">
                  <slot name="footer">
                    <span class="dd-mr-4" v-if="closed">
                      <rdButton
                        @click="cancel()"
                        type="secondary"
                        :title="closeTitle"
                      />
                    </span>
                    <rdButton
                      v-if="solved"
                      @click="solvedItem()"
                      :type="conditionalIcons.button"
                      :title="saveTitle"
                    />
                  </slot>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
  
<script setup>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ExclamationIcon } from "@heroicons/vue/outline";
import { ref, computed } from "vue";
import rdButton from "../buttons/index.vue";
const emits = defineEmits(["update:modelValue", "change", "close", "cancel"]);
const props = defineProps({
  title: {
    type: String,
    default: "Delete",
  },
  message: {
    type: String,
    default: "Are you sure",
  },
  saveTitle: {
    type: String,
    default: "Save",
  },
  closeTitle: {
    type: String,
    default: "Close",
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: null,
  },
  type: {
    type: String,
    default: "Error",
  },
  closed: {
    type: Boolean,
    default: true,
  },
  solved: {
    type: Boolean,
    default: true,
  },
  modalWidth: {
    type: String,
    default: "32%",
  },
  resolve: {
    type: Function,
    required: true,
  },
  reject: {
    type: Function,
    required: true,
  },
});
const messageBoxValue = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emits("update:modelValue", val);
    emits("change", val);
  },
});
const close = () => {
  messageBoxValue.value = false;
  emits("close", true);
};
const cancel = () => {
  props.reject(true);
  messageBoxValue.value = false;
  emits("cancel", true);
};
const solvedItem = () => {
  props.resolve(true);
  messageBoxValue.value = false;
  emits("cancel", true);
};

const conditionalIcons = computed(() => {
  switch (props.type) {
    case "Error":
      return {
        icon: ExclamationIcon,
        class: "dd-text-red-500",
        color: "dd-bg-red-50",
        button: "danger",
      };
    case "Success":
      return {
        icon: ExclamationIcon,
        class: "dd-text-teal-500",
        color: "dd-bg-teal-50",
        button: "primary",
      };

    default:
      return null;
      break;
  }
});
</script>
  