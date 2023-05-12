<template>
  <div v-bind="$attrs">
    <nav aria-label="Progress" class="dd-px-5">
      <ol role="list" class="dd-flex dd-space-x-8 dd-space-y-0">
        <li v-for="(step, index) in steps" :key="index" class="dd-flex-1">
          <a
            :href="step.href"
            class="dd-group"
            :class="
              index <= active ? 'dd-stepper-selected' : 'dd-stepper-unselected'
            "
          >
            <span class="dd-stepper-step-text">STEP {{ index + 1 }}</span>
            <span class="dd-stepper-step-title">{{ step }}</span>
          </a>
        </li>
      </ol>
      <slot></slot>
    </nav>
  </div>
</template>

<script setup>
const props = defineProps({
  steps: {
    type: Array,
    default: () => [],
  },
  active: {
    type: Number,
    default: 0,
  },
});
</script>
