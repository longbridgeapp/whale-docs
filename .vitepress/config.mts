import { DefaultTheme, defineConfig } from "vitepress";
// @ts-ignore
import docs from "../locales/docs.json";
import * as OpenCC from "opencc-js";
import { siteMetadata } from "./site-meta";
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
    const text = cnLang ? converter(doc.title) : doc.title;

    const link = `/${
      cnLang
        ? doc.slug.replace(/^zh-HK\//, "zh-CN/docs/")
        : doc.slug.replace(/^(en|zh-HK)\//, "$1/docs/")
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
  return sidebars;
};

const docsSidebarEN = convertDocsToSidebars(docs, "en");
const docsSidebarZHCN = convertDocsToSidebars(docs, "zh-CN");
const docsSidebarZHHK = convertDocsToSidebars(docs, "zh-HK");

const editLinkPattern =
  "https://github.com/longbridgeapp/whale-docs/edit/dev/locales/:path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Longbridge Whale Docs",
  base: "/",
  description:
    "Whale 為券商提供一站式、開箱即用的產品和解決方案，包含 App、交易、風控、清結算、CRM、智能營銷等前中後台系統，以及行情報價、資訊、基本面等數據服務，同時 Whale 也集成了銀行通道業務、股票通道業務、期權通道業務、基金通道業務、KYC/AML 等服務",
  ignoreDeadLinks: true,
  appearance: false,
  lang: "zh-HK",
  cleanUrls: true,
  srcExclude: ["SUMMARY.md", "zh-HK.md", "zh-CN.md", "en.md"],
  srcDir: "locales",
  lastUpdated: true,
  head: [
    [
      "link",
      {
        type: "image/x-icon",
        rel: "icon",
        href: "https://pub.lbkrs.com/files/202205/xAwaQmCk1cD1AUsm/favicon.png",
      },
    ],
    ...siteMetadata,
  ],
  locales: {
    // en: {
    //   label: "English",
    //   lang: "en",
    //   link: "/en/docs",
    //   themeConfig: {
    //     nav: [{ text: "Whale Home", link: "https://longbridgewhale.com" }],
    //     siteTitle: "Whale docs",
    //     editLink: {
    //       pattern: editLinkPattern,
    //     },
    //   },
    // },
    "zh-CN": {
      label: "简体中文",
      lang: "zh-CN",
      link: "/zh-CN/docs",
      themeConfig: {
        siteTitle: "帮助中心",
        nav: [{ text: "Whale 首页", link: "https://longbridgewhale.com" }],
        editLink: {
          pattern: editLinkPattern,
          text: "编辑此页",
        },
        lastUpdated: {
          text: "最后更新时间",
        },
        docFooter: {
          prev: "上一篇",
          next: "下一篇",
        },
      },
    },
    "zh-HK": {
      label: "繁体中文",
      lang: "zh-HK",
      link: "/zh-HK/docs",
      themeConfig: {
        siteTitle: "幫助中心",
        nav: [{ text: "Whale 首頁", link: "https://longbridgewhale.com" }],
        editLink: {
          pattern: editLinkPattern,
          text: "编辑此页",
        },
        lastUpdated: {
          text: "最後更新時間",
        },
        docFooter: {
          prev: "上一篇",
          next: "下一篇",
        },
      },
    },
  },

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: "https://assets.lbkrs.com/uploads/d29e591d-0c3d-4def-b837-cd06dfb4d738/whale-logo.svg",
    sidebar: {
      // en: docsSidebarEN,
      "zh-CN": docsSidebarZHCN,
      "zh-HK": docsSidebarZHHK,
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/longbridgeapp/whale-docs" },
    ],
  },
});
