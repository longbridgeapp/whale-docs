---
title: 指数管理
slug: ˙zhishuguanli
sidebar_position: 7
---


# 指数管理

## 适用场景

满足 SFC3.10 的要求，支持股票指数设定和压力测试。

## 前置条件

无

## 操作说明

菜单入口：风控管理 &gt; 指数管理

### 指数级别

该菜单用来维护劵商保证金指引内所提及的指数级别。

1. 在页面点击【新建】可以新建指数级别

<img src="/assets/XKHwb1SRdowLN3xkoLbcTJA1nXg.png"/>

1. 若需修改指数级别配置，可以在列表页的操作【编辑】；如配置无效或不再使用也可操作【删除】

<img src="/assets/W8lWbfODYon7KBxT42HcXzA1nOf.png"/>

1. 若需要初始化数据，可以点选左侧区点选【初始化数据】，会将系统预设指数数据作初始化配置（会将 9 个 SFC 保证金指引要求的指数及级别初始化），但操作初始化不会影响用户自行添加的指数数据

### 股票指数

该菜单用来维护劵商保证金指引内所提及的股票指数。

1. 页面提供与行情数据同步功能【拉取基本数据】功能，点选后可以自动同步基本数据（此数据是提供给 Whale 产品始用的行情数据源）

<img src="/assets/TLIibirQZorokNxbr6XcrzsTnNd.png"/>

1. 如果劵商若有更好的行情数据源，则可以自主批量导入，页面也有提供【批量导入】功能，提供导入模板下载，可先在模版上编辑后，再将资料导入

<img src="/assets/KtjWb9aEDow9loxV5oWcApl7nBh.png"/>

1. 若需修改股票指数代码，可以在列表页的操作【编辑】；如配置无效或不再使用也可操作【删除】

<img src="/assets/JhG1bmMvtoqMIFxhy70cuCqKnth.png"/>

### 股票级别占比

该菜单展示股票级别占比，并支持模拟 margin call 计算。

1. 股票级别占比列表

<img src="/assets/FOLebDog2opgToxC3llckwDYnfb.png"/>

1. 默认三个指数跌幅为页面计算好的跌幅，也可以通过页面的【模拟 Margin Call】功能进行人工修改并触发模拟计算

<img src="/assets/YtqVb44g7ovKMwxGShEc9RuWnv6.png"/>

