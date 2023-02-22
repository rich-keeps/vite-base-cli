import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import path from "path";

const aliasPath = (dir) => path.resolve(__dirname, dir);

export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  server: {
    hmr: true,
  },
  resolve: {
    alias: {
      "@": aliasPath("/src"),
      api: aliasPath("/src/api"),
      ast: aliasPath("/src/assets"),
      com: aliasPath("/src/components"),
      libs: aliasPath("/src/libs"),
      route: aliasPath("/src/route"),
      store: aliasPath("/src/store"),
      sty: aliasPath("/src/styles"),
      views: aliasPath("/src/views"),
    },
  },
});
