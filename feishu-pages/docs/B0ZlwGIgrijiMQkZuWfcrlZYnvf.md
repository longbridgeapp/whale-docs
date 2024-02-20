---
title: 授信額度
slug: B0ZlwGIgrijiMQkZuWfcrlZYnvf
sidebar_position: 1
---


# 授信額度

## 適用場景

客戶若開通 margin 帳戶，後面客戶操作了轉倉/入金，則系統自動會給客戶授信一定的額度，客戶可以進行保證金交易。同時，支持人工授予客戶保證金額度。

## 前置条件

需要先在「客戶參數」核驗授信全局配置。​
（首次使用授信系統會有初始化配置，券商可以根據實際業務需求進行調整）

## 操作说明

菜單入口：風控管理  &gt; 授信額度 &gt; 授信額度

### 客戶額度

該菜單主要用於查詢所有授信客戶額度情況，同時若有客戶需求，也可支持人工給客戶授信及調整額度。​
主要操作場景如下：

**調整客戶額度**

1. 列表為所有融資授信客戶，打開列表頁的調整彈窗為已授信客戶調整額度

<img src="/assets/MgIMbRy5RoqIS5xNnZhcOlyMn2d.png" src-width="3044" src-height="1356" align="center"/>

<img src="/assets/D6CmbBk0UoHIKYxb7mKcBLirn9c.png" src-width="2166" src-height="1348" align="center"/>

1. 確定【調整後額度】，提交則需要進入額度審批頁面的對應記錄進行額度審批；见「[额度审批](https://longbridge.feishu.cn/docx/H1NgdfrSlo81gqxb2TZc9ccwnFQ#JQcidvfLvoDB7gxvNBncjwYYnoh)」

<img src="/assets/HoMubG5OHoBaFLxqfnecAn69nHh.png" src-width="1026" src-height="214" align="center"/>

**新建授信客戶**

1. 列表頁【新建授信客戶】可以單個新增授信客戶

<img src="/assets/ZpmNb37WmoecDGxFyD9chPNJnah.png" src-width="3198" src-height="416" align="center"/>

1. 彈窗頁填寫相關信息（若客戶已在授信列表，提交時會提示，可以在主列表查看客戶額度）

<img src="/assets/Effzbxo6eotTUKx2KDVch55SnOc.png" src-width="3234" src-height="1328" align="center"/>

1. 若需一次性給多個客戶授信，可以在列表右上方的【批量新增】操作

<img src="/assets/H6CcbL8LdoD8zyx2YjDcTdvanwc.png" src-width="3172" src-height="1160" align="center"/>

1. 無論是單個還是批量新增，提交後都需在工單系統審批。審批通過後方可對客戶額度生效

**刪除已註銷客戶授信額度**

業務中可能存在有些客戶賬戶已經註銷，但仍會計算在公司總批核額度中，可以人工刪除該部分客戶額度。

1. 篩選註銷狀態的授信客戶

<img src="/assets/WBMrbGOk8oJwRVxwrZwcNHJ5nCc.png" src-width="1684" src-height="464" align="center"/>

1. 選擇並刪除已註銷的授信客戶

<img src="/assets/EsExb3TtZo36YXxKTjKcGPSIn0f.png" src-width="3148" src-height="1040" align="center"/>

**设置公司额度**

1. 根據客戶整體額度匯總情況，若需同步調整公司額度進行額度管控，可以在頁面列表上方【設置公司額度】進入相關頁面操作，後續會在對應頁面詳細說明操作方式

<img src="/assets/DqrXb3rxaoRUutxqgQhcYtwCn2d.png" src-width="3188" src-height="1174" align="center"/>

### 額度審批

該菜單主要用於審批授信額度，包含後台及客戶發起的調整額度申請。

1. 在列表頁的操作【提交審批】打開彈窗頁面

<img src="/assets/XzZ2bOHsLoreUlxH0GZcetEmn9f.png" src-width="3208" src-height="834" align="center"/>

1. 提交審批彈窗頁面確認額度並進行額度批注

<img src="/assets/T2hGbjTqUo9N5Zxzyi7cDP4bnYf.png" src-width="3262" src-height="1614" align="center"/>

1. 確認信息後，提交審批，需在工單系統進行審批，審批完成後額度調整方可生效

### 客户FPS

該菜單主要用於查詢客戶保證金融資授信的FPS值（FPS初始配置可在「客戶參數」查看） 及配置自定義FPS規則（可在全局FPS初始值上按定義維度配置值進行增減計算）。

**配置FPS規則**

1. 頁面點擊【規則配置】打開規則頁面

<img src="/assets/QKwEbck1WoOFUoxbhRicxNWynEH.png" src-width="3316" src-height="840" align="center"/>

1. 規則配置：可以根據客戶各方面維度設定閾值配置增減閾值，確定後生效規則

<img src="/assets/WeIyb7TyXoVXW7xpKwOcDUvynKg.png" src-width="3258" src-height="1532" align="center"/>

### 授信組

該菜單用於設置授信組及管理授信組額度，組內客戶額度使用不可超過組額度。如需將同一客戶多個賬戶分組，或者將關聯賬戶（如夫妻賬戶）分組等場景均可使用該功能。

1. 列表页可查看所有授信组及总授信额度；每個組的額度使用情況也會顯示

<img src="/assets/EbvqbkjZaoQeqjxyphJcRyDFnvb.png" src-width="3224" src-height="1040" align="center"/>

1. 新建授信組：根據彈窗配置相關信息，確定後即創建完成授信組

<img src="/assets/MkW1bsjxZoHCcYxDTJzcUPWfnVg.png" src-width="3224" src-height="270" align="center"/>

<img src="/assets/Yg45bxN1toamCpxFSAoc6Y6VnHb.png" src-width="3350" src-height="1773" align="center"/>

1. 授信組創建後，均可進一步修改組信息、新增/删除組內賬戶或調整組內賬戶額度

<img src="/assets/VOcebTvtgoCQDQxEMQdcpofznNb.png" src-width="3110" src-height="554" align="center"/>

### 授信快照

該菜單主要用於查詢所有客戶的歷史每一次的授信記錄，若需具體定位額度變更情況可以使用該功能。

<img src="/assets/KwyObE4Wdo2nawx997UcJmGTnvc.png" src-width="3218" src-height="1614" align="center"/>

