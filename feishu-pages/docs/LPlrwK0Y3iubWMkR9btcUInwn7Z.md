---
title: 公募基金管理
slug: gongmujijingunali
sidebar_position: 1
---


# 公募基金管理

# 適用場景

本作業可以維護一個公募基金的基金資料，配置基金主體和介紹，也可以管理基金的上架與顯示展示。同時配置和管理基金渠道，查看基金管理費。

該頁面的作業流程：基金渠道→基金公司→基金管理。

# 前置條件

無

# 使用說明

## 基金渠道

執行菜單：基金管理&gt;公募基金管理&gt;基金渠道 Tab 頁籤

本作業用以管理基金平台商的相關資料 ，維護基金渠道，配置與基金渠道交付的時間點配置

<img src="/assets/LdafblyqeoTVUqxYlHKcU2XYng4.png" src-width="2984" src-height="1334" align="center"/>

可以右上角【新建配置】來新增基金渠道，根據基金渠道輸入 獲取訂單時間與回填時間

<img src="/assets/Orj9b4sXOocF7kxPjvAcN65ongd.png" src-width="2978" src-height="1458" align="center"/>

注意： 

1. 基金公司渠道一定要遵循範例格式模式填寫，禁止填寫中文以及其他特殊符號
2. 私募基金的基金公司渠道嚴格按照提示加前綴 private-
3. 其中自動回填就是通过 API 拉取第三方基金公司的确認净值/确認金额/确認份额等，若劵商租户没有走 API 的配置時，請任意填下时间即可

## 基金管理

執行菜單：基金管理&gt;公募基金管理&gt;基金公司 Tab 頁籤

本作業可以維護一個公募基金的基金資料，配置基金主體和介紹，也可以管理基金的上架與顯示展示 

首先在基金紀錄右側操作區，可以操作【詳情】或【詳情】來查閱編輯基金資料

同時系統提供 基金上架（系統端）與顯示管理（APP 端）

【上架】：是指將基金 納入系統交易。并調整时需要標的是上架状態      

【下架】：是指將基金 將無法在系統交易

【顯示】：是指基金可在 App 端展示、搜索和交易 

【隱藏】：是指基金在 App 端不展示、不可搜索

**App 端展示效果**：  （如果一個 公募基金是 '上架' 且 '顯示' 的 狀況下）

<img src="/assets/JB59bGPbCoOxlbxSsDHcSatZnNd.png" src-width="696" src-height="1206" align="center"/>

可以點選右上角【新建公募基金】或批量導入來添加基金

<img src="/assets/FzcabCMjboCd7TxBmzdc5EUCnhb.png" src-width="2980" src-height="1520" align="center"/>

<img src="/assets/O5OsblRoIoTXnGxuERVcSPHEnPd.png" src-width="2990" src-height="1356" align="center"/>

本作業也支持批量導入基金資料，點選右上角【批量導入】，可以根據事先提供模板來批量導入基金

<img src="/assets/GbzXb1FKqop8CWxJxL8cfAJ0nqc.png" src-width="2984" src-height="1370" align="center"/>

優化了配置基金交互流程，在右側記錄區【編輯】時，展示改成左側樹狀 Tab 配置页面，提高數據展示優化

<img src="/assets/SHYObYEtooVbbZxf9ZnccAw0n5P.png" src-width="2972" src-height="1526" align="center"/>

<img src="/assets/Fdn6bWwgNo3MQ6xDDC8cjw4nnmh.png" src-width="2968" src-height="1764" align="center"/>

## 基金公司

執行菜單：基金管理&gt;公募基金管理&gt;基金公司 Tab 頁籤

本作業可以維護基金公司相關資料

<img src="/assets/TSOPb6wrUoZh46xjao8crq2HnNh.png" src-width="3245" src-height="1400" align="center"/>

<img src="/assets/HflIbP5n1oc1B9xpxDocUwBRnkU.png" src-width="2990" src-height="1776" align="center"/>

**App 端展示效果**： （當新建基金公司後）

<div class="grid gap-3 grid-cols-2">
<div>
<img src="/assets/W4DQb6wjloJT9ExC5dgcBDqhndd.png" src-width="708" src-height="1492" align="center"/>
</div>
<div>
<img src="/assets/Y5uxbJ0vcodldYxfjPMc0yjonGf.png" src-width="880" src-height="1552" align="center"/>
</div>
</div>

## 基金管理費

執行菜單：基金管理&gt;公募基金管理&gt;基金分組 Tab 頁籤

本作業可以查詢基金管理費用的設置

<img src="/assets/JvOSbjbavourZkxL7WWcehcPn9d.png" src-width="3221" src-height="1552" align="center"/>

