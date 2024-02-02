---
title: 资产帐户
slug: Xd2qwHVugivJ2fkmA0zc7939npb
sidebar_position: 0
---


# 资产帐户

## 资产定义

### 资产介绍

资产帐户目前主要包含两大部分：**资产帐本**和**资产基础管理能力**。

资产帐本：详细记录所有客户业务场景资产变更的流水记录。帐本包含但不仅限于以下信息：

资产帐本提供的记帐能力可使任何资产发生变动后，不同账户的流水都能够清晰准确，保障上下游的业务资产对帐。

资产基础管理能力：资产还提供了调帐、资产冻结/解冻、业务码管理的基础能力，辅助更加便捷地管理资产。

### 资产架构

<img src="/assets/Fh2Qb48emomrhTxta4CctwCvnfc.png" src-width="2438" src-height="1422" align="center"/>

## 核心场景及业务

详细准确的资产流水记录：提供所有资产流水的查询，方便上下游业务数据对帐

便捷的资产处理功能：

## 名词释义

### 帐**户类别**

<table header_column="1" header_row="1">
<colgroup>
<col width="124"/>
<col width="116"/>
<col width="485"/>
</colgroup>
<thead>
<tr><th><p>术语 / 中文</p></th><th><p>术语 / 英文</p></th><th><p>说明</p></th></tr>
</thead>
<tbody>
<tr><td><p>业务账户</p></td><td><p>BUSINESS</p></td><td><p><strong>可用不可提</strong><br/>一般的交易发生，都会先对业务账户做处理，业务账户的现金可用不可提</p></td></tr>
<tr><td><p>结算账户</p></td><td><p>SETTLEMENT</p></td><td><p><strong>可用可提</strong><br/>清结算交收后，会把业务账户的钱或券，交收（结转）到结算账户</p></td></tr>
<tr><td><p>外部过渡户</p></td><td><p>EXTERNAL</p></td><td><p><strong>不可用不可提</strong><br/>部分业务实际上游已扣款，但没有资产加进来，例如 IPO 先扣款，但没有持仓，业务上为了使得用户总资产不变，会把扣掉的钱额外加在外部过渡户上</p></td></tr>
<tr><td><p>内部过渡户</p></td><td><p>INTERNAL</p></td><td><p>暗盘买入时，先扣 INTERNAL 账户的钱，暗盘买入结转后，INTERNAL 账户的钱再加回来，再扣除 business 的钱</p></td></tr>
<tr><td><p>结算过渡户</p></td><td><p>SETTLEMENT_INTERNAL</p></td><td><p>中台的结算过渡户，出掉一笔钱后会影响可用，在部分业务影响需要只影响可提（换汇、余额通申购中间状态），会从结算过渡户扣钱</p></td></tr>
<tr><td><p>换汇过渡户</p></td><td><p>EXCHANGE</p></td><td><p>部分业务（换汇、余额通申购中间状态），从结算过渡户扣钱之后，需要在换汇过渡户加钱，加完之后用户总资产不变</p></td></tr>
</tbody>
</table>

### **资产变更类型**

<table header_column="1" header_row="1">
<colgroup>
<col width="124"/>
<col width="601"/>
</colgroup>
<thead>
<tr><th><p><strong>术语 / 中文</strong></p></th><th><p><strong>说明</strong></p></th></tr>
</thead>
<tbody>
<tr><td><p>冻结</p></td><td><p>业务提交后，成功前，一般需要先冻结现金/证券，使得这部分资产不可被重复使用</p></td></tr>
<tr><td><p>解冻</p></td><td><p>业务结束后，会解冻</p></td></tr>
<tr><td><p>出帐</p></td><td><p>相当于对资产进行扣减</p></td></tr>
<tr><td><p>入帐</p></td><td><p>相当于资产进行增加</p></td></tr>
<tr><td><p>转帐</p></td><td><p>主子账户间资金/持仓调拨</p></td></tr>
</tbody>
</table>

