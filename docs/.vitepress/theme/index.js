import "virtual:uno.css";
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import NotFound from "../../components/NotFound.vue";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "not-found": () => h(NotFound),
    });
  },
};
