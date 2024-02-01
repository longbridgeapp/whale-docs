---
title: 公募基金
slug: BeaQwFXULiLLcNkayLicZPT0nsh
sidebar_position: 4
---


# 公募基金

# 適用場景

本模塊主要是管理公募基金每日訂單，淨值以及交易結算。於交收日，操作人員根據基金託管人計算之淨值及申購份額，於系統中維護基金淨值，並確認於交易日受理的基金申購委託。系統將會扣取客戶資金，並增加客戶基金份額持倉。

# 前置條件

僅適合基金交易結算也在 WBO 櫃台進行的租戶。

### 使用說明

#### 客戶訂單

執行菜單：基金管理&gt; 公募基金&gt;客戶訂單 Tab 頁籤

在本作業可以查詢到前台 APP 端的公募基金訂單紀錄，  可以看到基金訂單的申購/贖的狀態

<img src="/assets/MMrpbLsIboM1w8x9UovclZIUnje.png" src-width="2986" src-height="1742" align="center"/>

#### 淨值表

執行菜單：基金管理&gt; 公募基金&gt;淨值表 Tab 頁籤

本作業可以查詢基金的淨值數據

<img src="/assets/Eg8abABWOoqFUQxDwqbcMIW0nNg.png" src-width="2978" src-height="1708" align="center"/>

注意： 系統已改成 透過 行情數據源 自動獲取 公募基金的淨值表（無法租戶 自行新增，避免數據更新錯誤）

#### 基金清算

執行菜單：基金管理&gt; 公募基金&gt;基金清算 Tab 頁籤

本作業可以進行基金後台的清算作業（包含數據確認/申購交收/贖回錢貨交收）

<img src="/assets/XDujb8DY4ou5RgxGQ0AcxbJJnmf.png" src-width="2962" src-height="1778" align="center"/>

**清算操作流程：**

1. 選擇產生的基金管道訂單，選擇‘訂單初始化’狀態後，中點擊【數據發送】，彈框資訊確認無誤後，點擊【確認】，此時訂單狀況會變成'發送成功'

<img src="/assets/FnOpbGgsZo8u0XxA3CgccIgenOg.png" src-width="2972" src-height="1740" align="center"/>

1. 數據發送之後，等後一段時間會收到基金公司申購/贖回確認檔，這時在該基金記錄操作區，選擇數據【**回填**】

<img src="/assets/BTsibSl3GocgBixDu4fcQyqknQg.png" src-width="3000" src-height="1598" align="center"/>

回填視窗彈出，需要填寫 基金淨值；申購份額=申購金額/基金淨值；贖回金額=贖回份額*基金淨值

<img src="/assets/XZh1bTDlioljIRxue9OcEZvQn6d.png" src-width="2974" src-height="1706" align="center"/>

1. 數據回填之後，**點擊核對確認**，進行數據確認，確認提交。若當天沒有訂單，自動核對確認， 自動完成交收。

<img src="/assets/DhuabdgfDo8uBrx9yCBctCfSnnh.png" src-width="2978" src-height="1272" align="center"/>

1. 選中對應管道單進行申購交割，點擊確認之後沒有問題申購就完成了

<img src="/assets/OYMabkb5soV1gRxp3bCcXiginkd.png" src-width="2984" src-height="1500" align="center"/>

1. 後續如果申購交割完成之後還有贖回，會彈出來贖回貨交割，點擊完贖回或交割後是贖回錢交割，點完整個流程就結束了；如果沒有贖回，申購交割完成之後整個流程就結束了

<img src="/assets/Bu7YbvYk5oXrOXxnMzvcxcFfnYc.png" src-width="3004" src-height="1486" align="center"/>

<img src="/assets/Gk8pbplskoFnk6xpKPIcJE65nAe.png" src-width="2988" src-height="1466" align="center"/>

#### 交易日曆

執行菜單：基金管理&gt; 公募基金&gt;交易日曆 Tab 頁籤

本作業可以查詢到公募基金商品的交易日曆，可以操作【作廢】與【回撤】。

注意：目前系統已經不強依賴交易日曆了，該功能只是查看當 API 方式對接上手時上手返回的交易日曆。

<img src="/assets/TfjUbUEhQoBUUxxssuSceoK7nMh.png" src-width="2994" src-height="1572" align="center"/>

