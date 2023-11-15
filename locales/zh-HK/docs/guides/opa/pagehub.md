---
title: PageHub
slug: pagehub
sidebar_position: 3
---


# PageHub

# 一。PageHub 介紹

Pagehub 是 Whale 提供的 可視化頁面搭建作業工具，方便運營人員通過組件拖拽無需技術開發，就可自行搭建行銷相關頁面 (H5 web page) 進行發佈。

<img src="./assets/AaBqbHHQxostCFxeIWNcNfoanug.png"/>

**名詞釋義**：

|   |   |
|---|---|
|**名词**|**解释**|
|頁面|H5 網頁|
|組件 | 有特定功能的頁面模塊|

### 操作說明

執行菜單：運營系統> Pagehub>頁面管理

- 本作業可以管理維護透過 Pagehub 制作出來的頁面

<img src="./assets/BwolbmuWdo4P0UxnKWtcha6unab.png"/>

### 頁面操作

在 Pagehub 查詢管理頁面列表，提供【鏈接複製】的功能操作，可以點選 Copy 圖示

**鏈接複製：**

<img src="./assets/I0pcbcU5UoffGzxI2NMciAgbnpe.png"/>

在 Pagehub 查詢管理頁面列表，提供【二維碼】的預覽功能操作

**掃碼預覽：**

<img src="./assets/NTPKbzUDFoabWXx70qIc3lZUn8f.png"/>

其他就是 紀錄右側操作區的標準操作： 【編輯】/【複製】/【刪除】

頁面列表字段/功能說明：

|   |   |
|---|---|
|列表字段 | 字段說明|
|序號 | 頁面序號|
|標題 | 頁面標題，當配置好自定義頁面後點擊打開頭部標題欄展示的名字|
|發佈狀態|- 未發佈：該狀態下頁面為草稿狀態，需要點擊發佈才會生效<br/>- 已發佈：頁面點擊發佈按鈕並發佈成功後則為該狀態，該狀態頁面直接生效<br/>- 發佈失敗：當前頁面點擊發佈按鈕但是由於種種原因失敗|
|頁面地址 | 展示鏈接以及二維碼兩種鏈接形態，可複製當前鏈接直接打開預覽，也可掃描二維碼|
|創建人 | 創建該頁面的操作人名稱|
|最後發佈時間 | 最新一次發佈更新的時間|
|操作|- 編輯：點擊打開編輯當前頁面<br/>- 複製：點擊複製當前頁面內容創建並打開新頁面<br/>- 刪除：刪除當前頁面（謹慎使用）|

### 頁面搭建（新增）

點擊右上角【新建頁面】後打開如下頁面，佈局如圖：

左側：物料庫。中間區：頁面效果預覽區                               右側：頁面配置區

<img src="./assets/ClWebiXJ7obzCCxRCH4cE2tlnGg.png"/>

**組件管理/組件庫：**

<div class="grid gap-3 grid-cols-2">
<div>
<img src="./assets/BQGOboq6soIP5zxliBqcezMWnvh.png"/>

<p>展示當前頁面中已經配置的組件列表，點擊對應組件名稱可進行編輯配置</p>
</div>
<div>
<img src="./assets/PV5xb8z2boQ48sxyIxTco0ixn5e.png"/>

<p>所有可配置的組件類型，點擊/拖拽對應組件類型會自動添加至預覽去頁面中</p>
</div>
</div>

**預覽區操作功能說明：**

<img src="./assets/BcKVb9hs1oYoE7x2QtTc62PSnvb.png"/>

**多語言切換功能說明：**

<img src="./assets/ICw2bsYcHoJRFCx8CCTclOsAnXe.png"/>

**配置區域功能說明：**

<img src="./assets/ODuebuBcyof54kxmhLOcn36wn2S.png"/>

- 頁面配置 - 當前頁面主要參數配置

1. 多語言設置

可配置當前頁面需要支持的語种與頁面標題

1. 適用區域設置

可配置能打開當前頁面的 IP 區域有哪些。分為不限制、僅支持區域、不支持區域三種類型可選。

不限制：則表示任何地區 IP 均可訪問該頁面

僅支持區域：僅限制所配置的地區 IP 可訪問該頁面

不支持區域：僅限制所配置的地區 IP 不可訪問該頁面

1. 活動配置

可配置當前頁面是否需要登錄後才可訪問

不需要登錄：則用戶不需要登錄賬號即可訪問頁面

通用登錄頁：則用戶需要在通用登錄頁面中進行登錄後才可訪問頁面

1. UI 配置

頁面的背景顏色配置

1. 鏈接參數配置

鏈接渠道號配置，若為了統計數據需要區分渠道來源的話可以配置專屬渠道號。否則可以不填。

1. 分享配置

頁面分享功能的配置

- 鏈接分享模式：即點擊分享時直接複製鏈接或者當前鏈接形式直接分享

可配置分享鏈接時自帶的分享標題以及分享描述。

分享鏈接可單獨配置，不配置則默認分享當前頁面的鏈接，若配置後則分享時將分享配置之後的頁面鏈接。

分享縮略圖即當分享鏈接至微信或者其他需要縮略圖展示的平台時，可展示當前配置的縮略圖

- 面對面分享模式：即點擊分享時直接彈出自帶二維碼的圖片，可截圖分享或者當面掃碼打開對應頁面

二維碼彈窗背景圖片配置

# 二。組件說明

系統提供多個預設組件，方便自行組合配置所需頁面效果

## 導航頭

可以設置導航背景色、logo 點擊跳轉後的鏈接、導航右側可操作的功能

<img src="./assets/IzfVbkYfNoCzTsxCCtxcb7hrngb.png"/>

 

<img src="./assets/Vo76bQDjgowjEqxEUj3c7RB2nVd.png"/>

## 圖片

<img src="./assets/COesbSWIgoimGfxsKIzc4e2Tnsc.png"/>

## 熱區

<img src="./assets/BXEJbNA9moNFgxxfoIwcmOSInad.png"/>

- 分享：點擊後會觸發分享功能
- 開戶：點擊後跳轉開戶頁面
- 入金：點擊後跳轉入金頁面
- 轉倉：點擊後跳轉轉倉頁面
- 跳轉鏈接：點擊後可自定義跳轉到配置鏈接地址頁面

tips：單個熱區可以添加配置多個熱區點擊事件哦！~

## 按鈕

<img src="./assets/ByPgbW0dvoWkyyxD9sacW0XHn4f.png"/>

## 隔離區

<img src="./assets/HSLrbMUU3oKxAmxDDC1chbTwnlb.png"/>

## 我的戰績

<img src="./assets/J11mbYdIxoAK61xut7OcSoINn9f.png"/>

