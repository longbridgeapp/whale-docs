---
title: 用户分群
slug: xxx
sidebar_position: 2
---


# 用户分群

## 适用场景

介绍本文档的应用场景，可以给哪类群体提供什么操作，解决什么诉求

## 前置条件

xxxxx

## 使用说明

#### 怎样创建用户分群？

投放系统支持通过 2 种方式创建用户分群，分别是规则创建和导入创建，您可以根据自己的需求选择

<img src="/assets/OR5abkZr7ozOK6xvdPcceJBonYd.png" src-width="582" src-height="366"/>

#### 规则创建用户分群

基于用户属性和用户行为，设置规则创建分群，您可以根据自己的需求选择：

1. 仅使用用户属性，2。仅使用用户行为，3。同时使用用户属性和用户行为

**结果更新说明：**已经创建并保存成功的分群，在每次被请求时，均会使用分群规则去重新计算，从而获取最新的数据结果

<img src="/assets/OK9tb2ay4ox1sVxhgy2cPMHmnIe.png" src-width="3068" src-height="1704" align="center"/>

#### 导入创建用户分群

通过导入指定 id 的名单来创建分群，系统会将导入的 id 进行匹配，匹配成功的 id 则保存到分群的结果中，导入 id 需为用户的唯一标识：member_id

<div class="grid gap-3 grid-cols-2">
<div>
<img src="/assets/A1xAb3WjPoDb7PxeOm3cYnFdnXb.png" src-width="1542" src-height="1546"/>
</div>
<div>
<img src="/assets/KJjjbSKjPoMPcoxkE9xc2hoonsc.png" src-width="1536" src-height="1684" align="center"/>
</div>
</div>

#### 管理用户分群

可以在用户分群列表中观察到已创建的全部分群信息，并进行编辑、下载、删除等管理操作。

用户分群列表支持以下查询：

- 支持根据分群的名称、创建方式、创建人、更新时间进行筛选

用户分群列表支持以下操作：

- 分群详情查看：查看分群的具体配置规则
- 分群编辑：编辑分群的条件，名称等信息
- 分群下载：下载分群结果中所包含的 member_id 的列表文件
- 分群删除：删除分群数据

