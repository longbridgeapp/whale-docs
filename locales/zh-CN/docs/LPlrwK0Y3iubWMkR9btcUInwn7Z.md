---
title: 公募基金管理
slug: gongmujijingunali
sidebar_position: 5
---


# 公募基金管理

# 适用场景

本作业可以维护一个公募基金的基金资料，配置基金主体和介绍，也可以管理基金的上架与显示展示。同时配置和管理基金渠道，查看基金管理费。

该页面的作业流程：基金渠道→基金公司→基金管理。

# 前置条件

无

# 使用说明

## 基金渠道

执行菜单：基金管理&gt;公募基金管理&gt;基金渠道 Tab 页签

本作业用以管理基金平台商的相关资料 ，维护基金渠道，配置与基金渠道交付的时间点配置

<img src="/assets/LdafblyqeoTVUqxYlHKcU2XYng4.png" src-width="2984" src-height="1334" align="center"/>

可以右上角【新建配置】来新增基金渠道，根据基金渠道输入 获取订单时间与回填时间

<img src="/assets/Orj9b4sXOocF7kxPjvAcN65ongd.png" src-width="2978" src-height="1458" align="center"/>

注意： 

1. 基金公司渠道一定要遵循范例格式模式填写，禁止填写中文以及其他特殊符号
2. 私募基金的基金公司渠道严格按照提示加前缀 private-
3. 其中自动回填就是通过 API 拉取第三方基金公司的确认净值/确认金额/确认份额等，若劵商租户没有走 API 的配置时，请任意填下时间即可

## 基金管理

执行菜单：基金管理&gt;公募基金管理&gt;基金公司 Tab 页签

本作业可以维护一个公募基金的基金资料，配置基金主体和介绍，也可以管理基金的上架与显示展示 

首先在基金纪录右侧操作区，可以操作【详情】或【详情】来查阅编辑基金资料

同时系统提供 基金上架（系统端）与显示管理（APP 端）

【上架】：是指将基金 纳入系统交易。并调整时需要标的是上架状态      

【下架】：是指将基金 将无法在系统交易

【显示】：是指基金可在 APP 端展示、搜索和交易 

【隐藏】：是指基金在 APP 端不展示、不可搜索

**APP 端展示效果**：  （如果一个 公募基金是 '上架' 且 '显示' 的 状况下）

<img src="/assets/JB59bGPbCoOxlbxSsDHcSatZnNd.png" src-width="696" src-height="1206" align="center"/>

可以点选右上角【新建公募基金】或批量导入来添加基金

<img src="/assets/FzcabCMjboCd7TxBmzdc5EUCnhb.png" src-width="2980" src-height="1520" align="center"/>

<img src="/assets/O5OsblRoIoTXnGxuERVcSPHEnPd.png" src-width="2990" src-height="1356" align="center"/>

本作业也支持批量导入基金资料，点选右上角【批量导入】，可以根据事先提供模板来批量导入基金

<img src="/assets/GbzXb1FKqop8CWxJxL8cfAJ0nqc.png" src-width="2984" src-height="1370" align="center"/>

优化了配置基金交互流程，在右侧记录区【编辑】时，展示改成左侧树状 Tab 配置页面，提高数据展示优化

<img src="/assets/SHYObYEtooVbbZxf9ZnccAw0n5P.png" src-width="2972" src-height="1526" align="center"/>

<img src="/assets/Fdn6bWwgNo3MQ6xDDC8cjw4nnmh.png" src-width="2968" src-height="1764" align="center"/>

## 基金公司

执行菜单：基金管理&gt;公募基金管理&gt;基金公司 Tab 页签

本作业可以维护基金公司相关资料

<img src="/assets/TSOPb6wrUoZh46xjao8crq2HnNh.png" src-width="3245" src-height="1400" align="center"/>

<img src="/assets/HflIbP5n1oc1B9xpxDocUwBRnkU.png" src-width="2990" src-height="1776" align="center"/>

**APP 端展示效果**： （当新建基金公司后）

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[45%]" width-ratio="45">
<img src="/assets/W4DQb6wjloJT9ExC5dgcBDqhndd.png" src-width="708" src-height="1492" align="center"/>
</div>
<div class="w-[54%]" width-ratio="54">
<img src="/assets/Y5uxbJ0vcodldYxfjPMc0yjonGf.png" src-width="880" src-height="1552" align="center"/>
</div>
</div>

## 基金管理费

执行菜单：基金管理&gt;公募基金管理&gt;基金分组 Tab 页签

本作业可以查询基金管理费用的设置

<img src="/assets/JvOSbjbavourZkxL7WWcehcPn9d.png" src-width="3221" src-height="1552" align="center"/>

