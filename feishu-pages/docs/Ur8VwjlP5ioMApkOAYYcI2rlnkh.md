---
title: 系統介紹
slug: Ur8VwjlP5ioMApkOAYYcI2rlnkh
sidebar_position: 2
---


# 系統介紹

# 概述

KYC 流程通常涉及不同的人員和審核步驟，以確保客戶的身份真實、資金來源合法，並評估其風險承受能力。

一般涉及以下審核角色：

1. 客戶服務人員/前台人員：
    - 收集客戶提交的開戶申請和相關資料。
    - 檢查申請表的完整性和必填字段的准確性。
    - 協助客戶填寫必要的表格和文件。
    - 將收集到的資料傳遞給後續審核人員。

2. 審核人員/後台操作人員：
    - 對客戶提交的資料進行核實和驗證。
    - 進行身份驗證，比對客戶提供的身份證明文件與公共數據庫或第三方身份驗證服務。
    - 進行地址驗證，核對客戶的地址證明文件。
    - 調查客戶的職業和財務狀況，並核實相關信息。
    - 進行風險評估，評估客戶的投資目標、投資經驗和風險承受能力。
    - 監測和調查客戶的資金來源，以確保合法合規性。
    - 根據審核結果，做出開戶申請的批准、拒絕或需要進壹步核實的決策。

3. 合規人員/風控人員：
    - 對審核人員的工作進行複核和審查，確保審核程序符合內部規定和法律法規要求。
    - 提供合規指導和建議，確保KYC流程符合監管要求。
    - 監控和審查潛在的風險問題，如洗錢、恐怖融資等，以確保合規性。

## 開戶審核

### KYC審核流程

在客戶開戶資料簽名提交後（不論線上或線下臨櫃），後面就進入證劵系統內部的 KYC 審核流程，

目前系統的開戶中 KYC 主要流程節點如下：

<img src="/assets/X8I0bxDG0oWoHBxHCWLcsAQsnCH.png" src-width="1836" src-height="536" align="center"/>

細部流程如下：

<img src="/assets/XehMbd8D9oSVHnxh451coTFknHw.png" src-width="1225" src-height="461" align="center"/>

### 開戶列表

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p> KYC&gt;開戶審核&gt;開戶列表 </p>
</div>

開戶列表頁展示所有客戶提交的開戶申請記錄，包括所有開戶狀態。

<img src="/assets/JvoUb9maJow7UNxI1sFcOFesnsf.png" src-width="2362" src-height="884" align="center"/>

**指標卡說明**

指標卡支持自定義配置，包括展示的個數及順序

<img src="/assets/YDZobjsKioMT0LxyeV5cp5Zsnog.png" src-width="2056" src-height="1081" align="center"/>

**開戶列表**

- 支持各類字段篩選開戶申請的數據
- 列表頁支持點擊提交時間、最近更新時間、開戶成功時間等字段升序/降序排列
- 點擊「詳情」跳轉至 KYC 詳情頁查看完整開戶資料

<img src="/assets/VcKHbH5bJoIW7txC8Z3cthQfn3g.png" src-width="1956" src-height="964" align="center"/>

### 開戶審核記錄

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：KYC&gt;開戶審核記錄</p>
</div>

可查詢客戶開戶審核記錄，點選 【詳情】可以查詢開戶 KYC 流程審核節點（合規/RO/VC）的審核記錄與細部資料

<img src="/assets/R3k0b93JPoUE2Ux48p7clPXtncd.png" src-width="3230" src-height="1494" align="center"/>

### AML

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：KYC&gt; AML 監查後台（TESS）</p>
</div>

本页面可以查看全部有 TESS 調用記錄的客戶的監控狀態和待處理警報

注意： 未命中的客戶紀錄，將不會在此展示

<img src="/assets/XSS5bJHdWoj0IqxQ6aNcKjiSnJb.png" src-width="3224" src-height="1618" align="center"/>

 页面上有四個維度：全部客戶/待處理警報客戶/持續監控客戶（主要持有人）/持續監控客戶（次要持有人）

<img src="/assets/A3u8bluFGorAOOxXD6gcakQwneg.png" src-width="3226" src-height="354" align="center"/>

切換不同維度時，下方資料區會讀取相關資料，方便監控查閱個別紀錄，同時可根據 AML 管理需要，操作‘取消監控' '加入監控名單‘

<img src="/assets/QFS0biqZ2osEYFxluQoczx0znHg.png" src-width="3208" src-height="1606" align="center"/>

### 第三方驗證

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p>菜單入口：KYC&gt;第三方驗證</p>
</div>

在客戶身份認證的環節上，可以手動上傳第三方驗證文件，也可以點選 【手動驗證】點閱已提交的驗證文件內容

<img src="/assets/EDkKbsXjioKoLAxenrkcsx7unOe.png" src-width="3214" src-height="1620" align="center"/>

## 資料管理

### 開戶資料

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p> KYC&gt;資料管理&gt;開戶資料</p>
</div>

開戶資料列表頁，展示線下提交的所有開戶申請列表記錄。

<img src="/assets/SpTQbxzVRoV9jYxyGGDcVzEknwe.png" src-width="2318" src-height="834" align="center"/>

**開戶資料列表**

- 支持各類狀態篩選列表數據
- 點擊「導入用戶」按鈕，按導入模板，可批量導入開戶申請
- 點擊「添加開戶申請」按鈕，在後台可提交個人戶/企業戶/聯名戶的開戶申請
- 在列表頁點擊「詳情」按鈕，可查看已填寫的開戶資料
- 在列表頁點擊「編輯」按鈕，可繼續填寫未完成的開戶流程

### 批量更新

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p> KYC&gt;資料管理&gt;開戶資料&gt;批量修改</p>
</div>

在批量更新頁面，展示曆史提交的批量修改數據記錄。

<img src="/assets/XmXLbtbTco84WAxyZ8KcyJDknYd.png" src-width="2334" src-height="978" align="center"/>

**提交批量修改操作**

點擊「批量導入」按鈕，下載導入模板。按照導入要求，上傳修改信息的文件。

<img src="/assets/ATeNbiEd0oxAPbxIsGlcHaR8nAg.png" src-width="1960" src-height="1018" align="center"/>

**工單審核**

- 批量修改列表頁展示上傳成功的數據
- 點擊「詳情」按鈕，或在列表左側批量勾選多條數據，可單次或批量審核修改的工單申請
- 審核通過後，客戶的開戶資料將同步更新

<img src="/assets/Z2tobZsHLoVQYZxl9SZc6Amgnpd.png" src-width="1960" src-height="990" align="center"/>

<img src="/assets/QGrrbVXMno17e4xKT60cuOoknZf.png" src-width="1972" src-height="1002" align="center"/>

<img src="/assets/Irr5bT8IcoGjBDxQvMicQN7jnwf.png" src-width="1962" src-height="1008" align="center"/>

### 開戶資料錄入

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>⚓</div>
<p> KYC &gt; 開戶資料 &gt;  添加開戶申請 功能鍵</p>
</div>

<img src="/assets/MfTzblN49oe1xRxuQMIcWtcqnfb.png" src-width="3798" src-height="812" align="center"/>

在開戶資料頁，點擊「添加開戶申請」，可直接線下完成開戶資料的提交

##### 第一步：選擇開戶類型

開戶類型分為 3 個步驟：選擇客戶/新建客戶、選擇客戶類型、選擇客戶國籍

選擇客戶/新建客戶 

選擇客戶類型，可選擇： 個人客戶 /聯名客戶 /企業客戶

選擇客戶國籍，系統支持 200 + 國籍

##### **第二步**：上傳身份證件

分為 3 種類型客戶：

1. 國籍：中國大陸 
    1. 中國大陸用戶，需上傳：中國大陸身份證 
    2. 是否持有香港身份證件：默認選擇否；如用戶選擇是，需引導用戶補充填寫香港證件資料

2. 國籍：中國香港 
    1. 中國香港用戶，需上傳：中國香港身份證及填寫對應資訊

3. 國籍：其他 
    1. 其他國籍用戶，需上傳：身份證件 + 護照 
    2. 是否持有香港身份證件：默認選擇否；如用戶選擇是，需引導用戶補充填寫香港證件資料；
    3. 如用戶選擇否，需上傳其他身份證
    <img src="/assets/USGxbv0LGoDII9xqZShcpN2Wn5N.png" src-width="3252" src-height="1822" align="center"/>

##### **第三步**：上傳地址證明

分為 2 種類型客戶：

1. 中國大陸國籍用戶
    1. 可使用身份證作為居住地址證明；
    2. 地址證明檔類型選擇：身份證，無需上傳居住地址證明；
    3. 地址證明檔類型選擇：

2. 其他
    1. 需上傳居住地址證明
    <img src="/assets/E60Zb1Kf9omNqdxV2NIcIhYbn7g.png" src-width="3252" src-height="1604" align="center"/>

##### **第四步**：填寫各類基礎信息

主要是包含 職業資訊、納稅資訊、電子郵箱等信息。其中，

納稅資訊，需填寫用戶納稅的國家/地區及納稅編號，最多支持填寫 10 個。包含以下字段： 納稅國家/地區  與 納稅人編號

電子郵箱：用戶用於接收結單、通知等通知。一個 App 的用戶郵箱唯一

填寫聯繫手機號，多個客戶可使用相同的聯繫手機號

##### **第五步**：填寫資產投資信息

<img src="/assets/Hv2mbZRgfovpUexgD60c9igRnLe.png" src-width="3258" src-height="1804" align="center"/>

##### **第六步**：合規資訊確認

<img src="/assets/IKtMbo4BOoTGj1xQQ6Bcs2u4nwg.png" src-width="3254" src-height="1806" align="center"/>

##### **第七步**：確認資訊

系統會按: 身份證件/個人基礎信息/職業信息/資產投資信息/合規信息確認/關聯賬戶信息 等區塊排列,將客戶資料展示出來,方便按確認填寫訊息

<img src="/assets/MMYIb7oMMo9mw6xGwlIckyJNnVg.png" src-width="3250" src-height="1576" align="center"/>

同時若有需要修正資料,可點擊區塊右上角的【編輯】,會跳轉該訊息面區域進行修改資料

<img src="/assets/EH4tbDobcoezA0xZPFicIpXNnce.png" src-width="3162" src-height="1142" align="center"/>

##### **第八步**：選擇帳戶類型、上傳開戶文件

上傳開戶文件及自定義文件： 

