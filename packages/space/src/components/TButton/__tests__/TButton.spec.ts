import { mount } from "@vue/test-utils";
import TButton from "../TButton.vue";

describe("WButton.vue", () => {
  test("should have an t-button class", () => {
    const wrapper = mount(TButton, {
      propsData: {
        theme: "light",
      },
    });
    expect(wrapper.classes()).toContain("t-button");
    expect(wrapper.html()).toMatchSnapshot();
  });
});
