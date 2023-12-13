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

function run() {
  convertHK2CN();
  setupAssets();
}

run();
