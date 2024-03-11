/*
 * read feishu-pages/docs.json loop each children generate siderbar config
 * config example:
  sidebar: [
    {
      text: '简体中文',
      link: '/zh-CN/docs',
      items: [
        { text: 'Introduction', link: '/zh-CN/docs/introduction' },
        { text: 'Getting Started', link: '/zh-CN/docs/getting-started' },
        ...
      ]
    },
    {
      text: '繁体中文',
      link: '/zh-HK/docs',
      items: [
        { text: 'Introduction', link: '/zh-HK/docs/introduction' },
        { text: 'Getting Started', link: '/zh-HK/docs/getting-started' },
        ...
      ]
    }
  ]
 * */
import hkDocs from "../feishu-pages/docs.json";
import cnDocs from "../feishu-pages/docs-zh-cn.json";
const hkMetadata = hkDocs.find((doc) => doc.meta?.slug === "zh-HK");
const cnMetadata = cnDocs.find((doc) => doc.meta?.slug === "zh-HK");

function generateSidebarConfig(metaData, locale = "zh-HK") {
  const sidebarConfig = [];

  metaData.forEach((doc) => {
    const sidebarItem = {
      text: doc.title,
      link: `/${locale}/docs/${doc.slug}`,
    };

    if (doc.has_child) {
      sidebarItem.items = generateSidebarConfig(doc.children, locale);
      // not collapsed if depth = 1
      sidebarItem.collapsed = doc.depth !== 1;
    }

    sidebarConfig.push(sidebarItem);
  });

  return sidebarConfig;
}

function getSidebarData(metadata) {
  return generateSidebarConfig(metadata.children, "zh-HK");
}

function replaceHKLink2CN(item) {
  item.link = item.link.replace("zh-HK", "zh-CN");
  if (item.items) {
    item.items.forEach((item) => {
      replaceHKLink2CN(item);
    });
  }
}

function getCnSidebar() {
  const hkConfig = getSidebarData(cnMetadata);
  // item hkConfig link attr replace zh-HK to zh-CN, if items exist loop items
  hkConfig.forEach((item) => {
    replaceHKLink2CN(item);
  });
  return hkConfig;
}

export default {
  "zh-HK": getSidebarData(hkMetadata),
  "zh-CN": getCnSidebar(),
};
