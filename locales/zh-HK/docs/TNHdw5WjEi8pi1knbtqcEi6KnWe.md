---
title: 客戶合約
slug: TNHdw5WjEi8pi1knbtqcEi6KnWe
sidebar_position: 0
---


# 客戶合約

## 適用場景

客戶合約管理操作

## 前置條件

無

## 客戶合約操作說明

菜單入口：合約管理&gt;客戶合約&gt;詳情 功能鍵

### **查詢和編輯前台合約**

在操作清算計費步驟後，系統會基於前台交易訂單、計費管理配置生成客戶合約

點擊詳情可查看客戶合約的詳情

<img src="/assets/JzMlbzEIFohA3CxG5RDctXwQnOb.png" src-width="2456" src-height="1242" align="center"/>

<img src="/assets/VIDHbRJ4RoVyyHxV5T7cJHPmnwh.png" src-width="2484" src-height="1530" align="center"/>

基礎信息查詢

進入詳情頁直接展示含交易日期、交收日期、特殊收費條件在內的基本信息

數據來源是“交易”的爲前台合約

<div class="callout callout-bg-2 callout-border-2">
<div class='callout-emoji'>💡</div>
<p>注意：</p>
<ul>
<li><p>前台合約只支持編輯費用信息、IBOND 累計利息、結算幣種、倉位信息</p>
</li>
<li><p>前台合約的其它字段如果有問題，需要先修改前台合約數據，再依次執行清算前檢查和清算計費步驟</p>
</li>
</ul>
</div>

<img src="/assets/RwiIbvmCyoNdmKxdYE5cvDD7n2c.png" src-width="2486" src-height="1544" align="center"/>

#### 結算幣種編輯

在基礎信息點擊編輯

<img src="/assets/VRIQb5nbeomSLjxm4pKcr2Xlndg.png" src-width="2486" src-height="1502" align="center"/>

同時修改結算幣種和匯率並提交

系統會根據匯率和結算幣種計算累計利息（結算幣種）、交易金額（結算幣種）、費用（結算幣種）

系統會按結算幣種進行扣費和交收

<img src="/assets/RRMmbtWqaoECF9xuvKGcJY3pnQe.png" src-width="2512" src-height="1558" align="center"/>

#### 成交紀錄查詢

點擊成交記錄可展示成交記錄

<img src="/assets/Rii5b6TVIoDuGLxflBIcpV1Vngh.png" src-width="2480" src-height="1542" align="center"/>

#### IBOND 累計利息編輯

在成交記錄中，可以點擊編輯，修改累計利息

<img src="/assets/EfrCbauyBomid9xnJDZc25Agnvf.png" src-width="2500" src-height="1556" align="center"/>

#### 费用查詢和編輯

點擊費用信息可展示收費明細

<img src="/assets/Yyw5bB0gGoteoLxxgIBcFMwQnjh.png" src-width="2488" src-height="1526" align="center"/>

點擊試算會重算全部費用

<img src="/assets/GDtPbJoDzoS89oxA8PZcqKZbnuT.png" src-width="2480" src-height="1536" align="center"/>

點擊添加可以增加費用，增加收費類型不能和已有的重複

<img src="/assets/P1mRbcGXcox4KRxh9lLc0cwUnWd.png" src-width="2894" src-height="1548" align="center"/>

點擊刪除可以刪除費用

<img src="/assets/RJV3bz2ZloEFhSxsDLgcfB6Pnue.png" src-width="2892" src-height="1538" align="center"/>

點擊編輯可以修改費用

<img src="/assets/Do1FboLhIopualxNChwcvBBsnOc.png" src-width="2916" src-height="1538" align="center"/>

#### 倉位信息查詢和編輯

點擊倉位信息可查詢倉位數據

<img src="/assets/MRKBbz8wvoOLNOxsCKscYVN2nXg.png" src-width="2900" src-height="1552" align="center"/>

點擊編輯可修改託管商和子倉

<img src="/assets/Cwkbb7r8BogK2vxy3J3c745snwf.png" src-width="2914" src-height="1544" align="center"/>

### 後台客戶**合約補單和券商快捷補單**

提供新增客戶補單與劵商快捷補單的合約記錄功能，這個補單就是 業務上所謂的 Client trade 與 Broker trade 補單

#### 後台客戶合約補單

點擊新增客戶補單

<img src="/assets/IYrhbsWRCownhBxzpWcc4EA0nIh.png" src-width="2900" src-height="1546" align="center"/>

先補充基礎信息

系統已支持歷史交易日補單（最多前 5 個交易日），補單後交易日期為歷史日期，帳務日期為當日

<img src="/assets/CWjBbOz3MoyO7yx1vCWcSSd9nDb.png" src-width="2256" src-height="1274" align="center"/>

提交後數據有錯誤，可進一步編輯後台合約的基礎信息

<img src="/assets/ZnP8b9v5boPK0HxHayFcnR3yneg.png" src-width="2906" src-height="1550" align="center"/>

结算幣種和交易幣種不一致的可進一步编辑基本信息

<img src="/assets/EQ3pbRDNMogatTxVpXTcVdjznYd.png" src-width="2904" src-height="1544" align="center"/>

若商品是 OTC 產品，則結算渠道要對應選擇 OTC 結算渠道

<img src="/assets/Ntqvbnvnlo8wufxuGBAcECV6npg.png" src-width="2910" src-height="1554" align="center"/>

<img src="/assets/F5uvb1vDNoot6jx7JiSc8eWZnbb.png" src-width="2896" src-height="1552" align="center"/>

后台訂单號可直接複製合约號，有多筆成交的后台成交流水號不能相同

系统將根據交易金额和交易數量計算價格

<img src="/assets/Tye7b1wOFoKzTixKNHscxrJpnQb.png" src-width="2914" src-height="1552" align="center"/>

點擊試算可以自動計算費用

試算後可進一步編輯費用，詳見費用查詢和編輯

<img src="/assets/WyTqblDofoqj2qxpwpMcaGU4nPf.png" src-width="2900" src-height="1540" align="center"/>

OTC 補單系統會按大賬號自動計算託管商、子倉

託管商、子倉可進一步編輯，詳見倉位信息查詢和編輯

<img src="/assets/Kb74bcpuDoZeGNxIILvcnbisnyf.png" src-width="2900" src-height="1550" align="center"/>

#### **券商快捷補單**

在完成所有客戶合約補單後，可以透過右上【劵商快捷補單】操作劵商補單

注意：券商快捷補单僅能查詢结算渠道为 OTC 的數據，生成的數據用于清算前檢查步骤的對帳

<img src="/assets/VGDjbzjyAouGmgxaMF9cGGMknUh.png" src-width="2898" src-height="1520" align="center"/>

**機構合约（代理商合约）提前試算**

選擇所有篩選條件，點擊試算機構費用並刷新，系統會自動計算代理商費用（詳見後文機構合約操作說明）

<img src="/assets/UoLsbDV2Ko8e7gxe00Wc1h1UnAb.png" src-width="2914" src-height="1098" align="center"/>

**更新對手方文件**

初步核對數據，有問題的修改客戶合約後，重新進入頁面並刷新

操作人員也可以先點擊編輯，臨時調整數據，注意：此編輯不能保存在數據庫中，僅配合“更新對手文件”按鈕使用

<img src="/assets/SJNqbCD1DoGaFvxuZDMc36qbneF.png" src-width="2926" src-height="1554" align="center"/>

核對無誤后，200 條以內數據，可點擊更新對手文件，該文件可用於清算前檢查

<img src="/assets/PUf9buLloocyCZxP37Wc81gZnGf.png" src-width="2922" src-height="848" align="center"/>

核對無誤后，200 條以上數據，可下載模板文件編輯，在清算前檢查步驟前導入文件

<img src="/assets/MxspbLLh0o1pDux50q1c0ssgnVc.png" src-width="2920" src-height="838" align="center"/>

<img src="/assets/KkvFbFwLdoxihyx6Yaac1HifnAh.png" src-width="2904" src-height="1542" align="center"/>

