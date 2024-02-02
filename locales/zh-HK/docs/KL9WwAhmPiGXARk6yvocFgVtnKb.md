---
title: 出金
slug: KL9WwAhmPiGXARk6yvocFgVtnKb
sidebar_position: 1
---


# 出金

# 一、系統介紹

出金功能是指投資者從其證券帳戶中提取資金的操作。這個功能允許投資者將其證券帳戶中的資金轉移到其銀行帳戶或其他指定的帳戶中。

Whale 系統包含了處理出金申請、提現處理、對帳、單獨處理異常出金、出金記錄查詢等功能，由於監理與風控需求，系統的功能設計具備多角色、流程化的特色，在兼顧出金效率的同時，同步降低了資金風險。

整體業務流程如下：

<img src="/assets/HXkub6RYroZ02Dxu8HscFwVynVh.png" src-width="2146" src-height="256" align="center"/>

## 前置条件

無

# 二、操作說明

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>📍</div>
<p>菜單入口：款項管理 - 出金</p>
</div>

## 出金申請

出金申請為用戶方提出，申請的內容包含了幣種、申請金額、收款銀行卡與備註 4 大部分。WHALE 使用者可以手動幫助客戶進行證券入倉并根據客戶提交的申請進行駁回、提交審批等操作。

- 手工提現

適用於使用者聯絡後台操作員進行手動出金的場景，操作員需要依序填寫客戶的幣種、申請金額、出金手續費、收款銀行卡、備註資訊。如果客戶有出金的證明也可以上傳至系統。

<img src="/assets/ZRzCbSy2cobiO8xyckGc0WENnef.png" src-width="1192" src-height="2434" align="center"/>

- 駁回（**可批量操作）**：若客戶遞交的出金申請資料有誤或使用者反饋本次申請無效時，操作員可以進行【駁回】操作
- 删除：若客戶遞交的出金申請資料有誤或使用者反饋本次申請無效時，操作員也可以透過【删除】按鈕直接刪除目標記錄
- 修改：若在提交出金申請前，發現客戶遞交的某筆具出金申請有問題，可在與客戶確認無誤後可以透過【編輯】按鈕進行修正，修改後需進行工單審批，審批通過後修改內容生效。
    - 修改的范围：申請金額、出金手續費、收款銀行卡、備註、憑證（重新上傳）

<img src="/assets/Rs1fb06S9oIPcwxpduuc538Jnjh.png" src-width="3824" src-height="1418" align="center"/>

<img src="/assets/J15obzTgcoIJgCxCdMac3Nqtn4d.png" src-width="3322" src-height="1674" align="center"/>

- 提交（**可批量操作**）：經過操作人員初步審查無誤後，可以將申請提交至下一節點的操作人員進行審核 - 提現

操作

## 提現處理

在初審人員提交出金申請後，複審操作人員需要進行提現處理。提現處理提供了 2 種方式：直接出帳與打包提審。其中：

<table>
<colgroup>
<col width="155"/>
<col width="598"/>
</colgroup>
<tbody>
<tr><td><p>出金方式</p></td><td><p>適用場景</p></td></tr>
<tr><td><p>直接出帳</p></td><td><p>出金的記錄較少，且需要快速進行出金</p></td></tr>
<tr><td><p>打包提審</p></td><td><p>出金的記錄較多，需要對某一時段或某一特定的客戶或其他需要進行集中處理出金的情形</p></td></tr>
</tbody>
</table>

- 直接出账
    - 選擇目標記錄後，點選操作列的【直接出帳】
    <img src="/assets/ILdgbflgAoCa1cxWwEHcg3IUnIe.png" src-width="3826" src-height="1024"/>
    - 在彈窗中輸入銀行名稱、銀行帳戶、渠道等信息，並在出帳明細中可選擇是否補充銀行流水信息
    <img src="/assets/YPnebbkl3oUe8excIL6ccjEXnRh.png" src-width="1674" src-height="1748" align="center"/>
    - 提交審核後，記錄流轉至「直接出帳待處理」頁面，審核者需進行工單審批，審核通過後，完成出帳
    <img src="/assets/LPmzb6JqeoOdTHxtts7c44Uinqb.png" src-width="3810" src-height="1860"/>

- 打包提審
    - 選擇目標記錄後，點選批次操作行的【打包提審】，如果在打包後需要進行移除部分明細記錄，可以在彈跳窗內進行操作，填好出金的銀行資訊以及渠道資訊後，該批進入審核流程
    <img src="/assets/X5i5bhWzFooi44x4E8KcTHGpnHb.png" src-width="3818" src-height="1536" align="center"/>
    <img src="/assets/QD4qbupfWo7B1zxJK1Qc2EkZnKg.png" src-width="3832" src-height="1848" align="center"/>
    - 提交審核後，記錄流轉至「打包待處理」頁面，審核者需進行工單審批，審核通過後，完成出帳
    <img src="/assets/BXf1bDshuoc31OxxOXmc2stlnMd.png" src-width="3830" src-height="1146" align="center"/>
    <img src="/assets/ZDPebIQEXo7srRx5MWmckQ2En0d.png" src-width="3826" src-height="1826" align="center"/>
    - 註：由於出金的數量與渠道限制，部分出金管道需要人工更新出金的狀態，用戶需要點選【檢視並更新結果】進入至詳情頁面進行手動更新（可批量更新）
    <img src="/assets/H1RebDwAmoNqhrxR8lzcmtTgnVe.png" src-width="3910" src-height="1942" align="center"/>
    - 完成出帳後，可將出金文件下載至電腦本地留存

<img src="/assets/Ly9HbxAquoi3e9xQFoOcstz2nqg.png" src-width="3836" src-height="1826" align="center"/>

- 指標卡

若出金業務量較大，可以透過系統的分類展示卡進行精細化作業，指標卡的左右排布反映了業務操作的先後順序

<img src="/assets/IGX6bydA2ovepwxdQipcpoLcnYf.png" src-width="3830" src-height="1268" align="center"/>

## 出金對帳

為了保障資金流水的準確性，業務中需要將銀行的流水與系統中的出金記錄進行比對，降低資金流失的風險。銀行流水的來源有 2 種：①API 對接（自動產生）、②手動導入。

- 對帳：用戶可以選擇目標期間的銀行流水進行刷新，系統將自動匹配銀行流水與系統的出金記錄，對帳完成後，可以關注清單中的「對帳結果」列，如果不一致，需要進一步追蹤處理。

<img src="/assets/SrZKb3lDJolCNkxgy9Tcqc0GnIe.png" src-width="3826" src-height="1790" align="center"/>

<img src="/assets/UpWQbZ5E4ozhusxwyrOccsBmnye.png" src-width="3818" src-height="1808" align="center"/>

## 異常出金

若出金申請在提現與對帳流程發現了異常，可在異常出金頁面進行處理（**可批量操作**）。系統提供了 4 種處理方式：

<img src="/assets/ZQ5nbh5m9oOkIQxGt7wcMU9knQb.png" src-width="3826" src-height="1788" align="center"/>

- 選擇了具體的處理方式後，記錄流轉只待審核頁面，業務人員需要再次複核處理結果，通過後異常出金記錄處理完畢

<img src="/assets/GhjJb7pz0oLXk9xuLu5cULxgn4d.png" src-width="3832" src-height="1312" align="center"/>

## 出金記錄

出金記錄頁面記錄出金的全流程狀態，使用者可隨時進行查詢、匯出等操作

<img src="/assets/HhZ0b5k6Vo6kVtx4DpRcD9YCnIf.png" src-width="3816" src-height="1854" align="center"/>

# 三、FAQ

Q：異常出金記錄的來源是什麼？

A：由於出金的記錄與銀行的流水不一致或或出金提交銀行被銀行拒絕等原因導致，原因可能是出入金方式、觸發了 AML（反洗錢）規則等，具體原因需要聯絡銀行方。

Q：

A：

Q：

A：

Q：

A：

Q：

A：

