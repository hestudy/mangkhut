import { defineConfig } from "wxt";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";

// See https://wxt.dev/api/config.html
export default defineConfig({
  vite: () => ({
    plugins: [react(), Unocss()],
  }),
  runner: {
    binaries: {
      edge: "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    },
  },
  manifest: {
    permissions: ["tabs"],
  },
});
