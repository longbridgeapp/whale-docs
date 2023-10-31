// Iter *.md in docs/zh-CN/**/*.md and use OpenCC to convert to docs/zh-HK/**/*.md
// Usage: node scripts/cn2hk.js

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const OpenCC = require('opencc-js');

const converter = OpenCC.Converter({ from: 'hk', to: 'cn' });


/**
 * Iterator all .md file in docs/zh-CN/ and convert to docs/zh-HK/
 */
const convert = () => {
  if(!fs.existsSync(path.resolve(__dirname,'../docs/zh-HK.md'))) return
  let content = fs.readFileSync(path.resolve(__dirname,'../docs/zh-HK.md'), 'utf8');
  let newContent = converter(content);
  fs.writeFileSync(path.resolve(__dirname,'../docs/zh-HK.md'), newContent);

  let files = glob.sync(path.resolve(__dirname,'../docs/zh-HK/**/*.md'));
  files.forEach((file) => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = converter(content);
    let newFile = file.replace('zh-HK', 'zh-CN');
    let folder = path.dirname(newFile);
    fs.mkdirSync(folder, { recursive: true });
    fs.writeFileSync(newFile, newContent);
  });
};

const deepConvertDocIntoZhHK = (doc) => {
  let newDoc = Object.assign({}, doc);

  newDoc.title = converter(newDoc.title);
  newDoc.slug = newDoc.slug.replace('zh-HK', 'zh-CN');
  newDoc.filename = newDoc.filename.replace('zh-HK', 'zh-CN');

  if (newDoc.children) {
    newDoc.children = newDoc.children.map((child) => {
      return deepConvertDocIntoZhHK(child);
    });
  }

  return newDoc;
};

/**
 * Parse docs.json and duplicate zh-CN to zh-HK by use OpenCC to convert
 */
const convertDocsJSON = () => {
  let docs = require('../docs/docs.json');
  let newDocs = [];
  let found = false;

  docs.forEach((doc) => {
    if (doc.slug === 'zh-HK' && !found) {
      newDocs.push(doc);
      let newDoc = Object.assign({}, doc);

      newDoc.title = '简体中文';

      newDoc = deepConvertDocIntoZhHK(newDoc);

      newDocs.push(newDoc);
      found = true;
    } else {
      newDocs.push(doc);
    }
  });

  fs.writeFileSync('docs/docs.json', JSON.stringify(newDocs, null, 2));
};

convert();
convertDocsJSON();
