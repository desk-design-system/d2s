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
    <div class="dd-flex dd-justify-between">
      <div class="dd-flex dd-items-center">
        <div class="dd-flex-shrink-0 dd-items-center dd-flex">
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
      <div class="dd-flex dd-items-center dd-gap-3">
        <slot name="rightSlot"></slot>
        <XIcon
          v-if="closable"
          class="dd-h-4 dd-w-4 !dd-bg-text-500"
          aria-hidden="true"
          @click="$emit('close')"
        />
      </div>
    </div>
    <p
      v-if="description"
      class="dd-text-sm dd-font-normal dd-leading-5 dd-self-stretch dd-flex-nowrap dd-mt-2"
      :class="{
        'dd-text-amber-700': type === 'warning',
        'dd-text-red-700': type === 'danger',
        'dd-text-lime-700': type === 'success',
        'dd-text-sky-700': type === 'info',
      }"
    >
      {{ description }}
    </p>
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
export default {
  components: {
    ExclamationIcon,
    XCircleIcon,
    CheckCircleIcon,
    InformationCircleIcon,
    XIcon,
  },
  props: {
    closable: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "warning alert",
    },
    description: {
      type: String,
      default: "warning alert description",
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
