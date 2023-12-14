---
title: 名詞釋義
slug: wbo-account-Definition
sidebar_position: 0
---


# 名詞釋義

## 帳**戶類別**

<table>
<colgroup>
<col width="124"/>
<col width="116"/>
<col width="485"/>
</colgroup>
<tbody>
<tr>
<td><p>術語 / 中文</p></td><td><p>術語 / 英文</p></td><td><p>說明</p></td></tr>
<tr>
<td><p>業務賬戶</p></td><td><p>BUSINESS</p></td><td><p><strong>可用不可提</strong><br/>一般的交易發生，都會先對業務賬戶做處理，業務賬戶的現金可用不可提</p></td></tr>
<tr>
<td><p>結算賬戶</p></td><td><p>SETTLEMENT</p></td><td><p><strong>可用可提</strong><br/>清結算交收後，會把業務賬戶的錢或券，交收（結轉）到結算賬戶</p></td></tr>
<tr>
<td><p>外部過渡戶</p></td><td><p>EXTERNAL</p></td><td><p><strong>不可用不可提</strong><br/>部分業務實際上遊已扣款，但沒有資產加進來，例如IPO先扣款，但沒有持倉，業務上為了使得用戶總資產不變，會把扣掉的錢額外加在外部過渡戶上</p></td></tr>
<tr>
<td><p>內部過渡戶</p></td><td><p>INTERNAL</p></td><td><p>暗盤買入時，先扣 INTERNAL賬戶的錢， 暗盤買入結轉後，INTERNAL賬戶的錢再加回來，再扣除business的錢</p></td></tr>
<tr>
<td><p>結算過渡戶</p></td><td><p>SETTLEMENT_INTERNAL</p></td><td><p>中臺的結算過渡戶，出掉一筆錢後會影響可用，在部分業務影響需要只影響可提（換匯、余額通申購中間狀態），會從結算過渡戶扣錢</p></td></tr>
<tr>
<td><p>換匯過渡戶</p></td><td><p>EXCHANGE</p></td><td><p>部分業務（換匯、余額通申購中間狀態），從結算過渡戶扣錢之後，需要在換匯過渡戶加錢，加完之後用戶總資產不變</p></td></tr>
</tbody>
</table>

## **資產變更類型**

<table>
<colgroup>
<col width="124"/>
<col width="601"/>
</colgroup>
<tbody>
<tr>
<td><p><strong>術語 / 中文</strong></p></td><td><p><strong>说明</strong></p></td></tr>
<tr>
<td><p>凍結</p></td><td><p>業務提交後，成功前，一般需要先凍結現金/證券，使得這部分資產不可被重復使用</p></td></tr>
<tr>
<td><p>解凍</p></td><td><p>業務結束後，會解凍</p></td></tr>
<tr>
<td><p>出帳</p></td><td><p>相當於對資產進行扣減</p></td></tr>
<tr>
<td><p>入帳</p></td><td><p>相當於資產進行增加</p></td></tr>
<tr>
<td><p>轉帳</p></td><td><p>主子賬戶間資金/持倉調撥</p></td></tr>
</tbody>
</table>

