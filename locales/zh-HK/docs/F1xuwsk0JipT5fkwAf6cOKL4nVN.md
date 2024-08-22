---
title: 12. 報表問題
slug: F1xuwsk0JipT5fkwAf6cOKL4nVN
sidebar_position: 11
---


# 12. 報表問題

## 常用報表類型：

<table>
<colgroup>
<col width="208"/>
<col width="612"/>
</colgroup>
<tbody>
<tr><td><p>資金報表</p></td><td><p>FDR017 - Cash Movement In-Out Report By CCY（實時報表）</p></td></tr>
<tr><td><p>股票報表</p></td><td><p>SDR008 - 1  Stock Movement In-Out Report</p></td></tr>
<tr><td><p>待交收（T＋1／T＋1 以上）<br/>賬面市值＆持倉報表</p></td><td><p>SDR004 - Client Stock Location Report (By Stock)</p></td></tr>
<tr><td><p>收費詳細報表</p></td><td><p>按市埸選 SDR018 - Bargain Detail Report-HK／SDR018-1 - Bargain Detail Report-US</p></td></tr>
<tr><td><p>新股認購／費用明細</p></td><td><p>SDR028 - IPO Detail Report 需要搜尋新股代碼</p></td></tr>
<tr><td><p>交易報表</p></td><td><p>TDR001-1 查到訂單拒絕的原因</p></td></tr>
</tbody>
</table>

## 12A 問：當天報表的數據什麼時間生成？

<b>答：</b>需要完成當天的日終後報表會生成數據。
一些實時的報表不用待日終完成，在「報表打印」頁面會提示那些是實時報表。

<img src="/assets/Owvpbv3UXofcY1xyc9ociMxvnXd.png" src-width="1790" src-height="780" align="center"/>

## 12B 問：SDR070 - OTCR report 是用作什麼申報？

<b>答：</b>SDR070 - OTCR report 用作申報實物股票轉出及轉入。不收印花稅的公司行動不會在報表上顯示，現金要約的會作申報。可導出 excel 上傳到交易所。

## 12C 問：在場外證券交易匯報制度（OTCR）下，現金要約等企業行動是否須予匯報？

<b>答：</b>如企業行動不涉及須徵收印花稅的交易（例如新股發行、公開招股、供股及私有化等）或為須向聯交所匯報的交易（例如由交易所參與者進行的現有股份配售），則該等企業行動不屬於場外證券交易。因此，在場外證券交易匯報制度下，與此等企業行動有關的股份轉移無須予以匯報。 

另一方面，若相關受規管中介人（不論是作為主事人或代理人）進行就現金要約（此乃場外證券交易）而作出的股份轉移，該相關受規管中介人便須根據場外證券交易匯報制度就該股份轉移予以匯報。在這情況下，該相關受規管中介人須在股份轉移日（即相關受規管中介人知悉已接納的要約獲得結算當日，而該日亦為在場外證券交易匯報制度下須予匯報的股份交易日期）之後的三個香港交易日內，根據場外證券交易匯報制度向證監會匯報。

## 12D 問：SDR025 - Stock Reconciliation Report 顯示的任務結果 Successful Check／Manually Confirmed／ Manually Unrecognized 是什麼意思？

<b>答：</b>SDR025 的任務結果對應「清算管理 &gt; 清算檢查 &gt; 檢查結果」頁面的任務結果欄位。
- 檢查通過，Successful Check；
- 檢查失敗，點擊了手動通過的 - Manually Confirmed；
- 檢查失敗，未手動通過的 - Manually Unrecognized。

<img src="/assets/Yuv6bFgCAos4RCxvmYjcU7MbnUn.png" src-width="2074" src-height="850" align="center"/>

## 12E 問：為何交易報表 TDR001-1 Daily Client Order Report By Client 的市價單價格跟股票現價相差那麼多？

<b>答：</b>市價單非交易所訂單，會以對手方的價格檔位下特別限價單（SLO）。因為成交價格不確定，防止穿倉，所以做了 20% （1.2 倍）凍結資金的保護。

## 12F 問：合規報表 IDR020 Re-activation Of Dormant Account 顯示什麼客户數據？

<b>答：</b>報表顯示上次成交記錄超過 180 日的客戶，新客戶以開戶日期計算。報表不會判斷客戶的激活狀態。

## 12G 問：SDR018 - Bargain Detail Report 類別的報表什麼時間能看到當天的交易數據？

<b>答：</b>最快在日終任務完成「清算入賬」，可以在 SDR018 報表查看當天的交易佣金資料。

> 美股的可以查看 SDR018-1 - Bargain Detail Report-US。

<img src="/assets/RxQzbH5oqoULV1xI0RwcbNTvnDe.png" src-width="2246" src-height="1486" align="center"/>

## 12H 問：系統對虛擬交易、操控價格、內幕交易會有監察警報嗎？

<b>答：</b>可使用以下報表來人工判斷有沒有可疑交易。

IDR018 - Matched Trades Wash Trades - 檢查是否有 2 客戶或以上買賣同一股票交易成交

IDR026 - The Proportion Of Customer Transaction Volume - 客戶的交易量佔股票的當日成交量超越 50%

IDR027 - Deliberately Push Up Or Down The Closing Price - 於收市前最後一分鐘訂單成交高於 / 低於前收市價 ≥5%

IDR019 - Suspected Order Activities Report - 單一客戶更改或取消訂單超過 20 次

## 12I 問：如何導出高風險客戶的報告？

答：在 CDR001 - Client Master Listing Report 的「自定義列表」選擇「風險承受能力」點擊「保存」。
導出 Excel 後，在「風險承受能力」欄位作篩選。

<img src="/assets/TkITbLn4NohreAxZEzqc2ZcVnoc.png" src-width="2826" src-height="1600" align="center"/>

<img src="/assets/XDVibeH3JoKYWGxUfCXcrKwqn7b.png" src-width="2844" src-height="1618" align="center"/>

<img src="/assets/YOMzbY3RKoOwsSxJ7Kbcxwainhb.png" src-width="2846" src-height="1468" align="center"/>

## 12J 問：如何導出客戶股票集中度（Stock Concentration）的歷史數據？

答：報表 RDR010 - Concentration Risk 包含到一周的數據。如需要先前的歷史數據可從 SDR003 Client Stock Holding Report(By Stock) 取得客戶每天的持倉數值，再按港交所的股票發行市值，手工計算股票集中度。

<img src="/assets/DIunbYmVZoH8Zpx5tGJcCCTNnAh.png" src-width="2850" src-height="1346" align="center"/>

## 12K 問：為什麼 TDR005 - Trade Summary Report 美股「成交時間」跟「交易日期」的篩選時間不匹配？

答：這個是時差問題，美股為隔晚市埸。報表顯示的成交時間是香港時間，當中是顯示到美股市場交易記錄。

> 成交訂單中也可查詢到「對手方經紀席位」

<img src="/assets/F0oRb7XZToqpe0xKIJpcmuaGnIb.png" src-width="2850" src-height="1444" align="center"/>

## 12L 問：如何計算到客户每月的託管費？

答：SDR058-2 HK Custodian Fee Group by Client V2 能計算到，當中收取費率可以在「報表管理＞報表打印＞參數設置」修改。（見 12L 圖一至圖二）
託管費扣除使用手工調賬，可以用證券賬號彙總的費用收取。（見 12L 圖三）

> 其它客户費率指聯名賬户等其它户口。

<img src="/assets/PrEebHcTYo3K2BxNc9ocslXAnmc.png" src-width="2712" src-height="986" align="center"/>

<em>12L 圖一</em>

<img src="/assets/FF2bbvsjXoD3YYx4KMPc5c6gn2f.png" src-width="2384" src-height="922" align="center"/>

<em>12L 圖二</em>

<img src="/assets/VTWyb9kj1oPyyyxDc0ncwkTRnog.png" src-width="2392" src-height="406" align="center"/>

<em>12L 圖三</em>

## 12M 問：如何解讀 FRR006-1 報表與 FDR002-1 報表？

答：1.FRR006-1 報表統計所有 Cash 賬戶欠款客户（根據選擇的匯率轉換成 HKD）；

一個客戶如果有多個幣種，統一轉成 HKD 後計算結餘。

> 例子：USD 10 & HKD -50。轉成 HKD 後，正數不統計到 FRR006-1 報表。

日期基準：Trade Date 交易日 ＆Settle Date 交收日

<img src="/assets/LkoMbwD0uoHK9RxybbwceJ8Onbh.png" src-width="2380" src-height="592" align="center"/>

2.FDR002-1 報表統計所有客戶的資金明細（分幣種計算）

Available balance：以結算金額計算

Net Balance：以賬面金額計算

DR 是欠款

CR 是非欠款

<img src="/assets/CHBNbyNQLogtl5xeBKccKQyJnxh.png" src-width="2820" src-height="1264" align="center"/>

