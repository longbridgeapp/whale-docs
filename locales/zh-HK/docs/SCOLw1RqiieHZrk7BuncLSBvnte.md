---
title: 壓力測試
slug: yaliceshi
sidebar_position: 6
---


# 壓力測試

## 適用場景

基於 SFC 保證金指引的壓力測試與股票、客戶相關的監控。

## 前置條件

無

## 操作說明

菜單入口：風控管理  &gt; 壓力測試明細​


### 壓力測試明細

該菜單可以支持新設不同的條件來計算 Margin Call 預警/非速凍資金盈餘，每次新設都是分配一個任務 ID，當預計完成後，可以查詢任務 ID 的執行狀態與計算內容詳情。

新建模擬計算：系統支持股票組/股票市場/單一股票 三種模式的預計算，同時也支持是否將某種豁免規則配置在壓力測試某個批次上​；按需選擇模擬計算類型及計算內容後，提交即可開始模擬計算

<img src="/assets/FWgQb5QmzoYSXVxu3nscJYgunl5.png"/>

注：相關豁免規則配置 請在執行菜單：「系統設置」&gt;「風控」&gt;「風控參數」菜單內配置

當計算完畢，可以在記錄右側操作區，點選【詳情】查看計算的結果

<img src="/assets/WmmXbFlkAosiAPxBRyncqYQ3n2d.png"/>

【詳情】頁面展示的列表數據可以用來評估模擬計算結果是否符合預期；如同時模擬計算 margin call 和非速凍資金盈餘則會分開兩個列表展示

<img src="/assets/JG86bmjyJoMBO4xaJeVcVazfnWd.png"/>

### 自定義數據

該菜單可以維護股票保證金比例，將保證金比例的文檔批次導入。

按模版要求導入保證金比例，導入成功後則會在列表頁展示

<img src="/assets/XHlxb9YQMoDGQbx4lJZcDPWrnCc.png"/>

