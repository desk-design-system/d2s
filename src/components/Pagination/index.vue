<template>
  <div class="dd-flex dd-justify-center dd-items-center dd-w-fit">
    <dd-button
      class="dd-rounded-tl-lg dd-rounded-tr-none dd-rounded-bl-lg dd-rounded-br-none"
      type="secondary"
      :disable="currentPage === 1"
      @click="moveToPreviousPage"
    >
      <span class="dd-sr-only">Previous</span>
      <svgIcon
        class="dd-flex dd-items-center"
        icon="ChevronLeft"
        type="secondary"
        size="12"
      />
    </dd-button>
    <div class="dd-overflow-x-hidden dd-ml-auto dd-max-w-[335px] dd-mr-auto">
      <ul
        class="dd-w-fit dd-m-auto dd-list-none dd-overflow-x-auto dd-flex dd-align-items-center"
      >
        <li
          v-for="(paginatedNumber, index) in pages"
          :key="`${index}-pagination-index${paginatedNumber}`"
        >
          <dd-button
            class="dd-w-10 dd-h-8 dd-text-center dd-flex dd-items-center dd-justify-center dd-rounded-none !dd-ring-0 dd-border-gray-300 dd-border-t dd-border-b dd-border-r"
            type="secondary"
            :class="`${
              Number(currentPage) === Number(paginatedNumber)
                ? 'dd-text-gray-700 hover:dd-text-gray-700 !dd-bg-teal-50 hover:dd-bg-teal-100 dd-border-[1px] dd-border-teal-500 dd-outline-none'
                : ''
            }`"
            :style="[paginatedNumber === '...' ? 'border-top: 1px solid #D1D5DB !important;     border-bottom: 1px solid #D1D5DB !important;' : '']"
            @click.prevent="setCurrentPage(paginatedNumber)"
            :disabled="paginatedNumber === '...'"
          >
            {{ paginatedNumber }}
          </dd-button>
        </li>
      </ul>
    </div>
    <dd-button
      class="dd-rounded-tl-none dd-rounded-br-lg dd-rounded-bl-none"
      type="secondary"
      :disable="currentPage === numberOfPages"
      @click="moveToNextPage"
    >
      <span class="dd-sr-only">Next</span>
      <svgIcon
        class="dd-flex dd-items-center"
        type="secondary"
        icon="ChevronRight"
        size="12"
      />
    </dd-button>
  </div>
</template>
  
<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/solid";
import DdButton from "../buttons/index.vue";
import svgIcon from "../svgIcon/index.vue";
import { computed, onBeforeUpdate, onMounted, ref, watch } from "vue";

let currentPage = ref(1);
let numberOfPages = ref(0);
let pageOffset = ref(0);

const props = defineProps({
  count: {
    type: Number,
    default: 100,
  },
  limit: {
    type: Number,
    default: 5,
  },
  offset: {
    type: Number,
    default: 0,
  },
  disabled: {
    type: Boolean,
    default: false,
  }
});

onBeforeUpdate(() => {
  setData();
});
onMounted(() => {
  fetchData();
});

const pages = computed(() => {
  const pageCount = numberOfPages.value;
  const visiblePages = [];

  if (pageCount <= 3) {
    for (let i = 1; i <= pageCount; i++) {
      visiblePages.push(i);
    }
  } else {
    let startPage = 1;
    let endPage = pageCount;

    if (currentPage.value <= 3) {
      endPage = 3;
    } else if (currentPage.value >= pageCount - 2) {
      startPage = pageCount - 2;
    } else {
      startPage = currentPage.value - 3;
      endPage = currentPage.value + 3;
    }

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }

    if (startPage > 1) {
      visiblePages.unshift("...");
      visiblePages.unshift(1);
    }

    if (endPage < pageCount) {
      visiblePages.push("...");
      visiblePages.push(pageCount);
    }
  }

  return visiblePages;
});

const setData = () => {
  numberOfPages.value = Math.ceil(props.count / props.limit);
  props.offset = pageOffset.value;
};

const emit = defineEmits(["fetch-datat"]);
const fetchData = () => {
  props.offset = pageOffset.value;
  emit("fetch-data");
};

const setCurrentPage = (currentPageValue) => {
  if(currentPageValue === '...') {
    return;
  }
  pageOffset.value = props.limit * (currentPageValue - 1);
  pageOffset.value = props.limit;
  currentPage.value = currentPageValue;
  fetchData();
};

const moveToPreviousPage = () => {
  if (currentPage.value === 1) return;
  pageOffset.value =
    pageOffset.value - props.limit < 0 ? 0 : pageOffset.value - props.limit;
  currentPage.value--;
  fetchData();
};

const moveToNextPage = () => {
  if (currentPage.value === numberOfPages.value) return;
  pageOffset.value += props.limit;
  currentPage.value++;
  fetchData();
};
</script>