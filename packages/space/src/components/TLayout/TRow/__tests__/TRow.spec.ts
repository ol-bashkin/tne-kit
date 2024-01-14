import { mount } from "@vue/test-utils";
import TRow from "../TRow";

describe("WRow.ts", () => {
  test("should have an t-row class", () => {
    const wrapper = mount(TRow, {
      propsData: {
        row: "2",
      },
    });
    expect(wrapper.classes()).toContain("t-row");
    expect(wrapper.html()).toMatchSnapshot();
  });
});
