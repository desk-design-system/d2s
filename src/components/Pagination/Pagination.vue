<template>
  <div class="main__div">
      <button
        v-if="currentPage > '1'"
        class="btn-pagination-prev"
        color="white"
        :disable="currentPage === 1"
        @click="moveToPreviousPage"
      >
        <span class="dd-sr-only">Previous</span>
        <svgIcon icon="ChevronLeft" color="white" size="12" />
      </button>
      <div class="pagination-box" v-if="numberOfPages > 1">
        <ul class="pagination-list dd-flex dd-align-items-center">
          <li
            v-for="(paginatedNumber, index) in pages"
            :key="`${index}-pagination-index${paginatedNumber}`"
            class="pagination-item"
          >
            <button
              :class="`btn-pagination ${
                Number(currentPage) === Number(paginatedNumber) ? 'active' : ''
              }`"
              @click.prevent="setCurrentPage(Number(paginatedNumber))"
              :disabled="paginatedNumber === '...'"
            >
              {{ paginatedNumber }}
            </button>
            <!-- <button
          v-for="(paginatedNumber, index) in numberOfPages"
          :key="`${index}-pagination-index${paginatedNumber}`"
          class="dd-flex dd-items-center dd-justify-center dd-w-[32px]"
          :class="`${
            Number(currentPage) === Number(paginatedNumber)
              ? 'dd-bg-teal-700 dd-text-white hover:dd-bg-teal-600'
              : ''
          }`"
          color="white"
          size="base"
          @click="setCurrentPage(Number(paginatedNumber))"
        >
          {{ paginatedNumber }}
        </button> -->
          </li>
        </ul>
      </div>
      <button
        v-if="currentPage < numberOfPages"
        class="btn-pagination-next dd-rounded-full"
        color="white"
        :disable="currentPage === numberOfPages"
        @click="moveToNextPage"
      >
        <span class="dd-sr-only">Next</span>
        <svgIcon class="-dd-mb-[2px]" color="white" icon="ChevronRight" size="12" />
      </button>
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
    default: 0,
  },
  limit: {
    type: Number,
    default: 5,
  },
  offset: {
    type: Number,
    default: 0,
  },
});

onBeforeUpdate(() => {
  setData();
});
onMounted(() => {
  fetchData();
});


const pages = computed(() => {
  const pageCount = numberOfPages.value
  const visiblePages = []

  if (pageCount <= 3) {
    for (let i = 1; i <= pageCount; i++) {
      visiblePages.push(i)
    }
  } else {
    let startPage = 1
    let endPage = pageCount

    if (currentPage.value <= 3) {
      endPage = 3
    } else if (currentPage.value >= pageCount - 3) {
      startPage = pageCount - 3
    } else {
      startPage = currentPage.value - 3
      endPage = currentPage.value + 3
    }

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i)
    }

    if (startPage > 1) {
      visiblePages.unshift('...')
      visiblePages.unshift(1)
    }

    if (endPage < pageCount) {
      visiblePages.push('...')
      visiblePages.push(pageCount)
    }
    console.log(pageCount, 'pageCount')
  }

  return visiblePages
})

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
  console.log(currentPageValue, 'currentPageValue');
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

<style scoped>
.main__div {
  width: fit-content;
  display: flex !important;
  justify-content: center;
  align-items: center !important;
  margin: auto;
}
.pagination-box {
  overflow-x: hidden;
  margin-left: auto;
  margin-right: auto;
  max-width: 335px;
}
.pagination-list {
  margin: auto;
  width: fit-content;
  list-style-type: none;
  overflow-x: auto !important;
}
.pagination-item {
  padding: 6px;
}
.btn-pagination {
  color: #0d9488;
  background-color: #ffffff;
  width: 35px;
  height: 35px;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0;
  text-align: center;
  border-radius: 50%;
  border: 2px solid #0d9488;
}
.btn-pagination.active {
  color: #fff;
  background-color: #0d9488;
  border: none;
  outline: none;
}
.btn-pagination-prev,
.btn-pagination-next {
  background-color: #0d9488;
  border: none;
  outline: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.btn-pagination-prev svg,
.btn-pagination-next svg {
  margin: auto;
}
</style>