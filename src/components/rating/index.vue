<template>
  <div class="dd-flex dd-items-center">
    <svg
      v-for="rating in [0, 1, 2, 3, 4]"
      :key="rating"
      xmlns="http://www.w3.org/2000/svg"
      v-bind="$attrs"
      class="icon icon-tabler icon-tabler-star"
      :width="starSize"
      :height="starSize"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="none"
      :fill="productRating > rating ? '#ffec00' : '#E5E7EB'"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
      />
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    productRating: {
      type: Number,
      default: 3,
    },
    size: {
      type: String,
      default: "xs", // Default size is 'base'
    },
  },
  computed: {
    starSize() {
      if (this.size === "xs") {
        return "24";
      } else if (this.size === "sm") {
        return "28";
      } else if (this.size === "base") {
        return "32";
      } else {
        return "28";
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
