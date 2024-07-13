---
title: 10. 新股认购问题
slug: JLIUwnaXviuhGKk7rzPcXB8XnWg
sidebar_position: 9
---


# 10. 新股认购问题

## 10A. 问：为什么申购新股要分不同渠道？

<b>答：</b>分不同渠道更容易进行 IPO 认购订单的融资管理及统计，例如，分别设置如下渠道：
1. 自有资金渠道
2. A 上手融资渠道
3. B 上手融资渠道

在订单的汇总中，通过不同渠道汇总认购金额，融资使用情况，便于系统自动化统计不同渠道的订单、融资情况。

<img src="/assets/QG00bYmqeoEL90x66C5cx0c3nWb.png" src-width="3612" src-height="592" align="center"/>

## 10B. 问：是否支持阶梯式认购收费？

<b>答：</b>现在不支持按照不同的认购股数进行阶梯收费。

## 10C. 问：对接了 FINI 平台的 API，如何操作中签？

<b>答：</b>若券商对接了 FINI 使用 API 做自动化 IPO，直接在中签时，选择：自动获取 FINI 中签结果<b>，</b>再点击下一步则可以预览中签结果，无需上传文件。

## 10D. 问：能否支持到国际配售？

<b>答：</b>新股的国际配售可以在后台操作，但不支持上市公司的配售。

在「新股认购 &gt; 港股国配」页面配置流程、扣款、中签跟新股 IPO 一致（见 10D 图一、图二）。
上手的中签文件需要用通用模版导入系统（见 10D 图三）。但是如果过了认购的时间就要用到手工调账处理。

<img src="/assets/N0uYbOezFo61ZVx78UPc2wzin2b.png" src-width="2506" src-height="854" align="center"/>

<em>10D 图一</em>

<img src="/assets/VLP2bUK8ooUSJvxC5VZcGGvpnwg.png" src-width="2498" src-height="928" align="center"/>

<em>10D 图二</em>

<img src="/assets/Afl9b7VsnobzEjxIPt7cDGwMnib.png" src-width="2508" src-height="1428" align="center"/>

<em>10D 图三</em>

## 10E. 问：扣款订单中选择的财务日期，会有如何影响？

<b>答：</b>这里的财务日期指这个扣款发生的行为记录。例如：5 月 10 日账户 A 扣了 100，财务日期选了 5 月 11 日，结单会在 5 月 11 日显示扣款。

<img src="/assets/P1V7bp5AlopBimxOnakcsM8zn3e.png" src-width="2680" src-height="902" align="center"/>

## 10F. 问：新股上市后撤回，重新招股的如何作认购设置？

<b>答：</b>在「新股认购 &gt; 全部」搜索重新招股的新股代号（见 10F 图一）点击「详情」，重新设置认购开始＆结束时间、费率、渠道等资料，选回「是」可认购。（见 10F 图二）

<img src="/assets/J8NWb5c5GoULAdxs9WFcim2HnPc.png" src-width="2554" src-height="662" align="center"/>

<em>10F 图一</em>

<img src="/assets/V8klbbqj7oMVKQxtutac62Uqnqb.png" src-width="2528" src-height="1552" align="center"/>

<em>10F 图二</em>

## 10G. 问：为什么找不到债券 #4701 作新股认购 ?

<b>答：</b>这个债券标的是有的，但是不支援认购，因不是指定证券经纪，所以新股认购没显示。

## 10H. 问：API 接了 FINI，如何取消新股认购订单？

<b>答：</b>在「新股认购 &gt; 认购记录」页面可以操作撤单（见 10H 图一）。如订单状态去到 "已扣款" 就不能作撤单或拒单，需要强制撤单要登录到 FINI 平台处理，但已过截止时间，FINI 也不能作撤单了。

<img src="/assets/B0DsbzhdooDmtrx8IkgcliJcnJg.png" src-width="2716" src-height="902" align="center"/>

<em>10H 图一</em>

## 10I. 问：IPO 扣款订单的账务日期会否影响计息？

<b>答：</b>IPO 扣款订单的账务日期用以记录扣款发生，跟计息天数没有关系。选了相关财务日会在结单上显示扣款记录。

<img src="/assets/JuPUbtOT3o8hUxxsiJRch6aGngc.png" src-width="2680" src-height="902" align="center"/>

## 10J 问：客户户口结余为 0，为什么申请 0 成本认购新股失败？

<b>答：</b>0 成本认购新股时有手续费要扣除，户口结余不能是 0。客户要存入足够手续费的资金或将 0 成本认购的手续费设为 0 才可以申请。

