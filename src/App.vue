<template>
  <div class="container mx-auto">
    <div class="flex justify-between">
      <dd-alert :closable="true" type="warning" title="Warning">Warning Description kjsdnvkjdsnvjnsdvn ksjdvkjdsbnv jsdbjvbsd jsbdvkjbs jksbdkjbv kjsbdkjbv kjbjbds vjbkjbn sdkjbvkjsd </dd-alert>
      <dd-alert :closable="true" type="danger" title="Danger">Danger Description</dd-alert>
      <dd-alert :closable="true" type="success" title="Success">Success Description</dd-alert>
      <dd-alert :closable="true" type="info" title="Info">Info Description</dd-alert>

    </div>
  </div>
</template>
<script>
import DdAlert from "@/components/alerts/index.vue";
export default {
  data() {
    return {};
  },
  components: {
    DdAlert,
    
  },
};
</script>
