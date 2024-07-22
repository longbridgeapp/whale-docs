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
<tr><td><p>資金報表</p></td><td><p> FDR017 - Cash Movement In-Out Report By CCY（實時報表）</p></td></tr>
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

IDR018 - Matched Trades Wash Trades

IDR026 - The Proportion Of Customer Transaction Volume

IDR027 - Deliberately Push Up Or Down The Closing Price

IDR019 - Suspected Order Activities Report

## 12I 問：如何導出高風險客戶的報告？

答：在 CDR001 - Client Master Listing 報表中的「自定義列表」選擇「風險承受能力」，並按「保存」。導出 CDR001 - Client Master Listing 後，在「風險承受能力」上篩選「high」。

<img src="/assets/TkITbLn4NohreAxZEzqc2ZcVnoc.png" src-width="2826" src-height="1600" align="center"/>

<img src="/assets/XDVibeH3JoKYWGxUfCXcrKwqn7b.png" src-width="2844" src-height="1618" align="center"/>

<img src="/assets/YOMzbY3RKoOwsSxJ7Kbcxwainhb.png" src-width="2846" src-height="1468" align="center"/>

## 12J 問：那份報表可以篩選出持有香港身份證和內地身份證的客戶？

答：可以導出 CDR001 - Client Master Listing Report 或 CDR001-1 - BCAN Information Report，然後篩選「證件類型」。

<img src="/assets/CvdHbd9SnoFd0nxnUpEcLVINnKd.png" src-width="2848" src-height="1534" align="center"/>

<img src="/assets/NKbsbRnlcoAUKUxSitRccYWHnbg.png" src-width="2854" src-height="1356" align="center"/>

