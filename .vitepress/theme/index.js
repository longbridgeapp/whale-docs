import DefaultTheme from "vitepress/theme";
import "../../style.scss";
import VPBadge from "vitepress/dist/client/theme-default/components/VPBadge.vue";
const theme = {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    const { app } = ctx;
    app.component("Badge", VPBadge);
    if (typeof window !== "undefined") {
      window.WhaleDocs = ctx;
    }
  },
};
export default theme;
