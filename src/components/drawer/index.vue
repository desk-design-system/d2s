<template>
  <TransitionRoot as="template" :show="inputModelValue">
    <Dialog as="div" class="dd-relative dd-z-50">
      <TransitionChild as="template" enter="dd-ease-in-out dd-duration-500" enter-from="dd-opacity-0"
        enter-to="dd-opacity-100" leave="dd-ease-in-out dd-duration-500" leave-from="dd-opacity-100"
        leave-to="dd-opacity-0">
        <div class="dd-fixed dd-inset-0 dd-bg-gray-500 dd-bg-opacity-75 dd-transition-opacity" />
      </TransitionChild>

      <div class="dd-fixed dd-inset-0 dd-overflow-hidden">
        <div class="dd-absolute dd-inset-0 dd-overflow-hidden dd-flex">
          <div @click="$emit('clickOutside')" style="height: 100%;width: 100%;"></div>
          <div :style="{ 'width': size }"
            :class="`dd-pointer-events-none dd-fixed dd-inset-y-0 dd-${position}-0 dd-flex `">
            <TransitionChild as="template"
              enter="dd-transform dd-transition dd-ease-in-out dd-duration-500 sm:dd-duration-700"
              :enter-from="position == 'left' ? '-dd-translate-x-full' : 'dd-translate-x-full'" :enter-to="position == 'left' ? '-dd-translate-x-0' : 'dd-translate-x-0'"
              leave="dd-transform dd-transition dd-ease-in-out dd-duration-500 sm:dd-duration-700"
              :leave-from="position == 'left' ? '-dd-translate-x-0' : 'dd-translate-x-0' " :leave-to="position == 'left' ? '-dd-translate-x-full' : 'dd-translate-x-full'">
              <DialogPanel :class="size" class="dd-pointer-events-auto dd-w-screen">
                <div class="dd-flex dd-h-full dd-flex-col dd-divide-y dd-divide-gray-200 dd-bg-white dd-shadow-xl">
                  <div class="dd-flex dd-min-h-0 dd-flex-1 dd-flex-col dd-overflow-y-scroll ">
                    <div :class="{ 'dd-bg-teal-600 ': primaryHeader }" class="dd-p-6 ">
                      <slot name="header">
                        <div class="dd-flex dd-items-start dd-justify-between">
                          <DialogTitle :class="[primaryHeader ? 'dd-text-white' : 'dd-text-gray-900']"
                            class="dd-text-lg dd-font-medium ">
                            {{ title }}
                          </DialogTitle>
                          <div class="dd-ml-3 dd-flex dd-h-7 dd-items-center">
                            <button type="button" :class="[primaryHeader ? 'dd-text-gray-100 hover:dd-text-teal-100' : 'dd-text-gray-500 hover:dd-text-gray-500']"
                              class="dd-rounded-md    focus:dd-outline-none"
                              @click="$emit('close')">
                              <XIcon class="dd-h-6 dd-w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                        <p v-if="primaryHeader" class="dd-test-sm dd-text-teal-100 dd-pt-1">{{ description }}</p>
                      </slot>
                    </div>
                    <div class="dd-relative dd-mt-6 dd-flex-1 dd-px-4 sm:dd-px-6">
                      <slot></slot>
                    </div>
                  </div>

                  <div v-if="footer" class="dd-flex dd-bg-white dd-flex-shrink-0 dd-justify-end dd-px-6 dd-py-4">
                    <slot name="footer">
                      <span class="dd-mr-4">
                        <rdButton @click="$emit('cancel')" color="white" :title="closeTitle" />
                      </span>
                      <rdButton @click="$emit('submit')" color="primary" :title="saveTitle" />
                    </slot>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import rdButton from "../buttons/index.vue"
import { ref, computed } from "vue"
import {
  Dialog,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
  DialogPanel
} from "@headlessui/vue"
import { XIcon } from "@heroicons/vue/outline"
const emits = defineEmits( ['update:modelValue', "change",'clickOutside', 'close'] )
const props = defineProps( {
  title: {
    type: String,
    default: "Title",
  },
  saveTitle: {
    type: String,
    default: "Save",
  },
  closeTitle: {
    type: String,
    default: "Close",
  },
  description: {
    type: String,
    default: "Get started by filling in the information below to create your new project.",
  },
  primaryHeader: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "30%",
  },
  position: {
    type: String,
    validator: function ( value ) {
      // The value must match one of these strings
      return ["right", "left"].indexOf( value ) !== -1
    },
    default: "right",
  },
  footer: {
    type: Boolean,
    default: false,
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
</script>


<style lang="scss" scoped>

</style>
