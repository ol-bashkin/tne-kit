import { computed, h, defineComponent } from "vue";

export default defineComponent({
  name: "TCol",

  props: {
    col: {
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
        [`col-${props.col}`]: props.col,
      });

      return classList;
    });

    return () =>
      h(
        props.tag,
        {
          class: ["t-col col", classes.value],
        },
        slots.default?.()
      );
  },
});
