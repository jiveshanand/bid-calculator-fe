import { shallowMount } from "@vue/test-utils";
import HomePage from "@/components/HomePage.vue";
import { RouterLinkStub } from "@vue/test-utils";

describe("HomePage.vue", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(HomePage, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
  });

  it("renders the component correctly", () => {
    expect(wrapper.find("h1").text()).toBe("Welcome to Bid Calculator Tool");

    expect(wrapper.find("p").text()).toBe(
      "This tool helps you calculate the total cost of your bids efficiently."
    );

    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("alt")).toBe("Bid Calculator Logo");

    const button = wrapper.find("[data-test-id='go-to-calculator']");
    expect(button.text()).toBe("Go to Calculator");

    expect(wrapper.find("footer").text()).toBe("Created by Jivesh Anand");
  });
});
