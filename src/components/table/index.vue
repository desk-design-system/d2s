<template>
  <div class="dd-mt-8 dd-flow-root">
    <div class="-dd-my-2 -dd-mx-4 dd-overflow-x-auto sm:-dd-mx-6 lg:-dd-mx-8">
      <div class="dd-inline-block dd-min-w-full dd-py-2 dd-align-middle sm:dd-px-6 lg:px-8">
        <div
          class="dd-overflow-hidden"
        >
          <table class="dd-min-w-full dd-divide-y dd-divide-gray-300">
            <thead class="dd-bg-gray-50">
              <tr>
                <th
                v-for="col in columns" :key="col.value"
                  scope="col"
                  class="dd-py-3.5 dd-pl-4 dd-pr-3 dd-text-left dd-text-xs dd-font-medium dd-text-gray-700 sm:dd-pl-6"
                >
                  {{ col.title }}
                </th>
              </tr>
            </thead>
            <tbody class="dd-divide-y dd-divide-gray-200 dd-bg-white">
              <tr v-for="(row, index) in rows" :key="index">
                <td
                v-for="col in columns" :key="col.value"
                  class="dd-whitespace-nowrap dd-py-4 dd-pl-4 dd-pr-3 dd-text-sm  dd-text-gray-500 sm:dd-pl-6"
                >
                <slot name="row" :column="col" :row="row" :value="row[col.value]">
                  {{ row[col.value] }}
                </slot>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
const emits = defineEmits( ['update:modelValue', "change"] )
const props = defineProps( {
  
  columns: {
    type: Array,
    required: true
  },
  rows: {
    type: Array,
    required: true
  },

  defaultProps: {
    type: Object,
    default: () => ( {
      name: 'name',
      value: 'value',
      avatar: 'avatar'
    } )
  }
} )
</script>

<style lang="scss" scoped></style>
