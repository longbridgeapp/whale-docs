---
title: 會計分錄
slug: ZikzwrQUWiWUO2k1OYHcg8J1nTX
sidebar_position: 1
---


# 會計分錄

## 適用場景

使用者在初始化使用會計中台功能時，需要維護的基礎數據

## 前置條件 

擁有會計中台的菜單權限，並且已經設定了會計工作中涉及的會計科目

### 會計分錄

執行菜單：財務管理&gt;會計記帳&gt;會計分錄

此功能可以維護會計分錄，其中會計分錄是外部財務系統最重要的會計憑證轉入的依據

<img src="/assets/PQh8b32ZToYfAdx2vpSc4nCHncd.png"/>

首先，系統是支持根據不同數據源配置分錄規則，可以自動地對數據源產生會計分錄，若某些數據源無法自動配置，此功能提供批次導入與手工錄入方式：

如果自動產生分錄後，作業提供新增【編輯】功能，可以修改產生分錄紀錄，同時紀錄新增支付流水新增支票號欄位展示

<div class="grid gap-3 grid-cols-2">
<div>
<img src="/assets/Ti6pbTfr8o7WNixaid7c9HUFnMg.png"/>
</div>
<div>
<img src="/assets/Ob6qbO9WUoOFVZxe97KcfcVOn0b.png"/>
</div>
</div>

如果需要手工錄入的分錄很少，可以選擇【手動錄入】

<div class="grid gap-3 grid-cols-2">
<div>
<img src="/assets/DKe2bQYxXoFDTZx23ELcvkOOn5c.png"/>
</div>
<div>
<img src="/assets/F8KTbchXmoofyvxjzkQcvI5Znzb.png"/>
</div>
</div>

也可以選擇【批量導入】，先行下載範本之後，根據批量範本進行編制分錄並導入到系統中

<img src="/assets/WriwbnxO2osVIOxwXd9cUzpVntc.png"/>

在記錄右側操作區的【刪除】鍵，也可進行刪除此會計分錄

<img src="/assets/CXjwbpq6Lo4WsKxQKi4c1xWdnuc.png"/>

如果某個帳務日期對應的數據源獲取不完整，可以選擇對應日期的數據源進行【重跑】，系統會更新數據源產生最新會計分錄資料

<img src="/assets/TmWzb1wa5outiAxHgHdcSUB6nkb.png"/>

如果系統生成的會計分錄已經核對無誤，手工可以點選【匯總】生成科目餘額匯總表

<img src="/assets/BYtEbceajoss3fxpTM2cM9HcnGb.png"/>

會計分錄中新增【報表導出】按鈕，方便按照財務軟件格式要求進行報表導出

<img src="/assets/OmMbbFnwBo1a16x9GfUcjmOtn9d.png"/>

提供合併會計分錄查詢功能，合併會計分錄時，系統會按賬帳日期獲取匯率

<img src="/assets/FUdqb2nXPoBr8AxN8fScGlnqnfg.png"/>

