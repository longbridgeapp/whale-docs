---
title: 常見問題
slug: WaeswM6K4ihk4mklL6tcGcPXnxq
sidebar_position: 3
---


# 常見問題

## 授信額度問題

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：可否根據客戶額度設置不同審批流程</p>
</div>

答：可以在審批流“BSS-風控管理 - 授信額度 - 額度審核 - 提交審核”設置審批條件，根據條件設置不同的額度區間走不同的審批流程。

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：可否關閉自動授信</p>
</div>

答：可以。如需關閉所有客戶的自動授信，可在「業務參數設置」-「風控」-「授信客戶參數」的全局參數設置自動授信為關閉；如需針對具體客戶限制自動授信，可以將客戶添加授信黑名單，名單中的客戶不會自動授信且在 APP 調額會進入人工額度審批。

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：為什麼客戶 APP 上沒有調額入口</p>
</div>

答：如遇以下場景不可調額

1. 有审核中的申请不可调额
2. 24 小时内只能申请一次调额（常見場景）
3. 已用额度&gt;App 可调上限额度不可调额
4. 现金账户不可调额
5. 小于 1000 不可调额

## 借幣提醒使用問題

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：為什麼客戶 APP 上看不到「自動還款」功能</p>
</div>

答：需要在後台「借幣提醒」開啟換匯規則。規則開啟後，客戶 APP 上可以看到自動還款功能，若客戶開啟該功能，則在客戶滿足規則的時候系統會進行自動換匯。

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>問：客戶有欠款且其他幣種有結餘時，系統是否就會進行自動換匯</p>
</div>

答：不一定，需要滿足以下條件：1）客戶欠款和其他幣種結餘滿足當前設置的換匯規則；2）客戶 APP 已開啟自動還款功能

