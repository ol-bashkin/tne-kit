import { mount } from "@vue/test-utils";
import TSprite from "../TSprite.vue";

describe("TSprite.vue", () => {
  test("should have an t-sprite class", () => {
    const wrapper = mount(TSprite, {
      props: {
        prefix: "test",
        name: "color",
        color: "#fff",
        width: "50",
        height: "60",
      },
    });
    expect(wrapper.classes()).toContain("t-sprite");
  });
});
