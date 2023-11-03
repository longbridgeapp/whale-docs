#!/bin/bash
# prepare vitepress workspace
mkdir -p locales/en/docs locales/zh-HK/docs locales/zh-CN/docs
cp -r feishu-pages/docs/en/* locales/en/docs/
cp -r feishu-pages/docs/zh-HK/* locales/zh-HK/docs/
cp -r feishu-pages/docs/zh-HK/* locales/zh-CN/docs/

# cp feishu pages meta config to vitepress workspace
cp feishu-pages/docs.json locales/

# 将 /docs/guides 默认成 /docs 的首页内容
cp locales/en/docs/guides.md locales/en/docs/index.md
cp locales/en/docs/guides.md locales/en/docs.md

cp locales/zh-CN/docs/guides.md locales/zh-CN/docs/index.md
cp locales/zh-CN/docs/guides.md locales/zh-CN/docs.md

cp locales/zh-HK/docs/guides.md locales/zh-HK/docs/index.md
cp locales/zh-HK/docs/guides.md locales/zh-HK/docs.md
