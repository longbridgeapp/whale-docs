---
title: 保證金
slug: baozhengjin
sidebar_position: 2
---


# 保證金

## 適用場景

股票的保證金作為港美股券商風控的邏輯之一，用於計算購買力、margin call等場景，一般來講可保證金交易的股票是風險偏低的股票。該菜單主要提供保證金設置功能。

## 前置条件

無

## 操作说明

菜單入口：風控管理 &gt; 保證金

### 股票保證金

該菜單主要用於設置股票保證金比例。

列表展示所有股票保證金設置現狀

<img src="/assets/BmPwbdPSvoIo7OxYxKXcOzN1nyg.png"/>

可以在【新建】按鈕，新增單個股票保證金比例（注：若該股票已存在，數據會覆蓋，以本次設置為準）；或者通過批量上傳，批量設置股票保證金比例

<img src="/assets/KDiBbGyo3oJi1ox6suTcIGQ0nCd.png"/>

<img src="/assets/ZLXAbDYrBoBfBNxWAiNcnu6pnGd.png"/>

在【新建】頁面，設置保證金比例

<img src="/assets/JL68bfzKBoHEODxmkX9crt0ynGe.png"/>

無論是單個新建還是批量上傳，都會在「設置記錄」生成記錄，操作見「[設置記錄](https://longbridge.feishu.cn/docx/JZVgdywNVopSYpxqgnicqTibnpe#YXSWdDJT3omxa0xQ1C7cXcKhnsB)」菜單

若股票保證金設置已存在，需要修改比例，則可以在列表操作【編輯】，編輯操作流程同新增；如需刪除某只股票的保證集比例設置，可以操作【刪除】

<img src="/assets/JBCtb5Viio6bJQxFCTIcEc2DnXf.png"/>

股票狀態可能變更，可以通過列表右上角的【拉取個股狀態】刷新最新狀態

<img src="/assets/O260b4U1ko3qIDxExB7c2ddNnO5.png"/>

### 客戶保證金

該菜單可以設置客戶個性化股票保證金比例，在保證金計算時會優先取客戶保證金比例。

可以通過【導入保證金數據】來新增客戶保證金；進入彈窗下載模版根據模版填寫後上傳

<img src="/assets/FCVHbDChgo8k2xx4RBeckohXntf.png"/>

<img src="/assets/SrnTb6UHLod49HxiyypcGCa9nIh.png"/>

文件上傳【確認】後，在客戶保證金列表中生成狀態為生效中的記錄；如需修改保證金比例，可以通過操作的【編輯】修改；也可以通過【置為失效】來失效客戶保證金比例設置

<img src="/assets/OlzWbhy58ox5GVxPoBbcd874nPg.png"/>

### 設置記錄

該菜單用來查看股票保證金/日內交易實時保證金比例的設置記錄以及進行人工同步/取消同步操作。

「股票保證金」「日內交易實時保證金」新增或編輯提交後會在比率設置記錄中会生成未觸發的該保證金設置記錄，也可以點擊【取消】則取消設置，不作記錄 ，此時點擊【同步】，該記錄狀態變更為已觸發，同時在主頁生成一條股票保證金記錄（若新增的為已存在的股票則更新原記錄）；點擊【取消同步】，則記錄狀態變更為已撤銷，該設置不生效；若不操作人工同步，系統將在設定的有效期生效對應設置

<img src="/assets/DC1QbMBc2olqQZxs9k0cGfZrnog.png"/>

### 空頭保證金

針對空頭業務，可以單獨設置支持空頭股票保證金比例。

列表展示所有支持空頭股票保證金比例記錄

<img src="/assets/JTbxbQ2TooVjGxxZUmmcobjwndg.png"/>

支持批量上傳

<img src="/assets/FzzgbIFejoRnbHxwwpUcZZsOnkd.png"/>

也可點擊紀錄區【編輯】修改紀錄

<img src="/assets/QIOUb2ZgSozg3LxICnyczOqAnnI.png"/>

### 日內交易實時保證金

針對日內融業務，可以單獨設置支持日內交易的股票保證金比例。

列表展示所有支持日內交易的股票保證金比例記錄

<img src="/assets/SZThbQzb9o7dFQxKvVIcTBLlnDh.png"/>

頁面的【新增】和【批量上傳】可以單個新增或批量新增日內交易股票的保證金比例設置；操作流程同「股票保證金」

<img src="/assets/JLawbpV3xorxkhxoJEAcAcCnnYf.png"/>

在紀錄右側操作區，進行【編輯】或【刪除】

<img src="/assets/G1EFb11c5otEeGxanLvcfI9onId.png"/>

注意： 若其中若狀態為失效，則說明保證金比例默認為 100%

### 保證金風險指標

該菜單提供保證金風險指標查詢，主要依賴行情和財務數據。

<img src="/assets/HvW1bDuXboBuxmxOr4hcLMZontg.png"/>

