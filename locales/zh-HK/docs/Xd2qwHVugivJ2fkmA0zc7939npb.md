---
title: 資產帳戶
slug: Xd2qwHVugivJ2fkmA0zc7939npb
sidebar_position: 0
---


# 資產帳戶

## 資產定義

### 資產介紹

資產帳戶目前主要包含兩大部分：**資產帳本**和**資產基礎管理能力**。

資產帳本：詳細記錄所有客戶業務場景資產變更的流水記錄。帳本包含但不僅限於以下信息：

資產帳本提供的記帳能力可使任何資產發生變動後，不同賬戶的流水都能夠清晰準確，保障上下遊的業務資產對帳。

資產基礎管理能力：資產還提供了調帳、資產凍結/解凍、業務碼管理的基礎能力，輔助更加便捷地管理資產。

### 資產架構

<img src="/assets/Fh2Qb48emomrhTxta4CctwCvnfc.png" src-width="2438" src-height="1422" align="center"/>

## 核心場景及業務

詳細準確的資產流水記錄：提供所有資產流水的查詢，方便上下游業務數據對帳

便捷的資產處理功能：

## 名詞釋義

### 帳**戶類別**

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
<tr><td><p>外部過渡戶</p></td><td><p>EXTERNAL</p></td><td><p><strong>不可用不可提</strong><br/>部分業務實際上遊已扣款，但沒有資產加進來，例如 IPO 先扣款，但沒有持倉，業務上為了使得用戶總資產不變，會把扣掉的錢額外加在外部過渡戶上</p></td></tr>
<tr><td><p>內部過渡戶</p></td><td><p>INTERNAL</p></td><td><p>暗盤買入時，先扣 INTERNAL 賬戶的錢，暗盤買入結轉後，INTERNAL 賬戶的錢再加回來，再扣除 business 的錢</p></td></tr>
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
<tr><td><p>出帳</p></td><td><p>相當於對資產進行扣減</p></td></tr>
<tr><td><p>入帳</p></td><td><p>相當於資產進行增加</p></td></tr>
<tr><td><p>轉帳</p></td><td><p>主子賬戶間資金/持倉調撥</p></td></tr>
</tbody>
</table>

