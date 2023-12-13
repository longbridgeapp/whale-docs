---
title: 市場清算
slug: bomanager-market
sidebar_position: 1
---


# 市場清算

Whale 市場清算流程步驟：將每個市場進行下列流程操作

<table>
<colgroup>
<col width="124"/>
<col width="468"/>
<col width="153"/>
<col width="131"/>
</colgroup>
<tbody>
<tr>
<td><p>任務</p></td><td><p>任務说明</p></td><td><p>前置處理</p></td><td><p>是否分市場執行</p></td></tr>
<tr>
<td><p>日終數據同步</p></td><td><p>從前台拉取交易流水保存到後台<br/>包括開戶、交易、出入金等<br/>每次點擊分別觸發任務<br/>同步數據範圍為上一帳務日數據日切點 - 當日數據日切點的數據<br/>每次點擊分別觸發任務</p></td><td></td><td><p>分市場</p></td></tr>
<tr>
<td><p>清算前檢查</p></td><td><p>觸發 T0 交易對帳</p></td><td><p>導入對手方文件</p></td><td><p>分市場</p></td></tr>
<tr>
<td><p>清算计費</p></td><td><p>基於交易訂單，生成合約，生成收费帳單</p></td><td></td><td></td></tr>
<tr>
<td><p>清算入帳</p></td><td><p>於收費帳單進行扣款<br/>合約狀態由計算完成變成待交收</p></td><td><p>清算前檢查</p></td><td><p>分市場</p></td></tr>
<tr>
<td><p>清算交收</p></td><td><p>基于合约生成倉位數據、ATI/SI 等指令<br/>生成臨时的交易报表、持仓报表</p></td><td><p>持倉對帳、交易對帳</p></td><td><p>分市場</p></td></tr>
</tbody>
</table>

