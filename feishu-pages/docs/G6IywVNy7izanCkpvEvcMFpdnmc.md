---
title: 借幣提醒
slug: xxx
sidebar_position: 2
---


# 借幣提醒

## 適用場景

一般劵商的客戶賬戶都是採用綜合購買力換算機制，能方便客戶以非當地幣別去交易當地幣別股票（例：以港元交易美金股票），當客戶成交後，就會涉及到客戶賬戶的借幣（劵商先提供自有外幣給外國劵商作交易）後續客戶就需要進行換匯操作，因此可以配置事先的借幣換匯提醒，將客戶換匯提醒事項列入風控管理維度。

## 前置條件

無

## 業務流程

## 操作說明

菜單入口：風控管理&gt;授信額度&gt;借幣提醒

### 借幣提醒

該菜單可以查詢所有提醒客戶，支持配置借幣提醒規則和人工兌換操作。

1. 點擊列表右上角的【換匯規則】配置借幣提醒規則

<img src="/assets/CUSgbEbPLogSZyxUcCScPDN5nAm.png" src-width="3389" src-height="1286" align="center"/>

1. 規則配置：單幣種規則為非必配項，其他為必配項；規則僅在開啓時運行
    1. 必配項的欠款金額和其他幣種可提金額默認為主幣種，所有幣種轉化為主幣種計算
    2. 單幣種規則和必配項規則只要有其一滿足規則，即會提醒
    3. 單幣種規則可以設置不同幣種規則，支持添加和刪除

<img src="/assets/K5tjbnRvYoGzltxXy36cFseCnDd.png" src-width="3356" src-height="1720" align="center"/>

1. 規則配置後，選擇開啓並保存規則。系統則會運行規則，撈取符合規則的客戶，結果在「提醒查詢」列表展示。此外，交易日均會定期執行規則並給符合規則的客戶發送借幣提醒消息，通知客戶主動換匯。頁面操作【換匯用戶撈取】可刷新列表，過濾不再滿足規則的客戶

<img src="/assets/AL6rbl69ootUKxxCDomcn8YVnLd.png" src-width="3218" src-height="1070" align="center"/>

1. 同時，開啓規則後，客戶在App上可以對應查看【自動還款】功能，可以自主選擇開啓該功能。若客戶打開自動還款，當命中規則時，系統將進行自動換匯或後台操作人工兌換
    1. App端「自動還款」功能入口：「我的」-「設置」-「賬戶設置」
    <img src="/assets/O591b74Lzo9Cv1xbGXmctyuNnLe.png" src-width="1170" src-height="2532"/>
    1. App若開啓「自動還款」，頁面「自動換匯」則為「開啓」，支持操作【兌換】
    <img src="/assets/MlH4bA93PocqlJxZRDFckjRqnPe.png" src-width="3216" src-height="682" align="center"/>

2. 兌換：開啓自動還款的客戶會默認系統自動兌換；在系統自動兌換之前，頁面可支持人工兌換。列表操作【詳情】支持查看客戶實時數據、消息記錄和兌換記錄；人工兌換彈窗頁面也可查看當前客戶現金情況，配置兌入/兌出金額和幣種確認兌換即可
    <img src="/assets/TXdGbfHtNoOZtbxGp8kckksCnEd.png" src-width="3274" src-height="1640" align="center"/>
    <img src="/assets/K4lNbGEODo5pVPxaZpycaaxwnqb.png" src-width="3222" src-height="1220" align="center"/>

3. 兌換結果查看：人工/自動兌換完成後，若剩餘資產仍命中規則，則仍會在提醒查詢列表；若不再命中規則則會進入歷史記錄，可在「[歷史記錄](./G6IywVNy7izanCkpvEvcMFpdnmc)」查看相關詳情

### 歷史記錄

該菜單主要用於查詢歷史所有的提醒客戶及相關提醒兌換詳情。

<img src="/assets/QG7vb6a0gopDZOx5NAucgHIpnrd.png" src-width="3198" src-height="1070" align="center"/>

