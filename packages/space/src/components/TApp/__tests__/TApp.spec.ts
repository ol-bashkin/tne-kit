import { mount } from "@vue/test-utils";
import TApp from "../TApp.vue";

describe("TApp.vue", () => {
  test("should have an t-app class", () => {
    const wrapper = mount(TApp, {});
    expect(wrapper.classes()).toContain("t-app");
    expect(wrapper.html()).toMatchSnapshot();
  });
});
