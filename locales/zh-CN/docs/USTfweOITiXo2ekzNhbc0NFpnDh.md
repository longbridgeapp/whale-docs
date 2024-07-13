---
title: 5.2 结单显示
slug: USTfweOITiXo2ekzNhbc0NFpnDh
sidebar_position: 1
---


# 5.2 结单显示

## 5.2A 问：客户的结单密码是什么？

<b>答：</b>密码组成方式：登录手机号末四位 + 证件号末四位。密码中的字母必须大写，有括弧的直接忽略。 

例如：手机号码是 12345678，证件号码是 123456（X），则结单密码是 5678456X。

- <b>个人户：手机号码后 4 位数字 ＋ 身分证号码最后 4 位数字  </b>（联名户以主持有人为相关信息）
- <b>公司户：手机号尾 4 位数字 ＋ CI 尾 4 位数字</b>

## 5.2B 问：没有登录电话，新增或更改了，会否影响到结单密码？

<b>答：</b>会影响到的，如在工单中心新增或更改了登录手机号，结单的密码会更新。

结单的逻辑见以下：

1. 若客户有登录手机号，则附件密码为登录手机号后四位 + 身份证后四位；
2. 如果没有登录手机号，结单的密码是用联系手机号后四位 + 身份证后四位；
3. 如没有登录及联系手机号，会取身份证后四个位。

如客户是提供了多个国藉证件，取的证件号逻辑顺序是：香港身份证 ＞ 本国身份证 ＞ 护照，按香港交易所申报 BCAN 的顺序保持一致。

## 5.2C 问：会有临时结单可以生成？

<b>答：</b>在「清算管理 &gt; 结单管理 &gt; 结单查询」页面点击「创建临时结单」。


「创建临时结单」功能最多能创建一份包含帐户最终操作日期起计三个月内的结单，如客户最后操作出入金为 2023 年 6 月，临时结单只能包含 6，7，8 月这时段，再往后的日期因为帐户没有操作日期便没有结单。


如果客户没钱没货就不能创建出临时结单。

<img src="/assets/JnOBbpSMtocgUZxGMGzcpXXHnBd.png" src-width="2496" src-height="1312" align="center"/>

## 5.2D 问：结单的语言如何设置？

<b>答：</b>见以下步骤
（i）在「清算管理 &gt; 结单管理 &gt; 结单模版」点击「编辑」

<img src="/assets/V9JXbMtSKom2IBxZAbDc68JKnbc.png" src-width="1842" src-height="1430" align="center"/>

(ii). 将页面拉到最底，在「结单语言」点击可选择语言

> “跟随系统”指跟随客户 APP 显示语言的设置

<img src="/assets/EjRFb3LTPohPwKxIvincZC5gnvb.png" src-width="1898" src-height="1430" align="center"/>

## 5.2E 问：报表或结单会否显示到平仓交易？

<b>答：</b>TDR001-1-Daily Client Order Report By Client 报表的「订单类型」会显示为「强平单」；
结单中的「股票交易明细」会显示该订单为「强制平仓 Forced Liquidation」。

<img src="/assets/HaJbbxtEfoUomMxO3yocKEfEnJf.png" src-width="2832" src-height="1486" align="center"/>

<img src="/assets/M3ScbSviZoz0CQxfasUc8kCInre.png" src-width="1384" src-height="676" align="center"/>

## 5.2F 问：手工调账的交易为什么不能显示「成本价」及「浮动盈亏」？

<b>答：</b>日切时间点后进行手工调账交易，「成本价」和「浮动盈亏」须要在下一个交易日更新和显示。

## 5.2G 问：结单显示的债券「价格」和「成本」分别代表什么？

<b>答：</b><b>“</b>价格”显示的是债券「行情维护」的收盘价；“成本”显示的是摊薄成本＝(总买入金额 - 总卖出金额）/ 持有数量。调账以人工输入的总成本价为准，如没有输入会取上次收盘价计算 = 收盘价 x 持有数量。

> 如：交易总额为 `$500,000`、数量为 `5,000`。
总成本价输入 `$500,000`、结单上的成本价以摊薄成本价显示 `= ＄100`

<img src="/assets/IbgNbI3pVoKa5SxMJwYc7hLenoc.png" src-width="1368" src-height="260" align="center"/>

