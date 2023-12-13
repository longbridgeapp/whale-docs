---
title: Margin call
slug: UKp2wGjASi8YJOkMzuEcfmNonuf
sidebar_position: 1
---


# Margin call

Margin Call 作业是以实时风控计算的基础下 ,提供快捷的平仓与追收，Whale 整个保证金追缴的流程参考下图：

<img src="/assets/IEBebOkmhoqDUTxupIscT9IXnZf.jpeg"/>

名词释义

<table>
<colgroup>
<col width="159"/>
<col width="667"/>
</colgroup>
<tbody>
<tr>
<td><p><strong>名词</strong></p></td><td><p><strong>解释说明</strong></p></td></tr>
<tr>
<td><p>证券账号</p></td><td><p>客户证券账户</p></td></tr>
<tr>
<td><p>预警类型</p></td><td><p>客户触发 margin call 的类型</p></td></tr>
<tr>
<td><p>触发预警时间</p></td><td><p>触发预警的具体时间，</p></td></tr>
<tr>
<td><p>截止日期</p></td><td><p>客户 margin call 的最后截止日，</p></td></tr>
<tr>
<td><p>已触发时长</p></td><td><p>可前端根据当前时间，与触发预警时间的小时差自主计算</p></td></tr>
<tr>
<td><p>净资产比率</p></td><td><p>NAV=总现金 + 总持仓<br/>净资产比率= NAV / MAX[ NAV，多头持仓市值+abs（空头持仓市值）]<br/>多头持仓市值：持仓数量为正<br/>空头持仓市值：支持数量为负</p></td></tr>
<tr>
<td><p>应追缴保证金</p></td><td><p>=维持保证金 * 配置系数  -  NAV</p></td></tr>
<tr>
<td><p>总现金</p></td><td><p>客户总现金（会根据汇率统一折算为 HKD）</p></td></tr>
<tr>
<td><p>总持仓</p></td><td><p>总持仓 = 总股票持仓 + 总期权持仓（期权持仓只包括新的保证金版本的期权）<br/>股票 A 最新价 * 股票 A 持仓数量 + 股票 N 最新价 * 股票 N 持仓数量 +...+ 期权 A 最新价 *期权 A 持仓数量 * 股票 A 持仓数量 + 股票 N 最新价总持仓 = 总股票持仓 + 总期权持仓（期权持仓只包括新的保证金版本的期权）<br/>股票 A 最新价 * 股票 A 持仓数量 + 股票 N 最新价 * 股票 N 持仓数量 +...+  期权 A 最新价 *期权 A 持仓数量 * 股票 A 持仓数量 + 股票 N 最新价</p></td></tr>
<tr>
<td><p>股权资产</p></td><td><p>总现金 + 总持仓</p></td></tr>
<tr>
<td><p>初始保证金</p></td><td><p>分成股票保证金与期权初始保证金 两种类型</p></td></tr>
<tr>
<td><p>维持保证金</p></td><td><p>股票维持保证金 + 期权维持保证金</p></td></tr>
<tr>
<td><p>非末日期权计算 IM</p></td><td><p>客户所有持仓期权（新版期权），全部都按照非末日期权的计算逻辑，得出整体初始保证金要求</p></td></tr>
<tr>
<td><p>非末日期权计算 MM</p></td><td><p>客户所有持仓期权（新版期权），全部都按照非末日期权的计算逻辑，得出整体初始保证金要求</p></td></tr>
<tr>
<td><p>非末日期权计算 FM</p></td><td><p>客户所有持仓期权（新版期权），全部都按照非末日期权的计算逻辑，得出整体初始保证金要求</p></td></tr>
<tr>
<td><p>平仓保证金</p></td><td><p>股票平仓保证金 + 期权平仓保证金</p></td></tr>
<tr>
<td><p>可平仓股票</p></td><td><p>客户所有的持仓股票需要以字串方式展示出来</p></td></tr>
<tr>
<td><p>可平仓期权</p></td><td><p>客户所有的持仓期权（新版本期权）需要以字串方式展示出来</p></td></tr>
</tbody>
</table>

