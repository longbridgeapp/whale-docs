// Iter *.md in docs/zh-CN/**/*.md and use OpenCC to convert to docs/zh-HK/**/*.md
// Usage: node scripts/cn2hk.js

const fs = require("fs");
const path = require("path");
const glob = require("glob");
const OpenCC = require("opencc-js");
const converter = OpenCC.Converter({ from: "hk", to: "cn" });

const convertMDHK2CN = () => {
  console.log("--> Convert feishu pages markdown file to zh-CN");
  // before covert should copy full /zh-HK dir to /zh-CN
  let files = glob.sync(path.resolve(__dirname, "../locales/zh-CN/**/*.md"));
  files.forEach((file) => {
    let content = fs.readFileSync(file, "utf8");
    fs.writeFileSync(file, converter(content));
  });
};

const convertDocsContentHK2CN = (doc) => {
  let newDoc = Object.assign({}, doc);
  newDoc.title = converter(newDoc.title);
  newDoc.slug = newDoc.slug.replace("zh-HK", "zh-CN");
  if (newDoc.meta?.slug) {
    newDoc.meta.slug = newDoc.meta.slug.replace("zh-HK", "zh-CN");
  }
  newDoc.filename = newDoc.filename.replace("zh-HK", "zh-CN");

  if (newDoc.children) {
    newDoc.children = newDoc.children.map((child) => {
      return convertDocsContentHK2CN(child);
    });
  }

  return newDoc;
};

// 翻译 docs.json
const convertDocsJSON = () => {
  console.log("--> Convert feishu pages docs data to zh-CN");
  let docs = require("../feishu-pages/docs.json");
  let newDocs = docs;

  const HKDocs = docs.find((doc) => doc.slug === "zh-HK");
  if (HKDocs) {
    const { children: hkChildren, ...resetHKDocs } = HKDocs;

    const cnDocsChildren = [];
    Array.from(Array.from(hkChildren)).forEach((child) => {
      cnDocsChildren.push(convertDocsContentHK2CN(child));
    });

    const cnDocsReset = convertDocsContentHK2CN(resetHKDocs);
    const cnDocs = {
      ...cnDocsReset,
      children: cnDocsChildren,
      title: "__简体中文__"
    };

    newDocs.push(cnDocs);
  }
  fs.writeFileSync("locales/docs.json", JSON.stringify(newDocs, null, 2));
};

convertMDHK2CN();
convertDocsJSON();
