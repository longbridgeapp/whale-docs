---
title: 常见问题
slug: YLQ8wrjDgizykFkIP9ocQ000nLf
sidebar_position: 3
---


# 常见问题

## 多市场清算问题

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>港美股多市场如何操作日终</p>
</div>

配置两个市场清算，美股市场设置为隔夜市场

每天早上执行上日的美股市场清算，下午执行港股市场清算以及日终清算

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>港美股的结单如何分别生成</p>
</div>

港美股的使用同一个账户进行交易。所以结单是统一生成的，不支持分市场生成

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>港、美股时区不一致，怎么解决</p>
</div>

在市场管理中将美股市场配置为隔夜市场

则在 28 日清算中会处理 28 日的港股交易、27 日（美国时区）的美股交易

## 费用配置问题

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>如何新增费用，什么是收费场景</p>
</div>

费用由技术人员直接添加，券商可基于费用添加收费场景

场景场景是计费配置的基础元素，代表这个费用在系统中是否被正式启用。系统基于收费场景设置了一些便捷功能

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>如何修改交易的费用</p>
</div>

当天交易在清算计费步骤后，可编辑费用。如果已经日切的，需要使用合约修正功能，或者直接调账

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>修改费用配置后，何时生效；怎么判断是否生效</p>
</div>

最快 15 分钟生效

可以在客户计费查询页面（路径：业务参数设置 - 计费管理 - 客户计费查询），此页面查询的数据为最新数据

<img src="/assets/BMX0bOQ0fovYcpxJuZIcZMDfnWf.png" src-width="3578" src-height="1798" align="center"/>

<img src="/assets/RKcFbqlRVoKvxWxsNKqcndfan6d.png" src-width="3578" src-height="1798" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>某一个客户，针对 WTT 下单的渠道想要收取更高的费用，如何处理</p>
</div>

如果是只想针对某一个客户设置，在**客户计费**（路径：计费管理 - 客户计费）页面添加客户计费。普通收费设置为标准费率，同时添加 WTT 的特殊收费并设置相应费率

如果是只想针对某一个客户组设置，在**客户组计费**（路径：计费管理 - 客户组计费）页面的普通客户组添加计费。普通收费设置为标准费率，同时添加 WTT 的特殊收费并设置相应费率

如果是只想针对全部客户，在**客户组计费**（路径：计费管理 - 客户组计费）页面的全**局客户组**添加计费。普通收费设置为标准费率，同时添加 WTT 的特殊收费并设置相应费率

<img src="/assets/U8BNbbktGocitjxcKxHcEbVRnGV.png" src-width="3578" src-height="1798" align="center"/>

## 日切点问题

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>港股半日市如何提前日切</p>
</div>

在下午 2 点后先操作提前日切，再操作日终。详见台风天处理的提前日切部分操作

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>可否在日切点前进行清算</p>
</div>

可以，但是必须在行情文件、费率文件到位后进行。在操作前必须操作提前日切

<img src="/assets/W6bxbB4cLofNx4xg9sec8tyrn4b.png" src-width="3578" src-height="1798" align="center"/>

## 持仓对账

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>持仓对账任务是如何触发的？</p>
</div>

文件类型标记为触发持仓对账的文件，在导入后可自动触发持仓对账

注意如果是 OB 模式，当日就要触发持仓对账的，请在清算交收后再导入持仓文件

<img src="/assets/Y5fSblZ1yoJWKQx1LTgcdWiun6d.png" src-width="3572" src-height="1662" align="center"/>

未支持自动触发持仓对账，或者需要重新发起持仓对账的，可在持仓对账页面点击重新对账

<img src="/assets/PxNVbljWwoa5CIxevcLcxRUmnnc.png" src-width="3572" src-height="1662" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>非交易日是否需要发起持仓对账</p>
</div>

不需要，系统也不支持发起持仓对账

<img src="/assets/Z89sb2kk0o0SpIxN38NcnEeNnXf.png" src-width="3572" src-height="1662" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>持仓对账不平后，如果进行确认</p>
</div>

根据不平账明细，查找是否有漏做的转仓、公司行动等操作

<img src="/assets/MGCFbS81Qo8jVMxwT0scnmR2nGf.png" src-width="3572" src-height="1662" align="center"/>

逐项确认完毕后，在检查结果页面点击通过

<img src="/assets/BomSbi9Ico3y5uxXrSsc8vPJnye.png" src-width="3572" src-height="1662" align="center"/>

<img src="/assets/LjYYbzjHUoZpmvxZ7KUceRBGnxd.png" src-width="3572" src-height="1662" align="center"/>

<img src="/assets/MRmab9eGIoBJMcxGrobcbHtAnVc.png" src-width="3572" src-height="1662" align="center"/>

