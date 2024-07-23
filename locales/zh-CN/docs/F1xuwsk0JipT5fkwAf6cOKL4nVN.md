---
title: 12. 报表问题
slug: F1xuwsk0JipT5fkwAf6cOKL4nVN
sidebar_position: 11
---


# 12. 报表问题

## 常用报表类型：

<table>
<colgroup>
<col width="208"/>
<col width="612"/>
</colgroup>
<tbody>
<tr><td><p>资金报表</p></td><td><p> FDR017 - Cash Movement In-Out Report By CCY（实时报表）</p></td></tr>
<tr><td><p>股票报表</p></td><td><p>SDR008 - 1  Stock Movement In-Out Report</p></td></tr>
<tr><td><p>待交收（T＋1／T＋1 以上）<br/>账面市值＆持仓报表</p></td><td><p>SDR004 - Client Stock Location Report (By Stock)</p></td></tr>
<tr><td><p>收费详细报表</p></td><td><p>按市埸选 SDR018 - Bargain Detail Report-HK／SDR018-1 - Bargain Detail Report-US</p></td></tr>
<tr><td><p>新股认购／费用明细</p></td><td><p>SDR028 - IPO Detail Report 需要搜寻新股代码</p></td></tr>
<tr><td><p>交易报表</p></td><td><p>TDR001-1 查到订单拒绝的原因</p></td></tr>
</tbody>
</table>

## 12A 问：当天报表的数据什么时间生成？

<b>答：</b>需要完成当天的日终后报表会生成数据。
一些实时的报表不用待日终完成，在「报表打印」页面会提示那些是实时报表。

<img src="/assets/Owvpbv3UXofcY1xyc9ociMxvnXd.png" src-width="1790" src-height="780" align="center"/>

## 12B 问：SDR070 - OTCR report 是用作什么申报？

<b>答：</b>SDR070 - OTCR report 用作申报实物股票转出及转入。不收印花税的公司行动不会在报表上显示，现金要约的会作申报。可导出 excel 上传到交易所。

## 12C 问：在场外证券交易汇报制度（OTCR）下，现金要约等企业行动是否须予汇报？

<b>答：</b>如企业行动不涉及须征收印花税的交易（例如新股发行、公开招股、供股及私有化等）或为须向联交所汇报的交易（例如由交易所参与者进行的现有股份配售），则该等企业行动不属于场外证券交易。因此，在场外证券交易汇报制度下，与此等企业行动有关的股份转移无须予以汇报。 

另一方面，若相关受规管中介人（不论是作为主事人或代理人）进行就现金要约（此乃场外证券交易）而作出的股份转移，该相关受规管中介人便须根据场外证券交易汇报制度就该股份转移予以汇报。在这情况下，该相关受规管中介人须在股份转移日（即相关受规管中介人知悉已接纳的要约获得结算当日，而该日亦为在场外证券交易汇报制度下须予汇报的股份交易日期）之后的三个香港交易日内，根据场外证券交易汇报制度向证监会汇报。

## 12D 问：SDR025 - Stock Reconciliation Report 显示的任务结果 Successful Check／Manually Confirmed／ Manually Unrecognized 是什么意思？

<b>答：</b>SDR025 的任务结果对应「清算管理 &gt; 清算检查 &gt; 检查结果」页面的任务结果栏位。
- 检查通过，Successful Check；
- 检查失败，点击了手动通过的 - Manually Confirmed；
- 检查失败，未手动通过的 - Manually Unrecognized。

<img src="/assets/Yuv6bFgCAos4RCxvmYjcU7MbnUn.png" src-width="2074" src-height="850" align="center"/>

## 12E 问：为何交易报表 TDR001-1 Daily Client Order Report By Client 的市价单价格跟股票现价相差那么多？

<b>答：</b>市价单非交易所订单，会以对手方的价格档位下特别限价单（SLO）。因为成交价格不确定，防止穿仓，所以做了 20% （1.2 倍）冻结资金的保护。

## 12F 问：合规报表 IDR020 Re-activation Of Dormant Account 显示什么客户数据？

<b>答：</b>报表显示上次成交记录超过 180 日的客户，新客户以开户日期计算。报表不会判断客户的激活状态。

## 12G 问：SDR018 - Bargain Detail Report 类别的报表什么时间能看到当天的交易数据？

<b>答：</b>最快在日终任务完成「清算入账」，可以在 SDR018 报表查看当天的交易佣金资料。

> 美股的可以查看 SDR018-1 - Bargain Detail Report-US。

<img src="/assets/RxQzbH5oqoULV1xI0RwcbNTvnDe.png" src-width="2246" src-height="1486" align="center"/>

## 12H 问：系统对虚拟交易、操控价格、内幕交易会有监察警报吗？

<b>答：</b>可使用以下报表来人工判断有没有可疑交易。

IDR018 - Matched Trades Wash Trades

IDR026 - The Proportion Of Customer Transaction Volume

IDR027 - Deliberately Push Up Or Down The Closing Price

IDR019 - Suspected Order Activities Report

## 12I 问：如何导出高风险客户的报告？

答：在 CDR001 - Client Master Listing Report 的「自定义列表」选择「风险承受能力」点击「保存」。
导出 Excel 后，在「风险承受能力」栏位作筛选。

<img src="/assets/TkITbLn4NohreAxZEzqc2ZcVnoc.png" src-width="2826" src-height="1600" align="center"/>

<img src="/assets/XDVibeH3JoKYWGxUfCXcrKwqn7b.png" src-width="2844" src-height="1618" align="center"/>

<img src="/assets/YOMzbY3RKoOwsSxJ7Kbcxwainhb.png" src-width="2846" src-height="1468" align="center"/>

## 12J 问：如何导出客户股票集中度（Stock Concentration）的历史数据？

答：报表 RDR010 - Concentration Risk 包含到一周的数据。如需要先前的历史数据可从 SDR003 Client Stock Holding Report(By Stock) 取得客户每天的持仓数值，再按港交所的股票发行市值，手工计算股票集中度。

<img src="/assets/DIunbYmVZoH8Zpx5tGJcCCTNnAh.png" src-width="2850" src-height="1346" align="center"/>

