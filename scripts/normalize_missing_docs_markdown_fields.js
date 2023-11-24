// 删除掉 docs.json 文件中未出现的 markdown 文件
import path from "path";
import fs from "fs";
import { glob } from "glob";
import { removeMDFile } from "./remove_hide_file";

const sourceDir = path.resolve(__dirname, "../feishu-pages/docs");
const localesDir = path.resolve(__dirname, "../locales");
const targetDir = "/tmp/feishu-pages";

function normalizeLangPath(filename, prefix = "") {
  return filename.replace(/(zh-HK|en|zh-CN)/, `$1${prefix}`);
}

// convert docs.json config to mapping with slug
function filenamesCollection(docs) {
  return docs.reduce((memo, doc) => {
    memo[
      `${path.resolve(localesDir, normalizeLangPath(doc.filename, "/docs"))}`
    ] = true;
    if (doc.children) {
      Object.assign(memo, filenamesCollection(doc.children));
    }
    return memo;
  }, {});
}

function moveNoHiddenMarkdownFilesToTmpDir(doc) {
  // diff locales directory file path with doc filename, if doc filename not in locales directory, then move it.
  if (doc.filename && !fs.existsSync(path.resolve(localesDir, doc.filename))) {
    // create target dir recursive
    const targetPath = path.resolve(targetDir, path.dirname(doc.filename));
    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath, { recursive: true });
    }

    const targetFile = path.resolve(targetDir, doc.filename);
    console.log("--> move file:", targetFile);

    fs.copyFileSync(path.resolve(sourceDir, doc.filename), targetFile);
  }

  // recursive move
  if (doc.children) {
    doc.children.forEach((child) => {
      moveNoHiddenMarkdownFilesToTmpDir(child);
    });
  }
}

const normalizeHideDocsMarkdownFiles = () => {
  console.log("--> find hide markdown files from docs.json then delete it");

  // collect the latest docs then diff from locales directory
  const feishuPagesFilenames = filenamesCollection(
    require("../feishu-pages/docs.json"),
  );

  // find all locales md files
  ["zh-HK", "zh-CN", "en"].forEach((lang) => {
    const localesFiles = glob.sync(`${localesDir}/${lang}/**/*.md`);
    localesFiles.forEach((file) => {

      // if feishuPagesFilenames not mapping file name, then delete it
      if (!feishuPagesFilenames[file]) {
        removeMDFile(file);
      }
    });
  });
};

normalizeHideDocsMarkdownFiles();
