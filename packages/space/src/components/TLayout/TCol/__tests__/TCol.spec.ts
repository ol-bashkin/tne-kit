import { mount } from "@vue/test-utils";
import WCol from "../TCol";

describe("TCol.ts", () => {
  test("should have an t-col class", () => {
    const wrapper = mount(WCol, {
      propsData: {
        col: "2",
      },
    });
    expect(wrapper.classes()).toContain("t-col");
    expect(wrapper.html()).toMatchSnapshot();
  });
});
