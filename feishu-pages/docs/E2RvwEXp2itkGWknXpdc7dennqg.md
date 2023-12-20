---
title: 美股期權
slug: xxxxxxxxx
sidebar_position: 2
---


# 美股期權

# 適用場景

處理美股期權的公司行動操作 ,美股期權的公司行動處理是期權業務的一個環節。無論美股正股發生何種公司行動，對期權的變動都可以歸結為三種情況：

- 期權的名稱和代碼發生變化
- 期權的數量發生變化
- 期權的其他屬性（正股乘數、標的物價格等）發生變化

# 前置条件

無

# 操作说明

執行菜單：公司行動&gt;美股期權&gt;企業行動規則  Tab 頁籤

可以維護美股市場的相關公司行動

<img src="/assets/M6pUbhlK8oK7PMxrvh9cEsylnbe.png" src-width="3358" src-height="734" align="center"/>

若要新增一筆企業行動規則，要分三個步驟： 

第一：輸入標的代碼

<img src="/assets/Uj6Pbzj5DopeHyxXmNicO5ttnwf.png" src-width="2394" src-height="344" align="center"/>

第二：輸入行動規則

<img src="/assets/RcYUbDODqoioYNxcUMLcPycjnbf.png" src-width="2764" src-height="1204" align="center"/>

其中欄位說明如下:

<table>
<colgroup>
<col width="125"/>
<col width="145"/>
<col width="566"/>
</colgroup>
<tbody>
<tr>
<td><p>期權標的物 </p></td><td><p>Option Symbol </p></td><td><p>期權標的物代碼， 例如股票代碼發生變更，則期權標的物也對應發生變更 </p></td></tr>
<tr>
<td><p>持倉合約乘數 </p></td><td><p>Contract Multiplier </p></td><td><p>期權乘數。 新張數=舊張數* Contract Multiplier </p></td></tr>
<tr>
<td><p>新乘數 </p></td><td><p>New Multiplier </p></td><td><p>x行權時每張期權對應正股數 </p></td></tr>
<tr>
<td><p>生效日期 </p></td><td><p>Effective Date </p></td><td><p>規則生效日期 </p></td></tr>
<tr>
<td><p>行權價 </p></td><td><p>Stirke Price </p></td><td><p>新行權價，通過公式計算 ｛price｝*2 表示 新行權價=舊行權價 *2 ·<br/> 若行情同步Strike Divisor ，則行權價= ｛price｝/Strike Divisor ·</p></td></tr>
</tbody>
</table>

第三：進行對帳與執行

基本是依序執行三個步驟：

<img src="/assets/X0vxbRqxpoEOVyxk2c8coawonZc.png" src-width="1350" src-height="140" align="center"/>

<img src="/assets/OPrtbaZnJosDLmxZnM8ckZ2En3e.png" src-width="3294" src-height="502" align="center"/>

