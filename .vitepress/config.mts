import { defineConfig } from 'vitepress';
// @ts-ignore
import { siteMetadata } from './site-meta';
const siderbarConfig = require('./../scripts/siderbar');

const editLinkPattern =
  'https://github.com/longbridgeapp/whale-docs/edit/dev/locales/:path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Longbridge Whale Docs',
  base: '/',
  description:
    'Whale 為券商提供一站式、開箱即用的產品和解決方案，包含 App、交易、風控、清結算、CRM、智能營銷等前中後台系統，以及行情報價、資訊、基本面等數據服務，同時 Whale 也集成了銀行通道業務、股票通道業務、期權通道業務、基金通道業務、KYC/AML 等服務',
  ignoreDeadLinks: true,
  appearance: false,
  lang: 'zh-HK',
  cleanUrls: true,
  srcExclude: ['SUMMARY.md', 'zh-HK.md', 'zh-CN.md', 'en.md'],
  srcDir: 'locales',
  lastUpdated: true,
  head: [
    [
      'link',
      {
        type: 'image/x-icon',
        rel: 'icon',
        href: 'https://pub.lbkrs.com/files/202205/xAwaQmCk1cD1AUsm/favicon.png',
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
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh-CN/docs',
      themeConfig: {
        siteTitle: '帮助中心',
        outline: 'deep',
        nav: [
          { text: 'Whale 首页', link: '/', target: '_self' },

          {
            text: 'OpenAPI',
            link: 'https://open.longportapp.com',
          },
          { text: '关于我们', link: '/zh-CN/about', target: '_self' },
        ],
        editLink: {
          pattern: editLinkPattern,
          text: '编辑此页',
        },
        lastUpdated: {
          text: '最后更新时间',
        },
        docFooter: {
          prev: '上一篇',
          next: '下一篇',
        },
      },
    },
    'zh-HK': {
      label: '繁体中文',
      lang: 'zh-HK',
      link: '/zh-HK/docs',
      themeConfig: {
        siteTitle: '幫助中心',
        nav: [
          { text: 'Whale 首頁', link: '/', target: '_self' },
          {
            text: 'OpenAPI',
            link: 'https://open.longportapp.com/zh-HK',
          },
          { text: '關於我們', link: '/zh-HK/about', target: '_self' },
        ],
        editLink: {
          pattern: editLinkPattern,
          text: '编辑此页',
        },
        lastUpdated: {
          text: '最後更新時間',
        },
        docFooter: {
          prev: '上一篇',
          next: '下一篇',
        },
      },
    },
  },

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: 'https://assets.lbkrs.com/uploads/d29e591d-0c3d-4def-b837-cd06dfb4d738/whale-logo.svg',
    sidebar: {
      // en: docsSidebarEN,
      // "zh-CN": docsSidebarZHCN,
      // "zh-HK": docsSidebarZHHK,
      'zh-CN': siderbarConfig['zh-CN'],
      'zh-HK': siderbarConfig['zh-HK'],
    },
    outline: [2, 3],
    socialLinks: [],
  },
});
