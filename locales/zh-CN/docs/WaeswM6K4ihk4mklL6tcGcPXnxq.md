---
title: 常见问题
slug: WaeswM6K4ihk4mklL6tcGcPXnxq
sidebar_position: 3
---


# 常见问题

## 授信额度问题

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：可否根据客户额度设置不同审批流程</p>
</div>

答：可以在审批流“BSS-风控管理 - 授信额度 - 额度审核 - 提交审核”设置审批条件，根据条件设置不同的额度区间走不同的审批流程。

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：可否关闭自动授信</p>
</div>

答：可以。如需关闭所有客户的自动授信，可在「业务参数设置」-「风控」-「授信客户参数」的全局参数设置自动授信为关闭；如需针对具体客户限制自动授信，可以将客户添加授信黑名单，名单中的客户不会自动授信且在 APP 调额会进入人工额度审批。

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：为什么客户 APP 上没有调额入口</p>
</div>

答：如遇以下场景不可调额

1. 有审核中的申请不可调额
2. 24 小时内只能申请一次调额（常见场景）
3. 已用额度&gt;App 可调上限额度不可调额
4. 现金账户不可调额
5. 小于 1000 不可调额

## 借币提醒使用问题

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：为什么客户 APP 上看不到「自动还款」功能</p>
</div>

答：需要在后台「借币提醒」开启换汇规则。规则开启后，客户 APP 上可以看到自动还款功能，若客户开启该功能，则在客户满足规则的时候系统会进行自动换汇。

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>问：客户有欠款且其他币种有结余时，系统是否就会进行自动换汇</p>
</div>

答：不一定，需要满足以下条件：1）客户欠款和其他币种结余满足当前设置的换汇规则；2）客户 APP 已开启自动还款功能

