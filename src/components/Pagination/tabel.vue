<template>
  <table>
    <thead class="dd-flex dd-justify-between dd-gap-6 dd-text-center">
      <th>id</th>
      <th>brand</th>
      <th>category</th>
      <th>description</th>
      <th>discountPercentage</th>
      <th>price</th>
    </thead>
    <tbody class="dd-gap-6">
      <tr v-for="item in productsData" :key="item.id" class="dd-w-2 dd-gap-6">
        <td>{{ item.id }}</td>
        <td>{{ item.brand }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.discountPercentage }}</td>
        <td>{{ item.price }}</td>
      </tr>
    </tbody>
  </table>
  <DdPagination
    :count="totalRecords"
    :limit="limit"
    :offset="offset"
    @fetch-data="getData"
  />
</template>

<script>
import DdPagination from "./Pagination.vue";
export default {
  components: {
    DdPagination,
  },
  data() {
    return {
      productsData: [],
      limit: 10,
      offset: 0,
      totalRecords: 0,
    };
  },
  methods: {
    async getData() {
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${this.limit}`
        );
        const data = await response.json();
        this.productsData = data.products;
        this.totalRecords = data.total;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
</style>