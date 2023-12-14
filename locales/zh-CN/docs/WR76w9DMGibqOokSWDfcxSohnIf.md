---
title: 风险预警
slug: fengxianyujing
sidebar_position: 0
---


# 风险预警

## 适用场景

当客户的资产净值，因市场波动而下跌至低于维持保证金水平时，系统会向客户发出 Margin Call 通知，客户必须在 3 个交易日补充资金或平仓，否则业务上有权替客户进行平仓，而无须事先通知。

业务流程如下：

<img src="/assets/MUNYbs75AoscaIxZ2qhcSrBynHe.jpeg" src-width="1139" src-height="1284"/>

## 前置条件

使用 margin call 功能之前，可以了解“风控 &gt; 追保金额配置”菜单的追保金额初始设置，如不满足业务需求，按页面提示联系长桥配置。

## 操作说明

菜单入口：风控管理 &gt; Margin Call  &gt; 风险预警

### 实时预警

该菜单支持实时的保证金预警监控。

列表展示所有当前预警客户记录，在左侧区会有 绿色文字实时相关更新提示（实时更新最新计算结果）；同时在上方区域会加总目前 预警纪录的追保金额与 长期未结清追保金额的 汇总额

<img src="/assets/ASgDbM1rmor3hAxakAbc9Paznqg.png" src-width="2820" src-height="590" align="center"/>

同时对于列入监控预警的客户，可以点选记录后，可以进行后续操作：发送消息//平仓操作/设置自动平仓

<img src="/assets/U8NxbOD4IoYSXIx7axlcjtdinZl.png" src-width="3230" src-height="1145" align="center"/>

如果操作平仓动作时，可以选择是否平仓特定股票平仓

<img src="/assets/G9lkbTSuRoCT0Mxdn8DceTn9n4F.png" src-width="3190" src-height="1272" align="center"/>

设置自动平仓

<img src="/assets/SF10bxzeyo7r9RxcBHgcA2FOn3d.png" src-width="3136" src-height="1172" align="center"/>

也可以对列入监控预警的客户，在记录区右侧点选【详情】，提供该客户的资金摘要与持仓资料与正在平仓的股票清单；支持在详情页操作【平仓】或者【发送消息】

<img src="/assets/Bs99bp7fcoK1XYxc3QzcG033nch.png" src-width="3158" src-height="506" align="center"/>

<img src="/assets/HeGrbjvGxoDNN0xCz9NcgSkDnHe.png" src-width="3252" src-height="1632" align="center"/>

对当前预警记录进行编辑备注，便于后续处理或给其他人参考​；同时，若标注为异常单，也可在列表页面的【异常单】查看记录

<img src="/assets/RWHMb5hX3otbiAxnS9kcIGGBn3d.png" src-width="3150" src-height="466" align="center"/>

<img src="/assets/LfCMbI7ohooWdEx2eX2cU8RNnfe.png" src-width="3156" src-height="1140" align="center"/>

### 历史记录

margin call 结束后会进入历史记录页面，该菜单下可以查看历史 margin call 订单的详细信息。

点击列表页的【详情】可以查看 margin call 触发前后的详细数据

<img src="/assets/UKOHbDbUMoFMvqxcSt8cGzaqnNe.png" src-width="3192" src-height="834" align="center"/>

### 快照

当客户触发 margin call 后，需要保留当时客户触发 margin call 时的历史数据记录是可追溯，日后可以作为 RO 或相关合规的参考，附为上报给监管的依据，因此 margin call 历史记录需要在部分场景下记录快照数据。

场景如下：触发 margin call  /触发 force call / 触发通知/每日定时记录 /结束 margin call

<img src="/assets/GPMZbUw5aolwSTxMRXScqDYBnLM.png" src-width="3214" src-height="1176" align="center"/>

### 融券持仓概览

当 IB 不可融资时，会进行提前通知做股票召回或者强制平仓，对应我们也要通知用户做强制平仓。该菜单支持查看整体融券的使用情况并操作平仓。

列表页查看整体融券信息

<img src="/assets/T70MbbrlQoF3u2xE8BqcsaA6npe.png" src-width="3216" src-height="874" align="center"/>

点击【详情】，可查看该空头股票对应客户详情

<img src="/assets/Z0HqbgN3Oo5sAUx0DGEc3xZZn6d.png" src-width="3084" src-height="522" align="center"/>

详情页面可以操作平仓或发送 margin call 消息，操作方式同「实时预警」

<img src="/assets/SWU3bBtGWoCdDNxM6cMch5B3ntc.png" src-width="3030" src-height="522" align="center"/>

### 日内保证金实时预警

该菜单功能及操作逻辑同「实时预警」，针对客户对象仅为日内融帐户。

<img src="/assets/WB8Gbeq1foIFEBxi1zxczdjonUd.png" src-width="3212" src-height="700" align="center"/>

