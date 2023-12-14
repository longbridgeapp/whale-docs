---
title: 費用管理
slug: xxxxxxxxx
sidebar_position: 3
---


# 費用管理

# 適用場景

處理公司行動權益方案的全局規則費用配置或客戶單一適用的客戶費用管理維護

# 前置條件

無

# 操作說明

## 全局規則

執行菜單：公司行動&gt;費用管理&gt;全局規則 Tab 頁籤

可以維護管理公司行動的全局相關費用收取配置（預告 - 方案類型 - 費用類型）

<img src="/assets/XQxHbmdT3oE3kwxIaTGcbKk7nph.png" src-width="3344" src-height="1558" align="center"/>

也可以在記錄右側區點擊【編輯】，來修改所對應的公司行動費用配置，可以在左上方點擊【新建】，來增加一筆費用配置

<img src="/assets/CVeTbc0eHoXCyaxNXlCcSUFbnve.png" src-width="3192" src-height="1842" align="center"/>

字段说明：

- 分紅類的收費（權益金額 + 比例收費），收費幣種同分紅幣種 
- SCRIP DIVIVED 方案，配置的是是權益金額 + 比例收費的，則收費會以（每股派息比例*股數）來收費 
- 選股選息選擇多個方案的，會按行權數量最多方案幣種來收費。實際操作：當作行權都行在這個方案
- 實際收費幣種和配置幣種不一致的，會針對最高、最低收費會進行匯率轉化 
- 截取方式：控制小數位數的截取方式，按照 2 位截取
-  收費優先級、費用特殊限制配合使用，比較費用和分紅（分股分紅的分股也統計在分紅內）的關係
    - 無限制：獨立進行費用計算
    - 單項費用不超過權益：該項費用的費用金額和分紅進行比較，費用大於分紅的，按照分紅金額收費
    - 優先級前費用不超過權：按照優先級進行費用計算，優先級前的費用（含自身）大於分紅的，按照分紅金額=優先級前費用收

- **公司行動過戶費只需要配置一條，是唯一不按方案收費的**
- 新增過戶費設置：可進行單獨收費，也可進行聯合收費

<img src="/assets/WPAVbh6Kvo2L60x0tvlcgbxmnFf.png" src-width="3348" src-height="992" align="center"/>

<img src="/assets/V3IabCZGEo0CFMxkri9cWn0rn6g.png" src-width="3376" src-height="1254" align="center"/>

## 客戶規則

執行菜單：公司行動&gt;費用管理&gt;客戶規則 Tab 頁籤

進行客戶規則上去配置公司行動的費用規則（僅適用該客戶，不採全局配置）

<img src="/assets/IcsLbrTPEobgLqxBI2wcc6RRnyq.png" src-width="3350" src-height="882" align="center"/>

可以在右側上方進行【新建】一筆客戶規則，選擇 客戶帳號，費用類型，費用系數，最低費用錄入

<img src="/assets/GJp6bAHFVoqXhXxMAVycd3EEn3g.png" src-width="3378" src-height="1250" align="center"/>

可以在右側上方進行【批量導入】批量按模版導入客戶規則

<img src="/assets/Q49ybIrpqozXsLxSEz8cHdfBngh.png" src-width="3348" src-height="1232" align="center"/>

