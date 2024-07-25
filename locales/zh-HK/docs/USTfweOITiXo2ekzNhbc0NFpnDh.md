---
title: 5.2 結單顯示
slug: USTfweOITiXo2ekzNhbc0NFpnDh
sidebar_position: 1
---


# 5.2 結單顯示

## 5.2A 問：客户的結單密碼是什麼？

<b>答：</b>密碼組成方式：登錄手機號末四位 + 證件號末四位。密碼中的字母必須大寫，有括弧的直接忽略。 

例如：手機號碼是 12345678，證件號碼是 123456（X），則結單密碼是 5678456X。

- <b>個人戶：手機號碼後 4 位數字 ＋ 身分證號碼最後 4 位數字  </b>（聯名戶以主持有人為相關信息）
- <b>公司户：手機號尾 4 位數字 ＋ CI 尾 4 位數字</b>

## 5.2B 問：沒有登錄電話，新增或更改了，會否影響到結單密碼？

<b>答：</b>會影響到的，如在工單中心新增或更改了登錄手機號，結單的密碼會更新。

結單的邏輯見以下：

1. 若客戶有登錄手機號，則附件密碼為登錄手機號後四位 + 身份證後四位；
2. 如果没有登錄手機號，結單的密碼是用聯繫手機號後四位 + 身份證後四位；
3. 如沒有登錄及聯繫手機號，會取身份證後四個位。

如客户是提供了多個國藉證件，取的證件號邏輯順序是：香港身份證 ＞ 本國身份證 ＞ 護照，按香港交易所申報 BCAN 的順序保持一致。

## 5.2C 問：會有臨時結單可以生成？

<b>答：</b>在「清算管理 &gt; 結單管理 &gt; 結單查詢」頁面點擊「創建臨時結單」。


「創建臨時結單」功能最多能創建一份包含帳戶最終操作日期起計三個月內的結單，如客户最後操作出入金為 2023 年 6 月，臨時結單只能包含 6，7，8 月這時段，再往後的日期因為帳戶沒有操作日期便沒有結單。


如果客户沒錢沒貨就不能創建出臨時結單。

<img src="/assets/JnOBbpSMtocgUZxGMGzcpXXHnBd.png" src-width="2496" src-height="1312" align="center"/>

## 5.2D 問：結單的語言如何設置？

<b>答：</b>見以下步驟
（i）在「清算管理 &gt; 結單管理 &gt; 結單模版」點擊「編輯」

<img src="/assets/V9JXbMtSKom2IBxZAbDc68JKnbc.png" src-width="1842" src-height="1430" align="center"/>

(ii). 將頁面拉到最底，在「結單語言」點擊可選擇語言

> “跟隨系統”指跟隨客戶 APP 顯示語言的設置

<img src="/assets/EjRFb3LTPohPwKxIvincZC5gnvb.png" src-width="1898" src-height="1430" align="center"/>

## 5.2E 問：報表或結單會否顯示到平倉交易？

<b>答：</b>TDR001-1-Daily Client Order Report By Client 報表的「訂單類型」會顯示為「強平單」；
結單中的「股票交易明細」會顯示該訂單為「強制平倉 Forced Liquidation」。

<img src="/assets/HaJbbxtEfoUomMxO3yocKEfEnJf.png" src-width="2832" src-height="1486" align="center"/>

<img src="/assets/M3ScbSviZoz0CQxfasUc8kCInre.png" src-width="1384" src-height="676" align="center"/>

## 5.2F 問：手工調賬的交易為什麼不能顯示「成本價」及「浮動盈虧」？

<b>答：</b>日切時間點後進行手工調賬交易，「成本價」和「浮動盈虧」須要在下一個交易日更新和顯示。

## 5.2G 問：結單顯示的債券「價格」和「成本」分別代表什麼？

<b>答：</b><b>“</b>價格”顯示的是債券「行情維護」的收盤價；“成本”顯示的是攤薄成本＝(總買入金額 - 總賣出金額）/ 持有數量。調賬以人工輸入的總成本價為準，如沒有輸入會取上次收盤價計算 = 收盤價 x 持有數量。

> 如：交易總額為 `$500,000`、數量為 `5,000`。
總成本價輸入 `$500,000`、結單上的成本價以攤薄成本價顯示 `= ＄100`

<img src="/assets/IbgNbI3pVoKa5SxMJwYc7hLenoc.png" src-width="1368" src-height="260" align="center"/>

## 5.2H 問：結單「發送方式配置」的「線下發送」是什麼？

答：「線下發送」是指人工通過郵箱或信件發送，系統結單不會發送到選了“線下發送”的客户。

<img src="/assets/W1kVbqMxGo8j4YxcaOBcwgHjnod.png" src-width="2830" src-height="1410" align="center"/>

## 5.2I 問：結單中的「待交收金額」和「資金餘額」有什麼分別？

答：港股是 T＋2 交收，在 T＋1、T＋2 或以外的交收資金，都會撥入「待交收金額」。前天和當天的交易淨交收金額（淨買入金額 - 淨賣出金額）等於「待交收金額」。

"資金餘額" 是賬面金額。

<img src="/assets/ScS9bAMOYoKz0vxMfYrckQEVn6c.png" src-width="1706" src-height="696" align="center"/>

## 5.2J 問：結單的「責任說明條款」如何修改？

答：在「清算管理＞結單管理＞結單模版」點擊「編輯」可以修改到結單上的公司信息、聯繫方式、責任說明。

<img src="/assets/XAV6bbC6joDNhzx2szFcVC6OnsI.png" src-width="1980" src-height="1410" align="center"/>

