import { mount } from "@vue/test-utils";
import TContainer from "../TContainer";

describe("TContainer.ts", () => {
  test("should have an t-container class", () => {
    const wrapper = mount(TContainer, {
      propsData: {
        size: "lg",
      },
    });
    expect(wrapper.classes()).toContain("t-container");
    expect(wrapper.html()).toMatchSnapshot();
  });
});
