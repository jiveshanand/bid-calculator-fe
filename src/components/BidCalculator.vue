<template>
  <div class="min-h-screen flex items-center justify-center bg-transparent">
    <div
      class="max-w-2xl min-w-[25rem] mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 class="text-2xl font-bold text-center text-gray-800 mb-8">
        Bid Calculation Tool
      </h2>

      <form @submit.prevent="calculateTotal" class="space-y-6">
        <div class="my-2">
          <label class="block text-sm font-medium text-gray-700"
            >Vehicle Base Price</label
          >
          <input
            v-model="basePrice"
            type="number"
            placeholder="Enter base price"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Vehicle Type</label
          >
          <select
            v-model="vehicleType"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
            required
          >
            <option
              v-for="(value, key) in VehicleType"
              :key="key"
              :value="value"
            >
              {{ key }}
            </option>
          </select>
        </div>
        <div class="pt-4">
          <button
            type="submit"
            class="w-full px-4 py-2 bg-green-800 text-white font-semibold rounded-md shadow-lg hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
          >
            Calculate Total
          </button>
        </div>
      </form>

      <!-- Display error message if there's an error -->
      <div v-if="errorMessage" class="mt-4 text-red-600">
        {{ errorMessage }}
      </div>

      <!-- Display total cost and fees if calculation is successful -->
      <div
        v-if="totalCost !== null && !errorMessage"
        class="mt-8 p-6 bg-gray-100 rounded-lg shadow-md"
      >
        <h3 class="text-lg font-medium text-gray-700">
          Total Cost:
          <span class="text-green-800 font-bold">${{ totalCost }}</span>
        </h3>
        <ul class="mt-4 space-y-2 text-gray-600">
          <li>
            <span class="font-semibold">Basic Buyer Fee:</span> ${{
              fees.basicBuyerFee
            }}
          </li>
          <li>
            <span class="font-semibold">Special Seller's Fee:</span> ${{
              fees.specialFee
            }}
          </li>
          <li>
            <span class="font-semibold">Association Fee:</span> ${{
              fees.associationFee
            }}
          </li>
          <li><span class="font-semibold">Storage Fee:</span> $100</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";

enum VehicleType {
  Common = "common",
  Luxury = "luxury",
}

export default defineComponent({
  name: "BidCalculator",
  setup() {
    const basePrice = ref<number | null>(null);
    const vehicleType = ref<VehicleType>(VehicleType.Common);
    const totalCost = ref<number | null>(null);
    const fees = ref({
      basicBuyerFee: 0,
      specialFee: 0,
      associationFee: 0,
    });
    const errorMessage = ref<string | null>(null);

    const calculateTotal = async () => {
      if (basePrice.value !== null) {
        errorMessage.value = null;
        try {
          const response = await axios.post(
            "https://localhost:7243/api/BidCalculation/calculate",
            {
              basePrice: basePrice.value,
              vehicleType: vehicleType.value,
            }
          );

          const data = response.data;

          fees.value.basicBuyerFee = data.basicBuyerFee;
          fees.value.specialFee = data.specialFee;
          fees.value.associationFee = data.associationFee;
          totalCost.value = data.totalCost;
        } catch (error) {
          console.error("Error calculating total:", error);
          errorMessage.value =
            "Failed to calculate total. Please try again later.";
          totalCost.value = null;
        }
      }
    };

    return {
      basePrice,
      vehicleType,
      totalCost,
      fees,
      errorMessage,
      calculateTotal,
      VehicleType,
    };
  },
});
</script>
