import { computed, h, defineComponent } from "vue";

export default defineComponent({
  name: "TContainer",

  props: {
    size: {
      type: [Boolean, String],
      default: "fluid",
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
        [`container-${props.size}`]: props.size,
      });

      return classList;
    });

    return () =>
      h(
        props.tag,
        {
          class: ["t-container", classes.value],
        },
        slots.default?.()
      );
  },
});
