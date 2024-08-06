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

<b>答：</b>「重置当前布局」能将布局回复到初始状态，只有系统基础页面（如：个股、行情、交易页面）有此功能，自定义页面没有。

<img src="/assets/JOlyb9tXGoSdUSxILIRcK3gknNF.png" src-width="2042" src-height="1240" align="center"/>

<img src="/assets/CW7VbO3zbot2ZBxa3KPcivATn8e.png" src-width="2864" src-height="1790" align="center"/>

## 17H. 问：WTT 的“证券限制”中，「关联地区」是根据什么区分客户？

<b>答：</b>会以客户填写的居住国家作区分；如没有，以证件签发地区分；如果也没有，会以国籍区分。

<img src="/assets/SY0wbZDlropmGkxO9IjcUyAqnnb.png" src-width="2866" src-height="1332" align="center"/>

## 17I 问：交易订单被拒绝原因为「Order Price Far Away From Reference Price」是什么？

<b>答：</b> 下单被拒原因为下单价格距离现价太远，买盘输入价格不能高于最佳沽出价 10 个价位；卖盘输入价格不能低于最佳买入价 10 个价位。

## 17J 问：WTT「保存所有布局」功能是否须要逐个版面保存？

答：右上方组件工具箱「布局管理&gt;保存所有布局」可以将整个 WTT 布局保存，不用逐个版面保存。

<img src="/assets/N4AzbcB0UoVgYzx0p9zcCcMKnDg.png" src-width="1316" src-height="896" align="center"/>

## 17K 问：WTT 如何进行碎股交易？

答：可以在「交易页面」下碎股单（见 17K 图一）和「碎股撮合」（见 17K 图二、图三）进行碎股交易。

> 碎股成交量比正股低，有机会需要挂单数天才有成交。

<img src="/assets/KmYbbtHxnoRdN6xc9X7cOmEZnxb.png" src-width="2872" src-height="1792" align="center"/>

<em>17K 图一</em>

<img src="/assets/IKyFbV4vUolE8exNCQ9czBp8nFb.png" src-width="2878" src-height="1740" align="center"/>

<em>17K 图二</em>

<img src="/assets/F50abR5v9oOb6FxZR75caGt6nAC.png" src-width="2862" src-height="1790" align="center"/>

<em>17K 图三</em>

## 17L 问：前台下单的价格限制是什么？

<b>答：</b>如买入订单价格低于当前价格 24 个档位会存放在系统中，到价再放出；

高于对手价格 9 档不会存到系统，直接送出交易所，但会被交易所的价格限制下可能会被拒绝。

## 17M 问：如何在 WTT 申请行情？

答：在 WTT 的右上方图像点击「行情申请」，在「行情商店」选择市场及行情计划。
审批通过后，会按用量在 Whale 的月费帐单收取。

<img src="/assets/W0hnbCR6vo6LSRxtc2KcNLxgnHo.png" src-width="1582" src-height="1140" align="center"/>

