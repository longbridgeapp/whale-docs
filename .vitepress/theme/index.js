import DefaultTheme from "vitepress/theme";
import "./style.scss";
import VPBadge from "vitepress/dist/client/theme-default/components/VPBadge.vue";
import mediumZoom from "medium-zoom";
import { useRoute } from "vitepress";
import { onMounted, watch, nextTick } from "vue";

const theme = {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    const { app } = ctx;
    app.component("Badge", VPBadge);
    if (typeof window !== "undefined") {
      window.WhaleDocs = ctx;
    }
  },
  setup() {
    // Support zooming images
    const route = useRoute();
    const initZoom = () => {
      new mediumZoom(".content-container .main img", { background: "#dddde3" });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    );

  },
};
export default theme;
