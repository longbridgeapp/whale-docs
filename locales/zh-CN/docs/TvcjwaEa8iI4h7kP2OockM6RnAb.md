---
title: 保证金
slug: baozhengjin
sidebar_position: 2
---


# 保证金

## 适用场景

股票的保证金作为港美股券商风控的逻辑之一，用于计算购买力、margin call 等场景，一般来讲可保证金交易的股票是风险偏低的股票。该菜单主要提供保证金设置功能。

## 前置条件

无

## 操作说明

菜单入口：风控管理 &gt; 保证金

### 股票保证金

该菜单主要用于设置股票保证金比例。

列表展示所有股票保证金设置现状

<img src="/assets/BmPwbdPSvoIo7OxYxKXcOzN1nyg.png"/>

可以在【新建】按钮，新增单个股票保证金比例（注：若该股票已存在，数据会覆盖，以本次设置为准）；或者通过批量上传，批量设置股票保证金比例

<img src="/assets/KDiBbGyo3oJi1ox6suTcIGQ0nCd.png"/>

<img src="/assets/ZLXAbDYrBoBfBNxWAiNcnu6pnGd.png"/>

在【新建】页面，设置保证金比例

<img src="/assets/JL68bfzKBoHEODxmkX9crt0ynGe.png"/>

无论是单个新建还是批量上传，都会在「设置记录」生成记录，操作见「[设置记录](https://longbridge.feishu.cn/docx/JZVgdywNVopSYpxqgnicqTibnpe#YXSWdDJT3omxa0xQ1C7cXcKhnsB)」菜单

若股票保证金设置已存在，需要修改比例，则可以在列表操作【编辑】，编辑操作流程同新增；如需删除某只股票的保证集比例设置，可以操作【删除】

<img src="/assets/JBCtb5Viio6bJQxFCTIcEc2DnXf.png"/>

股票状态可能变更，可以通过列表右上角的【拉取个股状态】刷新最新状态

<img src="/assets/O260b4U1ko3qIDxExB7c2ddNnO5.png"/>

### 客户保证金

该菜单可以设置客户个性化股票保证金比例，在保证金计算时会优先取客户保证金比例。

可以通过【导入保证金数据】来新增客户保证金；进入弹窗下载模版根据模版填写后上传

<img src="/assets/FCVHbDChgo8k2xx4RBeckohXntf.png"/>

<img src="/assets/SrnTb6UHLod49HxiyypcGCa9nIh.png"/>

文件上传【确认】后，在客户保证金列表中生成状态为生效中的记录；如需修改保证金比例，可以通过操作的【编辑】修改；也可以通过【置为失效】来失效客户保证金比例设置

<img src="/assets/OlzWbhy58ox5GVxPoBbcd874nPg.png"/>

### 设置记录

该菜单用来查看股票保证金/日内交易实时保证金比例的设置记录以及进行人工同步/取消同步操作。

「股票保证金」「日内交易实时保证金」新增或编辑提交后会在比率设置记录中会生成未触发的该保证金设置记录，也可以点击【取消】则取消设置，不作记录，此时点击【同步】，该记录状态变更为已触发，同时在主页生成一条股票保证金记录（若新增的为已存在的股票则更新原记录）；点击【取消同步】，则记录状态变更为已撤销，该设置不生效；若不操作人工同步，系统将在设定的有效期生效对应设置

<img src="/assets/DC1QbMBc2olqQZxs9k0cGfZrnog.png"/>

### 空头保证金

针对空头业务，可以单独设置支持空头股票保证金比例。

列表展示所有支持空头股票保证金比例记录

<img src="/assets/JTbxbQ2TooVjGxxZUmmcobjwndg.png"/>

支持批量上传

<img src="/assets/FzzgbIFejoRnbHxwwpUcZZsOnkd.png"/>

也可点击纪录区【编辑】修改纪录

<img src="/assets/QIOUb2ZgSozg3LxICnyczOqAnnI.png"/>

### 日内交易实时保证金

针对日内融业务，可以单独设置支持日内交易的股票保证金比例。

列表展示所有支持日内交易的股票保证金比例记录

<img src="/assets/SZThbQzb9o7dFQxKvVIcTBLlnDh.png"/>

页面的【新增】和【批量上传】可以单个新增或批量新增日内交易股票的保证金比例设置；操作流程同「股票保证金」

<img src="/assets/JLawbpV3xorxkhxoJEAcAcCnnYf.png"/>

在纪录右侧操作区，进行【编辑】或【删除】

<img src="/assets/G1EFb11c5otEeGxanLvcfI9onId.png"/>

注意：若其中若状态为失效，则说明保证金比例默认为 100%

### 保证金风险指标

该菜单提供保证金风险指标查询，主要依赖行情和财务数据。

<img src="/assets/HvW1bDuXboBuxmxOr4hcLMZontg.png"/>

