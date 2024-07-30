/*
 * 1. read feishu-pages/docs.json file find first level meta slug equal zh-HK
 * 2. find the slug file in feishu-pages/docs/:slug.md copy it to locales/zh-HK/docs/:slug.md
 * 3. convert feishu-pagers/docs/:slug.md zh-CN then new file to locales/zh-CN/docs/:slug.md
 * 4. generate zh-HK, zh-CN siderbar config
 * */

import {
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  copyFileSync,
} from "fs";
import { resolve, dirname } from "path";
import { sync } from "glob";
import { compact, flatten, flattenDeep, uniq } from "lodash";
import { Converter } from "opencc-js";

const converter = Converter({ from: "hk", to: "cn" });

function convertHK2CN() {
  const docsPath = resolve(__dirname, "../feishu-pages/docs");
  const docs = sync(`${docsPath}/**/*.md`);

  docs.forEach((doc) => {
    const hkContent = readFileSync(doc, "utf-8");
    const hkFilePath = doc.replace("feishu-pages", "locales/zh-HK");

    writeFileSync(hkFilePath, hkContent);
    console.log("copy zh-HK file: ", hkFilePath);

    const cnContent = converter(hkContent);
    const cnFilePath = doc.replace("feishu-pages", "locales/zh-CN");

    writeFileSync(cnFilePath, cnContent);
    console.log("convert zh-CN file: ", cnFilePath);
  });

  // convert docs.json to docs-zh-cn.json
  const docsMeta = readFileSync(
    resolve(__dirname, "../feishu-pages/docs.json"),
    "utf-8",
  );
  const cnDocsMeta = converter(docsMeta);
  writeFileSync(
    resolve(__dirname, "../feishu-pages/docs-zh-cn.json"),
    cnDocsMeta,
  );
}

// Copy feishu-pages/assets/*.png to locales/assets
function setupAssets() {
  const assetsPath = resolve(__dirname, "../feishu-pages/docs/assets");
  // find png or jpg or jpeg gif file
  const assets = sync(`${assetsPath}/*.{png,jpg,jpeg,gif}`);

  assets.forEach((asset) => {
    const targetAssetsPath = asset.replace("feishu-pages/docs/", "locales/");

    if (!existsSync(dirname(targetAssetsPath))) {
      mkdirSync(dirname(targetAssetsPath));
    }

    if (!existsSync(targetAssetsPath)) {
      copyFileSync(asset, targetAssetsPath);
      console.log("copy assets file: ", targetAssetsPath);
    }
  });
}

import docs from "../feishu-pages/docs.json";
import * as path from "node:path";
import * as fs from "node:fs";

const hkMetadata = docs.find((doc) => doc.meta?.slug === "zh-HK");
const HomePageSlug = "guides";
// read feishu-pages/docs.json file find slug equal guides, then copy it to locales/zh-HK/docs/index.md
// for Nginx directory to index.html
function setupIndexPage() {
  // loop first level children find meta.slug = guides
  const guidesChild = hkMetadata.children.find((doc) => {
    return doc.meta?.slug === HomePageSlug;
  });

  if (guidesChild) {
    const guidesFilePath = resolve(
      __dirname,
      `../feishu-pages/docs/${guidesChild.slug}.md`,
    );
    const guidesContent = readFileSync(guidesFilePath, "utf-8");
    const guidesTargetFilePath = resolve(__dirname, `../locales/zh-HK/docs.md`);
    writeFileSync(guidesTargetFilePath, guidesContent);
    console.log(
      `copy zh-HK ${guidesChild.title} to index file: `,
      guidesTargetFilePath,
    );

    const cnContent = converter(guidesContent);
    const cnFilePath = guidesTargetFilePath.replace("zh-HK", "zh-CN");
    writeFileSync(cnFilePath, cnContent);
    console.log(`copy zh-CN ${guidesChild.title} to  index file: `, cnFilePath);
  }
}

function getAllNodeTokens(data) {
    const nodeTokens = [];

    function extractNodeTokens(nodes) {
        for (const node of nodes) {
            if (node.node_token) {
                nodeTokens.push(`${node.node_token}.md`);
            }
            if (node.children && node.children.length > 0) {
                extractNodeTokens(node.children);
            }
        }
    }

    extractNodeTokens(data);
    return nodeTokens;
}

function removeFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

async function removeFiles(filePaths) {
  for (const filePath of filePaths) {
    try {
      if (fs.existsSync(filePath)) {
        await removeFile(filePath);
        console.log(`--> Successfully removed: ${filePath}`);
      } else {
        console.log("not found file: ", filePath);
      }
    } catch (err) {
      console.error(`--> Error removing file: ${filePath}`, err);
    }
  }
}

function normalize_hidde_docs() {
  const rootPath = resolve(__dirname, "..");
  const all_docs = compact(
    uniq(
      sync(`${rootPath}/locales/**/*.md`).map((doc) => {
        return path.basename(doc);
      }),
    ),
  );

  const raw_docs_data = JSON.parse(
    readFileSync(resolve(__dirname, "../feishu-pages/docs.json"), "utf-8"),
  );
  const the_news_docs = compact(
    uniq(getAllNodeTokens(raw_docs_data)),
  );
  const removed_docs = flattenDeep(
      all_docs
      .filter((doc) => {
        if (["index.md", "docs.md", "SUMMARY.md"].includes(doc)){
          return false;
        }else {
          if(doc === "IiHowEDhSiRwVNkSqfDcUheenSc.md"){
            console.log('normalize_hidde_docs-171', !the_news_docs.includes(doc))
          }
          return !the_news_docs.includes(doc);
        }
      }).map((f) => {
        return [
          `${rootPath}/locales/zh-CN/docs/${f}`,
          `${rootPath}/locales/zh-HK/docs/${f}`,
          `${rootPath}/locales/en/docs/${f}`,
        ];
      }),
  );
  
  removeFiles(removed_docs)
    .then(() => {
      console.log("All files removed.");
    })
    .catch((err) => {
      console.error("Error removing files:", err);
    });
}

function run() {
  normalize_hidde_docs();
  convertHK2CN();
  setupAssets();
  setupIndexPage();
}

run();
