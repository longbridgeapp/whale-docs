---
title: 投放系统
slug: HFS5wXhvXi0yh7kKbllc8Xp4n9c
sidebar_position: 0
---


# 投放系统

投放系统是以用户全生命周期运营为核心策略导向的数字化运营作业设计，可以在用户生命周期的不同阶段，实现客户人群的精准触达，提升关键节点核心指标和劵商企业行销效率

主要是透过下面两种维度面向来达成：

通过选取合适的触达内容、合理的触达时机、符合运营策略的目标人群，组合 App Push、App Banner、App Popup、SMS、Email 等多种触达技术通道，精准的触达客户

每一个投放运营计划都是在：触发条件/受众用户/触达配置/目标设置 的维度下作运营计划项目的管理

<img src="/assets/QiXsb2jkmo5RChxhXVTctMNNn2O.jpeg" src-width="1286" src-height="454" align="center"/>

## 前置条件

您需要获取以下授权后方可正常使用系统功能

<table header_column="1" header_row="1">
<colgroup>
<col width="293"/>
<col width="392"/>
</colgroup>
<thead>
<tr><th><p><strong>权限名称</strong></p></th><th><p><strong>权限说明</strong></p></th></tr>
</thead>
<tbody>
<tr><td><p>使用运营计划、人群画像、触达通道的权限<br/>DeliverySystemReadOnly</p></td><td><p>增删改查个人名下运营计划；创建、管理、查看用户分群；增删改查 Banner、弹窗、Push、SMS、Email</p></td></tr>
</tbody>
</table>

- 您需要接入 Whale 柜台后方可使用人群画像中的规则创建用户分群
- 您需要使用 Whale 的白标 App 产品并完成交付配置后，方可使用 Banner、弹窗、Push 通道触达用户
- 您需要完成消息服务的交付配置后，方可使用 SMS、Email 通道触达用户

## 基本概念

### 名词解释

<table header_column="1" header_row="1">
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<thead>
<tr><th><p><strong>名词</strong></p></th><th><p><strong>解释</strong></p></th></tr>
</thead>
<tbody>
<tr><td><p><strong>运营计划</strong></p></td><td><p>运营计划是投放系统的基础模块，帮助运营人员快速创建计划，以某种触达方式（短信、邮件、APP Banner、App 推送、APP 弹窗等）对满足一定条件的目标受众进行触达。如，新用户的任务触达、开户未入金用户的专题活动触达等。</p></td></tr>
<tr><td><p><strong>定时型 - 单次</strong></p></td><td><p>运营计划的一种，主要用于创建单次执行的计划，固定时间发送。如，活动预热的推送提醒。</p></td></tr>
<tr><td><p><strong>定时型 - 重复</strong></p></td><td><p>运营计划的一种，主要用于创建重复执行的计划，每个周期固定的一个或多个时间发送。如，新用户首个周期内的新人任务礼包领取提醒。</p></td></tr>
<tr><td><p><strong>获取型-API</strong></p></td><td><p>运营计划的一种，主要用于创建被动请求型计划，当用户启动 APP 后进行触达，包含 APP Banner 和 APP 弹窗。如，新股认购的弹窗和 Banner 提醒。</p></td></tr>
<tr><td><p><strong>触发型 - 完成 A</strong></p></td><td><p>运营计划的一种，主要用于创建触发型计划，当用户完成某个行为后发送。如用户启动 APP 后开户活动提醒。</p></td></tr>
<tr><td><p><strong>触发条件</strong></p></td><td><p>运营计划的触发时机，运营人员通过选择不同的计划类型，设置不同的触发时间点或触发时机，从而决定该投放计划在什么条件下被执行。</p></td></tr>
<tr><td><p><strong>触发时间</strong></p></td><td><p>运营计划的触发时间点，运营人员按照实际业务需求和用户习惯设置计划在何时投放给用户</p></td></tr>
<tr><td><p><strong>起止时间</strong></p></td><td><p>运营计划生效的时间窗口，有起止时间的计划，在窗口期内可被正常执行，不在窗口期之内时，则该计划变更为停止运行状态。</p></td></tr>
<tr><td><p><strong>参与限制</strong></p></td><td><p>对于定时型－重复计划、触发型－完成 A 这 2 种多次触发的计划，可以允许用户在一定时间段内多次参与当前计划，且可以限制次数，该限制仅对当前计划生效。默认是不允许用户在活动期间内多次参与的。</p></td></tr>
<tr><td><p><strong>触达通道</strong></p></td><td><p>投放系统提供了 5 种触达用户的通道，在 APP 上触达：弹窗、推送、Banner，在 APP 外触达：短信、邮件。</p></td></tr>
<tr><td><p><strong>勿扰模式</strong></p></td><td><p>设置用户勿扰时段以及勿扰时段内的推送策略，该设置仅对当前计划生效，仅对邮件，短信，Push 通道生效。</p></td></tr>
<tr><td><p><strong>实验组</strong></p></td><td><p>AB 实验的固有组别，与对照组相对。运营人员可圈选一定比例的用户进入实验组。</p></td></tr>
<tr><td><p><strong>对照组</strong></p></td><td><p>AB 实验的固有组别，运营人员可圈选一定比例的用户进入该组。对照组支持不做任何的触达。</p></td></tr>
<tr><td><p><strong>首要目标</strong></p></td><td><p>用来衡量运营计划的效果，用户被触达后，在自定义的时间段内完成转化事件，则认为完成目标。首要目标与次要目标的追踪是相互独立的，是为了多维度去评估活动效果。数据详情默认显示的转化图表、转化率指标都是首要目标的。</p></td></tr>
<tr><td><p><strong>次要目标</strong></p></td><td><p>用来衡量运营计划的效果，用户被触达后，在自定义的时间段内完成转化事件，则认为完成目标。次要目标与首要目标的追踪是相互独立的，是为了多维度去评估活动效果。数据详情默认显示的转化图片、转化率指标都是首要目标的，不是次要目标的。</p></td></tr>
<tr><td><p><strong>用户分群</strong></p></td><td><p>用户分群是投放系统的重要模块，帮助运营人员通过用户属性或用户行为快速将目标受众创建为一个集合。如，账户总资产大于 10000USD 且 注册日期大于 2022 年 1 月 1 日</p></td></tr>
<tr><td><p><strong>用户属性</strong></p></td><td><p>用户属性是用户分群规则创建的核心数据来源，本质是用户标签的列表，支持不同用户标签通过且或关系的双层组合筛选目标受众。用户属性的数据来源是用户标签，需要根据不同业务场景的需求进行定义，数据聚合加工后支持。系统默认提供了 8 个预置用户标签。</p></td></tr>
<tr><td><p><strong>用户行为</strong></p></td><td><p>用户行为是用户分群规则创建的辅助数据来源，本质是用户行为事件的列表，支持通过且或关系的双层组合，限定事件的属性来筛选目标受众。用户行为的数据来源是数据采集，需要根据不同场景的需求进行采集加工后支持。系统默认提供了 APP 启动的行为事件。</p></td></tr>
<tr><td><p><strong>用户标签</strong></p></td><td><p>是通过对用户属性信息、行为信息、业务信息进行加工后所产生的特征标记，它的值具有高度概括、相互独立及可枚举穷尽的特点。标签在数据结构中包含：标签名称及其值。</p></td></tr>
<tr><td><p><strong>受众预估</strong></p></td><td><p>无论哪种计划类型，受众预估结果只和分群的配置规则有关<br/>受众预估的数值为截止操作时间，符合当前规则配置条件的目标用户去重 member_id 的数量</p></td></tr>
<tr><td><p><strong>目标完成率</strong></p></td><td><p>目标完成率=目标完成人数/计划触达人数*100%</p></td></tr>
<tr><td><p><strong>目标完成</strong></p></td><td><p>表示目标完成人数，如：一个计划的首要目标为触达后 2 小时内完成 APP 启动，则目标完成人数为（计划触达时间起的 2 小时内，有发生 APP 启动行为的去重用户 member_id 数量）</p></td></tr>
<tr><td><p><strong>计划触达</strong></p></td><td><p>表示计划触达人数，如：一个计划的目标受众用户为 10000，实际计划执行成功后触达的用户为 9999，则计划触达人数为 9999</p></td></tr>
</tbody>
</table>

### 指标解释

<table header_column="1">
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p><strong>指标</strong></p></td><td><p><strong>解释</strong></p></td></tr>
<tr><td><p><strong>曝光人数</strong></p></td><td><p>以 Banner 为例，去重计算 ID 为 1 的 Banner 被看到的用户数量，记为曝光人数</p></td></tr>
<tr><td><p><strong>曝光次数</strong></p></td><td><p>以 Banner 为例，计算 ID 为 1 的 Banner 被看到的次数，记为曝光次数</p></td></tr>
<tr><td><p><strong>点击人数</strong></p></td><td><p>以 Banner 为例，去重计算 ID 为 1 的 Banner 被点击的用户数量，记为点击人数</p></td></tr>
<tr><td><p><strong>点击次数</strong></p></td><td><p>以 Banner 为例，计算 ID 为 1 的 Banner 被点击的次数，记为点击次数</p></td></tr>
<tr><td><p><strong>点击转化率</strong></p></td><td><p>以 Banner 为例，点击人数/曝光人数*100% 的结果为点击转化率</p></td></tr>
<tr><td><p><strong>点击曝光率</strong></p></td><td><p>以 Banner 为例，点击次数/曝光次数*100% 的结果为点击曝光率</p></td></tr>
</tbody>
</table>

## 运营计划

### 操作说明

每一个运营计划都是依下列顺序来操作：

1. 第一步：选择创建计划
2. 第二步：设置触发条件
3. 第三步：选择受众用户
4. 第四步：配置触达规则
5. 第五步：设置触达目标

以下分别 整理几个常见运营计划，逐步导引来建立计划

### 如何创建一个定时型 - 单次计划？

#### 适用场景

- 场景描述**：**定向召回流失交易用户
- 目标受众**：**假设帐户资产＜200，历史交易过 5 次以上的用户
- 运营策略：给目标受众发放任务币，配置专属兑换活动，并发邮件通知
- 效果评估：计划上线后，追踪目标受众的 APP 启动情况、兑换情况、入金交易情况

#### 使用说明

**第一步：选择创建计划**

菜单入口：投放系统&gt;运营计划

点击右上角‘创建计划’，设置计划名称（例：12 月回归奖励活动）

<img src="/assets/FHZBbZzIyovYRdxo2tjcPGCFnyd.png" src-width="3174" src-height="1576" align="center"/>

**第二步：设置触发条件**

配置条件参考如下：选择计划类型为定时型 - 单次，2022-12-29 的 14:00 触发计划，对受众用户进行触达

<img src="/assets/PNnjbX7hAoWuv0xTBp2c0o3NnMh.png" src-width="2534" src-height="964" align="center"/>

**第三步：选择受众用户**

账户总资产小于 200 美金 且 累计交易次数大于 5 次

<img src="/assets/E1bMb5mC7o9rPRxB5i5cwn1onZg.png" src-width="2830" src-height="1576" align="center"/>

**第四步：配置触达规则**

以邮件的方式给用户发送 APP 新版本升级介绍

<img src="/assets/MQZkboyFpo0VXTxWFohc9qrcnZa.png" src-width="2218" src-height="1220" align="center"/>

**第五步：设置触达目标**

用户收到邮件后，1 天内完成 APP 启动

<img src="/assets/MHYnbIPiqoZ7rlxPQw0cV2t5n5c.png" src-width="2158" src-height="1060" align="center"/>

### 如何创建一个 定时型 - 重复 计划？

#### 适用场景

场景描述：定期向开户用户推送邀请活动

目标受众：开户且活跃用户

运营策略：通过邀请活动 offer 作为利益点，加深开户用户邀请认知，邀请身边朋友开户即可领取活动奖励

效果评估：邀请活动 H5 的浏览量、目标受众邀请开户情况

#### 使用说明

**第一步：选择创建计划**

菜单入口：投放系统&gt;运营计划

点击右上角‘创建计划’，设置计划名称（例：定期邀请开户活动）

<img src="/assets/FYPibMysgo4dMOxcqBLc7KhZnBC.png" src-width="3174" src-height="1576" align="center"/>

**第二步：设置触发条件**

配置条件参考如下：选择计划类型为定时型 - 重复，设置起止时间为 2023-01-01 至 202-01-31，设置触达时间为每周一和每周五的 12:30，设置触达次数限制为同一个用户 5 天内最多收到 1 次邀请活动

<img src="/assets/VaUwbZCDAoDUpgxMrnvcvijNnMe.png" src-width="2638" src-height="1170" align="center"/>

**第三步：选择受众用户**

配置条件如下：已开户用户 且 最近 APP 启动时间在 2022-12-01 至 2023-01-31

<img src="/assets/COVlbwKMoogGl1xPQHncXUWenth.png" src-width="2836" src-height="1588" align="center"/>

**第四步：配置触达规则**

以短信的方式给用户发送邀请活动

<img src="/assets/TGVcbhSPToCsiGxTOyzcOoZWnjg.png" src-width="1814" src-height="1024" align="center"/>

**第五步：设置触达目标**

用户收到邮件后，4 小时内完成邀请活动页面的浏览

<img src="/assets/ImTNbJyoQo3Fbpxx7HycJtqWnCb.png" src-width="2546" src-height="1122" align="center"/>

### 如何创建一个 获取型-API 计划？

#### 适用场景

场景描述：首发认购预热

目标受众：全部用户

运营策略：通过 APP 弹窗的强提醒方式，引导用户参与认购

效果评估：计划上线后，追踪目标受众的 APP 弹窗打开率

#### 使用说明

**第一步：选择创建计划**

菜单入口：投放系统&gt;运营计划

点击右上角‘创建计划’，设置计划名称（例：越南概念 ETF 认购预热）

<img src="/assets/RXGnb5tN6o2NJex1665cj03inyg.png" src-width="3174" src-height="1576" align="center"/>

**第二步：设置触发条件**

配置条件参考如下：选择计划类型为获取型-API

<img src="/assets/FvY4bmlpeohQ5YxRNMmccdddn6B.png" src-width="2470" src-height="790" align="center"/>

**第三步：选择受众用户**

配置条件如下：全部用户

<img src="/assets/TYHGbBb0Bok0bzxFclncIqMFn3c.png" src-width="2824" src-height="1586" align="center"/>

**第四步：配置触达规则**

通过弹窗触达用户

<img src="/assets/KMuCb3qfmoG6hgxyHeRcI7Ainuc.png" src-width="1788" src-height="1022" align="center"/>

<img src="/assets/OzrTbBeSToJRChxYmHNcNc54nBe.jpeg" src-width="1080" src-height="2234" align="center"/>

**第五步：设置触达目标**

用户收到弹窗后，5 分钟内，打开弹窗且弹窗名称为南方东英越南 30

<img src="/assets/FwfabbeQKoLfcTxzbjtcqivJnMb.png" src-width="2208" src-height="1070" align="center"/>

### 如何创建一个 触发型 - 完成 A 计划？

#### 适用场景

场景描述：新用户注册 12 天内，进行持续的内容触达或引导

目标受众：新注册用户

运营策略：通过多种触达方式组合，在用户注册完成后的不同时间点，向用户触达不同类型的内容

效果评估：追踪目标受众的转化情况、留存情况

#### 使用说明

从新用户注册 1 小时到 12 天，配置多个触发型计划，对用户进行内容投放

<img src="/assets/JptvbbpjXo8hjKxlMRhcysz4nAf.png" src-width="3454" src-height="1574" align="center"/>

以注册 4 天关注股票引导为例进行说明

**第一步：选择创建计划**

菜单入口：投放系统&gt;运营计划

点击右上角‘创建计划’，设置计划名称（例：注册 4 天关注股票引导）

<img src="/assets/AEEkbpeYBod3edxuqeHc8bzlnSg.png" src-width="3174" src-height="1576" align="center"/>

**第二步：设置触发条件**

配置条件参考如下：选择计划类型为 触发型 - 完成 A，设置触发事件为注册成功，设置延迟 4 天后对用户触达，设置起止时间为 2023-01-01 至 2023-06-30，设置参与次数为 1 次

<img src="/assets/HznSbp37qof4BWx8iAkcFgVsnfc.png" src-width="2854" src-height="1478" align="center"/>

**第三步：选择受众用户**

2023-01-01 至 2023-06-30 期间新注册的用户

<img src="/assets/Y1Z8by1YDotim8x8tVJcd8k8n8I.png" src-width="2858" src-height="1582" align="center"/>

**第四步：配置触达规则**

通过 Push 触达用户

<img src="/assets/M5H3bY6yBoORxJxtPz4c7RcNnQd.png" src-width="2206" src-height="1178" align="center"/>

<img src="/assets/E2GqbIYQPoo3YlxV0FmcqCGKnFc.png" src-width="1284" src-height="771" align="center"/>

**第五步：设置触达目标**

用户收到 Push 后，5 分钟内，完成 Push 点击，点击 push 的标题为：顺藤摸瓜，选到更多好股票

<img src="/assets/CrwRbE4dUopwVbxxLZScmqRtnZk.png" src-width="2200" src-height="1188" align="center"/>

### 管理运营计划

菜单入口：投放系统&gt;运营计划

当完成运营计划后，就可以管理运营计划

系统支持以‘看板模式’与‘列表模式’来切换管理 所配置的运营计划

<img src="/assets/KPJvb0bK6o3Kyhx0DwJc8JBtn1d.png" src-width="3074" src-height="1584" align="center"/>

运营计划列表支持以下查询：

支持根据计划的名称、ID、计划类型、计划状态、审核状态、创建人进行查询

运营计划列表右侧纪录区支持以下操作：

- 计划启停：控制已审核通过的计划的启用和停用状态
- 计划详情：查看计划的配置规则
- 计划编辑：修改计划的配置规则，进行重新审核执行
- 计划删除：删除已经创建的计划

## 人群画像

### 怎样创建用户分群？

投放系统支持通过 2 种方式创建用户分群，分别是规则创建和导入创建，您可以根据自己的需求选择

<img src="/assets/B2Hib6DhgosUGOx9pPRcY52Fnk5.png" src-width="582" src-height="366" align="center"/>

#### 规则创建用户分群

基于用户属性和用户行为，设置规则创建分群，您可以根据自己的需求选择：

1. 仅使用用户属性，2。仅使用用户行为，3。同时使用用户属性和用户行为

**结果更新说明：**已经创建并保存成功的分群，在每次被请求时，均会使用分群规则去重新计算，从而获取最新的数据结果

<img src="/assets/EAP1buHXjoM2VqxFJbic9aOdnpg.png" src-width="3068" src-height="1704" align="center"/>

#### 导入创建用户分群

通过导入指定 id 的名单来创建分群，系统会将导入的 id 进行匹配，匹配成功的 id 则保存到分群的结果中，导入 id 需为用户的唯一标识：member_id

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[52%]" width-ratio="52">
<img src="/assets/X5bCbzB5moUmiuxnw6acNP5snkd.png" src-width="1542" src-height="1546"/>
</div>
<div class="w-[47%]" width-ratio="47">
<img src="/assets/KI1Ubf71aoYZfbxN6DDcnDD8nCf.png" src-width="1536" src-height="1684" align="center"/>
</div>
</div>

## 触达通道

通道管理是针对与  APP 常见交互方式，例：Banner 横条、App 弹窗、App Push、邮件、短信等通道内容管理。

其中横幅广告（Banner），是个呈现一个广告推广内容的图片，放置在 App 等互联网页面上，是互联网广告中最基本的广告形式，一般是使用 GIF 格式的图像档，可以使用静态图形，或新兴的 Rich Media Banner（丰富媒体 Banner）能赋予横幅更强的表现力和交互内容。

### 如何创建一个 App Banner？

以下是创建 App Banner 的步骤顺序：

- 选择 Banner 类型：如 - 需要创建一个在市场首页位置的 Banner
- 设置 Banner 顺序：同一个位置的 Banner 有多个配置上时，按照数字从小到大的顺序进行轮播
- 设置 Banner 名称：用于区分 Banner，作为业务标识
- 设置 Banner 图片：有裁剪和普通上传 2 种方式，按需选择
- 设置 Banner 跳转链接：一般使用 Pagehub 生成 H5 链接后进行配置，也可使用 App 内的 H5 页面链接
- 设置 Banner 运行周期：Banner 生效的周期，在设置周期内，Banner 生效，过期后则不再展示
- 设置 Banner 可见范围：全部用户可见 - 则 App 所有用户可以看到 Banner，投放系统可见 - 则仅计划配置中的目标受众可见

<img src="/assets/PNvdbv5HlohO9pxdvdLcg6iznFd.png" src-width="1972" src-height="1640" align="center"/>

### 如何创建一个 App 弹窗？

以下是创建 App 弹窗 的步骤顺序：

- 弹窗名称：弹窗标识名称
- 弹窗类型：头图或全图，头图代表弹窗的标题描述确认按钮等都将使用编辑的信息，全图则代表完全使用背景图作为弹窗的展示信息
- 弹窗标题：展示在 App 的标题
- 弹窗描述：展示在 App 的描述信息
- 背景图片：弹窗展示时的背景图
- 确认按钮：弹窗点击跳转的按钮所对应的文案提示
- 确认按钮 URL：点击确认按钮后，期望跳转的地址
- 频次限制：同一个用户收到同一个弹窗的次数
- 活动时间：弹窗生效的时间周期
- 展示时间：在每天的 0 点到 24 点之间，希望弹窗在什么时间段展示
- 弹窗平台：可以选择是在 2 个端显示还是只在某个单一的端进行显示
- 可见状态：选择投放系统可见则代表仅计划配置中的目标受众可见，全部用户可见则整个 App 用户可见弹窗

<img src="/assets/D2n9bTSzgoRNaCxTah8cb8QGnOh.png" src-width="1924" src-height="1644" align="center"/>

### 如何创建一个 APP Push 消息？

投放系统的触发配置提供了 Push 的自定义模板功能，可以在配置计划时直接配置内容

以下是创建 App Push  的步骤顺序：

- 选择通道为 Push
- 设置标题、内容、上传封面图片
- 选择通知行为：常用的为打开某个活动链接或跳转到新股认购的页面，具体可按需选择

<img src="/assets/Ekz0baHkXodDxFx9DVGcEdPYnIh.png" src-width="2132" src-height="1526" align="center"/>

### 如何创建一个 邮件消息？

投放系统的触发配置提供了邮件的自定义模板功能，可以在配置计划时直接配置内容

以下是创建邮件消息的步骤顺序：

- 选择通道为邮件
- 设置发件人名称、邮件标题
- 通过富文本编辑器编辑邮件正文
- 添加邮件附件、设置邮件发件邮箱

<img src="/assets/R16kbc1ekoY2sMxEQnkcCr6pnYg.png" src-width="1694" src-height="1362" align="center"/>

### 如何创建一个 短信消息？

投放系统的触发配置提供了短信的自定义模板功能，可以在配置计划时直接配置内容

以下是创建短信消息的步骤顺序：

- 选择通道为短信
- 选择短信发送地区
- 选择短信类型：投放系统一般使用营销活动
- 设置短信内容

<img src="/assets/YnwRbuqtqoaAZUxjwdccI4apnOh.png" src-width="2226" src-height="1530" align="center"/>

### 使用消息模板

投放系统的消息触达（Push、SMS、Email）同时提供了消息模板功能，可以创建日常通用消息模板，同时消息模板也接入了工单审批流程。

菜单入口：投放系统&gt;消息模板

选择要创建的消息模板（Push、SMS、Email）；

特别说明：邮件模板只需配置邮件正文内容，邮件头尾同其他系统邮件配置，无需租户配置

<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[33%]" width-ratio="33">
<img src="/assets/RKVYbZK6poE2hYx8syic6pEjn8b.png" src-width="1276" src-height="1928" align="center"/>
</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/BB0EbtNuuoA5QExyEq0cLbGcnId.png" src-width="1274" src-height="1914" align="center"/>
</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/RM3FbYML1oVRhxxhLltcPqh7nGg.png" src-width="1270" src-height="1916" align="center"/>
</div>
</div>

提交审核，审批流程需要进行配置；

审核通过，可在创建 Push、邮件、短信时，选择消息模板进行发送，无需编辑内容。

<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[30%]" width-ratio="30">
<img src="/assets/I5C4bgGxpoBgOrxvAdvcEPIlnqf.png" src-width="1346" src-height="518" align="center"/>
</div>
<div class="w-[40%]" width-ratio="40">
<img src="/assets/EORcbF1froikh8x1fTMc8sNvnjd.png" src-width="1130" src-height="322" align="center"/>
</div>
<div class="w-[29%]" width-ratio="29">
<img src="/assets/TxvWbTO8So59RyxUr3Lc5bxpnsc.png" src-width="756" src-height="302" align="center"/>
</div>
</div>

