---
title: 日終任務
slug: G4ddwtkMnisaE2k9E7dcp5zRn4e
sidebar_position: 0
---


# 日終任務

## 適用場景

日終任務配置

執行每日日終任務操作

歷史任務查詢

## 前置條件

系統上線初期或日後新市場加入，需事先配置好日終任務 

- 請參考文檔：[日終任務配置操作](./NNidwNOtAiyKaokiG0rc3GEYnhR) 

完成市場規則配置

每日需要先確保完成其它相關事項才開始進行日終於

## 市場清算操作說明

### 對手方文件轉入（Broker Trade）

執行菜單：清算管理&gt;文件處理&gt;文件導入 

點擊導入文件，上傳文件

<img src="/assets/Z5WNbO3jDo3tMvx62zHcB2vunIo.png" src-width="2914" src-height="1528" align="center"/>

可通過列表區域的狀態字段關注 文檔導入和解析狀態

<img src="/assets/SfjebtiFyoK4tAxTiUdciDO6nnc.png" src-width="2910" src-height="1548" align="center"/>

例子：港股 CCASS 交易文件導入（CTF）

- 市場：選擇港股，文件類型選擇 CTF Trade File 後，上傳文檔
- 點擊記錄 ID 可下載上傳的原始檔案

<img src="/assets/SRuBbuBMcor4Nvx2P4dcLRqtnpe.png" src-width="2926" src-height="1562" align="center"/>

### 清算前準備

該功能的目的是檢查執行日終任務前是否完成了相關配置和当天業務操作

市場清算完成交易文件導入，確認當前賬務日期準確後，可點擊執行清算前準備

<img src="/assets/OXuLbW4NtoGHJBxjA3ocoyNInkb.png" src-width="2908" src-height="1540" align="center"/>

執行後，5 秒內會返回檢查結果。全部檢查都通過的，可以進行後續操作

檢查報錯的，點擊檢查項目右上角可查看檢查項目的規則和操作指引

<img src="/assets/P3Aybg8HdoLtfoxskrpc8bFTnFf.png" src-width="2906" src-height="1548" align="center"/>

部分檢查會提供異常詳情

<img src="/assets/Y2VkbISX8oxuDqxmbukcTdeon6d.png" src-width="2904" src-height="1540" align="center"/>

結算人員核對後，確認有問題的，在完成相關業務操作後，可點擊“重新執行”

<img src="/assets/GSwobyfSIouTHuxUDtvcLS1An5e.png" src-width="2906" src-height="1558" align="center"/>

結算人員核對後，檢查項目可以允許通過的，可點擊手動審核人工通過（需要複核）

<img src="/assets/GFBubzDGeoZj2DxEfercgTUjnYf.png" src-width="2904" src-height="1558" align="center"/>

複核人員可點擊手動審核（也可直接在工單審核），調出工單審核

<img src="/assets/AlJWb9lcGoBrubx42msca1wRndb.png" src-width="2920" src-height="1546" align="center"/>

<img src="/assets/M8Nqbh4kboss4nxcz5Fcr1YCnef.png" src-width="2920" src-height="1550" align="center"/>

結算人員核對後，因為業務流程有差別，需要永久關閉檢查項目的，可以聯繫客服處理

<img src="/assets/Lg0Eb4bxdoV34rxBMUEcGTChned.png" src-width="2926" src-height="1556" align="center"/>

當審核通過後，清算前準備就算完成（文字會提示：已手動通過）

<img src="/assets/GyLLbvKRroHteSxah0jcZFbAnpd.png" src-width="2926" src-height="1558" align="center"/>

清算前準備檢查項目

<table header_row="1">
<colgroup>
<col width="100"/>
<col width="147"/>
<col width="360"/>
<col width="169"/>
</colgroup>
<thead>
<tr>
<th><p>分類</p></th><th><p>檢查項目</p></th><th><p>對應 作業查詢檢查</p></th><th><p>檢查層級</p></th></tr>
</thead>
<tbody>
<tr>
<td><p>交易</p></td><td><p>交易文件導入</p></td><td><p>清算管理&gt;市場清算&gt;文件導入</p></td><td><p>市場清算</p></td></tr>
<tr>
<td></td><td><p>市場收市</p></td><td></td><td></td></tr>
<tr>
<td><p>期權</p></td><td><p>期權到期行權</p></td><td></td><td><p>市場清算</p></td></tr>
<tr>
<td><p>資產</p></td><td><p>資產調撥審核</p></td><td><p>資產帳戶&gt;資產調撥&gt;帳戶間轉帳</p></td><td><p>日終清算</p></td></tr>
<tr>
<td></td><td><p>調帳審核</p></td><td><p>資產帳戶&gt;資產調帳&gt;手工調帳</p></td><td><p>日終清算</p></td></tr>
<tr>
<td></td><td><p>資產凍結解凍審核</p></td><td><p>資產帳戶&gt;凍結解凍</p></td><td><p>日終清算</p></td></tr>
<tr>
<td><p>款項證劵</p></td><td><p>入金審核</p></td><td><p>款項管理&gt;入金&gt;入金審核 Tab</p></td><td><p>日終清算</p></td></tr>
<tr>
<td></td><td><p>出金審核</p></td><td><p>款項管理&gt;出金&gt;出金申請（未處理）Tab</p></td><td><p>日終清算</p></td></tr>
<tr>
<td></td><td><p>換匯審核</p></td><td><p>款項管理&gt;換匯&gt;客戶匯兌 Tab</p></td><td><p>日終清算</p></td></tr>
<tr>
<td></td><td><p>證劵取出審核</p></td><td><p>證劵管理&gt;證劵取出</p></td><td><p>日終清算</p></td></tr>
<tr>
<td></td><td><p>證劵存入審核</p></td><td><p>證劵管理&gt;證劵存入</p></td><td><p>日終清算</p></td></tr>
<tr>
<td><p>公司行動</p></td><td><p>行動登記</p></td><td><p>公司行動&gt;公司行動</p></td><td><p>日終清算</p></td></tr>
<tr>
<td></td><td><p>行動上報</p></td><td><p>公司行動&gt;公司行動</p></td><td><p>日終清算</p></td></tr>
<tr>
<td></td><td><p>行動執行</p></td><td><p>公司行動&gt;公司行動</p></td><td><p>日終清算</p></td></tr>
<tr>
<td></td><td><p>行動通知</p></td><td><p>公司行動&gt;公司行動</p></td><td><p>日終清算</p></td></tr>
<tr>
<td></td><td><p>將退市股票</p></td><td><p>公司行動&gt;公司行動</p></td><td><p>日終清算</p></td></tr>
<tr>
<td><p>新股</p></td><td><p>未公佈中籤操作</p></td><td><p>新股認購&gt;中籤處理&gt;結果同步 Tab</p></td><td><p>日終清算</p></td></tr>
<tr>
<td></td><td><p>未操作扣款</p></td><td><p>新股認購&gt;凍結收費&gt;待扣款 Tab</p></td><td><p>日終清算</p></td></tr>
<tr>
<td><p>結單</p></td><td><p>結單未發送</p></td><td><p>清算管理&gt;日終管理&gt;結單管理&gt;結單查詢</p></td><td><p>日終清算</p></td></tr>
<tr>
<td><p>系統數據</p></td><td><p>收盤價確認</p></td><td><p>清算管理&gt;市場清算&gt;收盤價管理</p></td><td><p>日終清算</p></td></tr>
<tr>
<td></td><td><p>匯率檢查</p></td><td><p>款項管理&gt;匯率管理&gt;參考匯率</p></td><td><p>市場清算、日終清算</p></td></tr>
<tr>
<td></td><td><p>市場日曆檢查</p></td><td><p>業務參數設置&gt;市場管理&gt;市場日曆 Tab</p></td><td><p>市場清算</p></td></tr>
<tr>
<td></td><td><p>市場規則配置</p></td><td><p>業務參數設置&gt;市場管理&gt;市場規則 Tab</p></td><td><p>市場清算</p></td></tr>
<tr>
<td></td><td><p>前台流水檢查</p></td><td><p>算前準備加“前台流水全部納入清算”的檢查項目</p></td><td><p>日終清算</p></td></tr>
</tbody>
</table>

### 市場清算**一鍵清算**

當清算前準備執行完畢後，就可以點選有上方【開始一鍵清算】功能鍵，系統會自動從第一步開始執行，一直到清算交收作業（當沒有錯誤發生時，系統會自動續執行下個作業）

注：若有需要可點選 '暫停一鍵清算'，但系統會等當時作業執行完畢後，才開始暫停下一動作（功能鍵會變灰）

<img src="/assets/G5dDbVQOiohE3VxmjQjcDnVJnjb.png" src-width="2916" src-height="1546" align="center"/>

**暫停一鍵清算**

如果要進行後台補單，或者修正合約的，可在數據同步直接點擊“暫停一鍵清算”，然後逐步執行

<img src="/assets/IBU5bJNLGoJ7upxI7adcZnsinJd.png" src-width="2922" src-height="1548" align="center"/>

中間若有作業執行錯誤，則一鍵清算將會暫停，並停在相關錯誤的作業程序上，用戶可以參考錯誤訊息提示進行後續修正處理

<img src="/assets/OzD3b7lUboZkDax10MucWx8Znmb.png" src-width="2908" src-height="1554" align="center"/>

此時可根據業務需要手動點選右側下方相關的作業操作，來檢查或修正紀錄或著 往下一鍵算操作，系統會自動執行下一個作業

注意：在一鍵清算過程中，可以依賴系統的一鍵清算操作（自動執行所有作業），也可以自行 點選作業自行操作

<img src="/assets/YqB6bZ1iooifYNxBapNcaeI9nEh.png" src-width="2922" src-height="1556" align="center"/>

#### 日終數據同步（Client Trade）

點擊執行後會同步數據系統（日切點前的出入金、交易、開戶等數據）

#### 清算前檢查（Trade Match）

在日終流程中點擊清算前檢查步驟會：自動觸發時同時執行 T0 交易對帳

交易對帳失敗的，可快速跳轉到交易對賬界面查詢結果

<img src="/assets/XYbabEQr0o0VF9xqMjdcVv4Tnog.png" src-width="2904" src-height="1544" align="center"/>

**對帳結果查詢**

可在**清算檢查 - 交易對賬**頁面分別查詢各市場的交易對帳

每次點擊檢查會生成最新的檢查結果，只需要維護最新的檢查結果

參考圖示如下：

<img src="/assets/NaePb9jQ2o02ifxJ7c9cSQW0ntf.png" src-width="3566" src-height="1732" align="center"/>

**特殊場景手動通過**

對手端檔導入錯誤：在檔導入介面，重新導入對手端檔，然後重新點擊清算前檢查 

本端訂單錯誤：增、刪、改前台訂單後，重新點擊清算前檢查 

按系統數據處理：在“檢查結果”中，將對應的檢查結果改為“通過”，然後重新點擊清算前檢查

<img src="/assets/D0w4beo5Bo37gPxbYbBcQkc7nPc.png" src-width="2920" src-height="1552" align="center"/>

#### 清算計費

依賴數據：前台交易訂單

在清算計費步驟會生成前台合約，狀態為待計費

該步驟暫停執行的，可以編輯前台訂單的收費

詳見：[合約管理](./AmY7wo5zviU2LakZvt9cAupxn0b) 的客戶合約操作說明

#### 清算入帳

執行完畢後：

注意 1：後台補單必須在該步驟之前操作完成

注意 2：清算撤銷（資產處理選擇不處理的）後，此步驟已經完成的，清算計費和清算入帳為空跑，按原資料處理

#### 清算交收

- 執行後：
    - 根據合約和調帳等其他流水進行倉位處理
    - 對應日期的合約變更為交收完成
    - 生成倉位數據
    - 生成 ATI 等指令
    - 生成臨時持倉，用於處理公司行動

## 日終清算操作說明

### 清算前準備

在正式執行日終清算前，需要先執行清算前準備

<img src="/assets/IpvXbbT4UouRrexorQbcT9bxnAQ.png" src-width="2492" src-height="1412" align="center"/>

<img src="/assets/MlrgblRS1o2rUtxWflocmEgYnNZ.png" src-width="2434" src-height="1418" align="center"/>

### 日終清算一鍵清算

當清算前準備執行完畢後，就可以點選有上方【開始一鍵清算】功能鍵

系統會自動從第一步開始執行，一直到結單生成步驟

結單後可通過報表或者結單進行檢查

<img src="/assets/NbyjbRLpOotSbCxWY8dcxcmTn6e.png" src-width="2912" src-height="1522" align="center"/>

#### 數據匯總

此操作前需要完成流水日期調整，證券組合費/融資利息的提前歸本、金額調整

此操作加工多個市場的交易數據、調帳數據、出入金、收盤價等文件，可重複點擊

全市場最後一次同步日終數據

全市場最後一次倉位處理，生成完整倉位數據

生成最終的交易報表、持倉報表

數據匯總後操作流水日期調整、收盤價，需要重新點擊數據匯總

有修改收盤價的，詳見[收盤價管理](./GMcTwEI0Ui6gilkBiDxcJUF8nDc) 

需要修改流水日期的，詳見[流水同步](./GRaEwPQSAibkSakNnX0coZhWnbh) 

#### 清算中檢查

內部流水對帳、業務操作檢查等（不斷擴充中）

此項為內部數據檢查，有異常的可聯繫客服，詳見[清算檢查](./CXfBwiBeAizZ79kghRKciesFnjb) 

檢查可重複觸發，排除問題後可重新觸發檢查

#### 資金清算

依賴數據：資金報表

前置配寘：計費管理融資利息

執行融資利息計算、證券組合費、融券計算等任務

融資利息需要調整的，詳見[融資管理](./VS7Twf1vqieePKkHxvEcDp1CnSh) 

注意：月底歸本计算任務也在本流程中

#### 清算後檢查

清算後檢查主要檢查資金清算步驟的執行狀況

有問題的詳見[清算檢查](./CXfBwiBeAizZ79kghRKciesFnjb) 

#### 結單生成

點擊結單生成後，可生成結單

結單已發送的，不能重新生成

結單查詢和發送詳見[結單管理](./XHP6wlEUTicGHtkGQ6dc0lyPnQc) 

#### 日切

執行完日切流程后，當前系統帳務日会切换到下一日

融資利息等的結算操作

進行經紀人分成計算

#### SI/ATI 指令導出

執行完日切流程后，後面根據交收時段，產生交收指令導出

指令導出詳見 [文件處理](./MaOTwGf6ziQLxEkvArNcmUCCnCe) 

