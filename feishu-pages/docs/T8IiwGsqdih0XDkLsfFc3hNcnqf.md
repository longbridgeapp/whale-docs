---
title: HKIDR 報送
slug: bcanmaguanli
sidebar_position: 0
---


# HKIDR 報送

## 適用場景

處理 HKIDR 機制的 BCAN-CID 檔案上傳（分成 SFTP 自動上傳與手動上傳 兩種模式）

## 前置条件

無

## 操作說明

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：帳戶管理&gt;BCAN 管理</p>
</div>

### HKIDR 報送

本作業可以處理 HKIDR 機制的 BCAN-CID 檔案上傳（分成 SFTP 自動上傳與手動上傳 兩種模式）

- 注： 有關中華通的 BCAN 說明 將在系統開放支持時說明

<img src="/assets/BYcPbsqrgohUafxOwtscJK1enYe.png" src-width="1280" src-height="586" align="center"/>

其中申報邏輯：上報的數據是 已開通帳戶、有 BCAN 碼且同意授權協議的全量客戶，申報給港交易所後，獲取交易所返回的檔內容，將 BCAN 生效的狀態同步更新；

1. **若是劵商是 EP 租戶**： 本作業是支持自動申報上傳（透過 SFTP 的 SDNet/2 线路）

SFTP 申報方式說明如下：

<img src="/assets/FyiOb1BuPoldCzxSpA9cL40NnBf.png" src-width="3250" src-height="1542" align="center"/>

1. **若是劵商是 OB 租戶**： 是要手動產生 BCAN-CID 檔後，再人工透過 SFC Web ECP 網站上傳資料

SFC Wings 申報方式說明如下：

 同時客户的 BCAN 生效狀態結果將同步更新

<img src="/assets/MiV2b5v8doYLUPxRcWlclM9MnOf.png" src-width="3218" src-height="1228" align="center"/>

### 
