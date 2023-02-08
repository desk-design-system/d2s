<template>
  <div class="container mx-auto">
    <!-- <dd-badges></dd-badges> -->
    <dd-badges  size="large" title="Hello" />
    <dd-badges type="warning" closable size="large" title="Hello" />
    <dd-badges type="danger" closable size="large" title="Hello" />
    <dd-badges type="success" closable size="large" title="Hello" />
    <dd-badges type="info" dot closable  title="Hello" />
    <dd-badges type="purple" closable dot  rounded title="Hello" />
    <p>hello</p>
  </div>
</template>
<script>
import DdBadges from "@/components/badges/index.vue";
export default {
  data() {
    return {};
  },
  components: {
    DdBadges,
    
  },
};
</script>
