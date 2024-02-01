---
title: 记帐数据源
slug: WDlGwaXK4iXkMNk4bqPcSVPsnCe
sidebar_position: 5
---


# 记帐数据源

## 适用场景 

用户在记帐时需依照各类明细会计资料进行分类整理，并根据整理出的异常资料进行单独处理

## 前置条件 

银行流水、CCASS 资料等均已准备就绪

### 异常数据源

执行菜单：会计中台&gt;记帐数据源&gt;异常数据源 Tab 页签

- 系统对于无法自动形成分录的数据源会视作为异常数据，可以在此功能进行查询

<img src="/assets/LASEbmUmHoYtcxxlTANcLVd5n8e.png" src-width="3240" src-height="1576" align="center"/>

- 对于异常数据源，可以在记录列表通过点击「异常数据源单号」，可以跳转到具体数据源

<img src="/assets/B3yqbZvLloSrt3x09M5cifqmn4J.png" src-width="3240" src-height="1408" align="center"/>

### 客户收费帐单

执行菜单：会计中台&gt;记帐数据源&gt;客户收费帐单 Tab 页签

- 由于支付流水中用户发生的各种交易费用，比如股票交易是汇总数，类似于佣金、平台费和各种第三方收费合计，无法满足财务入帐需求，需要解析用户交易收费明细，作为会计记账的数据源。
- 客户收费帐单对于股票交易类型可以更细分配置，可以支持单独区分出暗盘，并且暗盘交易可以单独配置分录规则并形成会计分录
- 记帐数据源“客户收费帐单”增加【帐务日期】，并用于记帐分录帐务日期取值

<img src="/assets/Wrrib0RFaoSzrJx38uWc8KFInFf.png" src-width="3206" src-height="1502" align="center"/>

### 支付流水

执行菜单：会计中台&gt;记帐数据源&gt;支付流水 Tab 页签

- 是指券商公司记录用户交易变动明细表，会计中台根据转账、出账和入账进行规范获取，作为会计分录中信息流记账的数据。

<img src="/assets/NfhUb89shodkQAxKkFwcDYo6nnh.png" src-width="3230" src-height="1502" align="center"/>

### CCASS 账单

执行菜单：会计中台&gt;记帐数据源&gt;CCASS 账单 Tab 页签

- 增加 CCASS 文件解析，此 CCASS 数据源是相关文件导入后，系统自动根据配置完成会计分录处理，可在此 Tab 查询记录或删除已转入的数据源分录

<img src="/assets/DQOZbLdcWodpPixN6FGc1fkhnKh.png" src-width="3240" src-height="1478" align="center"/>

### 新股帐单

执行菜单：会计中台&gt;记帐数据源&gt;新股帐单 Tab 页签

- 新增新股帐单

<img src="/assets/OYWsba3uzocLHcxVUrCcgXgjnhh.png" src-width="3262" src-height="1120" align="center"/>

