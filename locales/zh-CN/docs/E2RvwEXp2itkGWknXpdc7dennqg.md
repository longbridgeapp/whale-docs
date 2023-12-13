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

|   |   |   |
|---|---|---|
|期权标的物 |Option Symbol |期权标的物代码，例如股票代码发生变更，则期权标的物也对应发生变更 |
|持仓合约乘数 |Contract Multiplier |期权乘数。新张数=旧张数* Contract Multiplier |
|新乘数 |New Multiplier |x 行权时每张期权对应正股数 |
|生效日期 |Effective Date |规则生效日期 |
|行权价 |Stirke Price |新行权价，通过公式计算 ｛price｝*2 表示 新行权价=旧行权价 *2 ·<br/> 若行情同步 Strike Divisor，则行权价= ｛price｝/Strike Divisor ·|

第三：进行对帐与执行

基本是依序执行三个步骤：

<img src="/assets/X0vxbRqxpoEOVyxk2c8coawonZc.png"/>

<img src="/assets/OPrtbaZnJosDLmxZnM8ckZ2En3e.png"/>

