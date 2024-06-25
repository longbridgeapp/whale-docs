---
title: 5. 清算问题
slug: KgzbwrUGhiVyctkAgP8cJgbsnSd
sidebar_position: 4
---


# 5. 清算问题

## 5A 问：美股文件如何处理对账？ 

<b>答：</b>美股是隔夜市场，交易日会在下一天结束，需要美股上手第二天早上提供文件后导入对账。

系统持仓对账逻辑是对上一日的已交收持仓（持仓对帐对的是 T-1），需要导入美股上手文件，以完成美股清算。

在「清算管理 &gt; 清算检查 &gt; 持仓对账」中按「重新对账」选择对应的执行日期及账务日期以刷新数据，再导出报表 SDR025 核对。

<img src="/assets/TdQdb9nPwoHsHTxHz99cK2kDnPg.png" src-width="2398" src-height="1188" align="center"/>

## 5B 问：对账日期如何选择？

<b>答：</b>常规租户是下一天上午对上一天的账，系统是按对账任务发起的日期去默认展示，见下例说明。

<img src="/assets/DhP0bVTi3oFEVKxww5McS1WxnZ2.png" src-width="1466" src-height="972" align="center"/>

## 5C 问：为什么 4 月 30 日港股清算后，系统账务日是 5 月 1 日，不是 5 月 2 日？
（以 5 月 1 日为例子）

<b>答：</b>5 月 1 日港股为假期，但美股为交易日，需要空跑港股清算，反之美股假期情况也一样。

## 5D 问：为什么操作提前交收没反应？

<b>答：</b>提前交收需要完成日终后操作，如下日为假期操作会有报错提醒：市埸日历不存在

<img src="/assets/OCwMb4iu2obRmkxrH91clc5znAh.png" src-width="2504" src-height="1006" align="center"/>

## 5E 问：半日市清算需要什么操作／注意？

<b>答：</b>最早当天 2 点在「清算管理 &gt; 日终任务」点击「提前日切」可提早进行清算 或 等到系统截数时间（如：4 点半）后操作。

<img src="/assets/VEfEba9SOoicbVxhOkDcndXXnsh.png" src-width="2183" src-height="384" align="center"/>

## 5F 问：清算能重跑昨天的数据？

<b>答：</b>在「清算管理 &gt; 清算撤销」页面点击「新增」，不能跳过账务日，需一天一天撤回。（见 5F 图一）


<img src="/assets/Ddk9bk6NtoQs2KxjD2BceB28nHT.png" src-width="2390" src-height="1420" align="center"/>

<em>5F 图一</em>

<em>如不用重新计算利息／交收数据，资产类回撤可选不操作</em>

## 5G 问：日终 "清算前准备" 有报错提醒如何处理？

<img src="/assets/Z7mMbG9dSoszmUxjA3OclaNWnTg.png" src-width="2220" src-height="380" align="center"/>

<b>答：</b>弹出提醒信息检查后没问题，作「手动审核」通过。

<img src="/assets/Fra8bsjWooTZKbxZK91cyGXonNf.png" src-width="2110" src-height="172" align="center"/>

<img src="/assets/I2kmbzGhyonmbjxdaPRcDwtxnGd.png" src-width="2040" src-height="162" align="center"/>

<img src="/assets/XHNgbw7Uzob2kfx6q8ucB6zEn8c.png" src-width="2752" src-height="1354" align="center"/>

<em>5G 图一</em>

<img src="/assets/TLEvbxnWgo95A3xUoV1cFZb9n2d.png" src-width="2656" src-height="294" align="center"/>

<em>5G 图二</em>

## 5H 问：清算前准备出现「前台流水全部纳入清算」的提醒，如何处理？

<img src="/assets/HlkebwYzvo6jBKx3jigcmlgmnue.png" src-width="1373" src-height="1124"/>

<b>答：</b>检查流水是否在系统清算时间后操作。在「清算管理＞流水管理」页面选持仓／资金流水点击「编辑日期」，改回当天账务日期。完成日终后，当天结单会显示到该流水。

> 如不用在当天结单显示流水，可保持原来的账务日，不作修改，点击通过继续日终。

<img src="/assets/GnVhbmJxvojdtGxHOSHcYt2Ungc.png" src-width="2386" src-height="828" align="center"/>

## 5I 问：清算中检查报错，如何处理？

<img src="/assets/OkdpbHc7loYMgKxT1KvczFEnnMe.png" src-width="2644" src-height="1112" align="center"/>

<b>答：</b>确认情况是否同股票同客户持仓在不同托管商上。

在「清算管理 ＞ 清算检查 ＞ 检查结果」页面是否出现“同客户、同标的跨子仓”出现检查失败，因同客户及同股票在不同上手的托管商会有提醒报错（见 5I 图一）。

- 方法一：确认股票放在两个不同上手的仓位，可点击「工单详情」手动通过，回到「清算管理&gt;日终任务」页面继续完成日终。如持仓保持在不同上手，日后的清算中检查会一直有报错提醒。 
- 方法二：可在「清算管理 &gt; 仓位管理 &gt; 仓位查询」操作内部转仓，把股票放到同一上手托管商仓位（见 5I 图二）。之后回到日终任务，在清算中检查点击「重新执行」完成日终。

<img src="/assets/ROHFb11cQoAZAoxzl5XcJKlGnBh.png" src-width="2512" src-height="814" align="center"/>

<em>5I 图一</em>

<img src="/assets/RnJKbjNkRoBsiExr54DcEjHnn6f.png" src-width="2454" src-height="1109" align="center"/>

<em>5I 图二</em>

## 5J 问：持仓不对账，仓位数量有差异，如何处理？


<b>答：</b>在「清算管理 &gt; 仓位管理 &gt; 仓位查询」页面搜索相应的客户，从需要转出的仓位点击「内部转仓」（见 5J 图一）。
转出的数量需要等于 street + nominee + own，没有数量的保持为 0（见 5J 图二）。

> 持仓对帐对的是 T-1。如昨天（20/5）日终后的内部转仓要明天（22/5）的持仓对帐才能反映出来

<img src="/assets/SNDKbtLQcoDcJaxkExJc0NoHn2d.png" src-width="2500" src-height="1136" align="center"/>

<em>5J 图一</em>

<img src="/assets/Me8ObHY4Uo29xJxLnRNcBJYZn4b.png" src-width="1188" src-height="805" align="center"/>

<em>5J 图二</em>

## 5K 问：台风天操作如何处理？

<b>答：</b>一般 ccass 会发通知券商延后钱或货


(i). 在「清算管理 &gt; 台风天处理」页面操作

<img src="/assets/GQgsbyPSZosFBixXyUyc3NzlnyH.png" src-width="2840" src-height="1410" align="center"/>

(ii). 选择「市场」及 根据 CCASS 通知选择「钱货同时延后」或「钱延后」

<img src="/assets/DHsUbiwpbogybHxtfuXcA6eAnve.png" src-width="2756" src-height="1478" align="center"/>

