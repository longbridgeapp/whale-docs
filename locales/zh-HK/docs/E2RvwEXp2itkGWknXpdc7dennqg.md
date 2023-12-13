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

<img src="/assets/M6pUbhlK8oK7PMxrvh9cEsylnbe.png"/>

若要新增一筆企業行動規則，要分三個步驟： 

第一：輸入標的代碼

<img src="/assets/Uj6Pbzj5DopeHyxXmNicO5ttnwf.png"/>

第二：輸入行動規則

<img src="/assets/RcYUbDODqoioYNxcUMLcPycjnbf.png"/>

其中欄位說明如下：

|   |   |   |
|---|---|---|
|期權標的物 |Option Symbol |期權標的物代碼，例如股票代碼發生變更，則期權標的物也對應發生變更 |
|持倉合約乘數 |Contract Multiplier |期權乘數。新張數=舊張數* Contract Multiplier |
|新乘數 |New Multiplier |x 行權時每張期權對應正股數 |
|生效日期 |Effective Date |規則生效日期 |
|行權價 |Stirke Price |新行權價，通過公式計算 ｛price｝*2 表示 新行權價=舊行權價 *2 ·<br/> 若行情同步 Strike Divisor，則行權價= ｛price｝/Strike Divisor ·|

第三：進行對帳與執行

基本是依序執行三個步驟：

<img src="/assets/X0vxbRqxpoEOVyxk2c8coawonZc.png"/>

<img src="/assets/OPrtbaZnJosDLmxZnM8ckZ2En3e.png"/>

