---
title: 17. 前台 WTT 问题
slug: XavywAyXAiFLOmkr1Czc95a9nCe
sidebar_position: 16
---


# 17. 前台 WTT 问题

## 17A. 问：净资产比率是如何计算？

<b>答：</b>净资产比率＝股权资产／持仓总市值。股权资产 ＝ 总现金＋持仓总市值。

> 持仓总市值包含股票及期权的市值。

<img src="/assets/QWWcbMFrAozoU3x19iMcEUHEnFc.png" src-width="2600" src-height="766" align="center"/>




## 17B. 问：下单后如何查到需要收取客户多少费用？

<b>答：</b>实际的费用需要完成清算后查看报表 SDR018 - Bargain Detail Report-HK。
预估的费用可以在前台下单组件右下方的「金额详情」功能查询到。

<img src="/assets/N5YDbyGdvoRn1nxA4aWcoIujntd.png" src-width="2242" src-height="1122" align="center"/>

## 17C 问：前台如何看到联名户信息中主次持有人的名称？

<b>答：</b>在「客户信息」组件中点击右上方「...」的设置，打开显示联名户信息的按钮。

<img src="/assets/TfO6btRGAo9TF9x9EeacQcumnrf.png" src-width="2610" src-height="611" align="center"/>

<img src="/assets/WdH1bZSsgorcbMx3fwHcKKz7n7f.png" src-width="2116" src-height="800" align="center"/>

## 17D 问：如何限制客户交易虚拟资产或限制交易股票？

<b>答：</b>前台在「交易查询 &gt; 证券限制」点击右上方「新增」，把股票添加至黑名单禁止客户交易，能批量“股票导入”作限制。如黑名单没有添加客户，默认为全部客户不能交易。

> 如个别客户能作交易可以再新建白名单，添加关联客户。
以批量导入模版的股票代码，需输入：3099.hk

<img src="/assets/Wwqxb3g1Uo2XCBx6GsIc9Z7Yn2c.png" src-width="2606" src-height="1526" align="center"/>

## 17E 问：前台行情选了 40 档买卖经纪，是如何计算 40 档？

<b>答：</b>经纪行买卖档包含买／卖方向前 40 个经纪行 ID 的清单： 

- 当一档价格下有超过 40 个经纪行，则页面显示前 40 个经纪行。
- 当一档价格下不足 40 个经纪行，则：40 = 经纪行数量 + 有经纪行的价格个数 + 无经纪行的价格个数*2。 

> (注＊在交易所的规则中，无经纪行的价格会占据两行位置：一行是告知偏离价格的距离、一行是告知此价格下没有经纪商。)

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[65%]" width-ratio="65">
<img src="/assets/LkFZbhPLmoPRKZxOPchc08OBnIb.png" src-width="680" src-height="483" align="center"/>
</div>
<div class="w-[34%]" width-ratio="34">
<img src="/assets/Ap8qbioG6oleQaxs6cGcAKIcnbb.png" src-width="969" src-height="1340" align="center"/>
</div>
</div>

## 17F. 问：强制平仓后，会有什么方式通知到客户？

<b>答：</b>App 会有推送通知（见 17F 图一）<b>，</b>在结单上也有强制平仓标示（见 17F 图二）。
追收保证金（margin call）也有电邮及 App 推送通知（见 17F 图三）。


<img src="/assets/CTpjbvcxoooJzyxuvbccsz5Snqd.png" src-width="686" src-height="654" align="center"/>

<em>（17F 图一）</em>

<img src="/assets/ANAPbna8JopRAmxFynbc3VIpn0c.png" src-width="1724" src-height="306" align="center"/>

<em>（17F 图二）</em>

<img src="/assets/H8ETb7QFBoE8HxxJMWkck5Qunxf.png" src-width="770" src-height="1290" align="center"/>

<em>（17F 图三)</em>

## 
## 17G. 问：什么是「重置当前布局」功能？

答：「重置当前布局」能将布局回复到初始状态，只有系统页面有此功能，自定义页面没有。

<img src="/assets/VeZnbsHRhoFTYCxssKgcaVxLnEe.png" src-width="2866" src-height="1788" align="center"/>

<img src="/assets/CW7VbO3zbot2ZBxa3KPcivATn8e.png" src-width="2864" src-height="1790" align="center"/>

