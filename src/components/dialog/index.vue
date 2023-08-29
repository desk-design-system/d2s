<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="inputModelValue">
    <Dialog as="div" class="dd-relative dd-z-10 custom-z-index" @close="close()">
      <TransitionChild as="template" enter="dd-ease-out dd-duration-300" enter-from="dd-opacity-0"
        enter-to="dd-opacity-100" leave="dd-ease-in dd-duration-200" leave-from="dd-opacity-100"
        leave-to="dd-opacity-0">
        <div class="dd-fixed dd-inset-0 dd-bg-gray-500 dd-bg-opacity-75 dd-transition-opacity" />
      </TransitionChild>

      <div class="dd-fixed dd-z-10 dd-inset-0 dd-overflow-y-auto">
        <div
          class="dd-flex dd-items-end sm:dd-items-center dd-justify-center dd-min-h-full dd-p-4 dd-text-center sm:dd-p-0">
          <TransitionChild as="template" enter="dd-ease-out dd-duration-300"
            enter-from="dd-opacity-0 dd-translate-y-4 sm:dd-translate-y-0 sm:dd-scale-95"
            enter-to="dd-opacity-100 dd-translate-y-0 sm:dd-scale-100" leave="dd-ease-in dd-duration-200"
            leave-from="dd-opacity-100 dd-translate-y-0 sm:dd-scale-100"
            leave-to="dd-opacity-0 dd-translate-y-4 sm:dd-translate-y-0 sm:dd-scale-95">
            <DialogPanel :style="{ 'width': modalWidth }"
              class="dd-relative dd-bg-white dd-rounded-lg custom-dialog-overflow dd-overflow-hidden dd-shadow-xl dd-transform dd-transition-all ">
              <div v-if="header" :class="headerClass" class="dd-p-6 dd-pb-3">
                <slot name="header">
                  <div class="dd-flex dd-items-start dd-justify-between">
                    <DialogTitle class="dd-text-lg dd-font-medium dd-text-gray-900">
                      {{ title }}
                    </DialogTitle>
                    <div class="dd-ml-3 dd-flex dd-h-7 dd-items-center">
                      <button type="button"
                        class="dd-rounded-md  dd-bg-transparent  focus:dd-outline-none hover:dd-cursor-pointer  dd-text-gray-600 hover:dd-text-gray-500"
                        @click="close()">
                        <XIcon class="dd-h-6 dd-w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </slot>
              </div>
              <div :class="[header ? 'dd-pt-3' : 'dd-pt-6',contentClass]"
                class="dd-text-left dd-px-6 dd-max-h-96 dd-pb-6  dd-overflow-auto ">
                <slot>
                  {{ content }}
                </slot>
              </div>
              <div v-if="footer" :class="[shadow ? 'dd-bg-zinc-100' : 'dd-bg-white',footerClass]"
                class=" dd-flex  dd-flex-shrink-0 dd-justify-end dd-px-6 dd-py-3">
                <slot name="footer">
                  <span class="dd-mr-4">
                    <rdButton @click="cancel()" color="white" :title="closeTitle" />
                  </span>
                  <rdButton @click="submit()" :color="color" :title="saveTitle" />
                </slot>
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
} from "@headlessui/vue"
import { CheckIcon, XIcon } from "@heroicons/vue/outline"
import { ref, computed } from "vue"
import rdButton from "../buttons/index.vue"
const emits = defineEmits( ['update:modelValue', "change","close","cancel","submit"] )
const props = defineProps( {
  title: {
    type: String,
    default: "Heading",
  },
  content: {
    type: String,
    default: "Lorem ipsum dolor sit amet.",
  },
  saveTitle: {
    type: String,
    default: "Save",
  },
  color: {
    type: String,
    default: "primary",
  },
  closeTitle: {
    type: String,
    default: "Close",
  },
  closeOnClickModal: {
    type: Boolean,
    default: true,
  },
  header: {
    type: Boolean,
    default: true,
  },
  footer: {
    type: Boolean,
    default: true,
  },
  modalWidth: {
    type: String,
    default: "30%",
  },
  shadow: {
    type: Boolean,
    default: true,
  },
  position: {
    type: String,
    validator: function ( value ) {
      // The value must match one of these strings
      return ["right", "left"].indexOf( value ) !== -1
    },
    default: "right",
  },
  show: {
    type: Boolean,
    default: false,
  },
  headerClass: {
    type: String,
    default: null,
  },
  contentClass: {
    type: String,
    default: null,
  },
  footerClass: {
    type: String,
    default: null,
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: null,
  }

} )
const inputModelValue = computed( {
  get () {
    return props.modelValue
  },
  set ( val ) {
    emits( "update:modelValue", val )
    emits( "change", val )
  }
} )
const close = () => {
  inputModelValue.value = false
  emits( "close", true )
}
const cancel = () => {
  inputModelValue.value = false
  emits( "cancel", true )
}
const submit = () => {
  inputModelValue.value = false
  emits( "cancel", true )
}

</script>
