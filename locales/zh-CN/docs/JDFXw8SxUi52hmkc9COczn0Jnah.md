---
title: 9. 公募／私募基金问题
slug: JDFXw8SxUi52hmkc9COczn0Jnah
sidebar_position: 8
---


# 9. 公募／私募基金问题

## 9A 问：为什么后台下基金订单不能撤单？

<b>答：</b>下单后可以马上撤单。如点击「获取订单」表示日切了，日切了过了截止时间就不能作撤单。

<img src="/assets/IEwrbveUGo53AcxD47tcWQtlndh.png" src-width="2848" src-height="1634" align="center"/>

<img src="/assets/SPr5bz4teoDas7xZsJRcheNrnTe.png" src-width="1352" src-height="1580" align="center"/>

## 9B 问：手工调账操作基金进出，会有什么限制？

<b>答：</b>公募基金手工调账，客户可在 APP 作赎回；

私募基金调账后，不能在 APP 赎回，需在后台／前台 wtt 落赎回订单。

## 9C 问：什么是 获取订单时间 和 自动回填时间？

<b>答：</b>获取订单时间就是日切时间；自动回填时间只对系统接了上手 API 的才有作用。接了的，上手会在自动回填时间返回回填数值；没有接的，就需要在后台手动输入数据回填。

## 9D 问：自动回填的时间如何输入？

<b>答：自动回填是针对有用 API 的场景</b>。不走 API 的，自动回填时间对租户不生效，可以跟获取订单时间一样。

<img src="/assets/ZXIDb0EeyodSJLx1F8kc7c1unhd.png" src-width="2502" src-height="596" align="center"/>

## 9E 问：公募基金 及 私募基金 如何操作回填？

<b>答：</b>确认申购份额／赎回金额需根据上手给的结单或交易确认资料填写，如没有的数值可输入 0。

<img src="/assets/SL0abxvkGodnFRxwswDc2khSnGg.png" src-width="2164" src-height="1198" align="center"/>

## 9F 问：为什么已上架的私募基金没有历史走势和单位净值？

<b>答：</b>私募基金没有自动更新机制，需在「基金管理 &gt; 私募基金 &gt; 净值表」页面手动更新单位净值后（见 9F 图一），在 App 的历史记录可查看（见 9F 图二）。

<img src="/assets/IaX0bfJBNoFOpDx251mcLltcnDf.png" src-width="2512" src-height="734" align="center"/>

<em>9F 图一</em>

<img src="/assets/CiitbN2CNoRlFAxUM9XcHrltnab.png" src-width="756" src-height="1469" align="center"/>

<em>9F 图二</em>

## 9G 问：如何更新基金的价格？

<b>答：</b>在「基金管理 &gt;  公募基金／私募基金 &gt; 净值表」页面内作更新价格。

## 9H 问：<b>PI 认证如何影响到认购公募／私募基金？</b>

<b>答：</b>公募基金：没有作 PI 限制，会以风险测评问卷限制认购基金。

      私募基金：PI 认证后先可以认购；

      前台 WTT 下单会提醒，客户不是 PI，但仍可为客户下单；

      后台 WBO 没有校验，可以为客户下单；

      App 的未作 PI 认购不能认购。          

## 9I 问：如何在 app 操作基金撤单？

<b>答：</b>在 APP 的「资产 - 基金 - 交易纪录 - 选择订单 - 撤单」（见下图）

<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[34%]" width-ratio="34">
<img src="/assets/GacPbwO4VooajnxcTJFcr5Glnjg.png" src-width="526" src-height="1114" align="center"/>

</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/PLSwbWloCotwYRxj91pc43R9ndb.png" src-width="619" src-height="1350"/>
</div>
<div class="w-[32%]" width-ratio="32">
<img src="/assets/LEUObiKvqoL7aMxTZ4jcAPvVnsb.png" src-width="639" src-height="1405"/>
</div>
</div>

## 9J 问：接了 API 上架的基金，系统没有自动进行日切，能如何处理？ 

<img src="/assets/C03Ub2wUIoVDu1xnBI3cg9Q8nrb.png" src-width="2510" src-height="932" align="center"/>

<b>答：</b>系统会在每天的 8:00-22:00，每隔 5 分钟检查是否到达基金日切时间。请修改日切时间至 8:00-22:00 之间的时间段。（见 9J 图一、图二）

> 自动回填的检测时间也是相同的时间段（8:00 - 22:00）。

<img src="/assets/CGLnby2T8opjzqxl6Fnck8EhnMh.png" src-width="2502" src-height="692" align="center"/>

<em>9J 图一</em>

<img src="/assets/MqZdbvUTJoP5iixFXubcMB87nNh.png" src-width="2170" src-height="1042" align="center"/>

<em>9J 图二</em>

## 9K 问：补回之前的基金净值，结单上会更新吗？

<b>答：</b>结单的基金净值生成是以自然日取值，即使修改历史基金净值也不会更新到。清算彻销重新生成的结单对过往记录不影响，仍然是取值该自然日前的基金净值。

> 例子说明：现在为 2 月 28 日，而基金净值的记录截取至 1 月 31 日。之后在 2 月 28 日更新之前的历史基金净值，重新生成的结单也是取值 1 月 31 日。修改历史基金净值重跑日终生成结单，也不会更新。

## 9L 问：如何不让私募基金在 APP 上展示？

答：不要把该私募基金新增到「APP 端列表」

<img src="/assets/LzEWbkeHUogLYyxDeapcMXVCnoh.png" src-width="2838" src-height="1594" align="center"/>

