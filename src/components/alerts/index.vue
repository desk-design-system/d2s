<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    :class="{
      'dd-bg-yellow-50': type === 'warning',
      'dd-bg-green-50': type === 'success',
      'dd-bg-red-50': type === 'danger',
      'dd-bg-blue-50': type === 'info',
    }"
    class="dd-rounded-md dd-p-4"
  >
    <div>
      <div class="dd-flex dd-justify-between dd-pb-2">
        <div class="dd-flex justify-start">
          <div class="dd-flex-shrink-0">
            <ExclamationIcon
              v-if="type == 'warning'"
              class="dd-h-5 dd-w-5 dd-text-yellow-400"
              aria-hidden="true"
            />
            <InformationCircleIcon
              v-if="type == 'info'"
              class="dd-h-5 dd-w-5 dd-text-blue-400"
              aria-hidden="true"
            />
            <CheckCircleIcon
              v-if="type == 'success'"
              class="dd-h-5 dd-w-5 dd-text-green-400"
              aria-hidden="true"
            />
            <XCircleIcon
              v-if="type == 'danger'"
              class="dd-h-5 dd-w-5 dd-text-red-400"
              aria-hidden="true"
            />
          </div>
          <div class="dd-ml-2 dd-break-normal">
            <p
              class="dd-text-sm dd-font-medium dd-normal-case"
              :class="{
                'dd-text-yellow-800': type === 'warning',
                'dd-text-green-800': type === 'success',
                'dd-text-red-800': type === 'danger',
                'dd-text-blue-800': type === 'blue',
              }"
            >
              {{ title }}
            </p>
            <slot name="title"></slot>
            <slot></slot>
          </div>
        </div>
        <dd-button
          v-if="closable"
          @click="$emit('close')"
          type="text"
          class="dd-py-0 dd-px-0"
          :class="{
            'dd-bg-yellow-50 hover:dd-text-yellow-500 hover:!dd-bg-transparent': type === 'warning',
            'dd-bg-green-50 hover:dd-text-green-500 hover:!dd-bg-transparent': type === 'success',
            'dd-bg-red-50 hover:dd-text-red-500 hover:!dd-bg-transparent': type === 'danger',
            'dd-bg-blue-50 hover:dd-text-blue-500 hover:!dd-bg-transparent': type === 'info',
          }"
        >
          <XIcon
            :class="{
              'dd-text-yellow-400': type === 'warning',
              'dd-text-green-400': type === 'success',
              'dd-text-red-400': type === 'danger',
              'dd-text-blue-400': type === 'info',
            }"
            class="dd-h-4 dd-w-4"
            aria-hidden="true"
          />
        </dd-button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ExclamationIcon,
  XCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  XIcon,
} from "@heroicons/vue/solid";
import ddButton from "../buttons/index.vue";
export default {
  components: {
    ExclamationIcon,
    XCircleIcon,
    CheckCircleIcon,
    InformationCircleIcon,
    XIcon,
    ddButton,
  },
  props: {
    closable: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      validator: function (value) {
        // The value must match one of these strings
        return ["warning", "danger", "success", "info"].indexOf(value) !== -1;
      },
      default: "warning",
    },
  },
};
</script>
