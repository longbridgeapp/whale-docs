---
title: 16. App 操作问题
slug: BuYmwP261iyFTiknDAscRHaSndc
sidebar_position: 15
---


# 16. App 操作问题

## 16A. 问：App 持仓占比是如何计算？为什么可以超出 100％？

<b>答：</b>持仓占比计算公式为：持仓总值／总资产，因客户作融资买卖，持仓总市值有 32497 计算下来：

账户总持仓占比：32497／660 x 100% = 4923.78%   

＃2502：市值约 30360／660 ＝4600%
＃6911：市值约 2137／660 ＝ 323.78% 
<img src="/assets/CF2Jb0wfDocCdkxP5q7cIGotn2b.png" src-width="652" src-height="1134" align="center"/>
## 16B. 问：在后台已设置多家基金公司，为什么 App「市埸 &gt; 基金」页面只显示到 3 只基金？
<b>答：</b>后台更新了基金公司资料，在 App 没那么及时展示到，需要约 1 小时的缓存，刷新页面后会看到。如设置的基金公司没有基金，App 不会显示出来。

## 16C. 问：新股上市的盈余数据是如何计算？

<img src="/assets/RhmZbOdCboBpIUxrQH6ct16Pn2d.png" src-width="1305" src-height="884" align="center"/>

<b>答：</b>浮动盈亏：是暗盘买入的成本价对比现价计算；

当日盈亏：是发行价对比现价计算。

以上图为例子：＃茶百道的发行价为 $17.5，成本价是$15.1，现价是$12.36
浮动盈亏：（12.36 - 17.5）X 200（一手）= -1,028
当日盈亏：（12.36 - 15.1）X 200（一手） = -548

## 16D 问：客户主子账户在 App 如何操作？

<b>答：</b>客户如有主子账户，使用同一个登记电话登入到 App，登录后可以操作到所有主子账户作买卖。
资金调拨可以使用「资金划转」功能：「账户间资金划转」由主账户把资金调到第二个主账户或「主子账户资金划转」把资金调至其属下的子账户。
股票调拨可以使用「股票划转」功能：由主账户把持仓调到其属下的子账户。


> “主子帐户”和“股票划转”功能只有在客户帐户开了子帐户的情况下才会展示，否则是看不到的，因为这两个功能只是针对主子帐户之间的功能。 
“资金划转”是可以看的，因为它支持主主帐户之间的划转。

<div class="flex gap-3 columns-5" column-size="5">
<div class="w-[20%]" width-ratio="20">
<img src="/assets/Y6uQbkVuBotBlCxFa6Qc3Vy3njd.png" src-width="634" src-height="1334" align="center"/>
</div>
<div class="w-[20%]" width-ratio="20">
<img src="/assets/HIlabLo25oqyVTxe5ESceSWYn0g.png" src-width="642" src-height="1344" align="center"/>
</div>
<div class="w-[20%]" width-ratio="20">
<img src="/assets/Skj6bmdW4oClJnxOWJrcHqVJnaf.png" src-width="642" src-height="1338" align="center"/>
</div>
<div class="w-[18%]" width-ratio="18">
<img src="/assets/Qnz0bRSQFoMA1ZxkEMPcStC9nXc.png" src-width="590" src-height="1324" align="center"/>
</div>
<div class="w-[20%]" width-ratio="20">
<img src="/assets/RBPAbX4i4oI2aTxrXa2cEEzCnXg.png" src-width="638" src-height="1330" align="center"/>
</div>
</div>

## 16E 问：BMP 行情是什么？

答：港股基础报价 (BMP)：

1. 自选仅支持显示 20 只股票的手动刷新实时行情，超过的部分会显示延时 15 分钟行情。（自选股栏最近选择的 20 只股票展示实时行情，行情页面显示的是延迟行情）

2. 个股页支持手动刷新实时报价。

## 16F 问：客户有两个账户，App 为什么看不见「股票划转」功能？

答：“主子帐户”和“股票划转”功能只有在客户帐户开了子帐户的情况下才会展示，否则是看不到的。
“资金划转”支持到主主帐户之间的划转，在 App 可以查看到。

<img src="/assets/WJsibqUIoo8EPox4skwcXKVqnSd.png" src-width="716" src-height="1382" align="center"/>

## 16G 问：APP「盈亏分析」的「盈亏明细」在什么时间更新前一天的数据？

<b>答：</b>在大约早上 10:30 更新前一天的数据。

<img src="/assets/MfKubNAyRosAPIxDwBIcnKyvnVg.png" src-width="734" src-height="1464" align="center"/>

## 16H 问：如何更新 APP 内的 "帮助中心"的分类查找的内容？

<img src="/assets/XU6ZbZ7kDo4nydx7SZEcA5Hhnvb.png" src-width="618" src-height="1366" align="center"/>

<b>答：</b>在「帮助中心＞文章」点击「新建文章」添加场景问题，在文章底部勾选 "作为常见问题"。(见 16H 图一、图二)
之后在「文章分类」点击「创建分类」。（见 16H 图三) 
"slug" 可以自定义一个英文，如：港股交易规则值可以是【hk_trade_rule】之类（见 16H 图四)

> 「slug」用以快速识别该分类，可设置英文字和符号。

<img src="/assets/HAZbb50yMoqsGExIXamcpBkwnAc.png" src-width="2710" src-height="740" align="center"/>

<em>16H 图一</em>

<img src="/assets/OzHbbdIiXoNpAJxGpNWcROAhnpe.png" src-width="2416" src-height="1408" align="center"/>

<em>16H 图二</em>

<img src="/assets/QCB7bTiwpoHieqx1GfWcQwsEn4f.png" src-width="2708" src-height="662" align="center"/>

<em>16H 图三</em>

<img src="/assets/Lsb0bGYm2oWND6x278lcKUCynZc.png" src-width="2700" src-height="786" align="center"/>

<em>16H 图四</em>

## 16I 问：为什么内地客户使用 ios 不能用以下连结下载 LongPortApp？（https://longportapp.cn/en/download）

答：根据中国内地合规要求已下架。安卓客户可以到官网的连结下载安装包。IOS 客户需要把 App Store 切换成香港区，就可以下载。

## 16J 问：客户如何在 App 自行完成基金资产风险评估？

答：在 App 的「市场&gt;基金」页面点击「您的风险水平」可完成基金资产风险评估。

<img src="/assets/PbQZbawv7oR886xkR9QcO2wunBg.png" src-width="714" src-height="1426" align="center"/>

## 16K 问：Web Trade 和 APP 能否同时使用？

答：Web Trade 和 APP 可以同时使用。

## 16L 问：如何禁止客户在 APP 自动换汇？

答：有以下两个方法：

1. 在「业务参数设置」下「汇兑」的「换汇策略」停用「汇兑策略」。

<img src="/assets/SpJQbAGaBo0QX5xm6upcErsGndc.png" src-width="2842" src-height="1376" align="center"/>

1. 在「业务参数设置」下「汇兑」的「换汇策略」按「审批起点」，将「起始金额」设置为$0.01，所有换汇都需要审批。

<img src="/assets/SdfrbSvGaoVGSwxHS3Ycw2lhnye.png" src-width="2850" src-height="1388" align="center"/>

<img src="/assets/KZzqb4kMLoznqCxfTsWcogCHnth.png" src-width="2824" src-height="1364" align="center"/>

