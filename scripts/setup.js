/*
 * 1. read feishu-pages/docs.json file find first level meta slug equal zh-HK
 * 2. find the slug file in feishu-pages/docs/:slug.md copy it to locales/zh-HK/docs/:slug.md
 * 3. convert feishu-pagers/docs/:slug.md zh-CN then new file to locales/zh-CN/docs/:slug.md
 * 4. generate zh-HK, zh-CN siderbar config
 * */

const fs = require("fs");
const path = require("path");
const glob = require("glob");
const OpenCC = require("opencc-js");
const converter = OpenCC.Converter({ from: "hk", to: "cn" });

function convertHK2CN() {
  const docsPath = path.resolve(__dirname, "../feishu-pages/docs");
  const docs = glob.sync(`${docsPath}/**/*.md`);

  docs.forEach((doc) => {
    const hkContent = fs.readFileSync(doc, "utf-8");
    const hkFilePath = doc.replace("feishu-pages", "locales/zh-HK");

    fs.writeFileSync(hkFilePath, hkContent);
    console.log("copy zh-HK file: ", hkFilePath);

    const cnContent = converter(hkContent);
    const cnFilePath = doc.replace("feishu-pages", "locales/zh-CN");

    fs.writeFileSync(cnFilePath, cnContent);
    console.log("convert zh-CN file: ", cnFilePath);
  });
}

// Copy feishu-pages/assets/*.png to locales/assets
function setupAssets() {
  const assetsPath = path.resolve(__dirname, "../feishu-pages/docs/assets");
  // find png or jpg or jpeg gif file
  const assets = glob.sync(`${assetsPath}/*.{png,jpg,jpeg,gif}`);

  assets.forEach((asset) => {
    const targetAssetsPath = asset.replace("feishu-pages/docs/", "locales/");

    if (!fs.existsSync(path.dirname(targetAssetsPath))) {
      fs.mkdirSync(path.dirname(targetAssetsPath));
    }

    if (!fs.existsSync(targetAssetsPath)) {
      fs.copyFileSync(asset, targetAssetsPath);
      console.log("copy assets file: ", targetAssetsPath);
    }
  });
}
const docsMeta = require("../feishu-pages/docs.json");
const hkMetadata = docsMeta.find((doc) => doc.meta?.slug === "zh-HK");
const HomePageSlug = "guides";
// read feishu-pages/docs.json file find slug equal guides, then copy it to locales/zh-HK/docs/index.md
// for Nginx directory to index.html
function setupIndexPage() {
  // loop first level children find meta.slug = guides
  const guidesChild = hkMetadata.children.find((doc) => {
    return doc.meta?.slug === HomePageSlug;
  });

  if (guidesChild) {
    const guidesFilePath = path.resolve(
      __dirname,
      `../feishu-pages/docs/${guidesChild.slug}.md`,
    );
    const guidesContent = fs.readFileSync(guidesFilePath, "utf-8");
    const guidesTargetFilePath = path.resolve(
      __dirname,
      `../locales/zh-HK/docs.md`,
    );
    fs.writeFileSync(guidesTargetFilePath, guidesContent);
    console.log(`copy zh-HK ${guidesChild.title} to index file: `, guidesTargetFilePath);

    const cnContent = converter(guidesContent);
    const cnFilePath = guidesTargetFilePath.replace("zh-HK", "zh-CN");
    fs.writeFileSync(cnFilePath, cnContent);
    console.log(`copy zh-CN ${guidesChild.title} to  index file: `, cnFilePath);
  }
}

function run() {
  convertHK2CN();
  setupAssets();
  setupIndexPage();
}

run();
