﻿import { computed, h, defineComponent } from "vue";

export default defineComponent({
  name: "TRow",

  props: {
    row: {
      type: [Boolean, String, Number],
      default: 1,
    },
    tag: {
      type: String,
      default: "div",
    },
  },

  setup(props, { slots }) {
    const classes = computed(() => {
      const classList: any[] = [];

      classList.push({
        [`row-${props.row}`]: props.row,
      });

      return classList;
    });

    return () =>
      h(
        props.tag,
        {
          class: ["t-row row", classes.value],
        },
        slots.default?.()
      );
  },
});
