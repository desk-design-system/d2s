<template>
    <Popper   v-bind="$attrs">
      <slot>
      </slot>
      <template #content>
        <div>
          <slot name="content">
            
          </slot>
        </div>
      </template>
    </Popper>
</template>

<script setup>
import { ref } from "vue"
import Popper from "vue3-popper"
 
</script>
<style>
:root {
  --popper-theme-background-color: #fff;
  --popper-theme-background-color-hover: #fff;
  /* --popper-theme-text-color: ; */
  --popper-theme-border-width: 0px;
  --popper-theme-border: 1px solid #D1D5DB;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 4px 0;
  --popper-theme-box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.05);
}
.inline-block{
margin: 0 !important;
border: none !important;
display: block !important;
}
</style>
