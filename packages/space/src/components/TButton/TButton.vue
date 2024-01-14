<template>
  <button :class="[classes.button]" @click="$emit('click', $event)" @mouseover="hover">
    <span :class="[classes.text]">
      <slot>@tne-kit</slot>
    </span>
  </button>
</template>

<script lang="ts" setup>
import { withDefaults, computed } from "vue";

interface Props {
  theme?: string;
  color?: string;
  fill?: string;
  size?: string;
}

const props = withDefaults(defineProps<Props>(), {
  theme: "light",
  color: "primary--base",
  fill: "secondary--base",
  size: "lg",
});

const emit = defineEmits(["click"]);

const classes = computed(() => {
  return {
    button: `t-button t-button--${props.size} ${props.fill}`,
    text: `t-text font-secondary text-${props.color}`,
  };
});

const hover = (event: any) => {
  console.log("hover");
};
</script>

<style lang="scss">
/* === Button Sizes === */
$sizes: (
  xl,
  lg,
  md,
  sm,
  xs) !default;

.t-button {
  border: none;

  @each $size in $sizes {
    &--#{$size} {
      height: var(--height-#{$size}
    );
    min-height: var(--height-#{$size});
    padding-left: var(--space-#{$size});
    padding-right: var(--space-#{$size});
    border-radius: var(--border-radius-#{$size});
    min-width: var(--width-#{$size});

    .t-text {
      font-size: var(--font-size-#{$size});
    }
  }
}

&:hover {
  cursor: pointer;
}
}
</style>
