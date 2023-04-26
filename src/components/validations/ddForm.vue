<template>
  <!-- <form> -->
    <slot></slot>
  <!-- </form> -->
</template>

<script setup>
import { useForm } from "vee-validate";

const { validate, resetForm } = useForm();
defineExpose({
  validate,
  resetForm
})
</script>

<style lang="scss" scoped>

</style>