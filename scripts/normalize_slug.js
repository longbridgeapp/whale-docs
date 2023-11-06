const path = require("path");
const glob = require("glob");
const fs = require("fs");

function normalize_slug() {
  console.log("normalize all markdown file slug join /doc prefix");
  const rawMDFiles = glob.sync(path.resolve(__dirname, "../locales/**/*.md"));
  rawMDFiles.forEach((file) => {
    let content = fs.readFileSync(file, "utf8");
    fs.writeFileSync(
      file,
      content.replace(/slug: (zh-HK|zh-CN|en)\/(.*)/, "slug: $1/docs/$2"),
    );
  });
}

normalize_slug()
