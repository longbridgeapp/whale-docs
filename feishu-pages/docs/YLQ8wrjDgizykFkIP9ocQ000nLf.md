---
title: 常見問題
slug: YLQ8wrjDgizykFkIP9ocQ000nLf
sidebar_position: 3
---


# 常見問題

## 日终配置问题

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>港美股多市場如何操作日終</p>
</div>

配置兩個市場清算，美股市場設置爲隔夜市場

每天早上執行上日的美股市場清算，下午執行港股市場清算以及日終清算

<img src="/assets/CCuYbmmNpoKmLjxtInuciV7inYg.png" src-width="3574" src-height="1774" align="center"/>

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

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>是否可以在一個流程裡完成日終清算</p>
</div>

- 路径：业务参数设置-日终设置-清算参数配置
- 可编辑时间段：操作日终任务之前
- 编辑清算初始化配置时需要审批
    - 工单标识：clearing.update_system_config.exec  

<img src="/assets/Me38b9ODroR1NIxw0n1casMinlV.png" src-width="3574" src-height="1774" align="center"/>

<img src="/assets/M4WcbtDdLoZFnUxtlLdcv2L5nsc.png" src-width="3574" src-height="1774" align="center"/>

## 費用配置問題

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

最快10分鐘生效

可以在客戶計費查詢頁面（路徑：業務參數設置-計費管理-客戶計費查詢），此頁面查詢的數據為最新數據

<img src="/assets/BMX0bOQ0fovYcpxJuZIcZMDfnWf.png" src-width="3578" src-height="1798" align="center"/>

<img src="/assets/RKcFbqlRVoKvxWxsNKqcndfan6d.png" src-width="3578" src-height="1798" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>某一個客戶，針對WTT下單的渠道想要收取更高的費用，如何處理</p>
</div>

如果是只想針對某一個客戶設置，在<b>客戶計費</b>（路徑：計費管理-客戶計費）頁面添加客戶計費。普通收費設置為標準費率，同時添加WTT的特殊收費並設置相應費率

如果是只想針對某一個客戶組設置，在<b>客戶組計費</b>（路徑：計費管理-客戶組計費）頁面的普通客戶組添加計費。普通收費設置為標準費率，同時添加WTT的特殊收費並設置相應費率

如果是只想針對全部客戶，在<b>客戶組計費</b>（路徑：計費管理-客戶組計費）頁面的全<b>局客戶組</b>添加計費。普通收費設置為標準費率，同時添加WTT的特殊收費並設置相應費率

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

## 交易對賬

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>為什麼會有多種對賬模式</p>
</div>

不同上手在提供交易文件時，會有不同的格式和字段。不同上手會有不同的對賬模式。常用的對賬模式有成交對賬、訂單對賬、股票對賬。不管是哪類都會對交易數量和交易金額（交易數量*成交價格）進行對賬

成交對賬：基於成交流水號進行配對，會比對交易數量和交易金額

訂單對賬：基於訂單號進行配對，多筆成交的會進行匯總

股票對賬：基於股票進行配對，多筆成交的會進行匯總

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>前後台補單後，因為沒有流水號，會出現不平賬，该如何处理</p>
<p>解決方案：交易對賬配對失敗後降級到按股票對賬</p>
</div>

處理方案一：藉助SDR015-2報表。查看第三模塊，人工比對不平賬，看看基於股票的對賬是否平賬。如果平賬的人工通過

<img src="/assets/QtjcbpbzPooWctxl1aiclrHnnCb.png" src-width="3584" src-height="1696" align="center"/>

處理方案二：開啟模糊對賬功能

在清算參數配置打開模糊對賬功能。

<img src="/assets/Q8Rib9m2ao8xJkxSEXDcbrnHnTe.png" src-width="3584" src-height="1696" align="center"/>

如果有不平賬，系統會自動按股票重新對賬

如果按股票對賬為平賬的，按股票對賬的結果會處理為平賬，反之依然為不平賬

如果不平賬明細，按股票對賬的結果全部為平賬的，清算檢查自動通過

<img src="/assets/Zx7dbuYBeojUMyxxToec6OGBnwg.png" src-width="3584" src-height="1696" align="center"/>

## 持倉對賬

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>什麼時候進行持倉對賬</p>
</div>

港股市場在下一日對上一個的持倉。在上一日日切且收到文件後進行

美股市場因為是隔夜市場，可在當前賬務日期對當日的賬。最早可在清算交收步驟後進行

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>持倉對賬任務是如何觸發的？</p>
</div>

文件類型標記為觸發持倉對賬的文件，在導入後可自動觸發持倉對賬

注意如果是OB模式，當日就要觸發持倉對賬的，請在清算交收後再導入持倉文件

<img src="/assets/Y5fSblZ1yoJWKQx1LTgcdWiun6d.png" src-width="3572" src-height="1662" align="center"/>

未支持自動觸發持倉對賬，或者需要重新發起持倉對賬的，可在持倉對賬頁面點擊重新對賬

<img src="/assets/PxNVbljWwoa5CIxevcLcxRUmnnc.png" src-width="3572" src-height="1662" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>非交易日是否需要發起持倉對賬</p>
</div>

不需要，系統也不支持發起持倉對賬

<img src="/assets/Z89sb2kk0o0SpIxN38NcnEeNnXf.png" src-width="3572" src-height="1662" align="center"/>

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>持倉對賬不平後，如果進行確認</p>
</div>

根據不平賬明細，查找是否有漏做的轉倉、公司行動等操作

<img src="/assets/MGCFbS81Qo8jVMxwT0scnmR2nGf.png" src-width="3572" src-height="1662" align="center"/>

逐項確認完畢後，在檢查結果頁面點擊通過

<img src="/assets/BomSbi9Ico3y5uxXrSsc8vPJnye.png" src-width="3572" src-height="1662" align="center"/>

<img src="/assets/LjYYbzjHUoZpmvxZ7KUceRBGnxd.png" src-width="3572" src-height="1662" align="center"/>

<img src="/assets/MRmab9eGIoBJMcxGrobcbHtAnVc.png" src-width="3572" src-height="1662" align="center"/>

## 交易的提前交收

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>港股市场如果让用戶可以在早上提現</p>
<p>解決方案：HK自動交收</p>
</div>

方式一：可以打開“11點的港股自動交收”、“US日切後自動交收”任務

路径：业务参数设置-日终设置-清算参数配置

<img src="/assets/SpPybPk1noYDfKx4vvyc0fPwnWd.png" src-width="3570" src-height="1774" align="center"/>

方式二：手工操作提前交收

路径：清算管理&gt; 市場清算&gt;交收系統&gt;交收批次 Tab 頁籤

點選【提前交收】，輸入欲提早交收的市場（可多選）

<img src="/assets/KOQzbEUYGo2XqyxS1exccTpHnnd.png" src-width="3364" src-height="1450" align="center"/>

操作後可觀察交收批次是否處理完畢

<img src="/assets/TNFubCMOyofC61xiJgQcFDcdnAc.png" src-width="2516" src-height="740" align="center"/>

## 切換上手時的內部轉倉

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>❓</div>
<p>切換上手後如果在系統進行內部轉倉</p>
</div>

<b>方式一：單筆操作</b>

操作路徑：清算管理-倉位管理-倉位查詢

a.<b>篩選數據</b>
- 日期範圍： 設定為「當前賬務日」以篩選出當日相關資料。
- 其他條件： 如有需要，可進一步篩選客戶、股票等條件，以縮小查詢範圍
<b>b.執行內部轉倉</b>
- <b>逐一處理：</b> 針對每一個客戶、每一個股票，分別執行內部轉倉操作
<b>c.注意事項</b>
- 在清算中檢查前操作
- 即使之後撤銷了清算，系統仍會保留此次操作的記錄

<img src="/assets/IMiEbxRZaozj5VxsXvBc1LZ3nee.png" src-width="3570" src-height="1774" align="center"/>

<img src="/assets/GuZdbsQeaoty8nxpxYFcXYM5nbb.png" src-width="3570" src-height="1774" align="center"/>

<b>方式二：批量操作</b>
- 操作路徑：清算管理-倉位管理-倉位查詢
- 在清算中檢查前操作
- 即使之後撤銷了清算，系統仍會保留此次操作的記錄

<img src="/assets/EHoSbkg91ozmXKxOpfIcSpOXnJ0.png" src-width="3570" src-height="1774" align="center"/>

<b>修改子倉模板</b>
- 字段解析如下圖
- 按圖示的文檔
    - 系統將找到香港市場H123456客戶託管在U123445的持倉，並全部轉到U23333的持倉上
- 注意事項：上傳修改子倉的模板後，系統將同時修改待交收的合約

<img src="/assets/VBWMb1s4PoBCcXxNZs4cI7vKn4e.png" src-width="3570" src-height="1774" align="center"/>

<b>基礎倉位調整</b>
- 字段解析如下圖
- 按按圖示的文檔
    - 系統會將客戶H1000001在託管商ID1子倉3上的ST/HK/700將減少1000股；
    - 系統會將客戶H1000001在託管商ID1子倉4上的ST/HK/700將增加1000股
- 基礎倉位調整的模板，將不會修改待交收的合約。基礎倉位調整的模板，可同時調整Sreet、Nominee、Own。用來操作內部轉倉時，必須有配套的數據（兩條）

<img src="/assets/MOxDby2MtoLWjgxxMJuczzginIb.png" src-width="3570" src-height="1774" align="center"/>

