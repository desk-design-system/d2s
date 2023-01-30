<template>
  <div>
    <p  v-bind="$attrs" >{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "The face of the moon in shadow.",
    },
    // className: {
    //   type: String,
    //   default: "",
    // },
  },
};
</script>

<style lang="scss" scoped></style>
