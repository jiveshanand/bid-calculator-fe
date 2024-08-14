<template>
  <BidCalculator msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BidCalculator from "@/components/BidCalculator.vue";

export default defineComponent({
  name: "BidCalculatorView",
  components: {
    BidCalculator,
  },
});
</script>
