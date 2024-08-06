---
title: 2. 出入金问题
slug: ZdfIws61ziGjJCkdHhkcwQ29ndf
sidebar_position: 1
---


# 2. 出入金问题

## 2A 问：出金／入金申请在后台已点击提交，想拒绝申请如何处理？

<b>答：</b>已作提交申请的，需要在工单中作拒绝（见 2A 图一）。加款状态更新为已驳回（见 2A 图二），如有需要可再操作一笔出／入金申请。

<img src="/assets/U6mgbVQJMoPq4hxt7PccOUQFnie.png" src-width="2150" src-height="1368" align="center"/>

<em>2A 图一</em>

<img src="/assets/DaUNb7Wl0ogp4DxL0DFcLegPnhf.png" src-width="2606" src-height="404" align="center"/>

<em>2A 图二</em>

## 2B 问：完成日终后，需要补回入金／出金流水如何处理？

<b>答：</b>完成日终需要先作清算撤销（见 2B 图一、二），不能跳过账务日，需一天一天撤回。 
补回流水后，在流水管理编辑日期，改回相应的流水日期（见 2B 图三），之后继续完成日终操作。

<img src="/assets/X4rNbbODZoe8J2xZnyYcBQQhnEb.png" src-width="2858" src-height="1418" align="center"/>

<em>2B 图一</em>

<img src="/assets/NmRob8vlcoKJAYxPXtZcEXBXniy.png" src-width="2390" src-height="1420" align="center"/>

<em>2B 图二</em>

<em>如不用重新计算利息／交收数据，资产类回撤可选不操作</em>

<img src="/assets/DSvWbZY21oVMelxWNRScazVsnFe.png" src-width="2392" src-height="972" align="center"/>

<em>2B 图三</em>

<em>选择「持仓流水／资金流水」页面，选择相应流水点击「编辑日期」</em>

## 2C 问：出金申请已作审批，如何驳回客户的出入／入金申请？

<b>答：</b>出金申请已作提交确认，在「打包待处理」页面未作审批的能操作拒绝。如已作审批的，点击「查看并更新结果」修改状态为失败，再操作一笔出金。

<img src="/assets/K0cHbz2OqoRvBxxQ8Hgc2XTunFd.png" src-width="2490" src-height="1194" align="center"/>

<img src="/assets/AzkMbURoko3BhJxhyhwcmvOwnSb.png" src-width="2166" src-height="1240" align="center"/>

## 2D 问：实际到账的入金金额跟客户输入的金额不同，如何处理？

<b>答：</b>在「款项管理&gt;入金&gt;入金申请」点击「直接入账」修正 "实收金额"。

<img src="/assets/Fo3xbY2TXo5M9BxLF1Tchr5OnVd.png" src-width="2380" src-height="696" align="center"/>

<img src="/assets/PoPMbzTqiojHP5xxIrZcX8NvnSf.png" src-width="2380" src-height="1426" align="center"/>

## 2E 问：主子账户间的资金可以互相调动？

<b>答：</b>客户在 App 可以操作资金划转（见 2E 图一至三）。
后台可在「资产账户 &gt; 账户间转账」操作（见 2E 图四），但不同客户的账户不能作调拨。

<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[35%]" width-ratio="35">
<img src="/assets/DgkkbrbodoJkVBxx9kPcFVjznbB.png" src-width="650" src-height="1250" align="center"/>
</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/D4JbbiYVjoYVXuxgwldcrB25nig.png" src-width="644" src-height="1336" align="center"/>
</div>
<div class="w-[30%]" width-ratio="30">
<img src="/assets/SPfQbxLmjoqe1LxtMBKcXselnNc.png" src-width="602" src-height="1340" align="center"/>
</div>
</div>

<em> 2E 图一                                                         2E 图二                                                   2E 图三</em>

<img src="/assets/IjdsbtsZcoyJ0uxVT2jcwigJnNb.png" src-width="2602" src-height="804" align="center"/>

<em>2E 图四</em>

## 2F 问：出入金、换汇能有通知吗？

<b>答：</b>在右上方齿轮的「消息设置 &gt; 订阅管理」页面（见 2F 图一、图二）点击「新建」。

可选“换汇、出入金需要审核”电邮通知（见 2F 图二）。剔选邮件方式通知并添加需要通知的人员／角色（见 2F 图三）。如客户透过 App 提交换汇的没有电邮提醒。

<img src="/assets/Rbu5b5MenoPc9MxctebcZbJYnxh.png" src-width="2386" src-height="374" align="center"/>

<em>2F 图一</em>

<img src="/assets/KnysbQGiboT6LexJWY7cb4BLnqb.png" src-width="2371" src-height="1098" align="center"/>

<em>2F 图二</em>

<img src="/assets/SmFtbTzmGo7XxjxEyFGcWzuKntd.png" src-width="2021" src-height="966" align="center"/>

<em>2F 图三</em>

<em>Webhook 为内部飞书通知没对外开放</em>

## 2G 问：为什么出金申请没作提交，会自动去到了"提现处理"？

<b>答：</b>客户透过 App 申请出金，而同一个银行卡有成功出金的记录，会去到"提现处理"的"待处理" 页面可直接操作直接出账（见 2G 图一）。
如 App 需要出金审批在「业务参数设置 &gt; 风控 &gt; 出金额规则」页面点击「新增」设置。（见 2G 图二至四）

<img src="/assets/QQUGbVKIhoEl18xWWoSctnhAnKs.png" src-width="2760" src-height="750" align="center"/>

<em>2G 图一</em>

<img src="/assets/UC21bq2uVorNlZxGmNVcMMOZntc.png" src-width="2760" src-height="1368" align="center"/>

<em>2G 图二</em>

<img src="/assets/Bb89bPm9DoeC5IxJfBWcD8B6nj3.png" src-width="2386" src-height="1352" align="center"/>

<em>2G 图三</em>

<img src="/assets/MpXUbQZBsoipcYxMfRmcULyen3d.png" src-width="2364" src-height="540" align="center"/>

<em>2G 图四</em>

## 2H 问：入金能做到入账后修改／撤销？

<b>答：</b>开通相关权限 key 后能操作，请见以下步骤。

> <b>入金流水修改审批</b>`atm.deposit_jour_update_approval`；<b>入金流水修改</b>`atm.deposit_jour_update_ticket`
<b>入金流水删除审批</b>`atm.deposit_jour_delete_approval`；<b>入金流水删除 </b>`atm.deposit_jour_delete_ticket`


已完成的入金可在当天作修改／删除（见 2H 图一），操作修改／删除后需要作审批（见 2H 图二、图三），入金记录会显示到相关流水（见 2H 图四）。

<img src="/assets/NfrDbOevGoxGOHxcOLNcuXuinVe.png" src-width="2866" src-height="524" align="center"/>

<em>2H 图一</em>

<img src="/assets/I8ZSb1EEvoeC1mxSZxcccRtNnYb.png" src-width="2518" src-height="418" align="center"/>

<em>2H 图二</em>

<img src="/assets/Q7cjbJbJeoPTARxKk4ucMuQHn0b.png" src-width="2516" src-height="984" align="center"/>

<em>2H 图三</em>

<img src="/assets/BFl7b77zxo9pzCx4CnIcFq0Snwe.png" src-width="2606" src-height="336" align="center"/>

<em>2H 图四</em>

## 2I 问：资产账户中现金明细的“待结算现金”T2 数值是如何计算？什么是 TN？

<b>答：</b>现金明细中资金的 T 是按照帐务日来计算；
如今天是星期五，下星期一港股是休市，而美股有交易交收。这里的港股 T2 便是指今天、下星期一和下星期二。
持仓明细中的 T 是按照交易日来计算。
TN 是：

1. Total（总计）是一个实时的数值，交易时段有交易而引致待交收金额的话，便会实时更新。

2. T0，T1，T2 是取昨天清算文件的待交收金额，不会随著当天交易而更新。

3. 如果当天有交易的话，Total（总计）便会更新。而 T0，T1，T2 不会更新，便会出现 T0＋T1＋T2 不等于 Total（总计）的情况，因此系统会有 TN 用来计算当中的差额。

4. 而当天完成 dayend 后，T0 数据便会处理没有了，当天的交易引致的待交收金额便会变成 T2。
所以 TN 是用于系统逻辑计算，用来展示 T0 和 Total（总计）的差额，当天完成日终后便没有了 TN。

<img src="/assets/GLiKbhDKWofh5oxSG9Acoecqnff.png" src-width="1166" src-height="1238" align="center"/>

<em>2I 图一</em>

## 2J 问：账户有美元结欠，但港币有余额，能否提取港币？

<b>答：</b>在「业务参数配置&gt;风控&gt;出金参数」中“系数 X 配置”点击「编辑」。把系数修改为 1，账户有美元结欠，且有购买力时﹐可以提取港币余额。

<img src="/assets/K5VqbXPJ7o0rCrxP2ylc8aO7nbf.png" src-width="2826" src-height="1438" align="center"/>

<img src="/assets/Z1yxbmDsDo3meqxPpmAcWTAnnFc.png" src-width="2206" src-height="1160" align="center"/>

## 2K 问：如何提早发放利息给客户？

<b>答：</b>「清算管理&gt;融资管理」选「存款利息 / 融资利息」，点击「提前结算」可以提早发放利息 / 收取融资利息结欠。

<img src="/assets/TfAwb55EdoSzjaxQikucRvT6nOe.png" src-width="2682" src-height="1412" align="center"/>

## 2L 问：如何修改结单上「其他资金出入明细」类型的名称？

答：在「资产账户&gt;业务码查询」选择相关业务类型点击「编辑」修改业务名称。

<img src="/assets/U6NybOIPQoVHjix7D90cMG15nef.png" src-width="1412" src-height="504" align="center"/>

<img src="/assets/YAwwbxqhKowyg4x4DN3cp72QnHc.png" src-width="2696" src-height="1156" align="center"/>

## 2M 问：存入资金以「手工调账」方式处理，而非「款项管理＞入金」操作，会有什么影响？

答：有以下三项影响

1. 会计分类账不同（视乎公司设置而定）
2. 结单上显示不同
3. 查看记录位置不同

