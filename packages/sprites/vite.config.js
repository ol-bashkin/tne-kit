/* eslint-disable */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap'
import path from "path";

module.exports = defineConfig({
  plugins: [
    vue(),
    jsx(),
    VitePluginSvgSpritemap('./src/sprites/*.svg')
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: "TneSprites",
      fileName: (format) => `sprites.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        format: "iife",
        name: "tne.sprites",
        inlineDynamicImports: true,
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
