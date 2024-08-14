import axios from "axios";
import { shallowMount } from "@vue/test-utils";
import BidCalculator from "@/components/BidCalculator.vue";

describe("BidCalculator.vue", () => {
  it("renders the component correctly", () => {
    const wrapper = shallowMount(BidCalculator);

    expect(wrapper.find("h2").text()).toBe("Bid Calculation Tool");

    expect(wrapper.find("form").exists()).toBe(true);

    expect(wrapper.find('input[type="number"]').exists()).toBe(true);
    expect(wrapper.find("select").exists()).toBe(true);

    expect(wrapper.find("button").text()).toBe("Calculate Total");
  });

  it("updates the state when user inputs values", async () => {
    const wrapper = shallowMount(BidCalculator);

    const basePriceInput = wrapper.find('input[type="number"]');
    await basePriceInput.setValue(1000);

    const vehicleTypeSelect = wrapper.find("select");
    await vehicleTypeSelect.setValue("luxury");

    expect(wrapper.vm.basePrice).toBe(1000);
    expect(wrapper.vm.vehicleType).toBe("luxury");
  });
});

jest.mock("axios");

describe("BidCalculator.vue", () => {
  it("submits the form and calculates the total cost", async () => {
    (axios.post as jest.Mock).mockResolvedValue({
      data: {
        basicBuyerFee: 50,
        specialFee: 20,
        associationFee: 10,
        totalCost: 1180,
      },
    });

    const wrapper = shallowMount(BidCalculator);

    const basePriceInput = wrapper.find('input[type="number"]');
    await basePriceInput.setValue(1000);

    const vehicleTypeSelect = wrapper.find("select");
    await vehicleTypeSelect.setValue("common");

    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.vm.fees.basicBuyerFee).toBe(50);
    expect(wrapper.vm.fees.specialFee).toBe(20);
    expect(wrapper.vm.fees.associationFee).toBe(10);
    expect(wrapper.vm.totalCost).toBe(1180);
  });

  it("handles API errors gracefully", async () => {
    (axios.post as jest.Mock).mockRejectedValue(new Error("API Error"));

    const wrapper = shallowMount(BidCalculator);

    const basePriceInput = wrapper.find('input[type="number"]');
    await basePriceInput.setValue(1000);

    const vehicleTypeSelect = wrapper.find("select");
    await vehicleTypeSelect.setValue("common");

    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.vm.totalCost).toBeNull();
  });
});
