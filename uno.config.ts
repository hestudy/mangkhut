// uno.config.ts
import { defineConfig, presetIcons, presetUno } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno(), presetIcons()],
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
