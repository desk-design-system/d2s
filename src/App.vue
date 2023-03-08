<template>
  <div class="dd-container dd-mx-auto dd-m-5">
    <button @click="showSuccess"> show Success </button>
  </div>
</template>
<script >
export default {
  data() {
    return {
      
    };
  },
  components:{
    
  }
};
</script>

<script setup>
import { onMounted } from "vue";
import {useAlert} from "./components/notification/index.js"
const alert = useAlert()
const showSuccess = () => {
  alert.success("kamil", "helooo", 3000, 'topRight')
  // alert.warning("kamil", "helooo")
  // alert.info("kamil", "helooo")
  // alert.error("kamil", "helooo")
}
onMounted(() =>{
  console.log(alert)
})
</script>
