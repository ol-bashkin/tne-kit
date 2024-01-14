import { mount } from "@vue/test-utils";
import TInput from "../TInput.vue";

describe("WInput.vue", () => {
  test("should have an t-input class", () => {
    const wrapper = mount(TInput, {
      propsData: {
        modelValue: "test",
      },
    });
    expect(wrapper.classes()).toContain("t-input");
    expect(wrapper.html()).toMatchSnapshot();
  });
});
