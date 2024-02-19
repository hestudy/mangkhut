import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  vite: () => ({
    plugins: [react()],
  }),
  runner: {
    binaries: {
      edge: "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    },
  },
  manifest: {
    permissions: ["tabs"],
  },
  alias: {
    "@shadcn": path.resolve(__dirname, "entrypoints"),
  },
});
