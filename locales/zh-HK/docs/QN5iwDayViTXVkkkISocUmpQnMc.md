---
title: 證券取出
slug: QN5iwDayViTXVkkkISocUmpQnMc
sidebar_position: 1
---


# 證券取出

# 一、系統介紹

證券轉出功能是金融系統中的服務，允許投資者將其持有的證券從一個帳戶轉移到另一個帳戶，以實現資產靈活調動和管理。

Whale 系統包含了取出申請、取出明細、電子郵件通知券商等功能，流程支援了不同角色的審核要求，有效地了降低證券取出業務的風險。整體流程架構如下：

## 前置条件

無

# 二、操作说明

<div class="callout callout-bg-6 callout-border-6">
<div class='callout-emoji'>📍</div>
<p>菜單入口：證券管理 - 證券存入</p>
</div>

## 取出申請

證券存入申請為用戶方提出，申請的內容包含了券商資訊、帳戶資訊、證券詳情與備註 4 大部分。WHALE 使用者可以手動幫助客戶進行證券入倉并根據客戶提交的申請進行駁回、提交審批、通知券商等操作。

- 手工出倉

適用於使用者聯絡後台操作員進行手動轉出證券的場景，操作員需要依序填寫客戶的證券資訊、帳戶資訊以及證券的明細資訊。

<img src="/assets/KgOpbUPUNoRkDdxAVoCcEFmvnlb.png" src-width="2356" src-height="2457" align="center"/>

- 駁回（**可批量操作**）：若客戶遞交證券取出申請資料有誤或使用者反饋本次申請無效時，操作員可以進行【駁回】操作
- 通知券商：由於轉倉業務需要對方券商的配合，在實際操作過程中，為了能夠順利轉出，用戶通常會聯絡券商及時處理。此功能將提供郵件發送功能，並根據郵件發送的結果顯示給用戶是否已經通知了券商，以便於用戶進一步處理業務。
    - 選擇需要寄送郵件的券商機構，系統會自動帶出對方券商的郵件地址，操作員可檢查郵箱是否正確
    - 選擇目標券商下的涉及到的證券取出申請明細（已發送過的證券申請將被剔除）
    - 預覽郵件內容，確認無誤後點選發送
    - 至郵件發送記錄頁面中查看發送狀態

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[49%]" width-ratio="49">
<img src="/assets/F6e0bhWc7oe8ezxzBqRcn3rmn7e.png" src-width="3834" src-height="1856" align="center"/>
</div>
<div class="w-[49%]" width-ratio="49">
<img src="/assets/Eifvbkr5ioHxJDxTakXcuh1AnNg.png" src-width="3826" src-height="1856" align="center"/>
</div>
</div>

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/RujTbEgLRoLlBCxssmjcOpWjn4f.png" src-width="3820" src-height="1852" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/NetkbVfBTo92eOxDTURckXmGnec.png" src-width="3820" src-height="1832" align="center"/>
</div>
</div>

- 提交（**可批量操作**）：經過操作人員初步審查無誤後，可以將申請提交至下一節點的操作人員進行審核 - 出倉操作
- 編輯：若操作員在處理取出申請時，從客戶方得知券商已通知或未通知的信息，可以透過【編輯】按鈕進行修改通知狀態，以保證對方券商是否知曉需要處理證券轉倉的信息與實際情況相符

<img src="/assets/FByxbJLZxoCaGAxGktBcFR06nOc.png" src-width="3836" src-height="1854" align="center"/>

- 指標卡

若券商的證券取出業務量較大，可以透過系統的分類展示卡進行精細化作業，指標卡的左右排布反映了業務操作的先後順序，可以選擇的批次操作有：

<img src="/assets/YAXKbK0XUoQmwbx0KqhcSLPUnYf.png" src-width="3834" src-height="1786" align="center"/>

## 取出明細

由於一個取出申請下可能存在多筆證券明細記錄，具體操作出倉的審核人員需要針對每筆取出明細進行仔細核對，審核通過後方可出倉。

- 修改：若在處理證券明細時，發現用戶提交的某筆具體的明細記錄有問題，可在與客戶確認無誤後可以透過【編輯】按鈕進行修正
    - 修改的范围：託管商編號、子倉編號、證券明細數量、備註
    <img src="/assets/P9BKbhjiSoKdIaxPTm2cBy8DnTb.png" src-width="3782" src-height="1122" align="center"/>

- 修改轉出費用：證券明細在出倉前，使用者可以根據實際的業務場景選擇是否需要調整客戶的轉出費用，同時可以選擇將修改的資訊是否顯示給客戶

<img src="/assets/Ak2EbjeJzoPkMCxaIGzc4bQsnhg.png" src-width="3826" src-height="1524" align="center"/>

- 删除：若在處理證券明細時，用戶反映提交的某筆具體的明細記錄不再進行轉入，可以透過【删除】按鈕直接刪除目標明細記錄
- 生成 SI 指令：由於轉倉業務需要在 CCASS 裡填寫必要的 SI 信息，生成 SI 指令功能可以將這些必要的信息以文件的形式自動保存，供用戶進行上傳 CCASS，以免於手動在 CCASS 系統錄入。產生的 SI 指令也可以在「SI 指令清單」選單下進行詳情查看、匯出等操作

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/CAclbSkchoaOklx0IiMc7vuknQc.png" src-width="3782" src-height="1116" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/Uo1MbFI33ocoRnx46V8c78MYnhe.png" src-width="3818" src-height="1146" align="center"/>
</div>
</div>

- 編輯 SI 指令：若需要對已經產生的 SI 資訊進行修改，可以點選【編輯 SI 資訊】對目標欄位進行修正

<img src="/assets/JCAobst5wowepjxPq68cczZNnib.png" src-width="3818" src-height="1638" align="center"/>

- 處理-成功提交/失敗提交：若操作人員認定某個明細沒有問題，可以點選【處理】選擇【成功提交】，反之選擇【失敗提交】。
    - 處理完畢後，流程進行至下一節點，需要在工單中心進行審核，審核通過購，股票成功入倉

<img src="/assets/T5qfbLgGGokx0Hx5BE9cwbUnnpb.jpeg" src-width="3816" src-height="1468" align="center"/>

- 審批：處理結果提交後，操作列出現【審核】按鈕，點選可以召喚出工單審核頁面
    - 處理完畢後，流程進行至下一節點，需要在工單中心進行審核，審核通過購，股票成功入倉
    <img src="/assets/QYWwbWR23oGJl8xQUn7cgeconBg.png" src-width="3822" src-height="1864" align="center"/>

## 郵件發送記錄

用戶將目標存入申請通知券商後，相應的郵件記錄將會被保存，以用於後續進行問題追蹤。

<img src="/assets/IpOIb2cLEoilnAxOgr5cWZ26nVp.png" src-width="3830" src-height="1476" align="center"/>

# 三、FAQ

