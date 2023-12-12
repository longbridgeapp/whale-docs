---
title: 風險預警
slug: fengxianyujing
sidebar_position: 0
---


# 風險預警

## 適用場景

當客戶的資產淨值，因市場波動而下跌至低於維持保證金水平時，系統會向客戶發出 Margin Call 通知，客戶必須在 3 個交易日補充資金或平倉，否則業務上有權替客戶進行平倉，而無須事先通知。

業務流程如下：

<img src="/assets/MUNYbs75AoscaIxZ2qhcSrBynHe.jpeg"/>

## 前置條件

使用 margin call 功能之前，可以瞭解“風控 &gt; 追保金額配置”菜單的追保金額初始設置，如不滿足業務需求，按頁面提示聯繫長橋配置。

## 操作说明

菜單入口：風控管理 &gt; Margin Call  &gt; 風險預警

### 實時預警

該菜單支持實時的保證金預警監控。

1. 列表展示所有當前預警客戶記錄，在左側區會有 綠色文字實時相關更新提示（實時更新最新計算結果）；同時在上方區域會加總目前 預警紀錄的追保金額與 長期未結清追保金額的 匯總額

<img src="/assets/ASgDbM1rmor3hAxakAbc9Paznqg.png"/>

1. 同時對於列入監控預警的客戶，可以點選記錄後，可以進行後續操作：發送消息//平倉操作/設置自動平倉

<img src="/assets/U8NxbOD4IoYSXIx7axlcjtdinZl.png"/>

1. 如果操作平倉動作時，可以選擇是否平倉特定股票平倉

<img src="/assets/G9lkbTSuRoCT0Mxdn8DceTn9n4F.png"/>

1. 設置自動平倉

<img src="/assets/SF10bxzeyo7r9RxcBHgcA2FOn3d.png"/>

1. 也可以對列入監控預警的客戶，在記錄區右側點選【詳情】，提供該客戶的資金摘要與持倉資料與正在平倉的股票清單；支持在詳情頁操作【平倉】或者【發送消息】

<img src="/assets/Bs99bp7fcoK1XYxc3QzcG033nch.png"/>

<img src="/assets/HeGrbjvGxoDNN0xCz9NcgSkDnHe.png"/>

1. 對當前預警記錄進行編輯備注，便於後續處理或給其他人參考​；同時，若標注為異常單，也可在列表頁面的【異常單】查看記錄

<img src="/assets/RWHMb5hX3otbiAxnS9kcIGGBn3d.png"/>

<img src="/assets/LfCMbI7ohooWdEx2eX2cU8RNnfe.png"/>

### 歷史記錄

margin call 結束後會進入歷史記錄頁面，該菜單下可以查看歷史 margin call 訂單的詳細信息。

1. 點擊列表頁的【詳情】可以查看 margin call 觸發前後的詳細數據

<img src="/assets/UKOHbDbUMoFMvqxcSt8cGzaqnNe.png"/>

### 快照

當客戶觸發 margin call 後，需要保留當時客戶觸發 margin call 時的歷史數據記錄是可追溯，日後可以作為 RO 或相關合規的參考，附為上報給監管的依據，因此 margin call 歷史記錄需要在部分場景下記錄快照數據。

場景如下：觸發 margin call  /觸發 force call / 觸發通知/每日定時記錄 /結束 margin call

<img src="/assets/GPMZbUw5aolwSTxMRXScqDYBnLM.png"/>

### 融券持倉概覽

當 IB 不可融資時，會進行提前通知做股票召回或者強制平倉，對應我們也要通知用戶做強制平倉。該菜單支持查看整體融券的使用情況並操作平倉。

1. 列表頁查看整體融券信息

<img src="/assets/T70MbbrlQoF3u2xE8BqcsaA6npe.png"/>

1. 點擊【詳情】，可查看該空頭股票對應客戶詳情

<img src="/assets/Z0HqbgN3Oo5sAUx0DGEc3xZZn6d.png"/>

1. 詳情頁面可以操作平倉或發送 margin call 消息，操作方式同「實時預警」

<img src="/assets/SWU3bBtGWoCdDNxM6cMch5B3ntc.png"/>

### 日內保證金實時預警

該菜單功能及操作邏輯同「實時預警」，針對客戶對象僅爲日內融帳戶。

<img src="/assets/WB8Gbeq1foIFEBxi1zxczdjonUd.png"/>

