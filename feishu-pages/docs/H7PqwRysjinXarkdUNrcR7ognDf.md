---
title: 快速上手
slug: H7PqwRysjinXarkdUNrcR7ognDf
sidebar_position: 1
---


# 快速上手

# 概述

WHALE資產賬戶主要用於查詢資產流水，並處理客戶資產，含資產的凍結解凍、調賬、賬戶間資產調撥等。

# 快速上手

您需要獲取以下授權後方可正常使用系統功能

<table header_row="1">
<colgroup>
<col width="380"/>
<col width="346"/>
</colgroup>
<thead>
<tr><th><p>權限名稱</p></th><th><p>權限說明</p></th></tr>
</thead>
<tbody>
<tr><td><p>PortfolioFull<br/>管理賬户、凍結/解凍、調賬、資產調撥、業務碼的權限</p></td><td><p>資產賬戶下所有功能的全部權限</p></td></tr>
</tbody>
</table>

## 核心場景及業務

1. 詳細準確的資產流水：提供所有資產流水的查詢，方便上下游業務數據對賬
2. 便捷的資產處理功能：
    1. 提供臨時對業務賬戶資產調增/調減的臨時調賬功能，幫助及時處理客戶盤中問題
    2. 提供手工調整結算賬戶資產的能力，方便處理賬戶資產異常問題
    3. 提供賬戶間的資產劃撥能力，高效分配主子賬戶資產
    4. 靈活的資產賬戶操作功能：遇特定風險或業務狀況時，支持手動凍結/解凍對應客戶資產賬戶的金額或數量
    5. 客戶端流水明細自定義：根據業務個性化需求，支持自定義修改客戶端展示的流水業務名稱

## 名詞釋義

### 賬**戶類別**

<table header_column="1" header_row="1">
<colgroup>
<col width="124"/>
<col width="116"/>
<col width="485"/>
</colgroup>
<thead>
<tr><th><p>術語 / 中文</p></th><th><p>術語 / 英文</p></th><th><p>說明</p></th></tr>
</thead>
<tbody>
<tr><td><p>業務賬戶</p></td><td><p>BUSINESS</p></td><td><p><strong>可用不可提</strong><br/>一般的交易發生，都會先對業務賬戶做處理，業務賬戶的現金可用不可提</p></td></tr>
<tr><td><p>結算賬戶</p></td><td><p>SETTLEMENT</p></td><td><p><strong>可用可提</strong><br/>清結算交收後，會把業務賬戶的錢或券，交收（結轉）到結算賬戶</p></td></tr>
<tr><td><p>外部過渡戶</p></td><td><p>EXTERNAL</p></td><td><p><strong>不可用不可提</strong><br/>部分業務實際上遊已扣款，但沒有資產加進來，例如IPO先扣款，但沒有持倉，業務上為了使得用戶總資產不變，會把扣掉的錢額外加在外部過渡戶上</p></td></tr>
<tr><td><p>內部過渡戶</p></td><td><p>INTERNAL</p></td><td><p>暗盤買入時，先扣 INTERNAL賬戶的錢， 暗盤買入結轉後，INTERNAL賬戶的錢再加回來，再扣除business的錢</p></td></tr>
<tr><td><p>結算過渡戶</p></td><td><p>SETTLEMENT_INTERNAL</p></td><td><p>中臺的結算過渡戶，出掉一筆錢後會影響可用，在部分業務影響需要只影響可提（換匯、余額通申購中間狀態），會從結算過渡戶扣錢</p></td></tr>
<tr><td><p>換匯過渡戶</p></td><td><p>EXCHANGE</p></td><td><p>部分業務（換匯、余額通申購中間狀態），從結算過渡戶扣錢之後，需要在換匯過渡戶加錢，加完之後用戶總資產不變</p></td></tr>
</tbody>
</table>

### **資產變更類型**

<table header_column="1" header_row="1">
<colgroup>
<col width="124"/>
<col width="601"/>
</colgroup>
<thead>
<tr><th><p><strong>術語 / 中文</strong></p></th><th><p><strong>说明</strong></p></th></tr>
</thead>
<tbody>
<tr><td><p>凍結</p></td><td><p>業務提交後，成功前，一般需要先凍結現金/證券，使得這部分資產不可被重復使用</p></td></tr>
<tr><td><p>解凍</p></td><td><p>業務結束後，會解凍</p></td></tr>
<tr><td><p>出賬</p></td><td><p>相當於對資產進行扣減</p></td></tr>
<tr><td><p>入賬</p></td><td><p>相當於資產進行增加</p></td></tr>
<tr><td><p>轉賬</p></td><td><p>主子賬戶間資金/持倉調撥</p></td></tr>
</tbody>
</table>

