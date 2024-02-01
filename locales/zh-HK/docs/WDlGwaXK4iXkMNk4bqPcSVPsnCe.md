---
title: 記帳數據源
slug: WDlGwaXK4iXkMNk4bqPcSVPsnCe
sidebar_position: 5
---


# 記帳數據源

## 適用場景 

用戶在記帳時需依照各類明細會計資料進行分類整理，並根據整理出的異常資料進行單獨處理

## 前置條件 

銀行流水、CCASS 資料等均已準備就緒

### 異常數據源

執行菜單：會計中台&gt;記帳數據源&gt;異常數據源 Tab 頁籤

- 系統對於無法自動形成分錄的數據源會視作為異常數據，可以在此功能進行查詢

<img src="/assets/LASEbmUmHoYtcxxlTANcLVd5n8e.png" src-width="3240" src-height="1576" align="center"/>

- 對於異常數據源，可以在記錄列表通過點擊「異常數據源單號」，可以跳轉到具體數據源

<img src="/assets/B3yqbZvLloSrt3x09M5cifqmn4J.png" src-width="3240" src-height="1408" align="center"/>

### 客戶收費帳單

執行菜單：會計中台&gt;記帳數據源&gt;客戶收費帳單 Tab 頁籤

- 由於支付流水中用戶發生的各種交易費用，比如股票交易是匯總數，類似於佣金、平台費和各種第三方收費合計，無法滿足財務入帳需求，需要解析用戶交易收費明細，作為會計記賬的數據源。
- 客戶收費帳單對於股票交易類型可以更細分配置，可以支持單獨區分出暗盤，並且暗盤交易可以單獨配置分錄規則並形成會計分錄
- 記帳數據源“客戶收費帳單”增加【帳務日期】，並用於記帳分錄帳務日期取值

<img src="/assets/Wrrib0RFaoSzrJx38uWc8KFInFf.png" src-width="3206" src-height="1502" align="center"/>

### 支付流水

執行菜單：會計中台&gt;記帳數據源&gt;支付流水 Tab 頁籤

- 是指券商公司記錄用戶交易變動明細表，會計中台根據轉賬、出賬和入賬進行規範獲取，作為會計分錄中信息流記賬的數據。

<img src="/assets/NfhUb89shodkQAxKkFwcDYo6nnh.png" src-width="3230" src-height="1502" align="center"/>

### CCASS 賬單

執行菜單：會計中台&gt;記帳數據源&gt;CCASS 賬單 Tab 頁籤

- 增加 CCASS 文件解析，此 CCASS 數據源是相關文件導入後，系統自動根據配置完成會計分錄處理，可在此 Tab 查詢記錄或刪除已轉入的數據源分錄

<img src="/assets/DQOZbLdcWodpPixN6FGc1fkhnKh.png" src-width="3240" src-height="1478" align="center"/>

### 新股帳單

執行菜單：會計中台&gt;記帳數據源&gt;新股帳單 Tab 頁籤

- 新增新股帳單

<img src="/assets/OYWsba3uzocLHcxVUrCcgXgjnhh.png" src-width="3262" src-height="1120" align="center"/>

