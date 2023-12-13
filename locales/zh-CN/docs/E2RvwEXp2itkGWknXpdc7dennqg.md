---
title: 美股期权
slug: xxxxxxxxx
sidebar_position: 2
---


# 美股期权

# 适用场景

处理美股期权的公司行动操作 ,美股期权的公司行动处理是期权业务的一个环节。无论美股正股发生何种公司行动，对期权的变动都可以归结为三种情况：

- 期权的名称和代码发生变化
- 期权的数量发生变化
- 期权的其他属性（正股乘数、标的物价格等）发生变化

# 前置条件

无

# 操作说明

执行菜单：公司行动&gt;美股期权&gt;企业行动规则  Tab 页签

可以维护美股市场的相关公司行动

<img src="/assets/M6pUbhlK8oK7PMxrvh9cEsylnbe.png"/>

若要新增一笔企业行动规则，要分三个步骤： 

第一：输入标的代码

<img src="/assets/Uj6Pbzj5DopeHyxXmNicO5ttnwf.png"/>

第二：输入行动规则

<img src="/assets/RcYUbDODqoioYNxcUMLcPycjnbf.png"/>

其中栏位说明如下：

<table>
<colgroup>
<col width="125"/>
<col width="145"/>
<col width="566"/>
</colgroup>
<tbody>
<tr>
<td><p>期权标的物 </p></td><td><p>Option Symbol </p></td><td><p>期权标的物代码，例如股票代码发生变更，则期权标的物也对应发生变更 </p></td></tr>
<tr>
<td><p>持仓合约乘数 </p></td><td><p>Contract Multiplier </p></td><td><p>期权乘数。新张数=旧张数* Contract Multiplier </p></td></tr>
<tr>
<td><p>新乘数 </p></td><td><p>New Multiplier </p></td><td><p>x 行权时每张期权对应正股数 </p></td></tr>
<tr>
<td><p>生效日期 </p></td><td><p>Effective Date </p></td><td><p>规则生效日期 </p></td></tr>
<tr>
<td><p>行权价 </p></td><td><p>Stirke Price </p></td><td><p>新行权价，通过公式计算 ｛price｝*2 表示 新行权价=旧行权价 *2 ·<br/> 若行情同步 Strike Divisor，则行权价= ｛price｝/Strike Divisor ·</p></td></tr>
</tbody>
</table>

第三：进行对帐与执行

基本是依序执行三个步骤：

<img src="/assets/X0vxbRqxpoEOVyxk2c8coawonZc.png"/>

<img src="/assets/OPrtbaZnJosDLmxZnM8ckZ2En3e.png"/>

