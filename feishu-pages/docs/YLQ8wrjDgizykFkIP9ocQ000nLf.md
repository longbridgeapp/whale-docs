---
title: 常見問題
slug: YLQ8wrjDgizykFkIP9ocQ000nLf
sidebar_position: 3
---


# 常見問題

# 多市場清算問題

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>港美股多市場如何操作日終</p>
</div>

配置兩個市場清算，美股市場設置爲隔夜市場

每天早上執行上日的美股市場清算，下午執行港股市場清算以及日終清算

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>港美股的結單如何分別生成</p>
</div>

港美股的使用同一個賬戶進行交易。所以結單是統一生成的，不支持分市場生成

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>港、美股時區不一致，怎麼解決</p>
</div>

在市場管理中將美股市場配置為隔夜市場

則在28日清算中會處理28日的港股交易、27日（美國時區）的美股交易

# 費用配置問題

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>如何新增費用，什麼是收費場景</p>
</div>

費用由技術人員直接添加，券商可基於費用添加收費場景

場景場景是計費配置的基礎元素，代表這個費用在系統中是否被正式啟用。系統基於收費場景設置了一些便捷功能

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>如何修改交易的費用</p>
</div>

當天交易在清算計費步驟後，可編輯費用。如果已經日切的，需要使用合約修正功能，或者直接調賬

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>修改費用配置後，何時生效；怎麼判斷是否生效</p>
</div>

最快15分鐘生效

可以在客戶計費查詢頁面（路徑：業務參數設置-計費管理-客戶計費查詢），此頁面查詢的數據為最新數據

<img src="/assets/BMX0bOQ0fovYcpxJuZIcZMDfnWf.png" src-width="3578" src-height="1798" align="center"/>

<img src="/assets/RKcFbqlRVoKvxWxsNKqcndfan6d.png" src-width="3578" src-height="1798" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>某一個客戶，針對WTT下單的渠道想要收取更高的費用，如何處理</p>
</div>

如果是只想針對某一個客戶設置，在**客戶計費**（路徑：計費管理-客戶計費）頁面添加客戶計費。普通收費設置為標準費率，同時添加WTT的特殊收費並設置相應費率

如果是只想針對某一個客戶組設置，在**客戶組計費**（路徑：計費管理-客戶組計費）頁面的普通客戶組添加計費。普通收費設置為標準費率，同時添加WTT的特殊收費並設置相應費率

如果是只想針對全部客戶，在**客戶組計費**（路徑：計費管理-客戶組計費）頁面的全**局客戶組**添加計費。普通收費設置為標準費率，同時添加WTT的特殊收費並設置相應費率

<img src="/assets/U8BNbbktGocitjxcKxHcEbVRnGV.png" src-width="3578" src-height="1798" align="center"/>

## 日切點問題

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>港股半日市如何提前日切</p>
</div>

在下午2點後先操作提前日切，再操作日終。詳見颱風天處理的提前日切部分操作

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>可否在日切點前進行清算</p>
</div>

可以，但是必須在行情文件、費率文件到位後進行。在操作前必須操作提前日切

<img src="/assets/W6bxbB4cLofNx4xg9sec8tyrn4b.png" src-width="3578" src-height="1798" align="center"/>

