#!/bin/bash
mkdir -p locales/en/docs locales/zh-HK/docs
cp -r feishu-pages/docs/en/* locales/en/docs/
cp -r feishu-pages/docs/zh-HK/* locales/zh-HK/docs/
cp feishu-pages/docs.json locales/
