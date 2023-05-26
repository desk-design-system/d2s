<template>
  <div class="dd-mt-8 dd-flow-root">
    <div class="-dd-my-2 -dd-mx-4 dd-overflow-x-auto sm:-dd-mx-6 lg:-dd-mx-8">
      <div class="dd-inline-block dd-min-w-full dd-py-2 dd-align-middle sm:dd-px-6 lg:px-8">
        <div class="dd-overflow-hidden">
          <table class="dd-min-w-full dd-divide-y dd-divide-gray-300">
            <thead class="dd-bg-gray-50">
              <tr>
                <th
                  class="dd-py-3.5 dd-pl-4 dd-text-left dd-text-xs dd-font-medium dd-text-gray-700 sm:dd-pl-4 dd-flex dd-items-center dd-gap-2">
                  <dd-checkbox v-model="allSelected" @click="selectAllFields" />
                  <span v-if="selectedId.length > 0">
                    {{ selectedId.length }} Selected
                  </span>
                </th>
                <th v-for="col in columns" :key="col.value" scope="col"
                  class="dd-py-3.5 dd-pl-4 dd-pr-3 dd-text-left dd-text-xs dd-font-medium dd-text-gray-700 sm:dd-pl-6">
                  {{ col.title }}
                </th>
              </tr>
            </thead>
            <tbody class="dd-divide-y dd-divide-gray-200 dd-bg-white">
              <template v-if="rows">
                <tr v-for="(row, index) in rows" :key="index" class="hover:dd-bg-gray-100"
                  :class="[selectedId.includes(row.id) ? 'dd-bg-gray-100' : '']">
                  <th class="dd-py-3.5 dd-pl-4 dd-text-left dd-text-xs dd-font-medium dd-text-gray-700 sm:dd-pl-4">
                    <dd-checkbox :checked="selectedId && selectedId.includes(row.id)" :value="row.id"
                      @click="setChecked(row.id)" />
                  </th>
                  <td v-for="col in columns" :key="col.value"
                    class="dd-whitespace-nowrap dd-py-4 dd-pl-4 dd-pr-3 dd-text-sm  dd-text-gray-500 sm:dd-pl-6">
                    <slot name="row" :column="col" :row="row" :value="row[col.value]">
                      {{ row[col.value] }}
                    </slot>
                  </td>
                </tr>
              </template>
              <slot v-else name="noData" />
            </tbody>
          </table>
          <div v-if="footer">
            <DdPagination :count="count" :limit="limit" :offset="offset" @fetch-data="getData" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import DdCheckbox from "../checkbox/index.vue"
import DdPagination from "../Pagination/index.vue"
const emits = defineEmits(['update:modelValue', "change"])
const props = defineProps({

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
    default: () => ({
      name: 'name',
      value: 'value',
      avatar: 'avatar'
    })
  }
})


const allSelected = ref(false);
const selectedId = ref([]);
const footer = ref(true);
const limit = ref(5);
const count = ref(100)

const selectAllFields = () => {
  if (allSelected.value === false) {
    selectedId.value = [];
    props.rows.forEach(row => {
      selectedId.value.push(row.id);
    });
  } else {
    selectedId.value = [];
  }
  allSelected.value = !allSelected.value;
};

const setChecked = (id) => {
  const index = selectedId.value.indexOf(id)
  if (index === -1) {
    selectedId.value.push(id)
  } else {
    selectedId.value.splice(index, 1)
  }
  selectedId.value.length > 1 ? allSelected.value = true : allSelected.value = false
}
</script>

<style lang="scss" scoped></style>
