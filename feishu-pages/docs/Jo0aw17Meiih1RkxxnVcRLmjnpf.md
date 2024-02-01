---
title: 牛熊證回收處理
slug: Jo0aw17Meiih1RkxxnVcRLmjnpf
sidebar_position: 0
---


# 牛熊證回收處理

## 適用場景

用於處理有剩餘價值返還的牛熊證

## 前置條件

無

## 操作說明 

### **創建**

1. 在公司行動管理，手工創建公司行動。預告類型選擇 TM，標的欄位輸入牛熊證編號，預告編號不可重複使用 
2. 港股系統是自動創建，導入 05 文件後，根據 05 文件數據每日生成有持倉的公司行動。每日下午 5 點半，上午 9 點左右執行
3. 美股需要人工創建
    1. 日期類型+日期配合使用，決定了預告內填充的日期字段
        1. 選擇登記日的，則只填充股權登記日
        2. 填充除淨日的，則填充除淨日，並且自動處理填充股權登記日。美股股權登記日=除淨日 +1+1；港股股權登記日=除淨日 +1
        3. 注意：系統處理時真正使用的是股權登記日字段，以此字段拉取持倉（詳見各類型**登記步驟**說明）

<img src="/assets/VavQbXtgOo2c9zxH9GfclprPnlc.png" src-width="3426" src-height="1360" align="center"/>

1. 在公司行動管理頁面，點擊記錄右側操作區【編輯】按鈕，進一步補充資訊。 輸入股權登記日和支付日期 ，然後點擊「新增」，選擇「**TM-EXPIRED」**方案類型，只需輸入必填欄位（詳見系統基本介紹的**方案類型**段落）

<img src="/assets/NC8HbCOK6oLxmUx0lsscYT5rnEh.png" src-width="3410" src-height="1632" align="center"/>

注* 配置的時候只能選擇一個「默認方案」。如默認方案字段沒選，或者填了多個方案，系統會提示錯誤

1. 確認資料後，點擊【確認】，若資料無誤，則下一步就是可以操作【登記】
2. 點擊【同步快照】。此步驟為非同步執行，同步成功後，客戶數會有變更。可多個預告審核後，批量同步

### **登記**

1. 在股權登記日後，可正式推進公司行動的流程。登記後拉取持倉報表中帳務日期=股權登記日的帳面持倉 

 例子：TM 的登記日為 6 月 2 日，則最早開始操作的時間為 6 月 2 日生成持倉報表後

1. 點擊【登記】，會按照同步數據和配置的通用收費規則生成權益信息表和費用明細。（權益信息表計算方式詳見系統基本介紹的**方案類型**段落）

<img src="/assets/JeJ0bERlBob2Bfx6p5YcRCsOnke.png" src-width="3410" src-height="1628" align="center"/>

1. 登記後的權益資訊和費用資訊可查看客戶明細。其中明細管理提供了單筆資訊整合查看的功能

<img src="/assets/MYS1bnmTLoPIQzx9oJ9cwYaEnmh.png" src-width="3392" src-height="1506" align="center"/>

### **上報回填**

牛熊證一般都是在上游返還剩餘價值後再開始登記公司行動，登記後可直接按返還的金額進行尾差處理 ，在操作區域點擊尾差調整

<img src="/assets/LyyzbDRNhoTn2HxGjFocbOm1niK.png" src-width="3390" src-height="1464" align="center"/>

在顯示當前的所有客戶匯總數據後，點擊【編輯 】 

<img src="/assets/WqojbbD9ZoQGTtxq9Iscs4O6nkh.png" src-width="3412" src-height="782" align="center"/>

系統會默認顯示當前的匯總返還值，直接按 CCASS 的數據輸入並且點擊【確定】 。其中尾差處理為非同步執行

例：**輸入金額後， **系統將按照持股比例，重新計算權益

<img src="/assets/WcBAb88H2ozACUxR0GQcBLCBnGe.png" src-width="3114" src-height="1080" align="center"/>

### **執行**

尾差處理完畢後，選中預告點擊【提交執行 】，提交審核

<img src="/assets/ZZEWbMSppoHOH4xvW7CcuYoFnPf.png" src-width="2682" src-height="1620" align="center"/>

提交審核介面有 LB 和上游的數據，為匯總類報表。上游數據取自導入的 02 檔，適配了部分公司行動

<img src="/assets/C2eXbC9zvooBTwxkUv2cQ3HdnAf.png" src-width="2682" src-height="1626" align="center"/>

接下來可點擊【執行復核 】

<img src="/assets/ZyuabPx2poiK3WxA9pTcRkoQn6g.png" src-width="2672" src-height="1622" align="center"/>

再次核對數據後，點擊【審批通過 】。審批後系統將調用 RMS（資產管理系統）進行資產變動。執行後，可在客戶帳户中查看

<img src="/assets/CYdxbVcP2o2rrixHhzdcxAMsnlf.png" src-width="2668" src-height="1642" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<p>💡 注意：</p>
<ol>
<li><p>登記日為當天的，需要在日切（下午 5 點）且生成持倉數據後才操作 </p>
</li>
<li><p>只有客戶數為 0 的公司行動才會發起同步。同步數據有問題的，需找技術刪除快照後再同步 </p>
</li>
<li><p>牛熊證剩餘價值返還為 0 的，可能會和 DS 類 - 股權收回有重複，可以刪除 TM 類型的公司行動</p>
</li>
</ol>
</div>

