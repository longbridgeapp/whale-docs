---
title: 數據導入
slug: Yg5Dwtk30isnqBkNmbscxSK4nme
sidebar_position: 0
---


# 數據導入

## 適用場景

導入港股的公司行動 CCNAN05/CCNPT02 文件時，同時會自動創建預告

## 前置條件

無

## 操作說明

執行菜單：清算管理&gt;市場清算&gt;文件處理

### 05 文件

(港股）每日下午 5 點前，導入 CCNAN05 檔，系統會按導入資訊，登記日，自動生成公司行動預告，並預設方案

<img src="/assets/MHOnbYorToFsDFxMTmEcW92Snae.png" src-width="3358" src-height="1224" align="center"/>

HK 市場在導入 05 文件後，會自動創建公司行動預告，成為'初始化'狀態預告

<img src="/assets/V0WXbKhHIoiJphxrjYkckRCEnmo.png" src-width="3320" src-height="1614" align="center"/>

### 02 文件

(港股）執行前導入 CCNPT02 檔，在執行復核頁面，會展示港交所通知的數據，用於核對系統所計算的數據

<img src="/assets/RljRbu9NXoIuW1xdVqnczo8hnZg.png" src-width="3356" src-height="1210" align="center"/>

BE 類香港公司行動增加自動更新機制如下：

- 導入 05 文件後，未登記的 BE 類公司行動將自動更新數據
- 導入 05 文件後，已登記的 BE 類公司行動根據初始化開關自動更新（默認關閉）
- 導入 02 文件後，BE 類將更新 CCASS 狀態（F 為 CCACC 已經）和 CCASS 文件日期字段，導入後沒有自動創建的將重新觸發創建
    
