---
title: 证券存入
slug: JWBPwraf8i0mCCkSvqMcNv9in6c
sidebar_position: 0
---


# 证券存入

# 一、系统介绍

证券存入功能是指投资者透过证券交易平台将资金转入证券帐户的操作。投资者即可方便地将资金转入证券帐户，随时随地参与证券交易和投资活动。

Whale 系统包含了存入申请、存入明细、便捷导入参数设置、电子邮件通知券商等功能，流程支援了不同角色的审核要求，有效地提升了证券存入的精确性。整体流程架构如下：

<img src="/assets/KHL0b7FSHoXFj7xqHvZcN2KZnub.png" src-width="2162" src-height="1476" align="center"/>

## 前置条件

无

# 二、操作说明

<div class="callout callout-bg-6 callout-border-6">
<p>📍 菜单入口：证券管理 - 证券存入</p>
</div>

## 存入申请

证券存入申请为用户方提出，申请的内容包含了券商资讯、帐户资讯、证券详情与备注 4 大部分。WHALE 使用者可以手动帮助客户进行证券入仓并根据客户提交的申请进行驳回、提交审批、通知券商等操作。

- 手工入仓

适用于使用者联络后台操作员进行手动新增转入申请记录的场景，操作员需要依序填写客户的证券资讯、帐户资讯以及证券的明细资讯。

<img src="/assets/AXetbLuJFoZ0y9xSjv5cZmMsnRg.png" src-width="2076" src-height="2469" align="center"/>

- 驳回（**可批量操作）**：若客户递交证券存入申请资料有误或使用者反馈本次申请无效时，操作员可以进行【驳回】操作
- 通知券商：由于转仓业务需要对方券商的配合，在实际操作过程中，为了能够顺利转入，用户通常会联络券商及时处理。此功能将提供邮件发送功能，并根据邮件发送的结果显示给用户是否已经通知了券商，以便于用户进一步处理业务。
    - 选择需要寄送邮件的券商机构，系统会自动带出对方券商的邮件地址，操作员可检查邮箱是否正确
    - 选择目标券商下的涉及到的证券转入申请明细（已发送过的证券申请将被剔除）
    - 预览邮件内容，确认无误后点选发送
    - 至邮件发送记录页面中查看发送状态

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[49%]" width-ratio="49">
<img src="/assets/Uxo8bJVSgokHmoxyYVvcas1Znng.png" src-width="2858" src-height="1330" align="center"/>
</div>
<div class="w-[49%]" width-ratio="49">
<img src="/assets/CzKNbS6lpooLZfxtQJkcsrI2nMd.png" src-width="2856" src-height="1332" align="center"/>
</div>
</div>

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/ZbAibGAY5odnR4xmeOjcAdwJnQc.png" src-width="1280" src-height="599" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/UwLDbg8oUoNc0Ax2rCZcQGOznkg.png" src-width="1280" src-height="624" align="center"/>
</div>
</div>

- 提交（**可批量操作）**：经过操作人员初步审查无误后，可以将申请提交至下一节点的操作人员进行审核 - 入仓操作
- 编辑：若操作员在处理转入申请时，从客户方得知券商已通知或未通知的信息，可以透过【编辑】按钮进行修改通知状态，以保证对方券商是否知晓需要处理证券转仓的信息与实际情况相符

<img src="/assets/XX23b5s2Vou3EwxXXGpcz6vOn4d.png" src-width="3830" src-height="1380" align="center"/>

- 指标卡

若券商的证券转入业务量较大，可以透过系统的分类展示卡进行精细化作业，指标卡的左右排布反映了业务操作的先后顺序

<img src="/assets/XVVnbZHk3oISEoxrVDlcH6kBn1c.png" src-width="3818" src-height="1780" align="center"/>

## 存入明细

由于一个存入申请下可能存在多笔证券明细记录，具体操作入仓的审核人员需要针对每笔存入明细进行仔细核对，审核通过后方可入仓。

- 修改：若在处理证券明细时，发现用户提交的某笔具体的明细记录有问题，可在与客户确认无误后可以透过【编辑】按钮进行修正
    - 修改的范围：股票名称、托管商编号、子仓编号、证券明细数量、转入成本、结单备注

<img src="/assets/SKOBb3oaOopeZGx2YogcafEBn9d.png" src-width="3818" src-height="1836"/>

- 删除：若在证券明细时，用户反映提交的某笔具体的明细记录不再进行转入，可以透过【删除】按钮直接删除目标明细记录
- 生成 SI 指令（**可批量操作）**：由于转仓业务需要在 CCASS 里填写必要的 SI 信息，生成 SI 指令功能可以将这些必要的信息以文件的形式自动保存，供用户进行上传 CCASS，以免于手动在 CCASS 系统录入。产生的 SI 指令也可以在「SI 指令清单」选单下进行详情查看、汇出等操作

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/Pnqcbc8XQorCg9xyl4acnKFcnlb.png" src-width="3828" src-height="1824" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/SRuEblN76ofOEmxgn7fcygIpnYd.png" src-width="3822" src-height="1796" align="center"/>
</div>
</div>

- 编辑 SI 指令（**可批量操作）**：若需要对已经产生的 SI 资讯进行修改，可以点选【编辑 SI 资讯】对目标栏位进行修正

<img src="/assets/F4PvbIUx7oql34xInMJceUmFnaf.png" src-width="2872" src-height="1322" align="center"/>

- 处理-成功提交/失败提交（**可批量操作）**：若操作人员认定某个明细没有问题，可以点选【处理】选择【成功提交】，反之选择【失败提交】。
    - 处理完毕后，流程进行至下一节点，需要在工单中心进行审核，审核通过购，股票成功入仓
    <img src="/assets/K9GDbyiq1oLTwqxVTGLcFrK8nUe.png" src-width="3824" src-height="1782" align="center"/>
    - 若用户转入的证券为实体股票，可在处理时同时手动设定实体股票的解冻时间，实体股票将在设定的时间点自动解冻，如若未设定时间，流程通过后则立即解冻
    <img src="/assets/BDbjbvfxZoSv32xpRwhc2JQJnVe.png" src-width="3828" src-height="1566" align="center"/>

- 审批（**可批量操作）**：处理结果提交后，操作列出现【审核】按钮，点选可以召唤出工单审核页面
    - 处理完毕后，流程进行至下一节点，需要在工单中心进行审核，审核通过购，股票成功入仓

<img src="/assets/D2m8bA5SaokgzzxAhwUcMwQQnWb.png" src-width="3906" src-height="1943" align="center"/>

- 提交解冻（**可批量操作）**：若客户转入的证券为实体股票，且在处理时，设定了解冻时间，但在期限到达前想要提前对实体股票进行处理，可以进行手动解冻，提交后需再次进行审批，审批通过后立即解冻成功。

<img src="/assets/Woz0bu6xHo6L8rx4cIzcQ1SSnLf.png" src-width="3822" src-height="1162" align="center"/>

<img src="/assets/SUu8bmSkloAvwvxN8NScc5qCnNh.png" src-width="3824" src-height="1866" align="center"/>

## 存入限制

为了提高证券准入的成功率，杜绝一些诸如已退市股票的转入，可以透过设定股票黑名单的方式提前控制目标股票的转入限制。系统提供了单笔限制与批量限制功能：

- 单笔限制

<img src="/assets/ElEgbouwqo33mrxyPJbcM759nvf.png" src-width="3814" src-height="1856" align="center"/>

- 批量限制

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<p>入口</p>
<img src="/assets/TmhAb1EhtoXJkhxfKYBcKFgnnlz.png" src-width="3824" src-height="1844" align="center"/>

</div>
<div class="w-[50%]" width-ratio="50">
<p>范本</p>
<img src="/assets/FiCsbLOzwoqfwyxtlkjcuXJinFb.png" src-width="652" src-height="372" align="center"/>

</div>
</div>

## 邮件发送记录

用户将目标存入申请通知券商后，相应的邮件记录将会被保存，以用于后续进行问题追踪。

<img src="/assets/AZd3bu1RvoA4rDxv83Tc9Jlonmb.png" src-width="3834" src-height="1856" align="center"/>

# 三、FAQ

