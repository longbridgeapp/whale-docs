---
title: 借币提醒
slug: xxx
sidebar_position: 2
---


# 借币提醒

## 适用场景

一般劵商的客户账户都是采用综合购买力换算机制，能方便客户以非当地币别去交易当地币别股票（例：以港元交易美金股票），当客户成交后，就会涉及到客户账户的借币（劵商先提供自有外币给外国劵商作交易）后续客户就需要进行换汇操作，因此可以配置事先的借币换汇提醒，将客户换汇提醒事项列入风控管理维度。

## 前置条件

无

## 业务流程

## 操作说明

菜单入口：风控管理&gt;授信额度&gt;借币提醒

### 借币提醒

该菜单可以查询所有提醒客户，支持配置借币提醒规则和人工兑换操作。

1. 点击列表右上角的【换汇规则】配置借币提醒规则

<img src="/assets/CUSgbEbPLogSZyxUcCScPDN5nAm.png" src-width="3389" src-height="1286" align="center"/>

1. 规则配置：单币种规则为非必配项，其他为必配项；规则仅在开启时运行
    1. 必配项的欠款金额和其他币种可提金额默认为主币种，所有币种转化为主币种计算
    2. 单币种规则和必配项规则只要有其一满足规则，即会提醒
    3. 单币种规则可以设置不同币种规则，支持添加和删除

<img src="/assets/K5tjbnRvYoGzltxXy36cFseCnDd.png" src-width="3356" src-height="1720" align="center"/>

1. 规则配置后，选择开启并保存规则。系统则会运行规则，捞取符合规则的客户，结果在「提醒查询」列表展示。此外，交易日均会定期执行规则并给符合规则的客户发送借币提醒消息，通知客户主动换汇。页面操作【换汇用户捞取】可刷新列表，过滤不再满足规则的客户

<img src="/assets/AL6rbl69ootUKxxCDomcn8YVnLd.png" src-width="3218" src-height="1070" align="center"/>

1. 同时，开启规则后，客户在 App 上可以对应查看【自动还款】功能，可以自主选择开启该功能。若客户打开自动还款，当命中规则时，系统将进行自动换汇或后台操作人工兑换
    1. App 端「自动还款」功能入口：「我的」-「设置」-「账户设置」
    <img src="/assets/O591b74Lzo9Cv1xbGXmctyuNnLe.png" src-width="1170" src-height="2532"/>
    1. App 若开启「自动还款」，页面「自动换汇」则为「开启」，支持操作【兑换】
    <img src="/assets/MlH4bA93PocqlJxZRDFckjRqnPe.png" src-width="3216" src-height="682" align="center"/>

2. 兑换：开启自动还款的客户会默认系统自动兑换；在系统自动兑换之前，页面可支持人工兑换。列表操作【详情】支持查看客户实时数据、消息记录和兑换记录；人工兑换弹窗页面也可查看当前客户现金情况，配置兑入/兑出金额和币种确认兑换即可
    <img src="/assets/TXdGbfHtNoOZtbxGp8kckksCnEd.png" src-width="3274" src-height="1640" align="center"/>
    <img src="/assets/K4lNbGEODo5pVPxaZpycaaxwnqb.png" src-width="3222" src-height="1220" align="center"/>

3. 兑换结果查看：人工/自动兑换完成后，若剩余资产仍命中规则，则仍会在提醒查询列表；若不再命中规则则会进入历史记录，可在「[历史记录](./G6IywVNy7izanCkpvEvcMFpdnmc)」查看相关详情

### 历史记录

该菜单主要用于查询历史所有的提醒客户及相关提醒兑换详情。

<img src="/assets/QG7vb6a0gopDZOx5NAucgHIpnrd.png" src-width="3198" src-height="1070" align="center"/>

