<template>
  <nav class="bg-green-800 p-4 shadow-lg shadow-green-100 fixed w-full">
    <div
      class="container mx-auto flex justify-between items-center overflow-x-auto"
    >
      <div class="text-white font-bold text-xl">Bid Calculator Tool</div>
      <div class="space-x-4 flex-shrink-0">
        <router-link
          to="/"
          class="text-white hover:text-green-200 transition-colors"
          active-class="underline"
        >
          Home
        </router-link>
        <span class="text-white">|</span>
        <router-link
          to="/bid-calculator"
          class="text-white hover:text-green-200 transition-colors"
          active-class="underline"
        >
          Bid Calculator
        </router-link>
      </div>
    </div>
  </nav>
  <div class="container mx-auto">
    <router-view />
  </div>
</template>

<style scoped>
/* Additional custom styles can go here if needed */
</style>
