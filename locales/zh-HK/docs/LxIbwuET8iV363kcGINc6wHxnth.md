---
title: 7. 佣金計費問題
slug: LxIbwuET8iV363kcGINc6wHxnth
sidebar_position: 6
---


# 7. 佣金計費問題

## 7A 問：如何修改客户佣金？

<b>答：</b>在「業務參數設置 &gt; 計費管理 &gt; 客户計費配置」新建一個獨立的佣金費率給客户（見 7A 圖一）。

如計費套餐已有相關收費，可以在「客户組計費配置」進入詳情頁後，點擊「管理組內客户」把客户添加進去（見 7A 圖二、圖三）。

> 客戶計費設置取收費優先順序：針對某個客戶的設置 &gt; 普通客戶組 &gt; 全局客戶組。

<img src="/assets/QOzzb81Qzo87TgxwWBscQD4vnqf.png" src-width="2752" src-height="1324" align="center"/>

<em>7A 圖一</em>

<img src="/assets/HZdYb8MEloj44GxAcHbcNS6WnCb.png" src-width="2504" src-height="1356" align="center"/>

<em>7A 圖二</em>

<img src="/assets/NOhRb7ZSfolbICx4dBic48QAnt7.png" src-width="2168" src-height="700" align="center"/>

<em>7A 圖三</em>


## 7B 問：如何修改政府雜費或佣金費率？ （客户組計費修改）

<b>答：</b>（i）在「業務參數設置 &gt; 計費管理 &gt; 客户組計費配置」頁面中的“默認客户組”點擊「編輯」。

<img src="/assets/WZ23bsry3oZAjHxcBN6cWI2qnCr.png" src-width="2869" src-height="1540" align="center"/>

(ii). 在操作欄中點擊「編輯」修改相應的收費埸景。

<img src="/assets/FYVrbmZIlocXiCxWzsSckKQlnGh.png" src-width="2876" src-height="1628" align="center"/>

(iii). 可修改費率、最低/最高收費。

<img src="/assets/Nrb9bj8SyoeuhfxsVH2c3Xl3nMd.png" src-width="2326" src-height="1367" align="center"/>

(iv). 修改完成後點擊「提交」（編輯後約 10 分鐘生效）。

<img src="/assets/NS4GbF26QoSbtqxjDWUc2hVMnPe.png" src-width="2705" src-height="1436" align="center"/>

(v). 點擊「客户計費查詢」查詢個別客户收費確認。

<img src="/assets/Th9kbrrZaobolcxAzDfcsF6YnMf.png" src-width="2599" src-height="1368" align="center"/>

(vi). 隨機搜尋客户及點選修改了的收費類型查詢。

<img src="/assets/ZhGnbpm50oNrrRxHenxcg26Tneg.png" src-width="2619" src-height="295" align="center"/>

## 7C 問：佣金收費／交易合約作一次性的額免或修改，可以什樣處理？

<b>答：</b>執行清算任務時，完成 "清算計費" 後先暫停，拉取到客户合約數據在「清算管理 &gt; 合約管理」修改費用。

(i). 執行日終任務去到 "清算計費" 時點擊「暫停一鍵清算」。

<img src="/assets/KISwbh4kOoyuppxhxT1cTBPHnAe.png" src-width="2496" src-height="1100" align="center"/>

(ii). 執行完成後去到「合約管理 &gt; 客户合約」頁面拉取到當天賬務日期的交易後，搜索客户及相應的訂單，在操作欄點擊「詳情」

<img src="/assets/J1wlbt9gSolcO2xK0ATc5OS7nsg.png" src-width="2502" src-height="780" align="center"/>

(iii). 在「費用信息」頁面相應的收費類別點擊「編輯」

<img src="/assets/Z2TXbD3TQoc8WExFI7pcSWjknJc.png" src-width="2868" src-height="1457" align="center"/>

(iv). 在實收金額修改費用後點擊「確定」。如收取 0.74 USD &gt; 0.01 USD

<img src="/assets/QrjhbECfaoaxXMx17XFc9G74nhp.png" src-width="2861" src-height="1618" align="center"/>

(v). 在「費用信息」頁面，實收金額及應收金額費用會更新

<img src="/assets/RfLEbu0CmoNrEPxkqgvcWt4Tnoc.png" src-width="2843" src-height="1575" align="center"/>

(vi). 之後繼續完成清算，費用會作調整及結單會顯示更新的費用

## 7D 問：計算精度的 Contract、Order、Trade done 如何區分？

<b>答：</b>Contract、Order、Trade done 見以下例子說明。

- 如：想合單計算，選 Contract，會按客户當天買同一隻股票的總交易金額計算佣金
- 則：客户下單 3 次 10000，合成 30000 計算一次佣金

- 如：平台費逐條訂單計算，選 Order，會按客户下單次數計算
- 則：客户下單 3 次 10000，逐筆計算 會收取 3 次平台費

- 如：收取政府雜費，選 Trade done，會按訂單成交的次數計算
- 則：客户下單 3 次 10000，每筆分了 3 次成交，會逐條成交計算稅花稅，總共計算 9 次費用

> 選了 Contract 是依照合約進行計費。如果沒開啟合單功能，一個 Contract 對應的是一個 Order；如果已經開啟了合單功能，多個 Order 才會合併成一個 Contract 計算（見 7D 圖一），這樣 Contract 和按 Order 才有差別

<img src="/assets/W70VbDunroTZCNxQPuXcQ9BunAK.png" src-width="2578" src-height="1229" align="center"/>

<em>7D 圖一</em>

## 7E 問：分成套餐配置中的“新股”計算方式選「佣金總額」是對應那個費用？

<img src="/assets/BVkobslnjovfj3xAArJc3XQbnJg.png" src-width="2594" src-height="1194" align="center"/>

<b>答：</b>對應到新股的經紀佣金收費。可在「業務參數設置 &gt; 新股配置 &gt; 費率管理」頁面中編輯 "經紀佣金" （見 7E 圖一），或 在「新股認購 &gt; 詳情」頁面中基本信息新建費率（見 7E 圖二）可編輯。

<img src="/assets/ClQPbbxnnoJWBBxLjLEcIoNBnIh.png" src-width="2819" src-height="1437" align="center"/>

<em>7E 圖一</em>

<img src="/assets/B2oybjJCBodLHtxuhaDcXB60n4b.png" src-width="2820" src-height="1417" align="center"/>

<em>7E 圖二</em>

## 7F 問：如何查詢客戶佣金收費？

<b>答：</b>見以下步驟，

(i). 在「業務參數設置 &gt; 計費管理 &gt; 客户計費查詢」頁面

<img src="/assets/GAUxb9TMMoN0UQx7NQQc2VmjnAb.png" src-width="2480" src-height="1264" align="center"/>

(ii). 以「賬戶號碼」查詢客戶的收費及特殊收費

<img src="/assets/ZN33bpUAVo3jSYxLGKxcSnJsnAg.png" src-width="2852" src-height="1370" align="center"/>

## 7G 問：特殊收費的設置如何影響到客户？

<b>答：</b>全局客户組設置了特殊收費，所有客户都會依據該特殊收費計算佣金。如把客户添加到普通客户組，需要在這套餐添加特殊收費才能覆蓋掉全局的設置。

<img src="/assets/A4Mobr0NJoGf08xG5IrcZlDynjg.png" src-width="2464" src-height="1368" align="center"/>

<img src="/assets/XsUrbcX4foBHJgxZ8lsct3dWnDd.png" src-width="2134" src-height="1354" align="center"/>

## 7H 問：全局客戶組為什麼看不到客戶數量和組內的客戶？

<b>答：</b>全局客戶組理論上配置到所有客戶，所以沒有顯示到數量及組內客户。在普通客户組能看到數量及組內客户。

<img src="/assets/UnydbvGTio0o0qxFC8IcQqvGncc.png" src-width="2496" src-height="1180" align="center"/>

<img src="/assets/PMVabUdZ8oKPJGx97ekc94cUnod.png" src-width="2160" src-height="700" align="center"/>

## 7I 問：融資利息如何查看或額免？

<b>答：</b>在「清算管理 &gt; 融券管理 &gt; 融資利息賬單」頁面以賬戶號碼查詢客戶的融資利息

<img src="/assets/O38xbD4g1o00Nwxs4CccNRWbn2f.png" src-width="2498" src-height="1384" align="center"/>

<img src="/assets/IuTSb3vCHojaD4x1oKOckoKwn7H.png" src-width="2154" src-height="1360" align="center"/>

## 7J 問：如何能調整到當天的利息？

答：沒有調整到當天融資利息的功能，需要下一天執行到日終到 "資金清算" 後，才能調整到今天的利息。

## 7K 問：暗盤平台費和正常交易平台費能否分開計算？

答：在「業務參數設置＞計算管＞客户組計費配置」相關客戶組點擊「編輯」（見 7K 圖一），然後在平台費收費點擊「編輯」。（見 7K 圖二）
在“特殊收費”點擊「添加」，“訂單類型”選擇「暗盤」後并輸入收費資料。（見 7K 圖三）

<img src="/assets/BcNybt9EboDqzkxJaLIceaHDnmf.png" src-width="2866" src-height="1606" align="center"/>

<em>7K 圖一</em>

<img src="/assets/Qe1lbiWHoo2rcSxwiO3cxiZenEd.png" src-width="2790" src-height="1386" align="center"/>

<em>7K 圖二</em>

<img src="/assets/WELwbbklhol38RxG7Xdc1XJ7nOc.png" src-width="2864" src-height="1618" align="center"/>

<em>7K 圖三</em>

