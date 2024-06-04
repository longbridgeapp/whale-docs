---
title: 系統介紹
slug: NCXHwKy6fiEtoBk752wcmmsfnBb
sidebar_position: 8
---


# 系統介紹

# 概述

Whale 會計系統提供了一套可以自動獲取數據源，按照預設的科目及分錄規則進行自動記帳，進而完成帳實核對，主要包含了科目設置、分錄規則設置、合併規則設置、會計分錄、科目餘額、科目明細帳、記帳數據源等功能

# 会计中台流程说明

# 務操作管理

# 參數設置

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>業務參數設置 &gt; 記賬參數</p>
</div>

證券機構在使用會計中臺之前需要先進行記賬參數設置，包括科目屬性、會計科目、分錄規則、資金類型以及合併規則等設置。

## 科目屬性

在使用會計中臺前，券商需要配置會計屬性。

<img src="/assets/VLmgbUNTwo06PNxxyHccfQuon2b.png" src-width="3828" src-height="1614" align="center"/>

<b>操作按鈕說明</b>

- 新建：可根據券商公司需求自定義會計科目屬性。
- 編輯：對已經添加的科目屬性可以進行人工編輯。
- 刪除：對已經添加的科目屬性可以進行刪除。

## 1.2 會計科目

在配置科目屬性後，需要根據券商公司的要求配置會計科目。

<img src="/assets/Pj7Fb49Rvo0Kl5xYgmvcrOwwnNc.png" src-width="3820" src-height="1622" align="center"/>

<b>操作按鈕說明</b>

- 批量導入：如果券商公司需要大量添加會計科目，可以選擇批量導入，大批量新增會計科目。
- 新建：可根據券商公司需求单笔自定義會計科目。
- 編輯：對已經添加的会计科目可以進行人工編輯。
- 刪除：對已經添加的会计科目可以進行刪除。

## 1.3 分錄規則

形成分錄之前需要根據券商公司實際業務需要配置對應的分錄規則。

<img src="/assets/ESmSbOsTzoRK7jxkODlcsYSZnXf.png" src-width="3814" src-height="1524" align="center"/>

<b>操作按鈕說明</b>

- 新增：可根據券商公司需求新增各業務的分錄規則。
- 編輯：對已經添加的分录规则可以進行人工編輯。
- 複製：可以將當前分錄規則進行復制，方便新增類似的分錄規則。
- 刪除：對已經添加的分录规则可以進行刪除。

## 1.4 資金類型

對於券商公司獲取的銀行賬單可以自定義資金類型。

<img src="/assets/TopPbU9GCosOBdx3qzrc7SehnDe.png" src-width="3792" src-height="1462" align="center"/>

<b>操作按鈕說明</b>

- 新建：可根據券商公司銀行賬單新建不同資金類型標籤。
- 刪除：對已經添加的资金类型可以進行刪除。

## 1.5 合併規則

如果券商公司導出的財務報表需要合併，則可以自定義合併規則。

<img src="/assets/OL9KbJyoSoCtfCxXKPhcmFcjn8d.png" src-width="3834" src-height="1452" align="center"/>

<b>操作按鈕說明</b>

- 新建：可根據券商公司需求新增報表的合併規則。
- 編輯：對已經添加的合并规则可以進行人工編輯。
- 刪除：對已經添加的葛冰规则可以進行刪除。

# 會計分錄

## 2.1 適用場景

使用者在初始化使用會計中台功能時，需要維護的基礎數據

## 2.2 前置條件 

擁有會計中台的菜單權限，並且已經設定了會計工作中涉及的會計科目

### 2.2.1 會計分錄列表

執行菜單：证券后台&gt;會計中台&gt;會計分錄

此功能可以維護會計分錄，其中會計分錄是外部財務系統最重要的會計憑證轉入的依據

<img src="/assets/QjGrbtZmzo1gxqxPjNTc3Hugn4b.png" src-width="1280" src-height="634" align="center"/>

首先，系統是支持根據不同數據源配置分錄規則，可以自動地對數據源產生會計分錄，若某些數據源無法自動配置，此功能提供批次導入與手工錄入方式：

如果自動產生分錄後，作業提供新增【編輯】功能，可以修改產生分錄紀錄，同時紀錄新增支付流水新增支票號欄位展示

<img src="/assets/CqZlbS8mxo2o2exeVgzc3x28nDb.png" src-width="2658" src-height="1412" align="center"/>

<img src="/assets/PFtjbvAAko74FpxyhiHc0oxonPc.png" src-width="3270" src-height="2754" align="center"/>

如果需要手工錄入的分錄很少，可以選擇【手動錄入】

<img src="/assets/RsZPb9Fn4ofvgfxunhCccLw7nqb.png" src-width="2502" src-height="1330" align="center"/>

<img src="/assets/OAmyb0IQpopXP6xg5U0cMSZcnGb.png" src-width="3290" src-height="2782" align="center"/>

也可以選擇【批量導入】，先行下載範本之後，根據批量範本進行編制分錄並導入到系統中

<img src="/assets/LFG3bgtVSokpSVx9DNwcWTXfnRb.png" src-width="3246" src-height="1534" align="center"/>

在記錄右側操作區的【刪除】鍵，也可進行刪除此會計分錄

<img src="/assets/LDqxbQHPRo1exKx86CEcZZKunnb.png" src-width="3364" src-height="1474" align="center"/>

如果某個帳務日期對應的數據源獲取不完整，可以選擇對應日期的數據源進行【重跑】，系統會更新數據源產生最新會計分錄資料

<img src="/assets/Nv9ibNwYYoHhlNxJlbmc79LZnEd.png" src-width="3362" src-height="1396" align="center"/>

如果系統生成的會計分錄已經核對無誤，手工可以點選【匯總】生成科目餘額匯總表

<img src="/assets/RtrJbDpIHo7aA3xk99OcvUplnwb.png" src-width="3370" src-height="1452" align="center"/>

會計分錄中新增【報表導出】按鈕，方便按照財務軟件格式要求進行報表導出

<img src="/assets/FpfgbBv56ouzM3xraQTcXk5unWb.png" src-width="3248" src-height="1606" align="center"/>

提供合併會計分錄查詢功能，合併會計分錄時，系統會按賬帳日期獲取匯率

<img src="/assets/XYBsbXDA3oylpaxKqLDcrqFknkh.png" src-width="3348" src-height="1418" align="center"/>

# 3.科目餘額

# 5.銀行餘額

# 6.記帳數據源

