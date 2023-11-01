import { DefaultTheme, defineConfig } from "vitepress";
// @ts-ignore
import docs from "../locales/docs.json";
import * as OpenCC from "opencc-js";
const converter = OpenCC.Converter({ from: "hk", to: "cn" });

/**
 * Convert feishu-pages's docs.json into VitePress's sidebar config
 * @param docs from `docs.json`
 * @param rootSlug if provided, will find and use this node as the root.
 * @returns
 */
const convertDocsToSidebars = (
  docs: Record<string, any>[],
  rootSlug?: string,
) => {
  const sidebars: DefaultTheme.SidebarItem[] = [];
  const cnLang = rootSlug === "zh-CN";

  // Go to root slug
  docs =
    docs.find((doc) => doc.slug === (cnLang ? "zh-HK" : rootSlug))?.children ||
    docs;

  // zh-HK/guides/crm/dashboards
  // -> zh-HK/docs/guides/crm/dashboards
  for (const doc of docs) {
    if (!doc.meta?.hide) {
      const text = cnLang ? converter(doc.title) : doc.title;

      const link = `/${
        cnLang ? doc.slug.replace(/^zh-HK\//, "zh-CN/docs/") : doc.slug.replace(/^(en|zh-HK)\//, "$1/docs/")  
      }`;

      let sidebar: DefaultTheme.SidebarItem = {
        text,
        link,
      };
      if (doc.children.length > 0) {
        sidebar.items = convertDocsToSidebars(doc.children, rootSlug);
        sidebar.collapsed = true;
      }
      sidebars.push(sidebar);
    }
  }
  return sidebars;
};

const docsSidebarEN = convertDocsToSidebars(docs, "en");
const docsSidebarZHCN = convertDocsToSidebars(docs, "zh-CN");
const docsSidebarZHHK = convertDocsToSidebars(docs, "zh-HK");

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Longbridge Whale Docs",
  base: "/",
  description: "Longbridge Whale Docs",
  ignoreDeadLinks: true,
  locales: {
    en: {
      label: "English",
      lang: "en",
    },
    "zh-CN": {
      label: "简体中文",
      lang: "zh-CN",
    },
    "zh-HK": {
      label: "繁体中文",
      lang: "zh-HK",
    },
  },
  cleanUrls: true,
  srcExclude: ["SUMMARY.md"],
  srcDir: "locales",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Whale Home", link: "https://longbridgewhale.com" },
      { text: "Docs", link: "/zh-HK/docs/guides" },
    ],

    sidebar: {
      en: docsSidebarEN,
      "zh-CN": docsSidebarZHCN,
      "zh-HK": docsSidebarZHHK,
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/longbridgeapp/whale-docs" },
    ],
  },
});
