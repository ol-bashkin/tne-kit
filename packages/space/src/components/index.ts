export const Components: { [key: string]: any } = {
  TApp: () => import("@/components/TApp/TApp.vue"),
  TButton: () => import("@/components/TButton/TButton.vue"),
  TGrid: () => import("@/components/TLayout/TGrid/TGrid"),
  TContainer: () => import("@/components/TLayout/TContainer/TContainer"),
  TRow: () => import("@/components/TLayout/TRow/TRow"),
  TCol: () => import("@/components/TLayout/TCol/TCol"),
  TInput: () => import("@/components/TInput/TInput.vue"),
};

export { default as TApp } from "./TApp/TApp.vue";
export { default as TButton } from "./TButton/TButton.vue";
export { default as TTable } from "./TButton/TButton.vue";
