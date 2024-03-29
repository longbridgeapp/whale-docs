---
title: 标准活动管理
slug: GUtBwj3CninF35k2Isrc5HFJnzd
sidebar_position: 4
---


# 标准活动管理

## 适用场景

想要选中活动模版，创建对应规则，让系统按照规则判断给用户自动发奖

## 前置条件

在创建活动之前，您需要先创建好活动奖励（权益系统中创建卡券、实物模版）

## 操作说明

菜单入口：活动系统 &gt; 标准活动管理

### 活动配置流程

适用：运营人员，活动系统涉及到下列几个主体：

- 活动系统：运营人员负责配置管理在线活动
- 用户分群：圈定目标用户，以及活动过程中资产相关数据获取
- 权益系统：关联相关活动奖励

<img src="/assets/OfZab8MYcoEPPUx8a5ycu2TDnUc.jpeg" src-width="2190" src-height="894" align="center"/>

### 该菜单页的功能说明

执行菜单：运营系统&gt; 活动系统&gt;标准活动管理

本作业可以维护管理标准活动

- 上层：可选择活动模版进行创建
- 下层：可对已创建好的活动纪录进行查询

<img src="/assets/J1WNbXNUiouVlzxqdkLcfuf4nfg.png" src-width="3230" src-height="1588" align="center"/>

活动管理列表字段说明

<table header_column="1">
<colgroup>
<col width="111"/>
<col width="753"/>
</colgroup>
<tbody>
<tr><td><p>字段名称</p></td><td><p>配置说明</p></td></tr>
<tr><td><p>序号</p></td><td><p>填写的名称将最终展示在用户的奖励资讯中，需要谨慎填写。可配置多语言，支持中文简体、中文繁体、英语三种语言标题配置，配置好后将更具用户手机系统语言默认展示对应语言。若无需多语言展示则三个语言标题都配置统一语言标题即可。</p></td></tr>
<tr><td><p>活动代码</p></td><td><p>活动有效时间，即用户必须在活动时间内完成对应任务才可获得奖励</p></td></tr>
<tr><td><p>活动名称</p></td><td><p>关联对应的用户分群，设置目标用户后则仅该用户范围内的用户才可参与活动。</p></td></tr>
<tr><td><p>延时时间</p></td><td><p>活动发奖任务时效时间。由于活动任务需要用户分群给出准确数据，因此会有些许延时。</p>
<ul>
<li>五分钟：一般对于只是开户注册活动任务的活动设置 5 分钟延时即可</li>
<li>一天：对于有入资、转仓等用户任务列表的活动，设置一天延时</li>
</ul></td></tr>
<tr><td><p>活动类型</p></td><td><p>按照不同类型进行选择</p>
<ul>
<li>常规活动：活动数据为累计相加的数据，计入最终给用户的邀请获得奖励总数据中展示。同一时间段内一个用户只可参加一个常规活动，获得一个活动奖品</li>
<li>营销活动：不限制用户参与次数且不计入用户基础邀请活动所得奖励总数中，比如：用户助力活动等等短期邀请活动</li>
</ul></td></tr>
<tr><td><p>属性</p></td><td><ul>
<li>新用户：新用户活动（仅基础活动）</li>
<li>老用户：老用户活动（仅基础活动）</li>
<li>固定奖励：邀请一个新用户完成任务即获得奖励（仅邀请活动）</li>
<li>阶梯奖励：邀请多人完成任务解锁不同阶梯奖励并进行叠加，依数量递增（仅邀请活动）</li>
</ul></td></tr>
<tr><td><p>活动状态</p></td><td><p>当前活动状态：</p>
<ul>
<li>草稿（已创建活动但还未点击发布之前）：编辑、删除、发布</li>
<li>未开始（发布后活动还未开始）：编辑、关闭</li>
<li>运行中（已过活动开始时间未到结束时间）：编辑、关闭</li>
<li>已结束（已过活动结束时间）：查看</li>
</ul></td></tr>
<tr><td><p>活动时间</p></td><td><p>显示开始时间 - 结束时间；</p></td></tr>
<tr><td><p>创建时间</p></td><td><p>活动创建时间</p></td></tr>
</tbody>
</table>

### 活动常见达标任务类型及说明

<table header_column="1">
<colgroup>
<col width="100"/>
<col width="352"/>
<col width="412"/>
</colgroup>
<tbody>
<tr><td><p><strong>任务类型</strong></p></td><td><p><strong>任务说明</strong></p></td><td><p><strong>计算公式</strong></p></td></tr>
<tr><td><p>注册</p></td><td><p>完成注册动作</p></td><td></td></tr>
<tr><td><p>下载</p></td><td><p>完成注册并且下载登录 App 端内（会判断是否新设备登录，若不是新设备登录 App 则会判定为不符合要求）</p></td><td></td></tr>
<tr><td><p>开户</p></td><td><p>完成开户动作且开户审批通过，开户成功</p></td><td></td></tr>
<tr><td><p>净转入</p></td><td rowspan="3"><p>活动期间内，账户内资金是否达到设定阈值</p></td><td><p>入金 + 转入 - 出金 - 出仓的累计金额</p></td></tr>
<tr><td><p>净入金</p></td><td><p>入金 - 出金 - 出仓的累计金额</p></td></tr>
<tr><td><p>净转仓</p></td><td><p>转入+min（0，净入金金额）的累计金额</p></td></tr>
<tr><td><p>首次入金</p></td><td rowspan="2"><p>活动期间内，指定账户历史用户端内首次入金/转仓金额达到设定阈值</p></td><td><p>首次入金总金额</p></td></tr>
<tr><td><p>首次转仓</p></td><td><p>首次转仓总金额</p></td></tr>
<tr><td><p>企业认证</p></td><td><p>完成设置的指定企业认证，或者只完成企业认证动作</p></td><td></td></tr>
</tbody>
</table>

### 
