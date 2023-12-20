---
title: Margin call
slug: UKp2wGjASi8YJOkMzuEcfmNonuf
sidebar_position: 1
---


# Margin call

Margin Call 作業是以實時風控計算的基礎下 ,提供快捷的平倉與追收,Whale整個保證金追繳的流程参考下圖:

<img src="/assets/IEBebOkmhoqDUTxupIscT9IXnZf.jpeg" src-width="1510" src-height="1254" align="center"/>

名詞釋義

<table>
<colgroup>
<col width="159"/>
<col width="667"/>
</colgroup>
<tbody>
<tr>
<td><p><strong>名詞</strong></p></td><td><p><strong>解釋說明</strong></p></td></tr>
<tr>
<td><p>證券賬號</p></td><td><p>客戶證券賬戶</p></td></tr>
<tr>
<td><p>預警類型</p></td><td><p>客戶觸發 margin call 的類型</p></td></tr>
<tr>
<td><p>觸發預警時間</p></td><td><p>觸發预警的具体时间，</p></td></tr>
<tr>
<td><p>截止日期</p></td><td><p>客戶 margin call 的最後截止日，</p></td></tr>
<tr>
<td><p>已觸發時長</p></td><td><p>可前端根據當前時間，與觸發預警時間的小時差自主計算</p></td></tr>
<tr>
<td><p>淨資產比率</p></td><td><p>NAV=總現金+總持倉<br/>淨資產比率= NAV / MAX[ NAV，多頭持倉市值+abs（空頭持倉市值）]<br/>多頭持倉市值：持倉數量為正<br/>空頭持倉市值：支持數量為負</p></td></tr>
<tr>
<td><p>應追繳保證金</p></td><td><p>=維持保證金 * 配置係數  -  NAV</p></td></tr>
<tr>
<td><p>總現金</p></td><td><p>客戶總現金（會根據匯率統一折算為 HKD）</p></td></tr>
<tr>
<td><p>總持倉</p></td><td><p>總持倉 = 總股票持倉 + 總期權持倉（期權持倉只包括新的保證金版本的期權）<br/>股票 A 最新價 * 股票 A 持倉數量 + 股票 N 最新價 * 股票 N 持倉數量 +...+ 期權 A 最新價 *期權 A 持倉數量 * 股票 A 持倉數量 + 股票 N 最新價总持仓 = 总股票持仓 + 总期权持仓（期权持仓只包括新的保证金版本的期权）<br/>股票 A 最新價 * 股票 A 持倉數量 + 股票 N 最新價 * 股票 N 持倉數量 +...+  期權 A 最新價 *期權 A 持倉數量 * 股票 A 持倉數量 + 股票 N 最新價</p></td></tr>
<tr>
<td><p>股權資產</p></td><td><p>總現金+總持倉</p></td></tr>
<tr>
<td><p>初始保證金</p></td><td><p>分成股票保证金與期權初始保證金 兩種類型</p></td></tr>
<tr>
<td><p>維持保證金</p></td><td><p>股票維持保證金 + 期權維持保證金</p></td></tr>
<tr>
<td><p>非末日期權計算 IM</p></td><td><p>客戶所有持倉期權（新版期權），全部都按照非末日期權的計算邏輯，得出整體初始保證金要求</p></td></tr>
<tr>
<td><p>非末日期權計算 MM</p></td><td><p>客戶所有持倉期權（新版期權），全部都按照非末日期權的計算邏輯，得出整體初始保證金要求</p></td></tr>
<tr>
<td><p>非末日期權計算 FM</p></td><td><p>客戶所有持倉期權（新版期權），全部都按照非末日期權的計算邏輯，得出整體初始保證金要求</p></td></tr>
<tr>
<td><p>平倉保證金</p></td><td><p>股票平倉保證金 + 期權平倉保證金</p></td></tr>
<tr>
<td><p>可平倉股票</p></td><td><p>客戶所有的持倉股票需要以字串方式展示出來</p></td></tr>
<tr>
<td><p>可平倉期權</p></td><td><p>客戶所有的持倉期權（新版本期權）需要以字串方式展示出來</p></td></tr>
</tbody>
</table>

