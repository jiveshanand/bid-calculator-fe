<template>
  <div class="min-h-screen bg-white flex flex-col justify-center items-center">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto text-center">
      <img
        alt="Bid Calculator Logo"
        src="../assets/logo.png"
        class="w-24 h-24 mx-auto mb-4"
      />
      <h1 class="text-3xl font-bold text-gray-800 mb-2">
        Welcome to Bid Calculator Tool
      </h1>
      <p class="text-gray-600 mb-6">
        This tool helps you calculate the total cost of your bids efficiently.
      </p>
      <router-link
        data-test-id="go-to-calculator"
        to="/bid-calculator"
        class="inline-block bg-green-800 text-white py-2 px-4 rounded-md shadow hover:bg-green-700 transition-colors"
      >
        Go to Calculator
      </router-link>
    </div>
    <footer class="mt-8 text-gray-500">Created by Jivesh Anand</footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
});
</script>

<!-- No additional styles needed as we're using Tailwind for styling -->
