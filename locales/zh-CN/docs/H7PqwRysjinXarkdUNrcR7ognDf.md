---
title: 快速上手
slug: H7PqwRysjinXarkdUNrcR7ognDf
sidebar_position: 1
---


# 快速上手

# 概述

WHALE 资产账户主要用于查询资产流水，并处理客户资产，含资产的冻结解冻、调账、账户间资产调拨等。

# 快速上手

您需要获取以下授权后方可正常使用系统功能

<table header_row="1">
<colgroup>
<col width="380"/>
<col width="346"/>
</colgroup>
<thead>
<tr><th><p>权限名称</p></th><th><p>权限说明</p></th></tr>
</thead>
<tbody>
<tr><td><p>PortfolioFull<br/>管理账户、冻结/解冻、调账、资产调拨、业务码的权限</p></td><td><p>资产账户下所有功能的全部权限</p></td></tr>
</tbody>
</table>

## 核心场景及业务

1. 详细准确的资产流水：提供所有资产流水的查询，方便上下游业务数据对账
2. 便捷的资产处理功能：
    1. 提供临时对业务账户资产调增/调减的临时调账功能，帮助及时处理客户盘中问题
    2. 提供手工调整结算账户资产的能力，方便处理账户资产异常问题
    3. 提供账户间的资产划拨能力，高效分配主子账户资产
    4. 灵活的资产账户操作功能：遇特定风险或业务状况时，支持手动冻结/解冻对应客户资产账户的金额或数量
    5. 客户端流水明细自定义：根据业务个性化需求，支持自定义修改客户端展示的流水业务名称

## 名词释义

### 账**户类别**

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
<tr><td><p>出账</p></td><td><p>相当于对资产进行扣减</p></td></tr>
<tr><td><p>入账</p></td><td><p>相当于资产进行增加</p></td></tr>
<tr><td><p>转账</p></td><td><p>主子账户间资金/持仓调拨</p></td></tr>
</tbody>
</table>

