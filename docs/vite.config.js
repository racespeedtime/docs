import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import components from "unplugin-vue-components/vite";
import autoImport from "unplugin-auto-import/vite";
import { VarletUIResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  ssr: { noExternal: ["@varlet/ui"] },
  plugins: [
    UnoCSS(),
    components({
      resolvers: [VarletUIResolver()],
    }),
    autoImport({
      resolvers: [VarletUIResolver({ autoImport: true })],
    }),
  ],
});
