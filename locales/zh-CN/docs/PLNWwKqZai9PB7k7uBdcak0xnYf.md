---
title: 交易限额
slug: PLNWwKqZai9PB7k7uBdcak0xnYf
sidebar_position: 8
---


# 交易限额

## 适用场景

该菜单提供一个完整维度来管理交易限额，其维度包含：

公司层面、客户层面、证券层面、交易员层面的交易限额控制

- 可限制公司整体的单日限额、所有客户的单日限额、所有证券的每日交易限额
- 可设定单个或批量客户的交易限额 
- 可设定单个或批量证券的交易限额 
- 可对交易员进行提示、批核、拒绝的限额设定
- 优先级：客户限额/证券限额/交易员限额/客户类别限额/多维度限额&gt;全局限额。

## 前置条件

无

## 操作说明

菜单入口：风控管理 &gt; 交易限额

### 全局限额

该菜单展示所有的限额代码，若需新建限额代码（现有代码不支持规则），需联系长桥处理。

通过列表操作项的【开启】和【关闭】可以生效/失效对应限额

<img src="/assets/WAZ3b7NTKo98rExkuqGc7QIInSc.png" src-width="3266" src-height="853" align="center"/>

也可以编辑限额规则：

<img src="/assets/Or7abKxpJoQwcNxARiXcaqXcnwb.png" src-width="3276" src-height="1638" align="center"/>

重点字段说明如下：

<table header_column="1" header_row="1">
<colgroup>
<col width="172"/>
<col width="612"/>
</colgroup>
<thead>
<tr><th><p>字段名称</p></th><th><p>说明</p></th></tr>
</thead>
<tbody>
<tr><td><p>限额币种</p></td><td><p>无：则为纯数量的判断，与金额无关<br/>HKD：则全部转化为 HKD 计算限额<br/>USD：则全部转化为 USD 计算限额 </p></td></tr>
<tr><td><p>限制的条件类型</p></td><td><p>可选项为：&gt;=， &gt;， =&lt;， &lt;，无限，限制<br/>无限类型无需填阈值，其他均需填入阈值，仅限数字格式</p></td></tr>
</tbody>
</table>

规则修改后需要工单审批方可生效

### 客户限额

客户限额仅支持全局限额中限额类型为「客户」的限额代码；支持单个/批量新增客户限额规则。

新增客户限额规则

<img src="/assets/Km5NbSMUXoNQ6lxyNQwcSN6unbg.png" src-width="3238" src-height="690" align="center"/>

客户限额规则配置：支持单个客户录入和批量上传创建；此处的限额名称支持自定义，即本次限额规则的名称；规则配置完成后需要工单审批方可生效

<img src="/assets/U485bLrIHo6E2qxYUECc1tsZndb.png" src-width="3252" src-height="1636" align="center"/>

注：选择限额代码后会展示限额代码启用标识，标识状态即全局限额下的代码状态，若修改此处标识可一并更改全局限额下的代码状态

如需修改客户限额规则或更改规则状态，可在列表操作项的【编辑】【设为生效】【设为失效】操作；编辑完成后需要工单审批方可生效

<img src="/assets/Rmc6be8gIotzRXxcnCYckShlnid.png" src-width="3327" src-height="735" align="center"/>

### 证券限额

证券限额仅支持全局限额中限额类型为「证券」的限额代码；支持单个/批量新增证券限额规则

新增证券限额规则

<img src="/assets/MJGHbmwdTovJBAxoVElcrXdLnTb.png" src-width="3220" src-height="698" align="center"/>

证券限额规则配置：支持单个证券代码录入和批量上传创建；此处的限额名称支持自定义，即本次限额规则的名称；规则配置完成后需要工单审批方可生效

<img src="/assets/CgWfbTDHUozPfPxSkQgcSKzsnDf.png" src-width="3262" src-height="1628" align="center"/>

注：选择限额代码后会展示限额代码启用标识，标识状态即全局限额下的代码状态，若修改此处标识可一并更改全局限额下的代码状态

如需修改证券限额规则或更改规则状态，可在列表操作项的【编辑】【设为生效】【设为失效】操作；编辑完成后需要工单审批方可生效

### 交易员限额

交易员限额仅支持全局限额中限额类型为「交易员」的限额代码。

新增交易员限额规则

<img src="/assets/NVUlbXuHUoDOkNxoLercnds2nHe.png" src-width="3244" src-height="710" align="center"/>

交易员限额规则配置：此处的限额名称支持自定义，即本次限额规则的名称；规则配置完成后需要工单审批方可生效

<img src="/assets/UQsFbnCz4oBRjXx6BZCcHMeJnQe.png" src-width="3298" src-height="1640" align="center"/>

注：选择限额代码后会展示限额代码启用标识，标识状态即全局限额下的代码状态，若修改此处标识可一并更改全局限额下的代码状态

如需修改交易员限额规则或更改规则状态，可在列表操作项的【编辑】【设为生效】【设为失效】操作；编辑完成后需要工单审批方可生效

### 客户类别限额

客户类别限额仅支持全局限额中限额类型为「客户」的限额代码。

新增客户类别限额规则

<img src="/assets/PdTkbZULNobZY2xksH6cgkwtnYd.png" src-width="3248" src-height="836" align="center"/>

客户类别限额规则配置：此处的限额名称支持自定义，即本次限额规则的名称；规则配置完成后需要工单审批方可生效

<img src="/assets/T0aab4f6aoY3uCxdb8AcMrninRe.png" src-width="3274" src-height="1604" align="center"/>

注：选择限额代码后会展示限额代码启用标识，标识状态即全局限额下的代码状态，若修改此处标识可一并更改全局限额下的代码状态

如需修改客户类别限额规则或更改规则状态，可在列表操作项的【编辑】【设为生效】【设为失效】操作；编辑完成后需要工单审批方可生效

### 多维度限额

多维度限额仅支持全局限额中限额类型为「多维度」的限额代码。

新增多维度限额规则

<img src="/assets/TJJsb2EBxoqdORxH8spcWOq4nEb.png" src-width="3224" src-height="558" align="center"/>

多维度限额规则配置：此处的限额名称支持自定义，即本次限额规则的名称；规则配置完成后需要工单审批方可生效

<img src="/assets/NWYKbOwxgoqkcvxF6Pocrk3pnjg.png" src-width="3254" src-height="1628" align="center"/>

注：选择限额代码后会展示限额代码启用标识，标识状态即全局限额下的代码状态，若修改此处标识可一并更改全局限额下的代码状态

如需修改多维度限额规则或更改规则状态，可在列表操作项的【编辑】【设为生效】【设为失效】操作；编辑完成后需要工单审批方可生效

