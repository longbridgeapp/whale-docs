---
title: 合約管理
slug: xxx
sidebar_position: 0
---


# 合約管理

## 適用场景

- 客戶合約
    - 在清算計費步驟後查詢、編輯前臺合約
    - 在清算计费步骤前補錄後台合約
    - 在入賬、交收後，調整合約

- 機構合約
    - 機構合約的延遲交收
    - 機構費用的對賬

## 客戶合約操作說明

菜單入口：合約管理 - 客戶合約 - 详情

### **查詢和編輯前臺合約**

- 在操作清算計費步驟後，系統會基於前臺交易訂單、計費管理配置生成客戶合約
- 點擊詳情可查看客戶合約的詳情

<img src="/assets/HoWob1zWHo50lmxBJOCcFRudncr.png"/>

#### 基础信息查詢

- 進入詳情頁直接展示含交易日期、交收日期、特殊收費條件在內的基本信息
- 數據來源是“交易”的爲前臺合約
- 注意 1：前臺合約只支持編輯費用信息、IBOND 累計利息、結算幣種、倉位信息
- 注意 2：前臺合約的其它字段如果有問題，需要先修改前臺數據，然後依次執行清算前檢查和清算計費步驟

<img src="/assets/D4AGbGysAojTmrxHqO1cPFeQnwh.png"/>

#### 結算幣種編輯

- 在基礎信息點擊編輯

<img src="/assets/S43Qb4C9Oo4L2uxblMEcSGcznof.png"/>

- 同時修改結算幣種和匯率並提交
- 系統會根據匯率和結算幣種計算累計利息（結算幣種）、交易金額（結算幣種）、費用（結算幣種）
- 系統會按結算幣種進行扣費和交收

<img src="/assets/M0f1bheTdoTx9xxVFdOcOYL7nWh.png"/>

#### 成交记录查詢

- 點擊成交記錄可展示成交記錄

<img src="/assets/WUFab9eXkowbN1x74mRciCJtntc.png"/>

#### IBOND 累計利息編輯

- 在成交記錄中，可以點擊編輯，修改累計利息

<img src="/assets/QiHVbOEOaosGgaxmSDOc8RRMnFg.png"/>

#### 费用查詢和編輯

- 點擊費用信息可展示收費明細

<img src="/assets/KvoybiWFuoMGKmx7oVwcdToen8f.png"/>

點擊試算會重算全部費用

<img src="/assets/RnZlbj5plo8XTwxd2mdcbFronWh.png"/>

點擊添加可以增加費用，增加收費類型不能和已有的重複

<img src="/assets/Ngz3bzWEooXol3xuEzOcgnuJneb.png"/>

點擊刪除可以刪除費用

<img src="/assets/Lkk5b94pEo9DlVxj81KcgFZKnsf.png"/>

點擊編輯可以修改費用

<img src="/assets/XRpeb8EqNo0H3sxcXi2crj4Mngh.png"/>

#### 倉位信息查詢和編輯

- 點擊倉位信息可查詢倉位數據

<img src="/assets/AxVCb2DMiosE1OxmC7Icki2gndX.png"/>

- 點擊編輯可修改託管商和子倉

<img src="/assets/VwrAbaV1aokIxMxHuD7cxDCgn1b.png"/>

### 後台客戶**合約補單和券商快捷補單**

- 供新增客戶補單與劵商快捷補單的合約記錄功能，這個補單就是 業務上所謂的 Client trade 與 Broker trade 補單
- 注意 1：WBO 後台補單是建立在合約基礎上進行相關補單操作
- 注意 2：需要在清算前檢查步驟前操作

#### 後台客戶合約補單

- 點擊新增客戶補單

<img src="/assets/SNwjbsyHqojvLtxpNg6cuAiEnTe.png"/>

- 先補充基礎信息
- 系統已支持歷史交易日補單（最多前 5 個交易日），補單後交易日期為歷史日期，賬務日期為當日

<img src="/assets/P10Nb3ZeRoWmvAxZQbMcVBeEnMd.png"/>

- 提交后数据有误的，可進一步編輯後台合約的基礎信息

<img src="/assets/Y8yPbfaMEogYLrxg8YJcU3zfnTb.png"/>

- 结算币种和交易币种不一致的可进一步编辑基本信息
    - 详见结算币种编辑功能

<img src="/assets/E4QnbcBSjonoE1xgvXIcXi6Gnjf.png"/>

- 若商品是 OTC 產品，則結算渠道要對應選擇 OTC 結算渠道

<img src="/assets/K23hbjoknofY9uxu7j7cZkpan1f.png"/>

<img src="/assets/C2phbrVqPo6wH8xDakdc3D4ZnYf.png"/>

- 后台订单号可直接複製合约号，有多笔成交的后台成交流水号不能相同
- 系统将根据交易金额和交易数量计算价格

<img src="/assets/RhR4bPyPCoj5uMxw1tRcAhzxnZe.png"/>

- 點擊試算可以自動計算費用
- 試算後可進一步編輯費用，詳見費用查詢和編輯

<img src="/assets/BrtPbMcIuoPOOLxtyercBpuEnob.png"/>

- OTC 補單系統會按大賬號自動計算託管商、子倉
- 託管商、子倉可進一步編輯，詳見倉位信息查詢和編輯

<img src="/assets/PuZ1bLb7ZoWCCXx8CeccVf2ankv.png"/>

#### **券商快捷補單**

- 在完成所有客戶合約補單後，可以透過右上【劵商快捷補單】操作劵商補單
- 注意：券商快捷补单仅能查询结算渠道为 OTC 的数据，生成的数据用于清算前检查步骤的对账

**机构合约（代理商合约）提前试算**

- 選擇所有篩選條件，點擊試算機構費用並刷新，系統會自動計算代理商費用（詳見後文機構合約操作說明）

<img src="/assets/PFTWbur3yoMy7nxIotnc09iXnrd.png"/>

**更新对手文件**

- 業務初步核對數據，有問題的修改客戶合約後，重新進入頁面并刷新
- 操作人員也可以先點擊編輯，臨時調整數據
    - 注意：此編輯不能保存在數據庫中，僅配合“更新對手文件”按鈕使用

<img src="/assets/Y14fbyRhco3B7ixZItXct0Honcg.png"/>

- 核對無誤后，200 條以內數據：
    - 可點擊更新對手文件，該文件可用於清算前檢查

<img src="/assets/LxmIbR0uCoQp7TxDX9ccUIflnXc.png"/>

- 核對無誤后，200 條以上數據：
    - 可下載編輯，在清算前檢查步驟前導入文件

<img src="/assets/PM7CbiCBvoMQTUxiGGvcGVrHnRg.png"/>

<img src="/assets/XURBbcPBpo8AFGxMi78c8NKLnkb.png"/>

## 機構合約操作說明

- 菜單入口：合約管理 - 機構合約

### **查詢机构合約（代理商合约）**

- 在日切后系统会自动生成机构合约
- 机构合约会单独维护交收日和收费
    - 需要提前配置代理商收费，详见代理商收费配置

<img src="/assets/L40gbf9yrocjOZxCLjKcQrZ2nkb.png"/>

点击费用可以进一步跳转到收费明细

<img src="/assets/TLJ0bPLEIox9zyxB2HzcxYY5n0d.png"/>

<img src="/assets/F6Oab86Zmohxw1xt8MkcAXYenOb.png"/>

### **机构合约（代理商合约）提前试算**

- 選擇所有篩選條件，點擊試算機構費用並刷新，系統會自動計算代理商費用
- 操作后，同时会在机构合约界面生成机构明细
- 注意：生成的机构明细会在日切后被清除并重新生成

<img src="/assets/YK2rb18e1otUZMxyIkhc5wkgnfe.png"/>

