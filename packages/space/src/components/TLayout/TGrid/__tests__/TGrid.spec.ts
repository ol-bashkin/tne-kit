import { mount } from "@vue/test-utils";
import TGrid from "../TGrid";

describe("TGrid.vue", () => {
  test("should have an t-grid class", () => {
    const wrapper = mount(TGrid, {
      propsData: {
        cols: "6",
      },
    });
    expect(wrapper.classes()).toContain("t-grid");
    expect(wrapper.html()).toMatchSnapshot();
  });
});
