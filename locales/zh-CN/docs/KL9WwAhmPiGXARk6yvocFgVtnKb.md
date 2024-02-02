---
title: 出金
slug: KL9WwAhmPiGXARk6yvocFgVtnKb
sidebar_position: 1
---


# 出金

# 一、系统介绍

出金功能是指投资者从其证券帐户中提取资金的操作。这个功能允许投资者将其证券帐户中的资金转移到其银行帐户或其他指定的帐户中。

Whale 系统包含了处理出金申请、提现处理、对帐、单独处理异常出金、出金记录查询等功能，由于监理与风控需求，系统的功能设计具备多角色、流程化的特色，在兼顾出金效率的同时，同步降低了资金风险。

整体业务流程如下：

<img src="/assets/HXkub6RYroZ02Dxu8HscFwVynVh.png" src-width="2146" src-height="256" align="center"/>

## 前置条件

无

# 二、操作说明

<div class="callout callout-bg-6 callout-border-6">
<p>📍 菜单入口：款项管理 - 出金</p>
</div>

## 出金申请

出金申请为用户方提出，申请的内容包含了币种、申请金额、收款银行卡与备注 4 大部分。WHALE 使用者可以手动帮助客户进行证券入仓并根据客户提交的申请进行驳回、提交审批等操作。

- 手工提现

适用于使用者联络后台操作员进行手动出金的场景，操作员需要依序填写客户的币种、申请金额、出金手续费、收款银行卡、备注资讯。如果客户有出金的证明也可以上传至系统。

<img src="/assets/ZRzCbSy2cobiO8xyckGc0WENnef.png" src-width="1192" src-height="2434" align="center"/>

- 驳回（**可批量操作）**：若客户递交的出金申请资料有误或使用者反馈本次申请无效时，操作员可以进行【驳回】操作
- 删除：若客户递交的出金申请资料有误或使用者反馈本次申请无效时，操作员也可以透过【删除】按钮直接删除目标记录
- 修改：若在提交出金申请前，发现客户递交的某笔具出金申请有问题，可在与客户确认无误后可以透过【编辑】按钮进行修正，修改后需进行工单审批，审批通过后修改内容生效。
    - 修改的范围：申请金额、出金手续费、收款银行卡、备注、凭证（重新上传）

<img src="/assets/Rs1fb06S9oIPcwxpduuc538Jnjh.png" src-width="3824" src-height="1418" align="center"/>

<img src="/assets/J15obzTgcoIJgCxCdMac3Nqtn4d.png" src-width="3322" src-height="1674" align="center"/>

- 提交（**可批量操作**）：经过操作人员初步审查无误后，可以将申请提交至下一节点的操作人员进行审核 - 提现

操作

## 提现处理

在初审人员提交出金申请后，复审操作人员需要进行提现处理。提现处理提供了 2 种方式：直接出帐与打包提审。其中：

<table>
<colgroup>
<col width="155"/>
<col width="598"/>
</colgroup>
<tbody>
<tr><td><p>出金方式</p></td><td><p>适用场景</p></td></tr>
<tr><td><p>直接出帐</p></td><td><p>出金的记录较少，且需要快速进行出金</p></td></tr>
<tr><td><p>打包提审</p></td><td><p>出金的记录较多，需要对某一时段或某一特定的客户或其他需要进行集中处理出金的情形</p></td></tr>
</tbody>
</table>

- 直接出账
    - 选择目标记录后，点选操作列的【直接出帐】
    <img src="/assets/ILdgbflgAoCa1cxWwEHcg3IUnIe.png" src-width="3826" src-height="1024"/>
    - 在弹窗中输入银行名称、银行帐户、渠道等信息，并在出帐明细中可选择是否补充银行流水信息
    <img src="/assets/YPnebbkl3oUe8excIL6ccjEXnRh.png" src-width="1674" src-height="1748" align="center"/>
    - 提交审核后，记录流转至「直接出帐待处理」页面，审核者需进行工单审批，审核通过后，完成出帐
    <img src="/assets/LPmzb6JqeoOdTHxtts7c44Uinqb.png" src-width="3810" src-height="1860"/>

- 打包提审
    - 选择目标记录后，点选批次操作行的【打包提审】，如果在打包后需要进行移除部分明细记录，可以在弹跳窗内进行操作，填好出金的银行资讯以及渠道资讯后，该批进入审核流程
    <img src="/assets/X5i5bhWzFooi44x4E8KcTHGpnHb.png" src-width="3818" src-height="1536" align="center"/>
    <img src="/assets/QD4qbupfWo7B1zxJK1Qc2EkZnKg.png" src-width="3832" src-height="1848" align="center"/>
    - 提交审核后，记录流转至「打包待处理」页面，审核者需进行工单审批，审核通过后，完成出帐
    <img src="/assets/BXf1bDshuoc31OxxOXmc2stlnMd.png" src-width="3830" src-height="1146" align="center"/>
    <img src="/assets/ZDPebIQEXo7srRx5MWmckQ2En0d.png" src-width="3826" src-height="1826" align="center"/>
    - 注：由于出金的数量与渠道限制，部分出金管道需要人工更新出金的状态，用户需要点选【检视并更新结果】进入至详情页面进行手动更新（可批量更新）
    <img src="/assets/H1RebDwAmoNqhrxR8lzcmtTgnVe.png" src-width="3910" src-height="1942" align="center"/>
    - 完成出帐后，可将出金文件下载至电脑本地留存

<img src="/assets/Ly9HbxAquoi3e9xQFoOcstz2nqg.png" src-width="3836" src-height="1826" align="center"/>

- 指标卡

若出金业务量较大，可以透过系统的分类展示卡进行精细化作业，指标卡的左右排布反映了业务操作的先后顺序

<img src="/assets/IGX6bydA2ovepwxdQipcpoLcnYf.png" src-width="3830" src-height="1268" align="center"/>

## 出金对帐

为了保障资金流水的准确性，业务中需要将银行的流水与系统中的出金记录进行比对，降低资金流失的风险。银行流水的来源有 2 种：①API 对接（自动产生）、②手动导入。

- 对帐：用户可以选择目标期间的银行流水进行刷新，系统将自动匹配银行流水与系统的出金记录，对帐完成后，可以关注清单中的「对帐结果」列，如果不一致，需要进一步追踪处理。

<img src="/assets/SrZKb3lDJolCNkxgy9Tcqc0GnIe.png" src-width="3826" src-height="1790" align="center"/>

<img src="/assets/UpWQbZ5E4ozhusxwyrOccsBmnye.png" src-width="3818" src-height="1808" align="center"/>

## 异常出金

若出金申请在提现与对帐流程发现了异常，可在异常出金页面进行处理（**可批量操作**）。系统提供了 4 种处理方式：

<img src="/assets/ZQ5nbh5m9oOkIQxGt7wcMU9knQb.png" src-width="3826" src-height="1788" align="center"/>

- 选择了具体的处理方式后，记录流转只待审核页面，业务人员需要再次复核处理结果，通过后异常出金记录处理完毕

<img src="/assets/GhjJb7pz0oLXk9xuLu5cULxgn4d.png" src-width="3832" src-height="1312" align="center"/>

## 出金记录

出金记录页面记录出金的全流程状态，使用者可随时进行查询、汇出等操作

<img src="/assets/HhZ0b5k6Vo6kVtx4DpRcD9YCnIf.png" src-width="3816" src-height="1854" align="center"/>

# 三、FAQ

Q：异常出金记录的来源是什么？

A：由于出金的记录与银行的流水不一致或或出金提交银行被银行拒绝等原因导致，原因可能是出入金方式、触发了 AML（反洗钱）规则等，具体原因需要联络银行方。

Q：

A：

Q：

A：

Q：

A：

Q：

A：

